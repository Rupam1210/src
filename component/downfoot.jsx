import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import dp from'../asset/photo_2023-10-04_02-56-44.jpg'
import {AiFillGithub, AiFillInstagram, AiFillMail,AiFillVideoCamera}from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.800"} color={"whiteAlpha.700"} minH={"48"} py={["16","8"]}>
      <Stack  p={"4"}
      h={"full"} alignItems={"center"} direction={["column","row"]}>
        <VStack w={"full"} alignItems={["center","flex-start"]} textAlign={["center","left"]}>
          <Text fontWeight={"bold"}>About us</Text>
          <Text>we are the best crypto trading app in India ,we provide our guidence at a very cheap price.</Text>
          <Stack direction={"column"} mt={"4"} lineHeight={"90%"}>
            <a href='https://github.com/Rupam1210' style={{display:"flex",flexDirection:"row",}}>
            <AiFillGithub /> 
            <Text>/Rupam1210</Text>
            </a>
            <a href='/' style={{display:"flex",flexDirection:"row",}}>
            <AiFillInstagram/> 
            <Text>Its_rupam</Text>
            </a>
            <a href='https://vercel.com/rupam-guptas-projects' style={{display:"flex",flexDirection:"row", }}>
            <AiFillMail/> 
            <Text>rupam.21648@knit.ac.in</Text>
            </a>
            
            
           
          </Stack>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4","0"]} src={dp} />
          <Text>Our Founder</Text>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer