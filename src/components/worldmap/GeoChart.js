import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoEquirectangular } from "d3";
import useResizeObserver from "./useResizeObserver";
import styles from './GameMain.module.css'

function GeoChart({ data, property, countrySelectorCallback, selectedCountry}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [hoverCountry, sethoverCountry] = useState()
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change

  useEffect(() => {
    const svg = select(svgRef.current);
    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();


    // projects geo-coordinates on a 2D plane
    const projection = geoEquirectangular()
      .fitSize([width, height],
      hoverCountry || selectedCountry || data)
      .precision(100);

    // takes geojson data and projects the geo-cordinates on a 2d plane
    const pathGenerator = geoPath().projection(projection);
 
    // svg
    // .selectAll(".country")
    // .data(data.features)
    // .on("mouseover", (e,feature) => {
    //   sethoverCountry(feature);
    // })

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (e,feature) => {
         countrySelectorCallback(feature)
        })
      .style("fill", "#69b3a2")
      .style("stroke", "#fff")
      .attr("class", "country")
      .transition()
      .attr("d", feature => pathGenerator(feature));

      svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature =>
          feature &&
          feature.properties.name
      )
      .style("font", "30px arial")
      .attr("x", width-(width/2))
      .attr("y", height-(height/2));

        // return() => {
        //   setTimeout(()=>{sethoverCountry(null)}, 3000)
        // }

  }, [data, dimensions, property, selectedCountry, countrySelectorCallback, hoverCountry ]);

const svgStyle = {
    display: "block",
    width: "100%",
    height: "90vh"
}

  return (
    <div ref={wrapperRef}>
      <svg style={svgStyle} ref={svgRef}>
      </svg>
    </div>
  );
}

export default GeoChart;
