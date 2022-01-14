import React from "react";
import { Text, Box, Center, Grid, GridItem } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

function GameOver({questionNumberTotal, score, player}) {
  return (
    <Box pos="absolute" w='100%' textAlign="center">
          <Center>
          <Grid templateColumns='repeat(4, 1fr)' p={4} bg="pink.100" gap={1}>
            <GridItem colSpan={4}>
              <Text fontSize='3xl'>Game Over!</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Text fontSize='2xl'>You got {score} right and {questionNumberTotal-score} wrong</Text>
            </GridItem>
              {player.map(item=>
                    <>
                    <GridItem colSpan={1}>
                    <Text fontSize='xl'>#{item.index+1}</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Text fontSize='xl'>{item.country}</Text>
                    </GridItem>
                    {/* <GridItem colSpan={1}>
                    <Text fontSize='xl'>Code{item.countrycode}</Text>
                    </GridItem> */}
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