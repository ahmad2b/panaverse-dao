"use client";
import React from "react";
import {
  Box,
  Container,
  useColorMode,
  Button,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function JoinToday() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box padding="1.5rem">
      <Container maxW={"7xl"} paddingY={"128px"} alignSelf={"center"}>
        <VStack spacing={8}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            {...(colorMode === "light" ? { color: "#21242C" } : { color: "" })}
          >
            <Text>Join Panaverse today</Text>
          </Heading>
          <Button
            {...(colorMode === "light" ? { bg: "red.600" } : {})}
            colorScheme="red"
            size={{ base: "mg", sm: "lg", md: "lg" }}
            variant="solid"
            w={{ base: "md", sm: "lg", md: "xl" }}
          >
            Web 3.0 (Blockchain) and Metaverse
          </Button>
          <Button
            {...(colorMode === "light" ? { bg: "red.600" } : {})}
            colorScheme="red"
            size={{ base: "mg", sm: "lg", md: "lg" }}
            variant="solid"
            w={{ base: "md", sm: "lg", md: "xl" }}
          >
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Button>
          <Button
            {...(colorMode === "light" ? { bg: "red.600" } : {})}
            colorScheme="red"
            size={{ base: "mg", sm: "lg", md: "lg" }}
            variant="solid"
            w={{ base: "md", sm: "lg", md: "xl" }}
          >
            Ambient Computing and IoT Specialization
          </Button>
          <Button
            {...(colorMode === "light" ? { bg: "red.600" } : {})}
            colorScheme="red"
            size={{ base: "mg", sm: "lg", md: "lg" }}
            variant="solid"
            w={{ base: "md", sm: "lg", md: "xl" }}
          >
            Genomics and Bioinformatics Specialization
          </Button>
          <Button
            {...(colorMode === "light" ? { bg: "red.600" } : {})}
            colorScheme="red"
            size={{ base: "mg", sm: "lg", md: "lg" }}
            variant="solid"
            w={{ base: "md", sm: "lg", md: "xl" }}
          >
            Network Programmability and Automation Specialization
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
