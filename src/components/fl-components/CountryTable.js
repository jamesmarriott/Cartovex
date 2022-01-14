import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    chakra
} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import { useMediaQuery } from '@chakra-ui/react'
import { COLUMNS } from './columns'

    export const CountryTable=(props)=>{


        const {countries} = props

        const columns = React.useMemo(() => COLUMNS, [])
        const data = React.useMemo(() => countries, [countries])

        // useMemo to reduce rerenders

        const [isNotMobile] = useMediaQuery('(min-width: 40em)')


        const { getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow
        } = useTable({
            columns,
            data
        },
            useSortBy)

        return(
        
            <Table {...getTableProps()} size={isNotMobile ? "lg" : "md"} variant='striped' colorScheme='teal'>
                    <TableCaption>Countries</TableCaption>
                <Thead>
                    {
                        headerGroups.map((headerGroup) => {
                            console.log(headerGroup)
                            return (
                                
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                        <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <chakra.span pl='4'>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                    <TriangleDownIcon aria-label='sorted descending' />
                                                    ) : (
                                                    <TriangleUpIcon aria-label='sorted ascending' />
                                                    )
                                                ) : null}
                                                </chakra.span>
                                        </Th>
                                    ))
                                }
                            </Tr>
                            )}
                        )}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell) =>{
                                    

                                        return (
                                
                                        
                                       <Td {...cell.getCellProps()}>
                                           {cell.column.Header === 'flag' ?
                                               <Image 
                                               src={`flags/4x3/${cell.value}.svg`}
                                               alt={cell.name}
                                               objectFit="cover"

                                               padding='none'
                                               boxShadow='2xl'
                                               p='1'
                                               rounded='5'
                                               bg='gray.200'
                                               transition='all .2s cubic-bezier(.17,.67,.83,.67)'
                                               _hover={{ transform: 'scale(2)' }}
                                           />
                                           : 
                                           cell.value.toLocaleString()}
                                        </Td>
                                    )})}
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        )}
