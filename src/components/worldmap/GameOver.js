import React from "react";
import { Text, Box, Center, Grid, GridItem } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

function GameOver({questionNumberTotal, score, player}) {
  return (
    <Box w='100%' pos='absolute' p={4} textAlign="center" sx={{fontSize: 'clamp(.7rem, .6rem + 1vh, 2rem)'}}>
          <Center>
          <Grid templateColumns='repeat(4, 1fr)' p={4} bg="pink.100" gap={1}>
            <GridItem colSpan={4}>
              <Text fontSize='2xl'>Game Over!</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Text fontSize='1xl'>You got {score} right and {questionNumberTotal-score} wrong</Text>
            </GridItem>
              {player.map((item, key) =>
                    <>
                    <GridItem key={key} colSpan={1}>
                    <Text>#{item.index+1}</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Text >{item.country}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                    <Text as='span' ml='2' color='gray.600' fontSize='sm'>{item.correct ? <CheckIcon color="green"/> : <CloseIcon color="red"/>}</Text>
                    </GridItem>
                    </>
                )
              }
          </Grid>
          </Center>
    </Box>
  );
}

export default GameOver