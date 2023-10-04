import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert status="error" position={"fixed"} transform={"translateX(-50%)"} 
    bottom={"4"} w={"container.lg"}
    left={"50%"}>
      <AlertIcon>
        {message}
      </AlertIcon>
    </Alert>
  );
}

export default ErrorComponent