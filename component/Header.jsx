import React from 'react';
import { Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Header = () => {
    const bg= useColorModeValue('blackAlpha.800','white');
    const color=useColorModeValue('wheat','black')
  return (
    <HStack p={"4"} shadow={"base"} bgColor={bg} >

        <Button variant={'unstyled'} color={color}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={color}>
            <Link to="/exchange">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={color}>
            <Link to="/coin">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header