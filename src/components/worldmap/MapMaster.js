import React, { useState, useEffect, useCallback } from "react";
import GeoChart from "./GeoChart";
import QuestionScoreDisplay from "./QuestionDisplayer";
import GameOver from './GameOver'
import data from "./GeoChart.world.geo.json";
import { Box, } from '@chakra-ui/react'


function MapMaster() {

//total number of questions
  const questionNumberTotal = 20
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
  const [player, setPlayer] = useState(resetPlayer())
  const [selectedCountry, setSelectedCountry] = useState()
  const [message, setMessage] = useState(`Find ${player[currentQuestion].country}`)

  // creates an array of objects list of questions
  // we are going to note which countries the player got right / wrong
  // once we have a login system we will focus only on the questions the player got wrong

  function resetPlayer() {
      let questions = []
      for (let i=0; i < questionNumberTotal; i++) {
        const getCountry = Math.floor(Math.random() * data.features.length)
        questions.push({
          "index": i,
          "country": data.features[getCountry].properties.name,
          "countrycode": data.features[getCountry].properties.iso_n3,
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
    console.log(feature)
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
      setPlayer(oldPlayer => oldPlayer.map(play => {
        return play.index === currentQuestion ? 
          {...play, played: true, correct: false} : play
      }))
    }
    currentQuestion === questionNumberTotal ? setGameOver(true) : setCurrentQuestion(currentQuestion + 1)
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
// fix gameover count problem
// allow zooming
// zime out before end
// if user in wrong show the correct country not the one the user selected
// restart game
// don't allow duplicates
// deploy!!!
// if the user has clicked correctly on a country it should be green/ otherwise red
// are the countries really random? Doesn't seem like it