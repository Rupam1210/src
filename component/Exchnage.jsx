import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import { server } from '../index';
import { Container, HStack, Heading, Image, Text, VStack ,Button } from '@chakra-ui/react';
import Loading from './Loader';
import ErrorComponent from './ErrorComponent';


const Exchnage = () => {
  const [exchange,setExchange]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(21).fill(1);

  useEffect(()=>{
    const fetchexchanges =async()=>{
      try {
        const {data}=await axios.get(`${server}/exchanges?page=${page}&per_page=32`);
      console.log(data);
      setExchange(data);
      setLoading(false);
        
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      
    };
    fetchexchanges();
  },[page]);
  if(error){
    return <ErrorComponent message={"error while fetching Exchanges"}/>;
  }
  
  return (
    <Container maxW={"container.xl"} alignItems={'center'}>
      {loading?<Loading/>:<>
      <HStack flexWrap={"wrap"} mt={'5'} justifyContent={"space-evenly"} >
        {
          exchange.map((e)=>(
          <ExchangeCard key={e.id} name={e.name} rank={e.trust_score_rank} img={e.image} url={e.url} />
          ))}
      </HStack>
      <HStack w={"full"} overflowX={"auto"} p={"8"}
          css={{
             
            '&::-webkit-scrollbar': {
              width: '0',
              height:"0",
              display:"none"
            }}}>
            {btns.map((item, index) => (
              <Button
                key={index}
                variant={"unstyle"}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
                css={{
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor:"blueviolet"
                  },
                   
                }}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
      </> }

    </Container>
  );
};
const ExchangeCard=({name,img,rank,url})=>(<a href={url} target={"blank"}>
  
  <VStack w={"52"} shadow={"lg"} bgColor={"AppWorkspace"} borderRadius={"lg"}  p={"8"} transition={"all 0.3s"} m={"4"}
  css={{
    "&:hover":{
      transform:"scale(1.1)",
      border:"2px solid blueviolet"
    },
  }}>
    <Image src={img} h={"10"} w={"10"} objectFit={"contain"}  alt={"exhchange"}/>
    <Heading size={"md"} noOfLines={"1"}>{rank}</Heading>
    <Text>{name}</Text>
  </VStack>
</a>)


export default Exchnage