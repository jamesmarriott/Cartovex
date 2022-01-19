import React from 'react'
import {CountryTable} from './CountryTable'
import mydata from '../../flagdata/countries.json'
import {Heading} from '@chakra-ui/react'

export const FlagTableMaster = ()=>{

    // filter the data 
    const [countries, setCountries] = React.useState(null)


        React.useEffect(()=>{

        const result = []
            
        mydata.forEach(value => {

            result.push({
                id: value.Index,
                name: value.Country,
                capital: value.Capital,
                population: value.Population,
                area: value.Area,
                code: value.Code,
                density: value.Popdensity
            })

    })
        setCountries(result)
    },[])


    return (
        <>
            <Heading as='h1' size='2xl'>World Country Data</Heading>
            <Heading as='h2' size='md'>with sortable categories</Heading>
            {countries ? <CountryTable countries={countries}/> : <h1>Loading</h1>}
        </>
    )
}

export default FlagTableMaster