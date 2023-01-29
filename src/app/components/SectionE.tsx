"use client";
import React from "react";
import { Flex, Box, Container, useColorMode, Divider } from "@chakra-ui/react";

import CircleIcon from "@/(resources)/CircleIcon";
import CoreConcepts from "./CourseSection/CoreConcepts";
import Sepecialization from "./CourseSection/Specialization";

export default function AccordQuaters() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box padding="1.5rem" color="white">
        <Container
          maxW={"7xl"}
          w={{ base: "100%", lg: "95%" }}
          px={{ base: 0, md: 6, lg: 8 }}
        >
          <Box
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#2D3748" })}
            p={4}
            rounded="md"
            overflow="hidden"
            boxShadow={"md"}
          >
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
                <CircleIcon boxSize={6} color={"red.500"} />
                <CircleIcon boxSize={6} color={"yellow.500"} />
                <CircleIcon boxSize={6} color={"green.600"} />
              </Flex>
            </Flex>
            <Box px={4} pb={2}>
              <CoreConcepts />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box padding="1.5rem" color="white">
        <Container
          maxW={"7xl"}
          w={{ base: "100%", lg: "95%" }}
          px={{ base: 0, md: 6, lg: 8 }}
        >
          <Box
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#2D3748" })}
            p={4}
            rounded="md"
            overflow="hidden"
            boxShadow={"md"}
          >
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
                <CircleIcon boxSize={6} color={"red.500"} />
                <CircleIcon boxSize={6} color={"yellow.500"} />
                <CircleIcon boxSize={6} color={"green.600"} />
              </Flex>
            </Flex>
            <Box px={4} pb={2}>
              <Sepecialization />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
