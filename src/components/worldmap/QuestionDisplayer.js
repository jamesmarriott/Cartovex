import React from "react";
import { Text, Progress, Box, Center, Grid, GridItem } from '@chakra-ui/react'

function QuestionScoreDisplay({currentQuestion, questionNumberTotal, score, message}) {
  
  const bgstyle = ()=> {
    if (message.includes("Correct")) return "green"
    else if (message.includes("Wrong")) return "red"
    else return
  }

  return (
    <Box w='100%' textAlign="center" sx={{fontSize: 'clamp(.6rem, .5rem + 1vw, 2rem)'}}>
          <Center>
          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={2}>
              <Text>Question {currentQuestion} / {questionNumberTotal}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text>Right {score} / Wrong {currentQuestion-score}</Text>
            </GridItem>
            <GridItem colSpan={4}>
            <Progress bg="blue.100" mt={2} value={currentQuestion/questionNumberTotal*100}/>
            </GridItem>
            <GridItem colSpan={4} mt={2} bg={bgstyle()}>
              <Text>{message}</Text>
            </GridItem>
          </Grid>
          </Center>
    </Box>
  );
}

export default QuestionScoreDisplay