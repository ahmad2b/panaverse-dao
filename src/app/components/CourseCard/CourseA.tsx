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
import { useState, useEffect } from "react";
import "src/app/style.css";

export default function CourseA() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const [isHovered, setIsHovered] = useState(false);
  // const bg = { light: "#DDDDDD", dark: "" };
  // const color = { light: "#252a33", dark: "" };

  // useEffect(() => {
  //   if (isHovered) {
  //     setIsHovered(false);
  //   }
  // }, []);

  return (
    <Card
      maxW={"sm"}
      boxShadow={"md"}
      p={4}
      bg={colorMode === "light" ? "#DDDDDD" : ""}
      // className={isHovered ? "hovered" : ""}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // bg={bg[colorMode]}
      // color={color[colorMode]}
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
            <Heading size="md">Web 3.0</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
        </Box>
      </Box>
    </Card>
  );
}
