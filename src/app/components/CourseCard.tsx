"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import CircleIcon from "@/(resources)/CircleIcon";

type CourseCardProps = {
  children: React.ReactNode;
  cardHeading: string;
};

const CourseCard = ({ children, cardHeading }: CourseCardProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Card
      maxW={"sm"}
      boxShadow={"md"}
      p={4}
      bg={colorMode === "light" ? "#DDDDDD" : ""}
      rounded={4}
    >
      <Box p={4} rounded="md" overflow="hidden">
        <Flex
          align="center"
          justify="space-between"
          mb={2}
          px={4}
          py={2}
          color="white"
          roundedTop="md"
        >
          <Flex align="center">
            <CircleIcon boxSize={4} color={"red.500"} />
            <CircleIcon boxSize={4} color={"yellow.500"} />
            <CircleIcon boxSize={4} color={"green.600"} />
          </Flex>
        </Flex>

        <Box pb={2}>
          <CardHeader>
            <Heading size="md">{cardHeading}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{children}</Text>
          </CardBody>
        </Box>
      </Box>
    </Card>
  );
};

export default CourseCard;
