import React from "react";
import { Text, Progress, Box, Center, Grid, GridItem } from '@chakra-ui/react'

function QuestionScoreDisplay({currentQuestion, questionNumberTotal, score, message}) {
  


  const bgstyle = ()=> {
    if (message.includes("Correct")) return "green"
    else if (message.includes("Wrong")) return "red"
    else return
  }

  return (
    <Box pos="absolute" w='100%' textAlign="center">
          <Center>
          <Grid templateColumns='repeat(4, 1fr)' p={4}>
            <GridItem colSpan={2}>
              <Text fontSize='2xl'>Question {currentQuestion} / {questionNumberTotal}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize='2xl'>Right {score} / Wrong {currentQuestion-score}</Text>
            </GridItem>
            <GridItem colSpan={4}>
            <Progress bg="blue.100" mt={2} value={currentQuestion/questionNumberTotal*100}/>
            </GridItem>
            <GridItem colSpan={4} mt={2} bg={bgstyle()}>
              <Text fontSize='3xl'>{message}</Text>
            </GridItem>
          </Grid>
          </Center>
    </Box>
  );
}

export default QuestionScoreDisplay