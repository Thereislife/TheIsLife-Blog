import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading,Text,Button } from '@chakra-ui/react'
import ServerCard from './ServerCard'
function Servers() {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <ServerCard name="سرور انگلستان"/>
        <ServerCard name="سرور آمریکا"/>
        <ServerCard name="سرور فنلاند"/>
</SimpleGrid>
  )
}

export default Servers