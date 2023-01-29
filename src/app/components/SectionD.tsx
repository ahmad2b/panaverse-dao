"use client";
import React from "react";
import {
  Flex,
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function SectionD() {
  return (
    <Flex p={10} direction={"column"} my={10}>
      <Container maxW={"7xl"} p={10} textAlign={"center"} w={"full"}>
        <Heading as={"h2"} fontWeight={"semibold"} p={1}>
          The Program in a Nutshell:
        </Heading>
        <Heading as={"h2"} fontWeight={"semibold"} color={"red.600"} pb={8}>
          Earn While You Learn
        </Heading>

        <Text fontSize={"lg"} fontWeight={"normal"}>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Text>
      </Container>

      <Container
        maxW={"7xl"}
        p={10}
        w={"full"}
        display={{ base: "none", sm: "block" }}
      >
        <SimpleGrid columns={3} p={10} textAlign={"center"} w={"full"}>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderRight={{ base: "0px", md: "1px" }}
            borderBottom={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pb={8}>
                3500+ Members
              </Heading>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderLeft={{ base: "0px", md: "1px" }}
            borderRight={{ base: "0px", md: "1px" }}
            borderBottom={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pb={8}>
                7+ Programs
              </Heading>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderLeft={{ base: "0px", md: "1px" }}
            borderBottom={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pb={8}>
                5+ Cities
              </Heading>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderRight={{ base: "0px", md: "1px" }}
            borderTop={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pt={8}>
                6 Quater Program
              </Heading>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderLeft={{ base: "0px", md: "1px" }}
            borderRight={{ base: "0px", md: "1px" }}
            borderTop={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pt={8}>
                For Beginners
              </Heading>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            borderLeft={{ base: "0px", md: "1px" }}
            borderTop={{ base: "0px", md: "1px" }}
            borderStyle={"groove"}
            borderColor={"red.600"}
          >
            <Box w={"full"} h={"full"} p={4} rounded="md" overflow="hidden">
              <Heading as={"h3"} fontWeight={"semibold"} pt={8}>
                Earn as you Learn
              </Heading>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
