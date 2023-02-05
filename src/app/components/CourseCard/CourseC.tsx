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

export default function CourseC() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const [isHovered, setIsHovered] = useState(false);
  // const bg = { light: "#DDDDDD", dark: "" };
  // const color = { light: "#252a33", dark: "" };
  // const border = { light: "red.200", dark: "red.600" };
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
      // border={`1px solid ${border[colorMode]}`}
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
            <Heading size="md">Blockchain</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet.
            </Text>
          </CardBody>
        </Box>
      </Box>
    </Card>
  );
}
