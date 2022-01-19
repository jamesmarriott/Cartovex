import React, { useState, useEffect, useCallback } from "react";
import GeoChart from "./GeoChart";
import QuestionScoreDisplay from "./QuestionDisplayer";
import GameOver from './GameOver'
import data from "./GeoChart.world.geo.json";
import { Box, } from '@chakra-ui/react'
import { pointer } from "d3";


function MapMaster() {

//total number of questions
  const questionNumberTotal = 10
// grabs x number of countries at random from total a data set
  
// the current question number
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

// this propety sets the default color scheme - its not really being used right now.
// its just taking the the unique iso country number and passing that in so it can 
// be used to generate a unique color for each country. but it can also be used for other purposes.
// if we pass something else as props - like population size.
  const property = "iso_n3"
  const [player, setPlayer] = useState(()=> resetPlayer())
  const [selectedCountry, setSelectedCountry] = useState()
  const [message, setMessage] = useState(`Find ${player[currentQuestion].country}`)


  function resetPlayer() {

    let questions = []
    let arr = []

    while (arr.length < questionNumberTotal) {
      const r = Math.floor(Math.random() * data.features.length)
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }

      for (let i=0; i < questionNumberTotal; i++) {
        
        questions.push({
          "index": i,
          "country": data.features[arr[i]].properties.name,
          "countrycode": data.features[arr[i]].properties.iso_n3,
          "played": false,
          "correct": false
        })
    }
    return questions
  }

  useEffect(() => {
    selectedCountry && checkCorrect()
    const timer = setTimeout(() => {
      setSelectedCountry(null)
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(`Find ${player[currentQuestion].country}`)
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion])

  const countryCallBack = useCallback((feature) => {
    setSelectedCountry(feature);
  }, []);


  const checkCorrect = () => {
    if (selectedCountry.properties.name === player[currentQuestion].country) {
      setMessage(`Correct! You found ${player[currentQuestion].country}`)
      setPlayer(oldPlayer => oldPlayer.map(play => {
        return play.index === currentQuestion ? 
          {...play, played: true, correct: true} : play
      }))
      setScore(score + 1)
    }
    else {
      setMessage(`Wrong! You selected ${selectedCountry.properties.name}`)
      console.log(selectedCountry)
      // temporarily select the correct country and zoom into display

      setPlayer(oldPlayer => oldPlayer.map(play => {
        return play.index === currentQuestion ? 
          {...play, played: true, correct: false} : play
      }))
    }
    currentQuestion === questionNumberTotal-1 ? setGameOver(true) : setCurrentQuestion(currentQuestion + 1)
  }
  
  return (
    <>
    <Box pos="relative">
      {gameOver ?
      <GameOver
     currentQuestion={currentQuestion}
     questionNumberTotal={questionNumberTotal}
     score={score}
     player={player}
     message={message}

     />
     :
    <QuestionScoreDisplay 
          currentQuestion={currentQuestion}
          questionNumberTotal={questionNumberTotal}
          score={score}
          player={player}
          message={message}
    />
      }
    
    <GeoChart
      data={data} 
      property={property}
      countrySelectorCallback={countryCallBack}
      selectedCountry={selectedCountry}
    />
</Box>
    </>
  );
}

export default MapMaster

// To do: Only get countries over a certain size
// if user in wrong show the correct country not the one the user selected
// zime out before end
// gameover restart
// if the user has clicked correctly on a country it should be green/ otherwise red // probably need to save this in state and render in the component
// when userauth is done allow for stats saving and display and learning
// options
// can we do zoom and pan?
// -  learn / game mode
// - learn mode - dynamically slide in a country info thing
// - learn mode  - only study countries you got wrong previously
// e-commerce store - buy countries!