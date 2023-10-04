import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
 
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import Chart from "./Chart";
// import { wrap } from "framer-motion";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setdays] = useState("24h");
  const [chartsarr, setchartsarr] = useState([]);
  
  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns=["24h","7d","14d","30d","60d","200d","365d","max"];
  const switchchart=(key)=>{
    switch (key) {
      case "24h":
        setdays("24h");
        setLoading(true);
        break;
      case "7d":
        setdays("7d");
        setLoading(true);
        break;
      case "14d":
        setdays("14d");
        setLoading(true);
        break;
      case "30d":
        setdays("30d");
        setLoading(true);
        break;
     case "60d":
        setdays("60d");
        setLoading(true);
        break;
    case "200d":
        setdays("200d");
        setLoading(true);
        break;
    case "365d":
        setdays("365d");
        setLoading(true);
        break;
    case "max":
        setdays("max");
        setLoading(true);
        break;
    
      
    
      default:
        setdays("24h");
        setLoading(true);
        break;
    }
  }

   
   

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data:chartdata} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

         console.log(chartdata);
        setCoin(data);
        setchartsarr(chartdata.prices);
        // setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id,currency,days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <Container maxW={"container.xl"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart arr={chartsarr} currency={currencySymbol} days={days}/>
            </Box> 
            <HStack p={"4"}  wrap={"wrap"}>
              {btns.map((i)=>(
                <Button onClick={()=>switchchart(i)}>{i}</Button>
              ))}
            </HStack>
            

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} alignItems={"center" } w={"80%"}> 
          <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"} >
            Last update on{Date(coin.market_data.last_updated).split("G")}
          </Text>
          <Image src={coin.image.large} h={"16"} objectFit={"contain"} w={"16"} />
         
          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>
              {currencySymbol}
              {coin.market_data.current_price[currency]}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.market_cap_change_percentage_24h>0?"increase":"decrease"}/>
              {coin.market_data.market_cap_change_percentage_24h}%
            </StatHelpText>
          </Stat>
         
            <Badge fontSize={"2xl"} bgColor={"Highlight"} color={"white"} >
              {`#${coin.market_data.market_cap_rank}`}
            </Badge>
            
            <Custam high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>
            <Box w={"full"}>
              <Item title={"max suply"} value={coin.market_data.max_supply} />
              <Item title={"Circulating supply"} value={coin.market_data.circulating_supply} />
              <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
              <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
              <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
            </Box>
            </VStack >
        </>
      )}
    </Container>
  );
};

const Item=({title,value})=>(
  <HStack  w={"full"} my={"4"} justifyContent={"space-between"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
);
const Custam=({high,low})=>(
  <VStack w={"full"}>
    <Progress value={50} w={"full"} colorScheme={"teal"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} /> 
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} /> 
    </HStack>
  </VStack>
);

 

export default CoinDetails;
