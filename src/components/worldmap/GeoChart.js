import React, { useRef, useEffect } from "react";
import { select, geoPath, geoEquirectangular } from "d3";
import useResizeObserver from "./useResizeObserver";

function GeoChart({ data, property, countrySelectorCallback, selectedCountry}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
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
      selectedCountry || data)
      .precision(100);

    // takes geojson data and projects the geo-cordinates on a 2d plane
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (e,feature) => {
         countrySelectorCallback(feature)
        })
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
  }, [data, dimensions, property, selectedCountry, countrySelectorCallback]);


  return (
    <div ref={wrapperRef}>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}

export default GeoChart;
