import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
  <VStack display="flex" alignItems="left" borderRadius='15px' bg="white" key={title}>
    <Image borderRadius='15px' fallbackSrc='https://via.placeholder.com/150' src={imageSrc}/>
    <Heading padding="10px" color="black" fontSize="20px">{title}</Heading>
    <Text color="blue" padding="0 10px 0 10px">{description}</Text>
    <HStack padding="0 10px 15px 10px" color="black">
      <p>See more</p>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
    </VStack>
  )
};

export default Card;
