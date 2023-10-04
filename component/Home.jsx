import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import btc from '../asset/btc.png';
import {motion}from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} h={"85vh"}>
      
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px"
      }}
      transition={{
        repeat:Infinity,
        duration:2,
        repeatType:"reverse"
      }}>
       <Image w={"full"} h={'full'} objectFit={"contain"}   src={btc} filter={"grayscale(1)"} dropShadow={"dark-lg"}/>

       </motion.div>
       <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'medium'} mt={"-20"}>Xcrypto</Text>
    </Box>
  )
}

export default Home