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
export default function CourseH() {
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
            <Heading size="md">
              Network Programmability and Automation Specialization
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Network automation is now crucial due to new protocols,
              technologies, delivery models, and the requirement for enterprises
              to become more adaptable and agile
            </Text>
          </CardBody>
        </Box>
      </Box>
    </Card>
  );
}
