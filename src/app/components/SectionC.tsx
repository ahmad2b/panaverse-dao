"use client";
import React from "react";
import {
  Box,
  Container,
  useColorMode,
  Heading,
  SimpleGrid,
  VStack,
  Flex,
  HStack,
  background,
} from "@chakra-ui/react";
import CourseA from "./CourseCard/CourseA";
import CourseB from "./CourseCard/CourseB";
import CourseC from "./CourseCard/CourseC";
import CourseD from "./CourseCard/CourseD";
import CourseE from "./CourseCard/CourseE";
import CourseF from "./CourseCard/CourseF";
import CourseG from "./CourseCard/CourseG";
import CourseH from "./CourseCard/CourseH";

export default function SectionC() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <VStack
        padding="1.5rem"
        color="white"
        align={"center"}
        justify={"center"}
      >
        <Container maxW={"7xl"}>
          <Heading
            as="h1"
            size="2xl"
            mb={8}
            pb={8}
            pt={24}
            {...(colorMode === "light" ? { color: "#252a33" } : {})}
            textAlign="center"
          >
            Courses
          </Heading>

          <SimpleGrid
            minChildWidth="sm"
            spacingX={{ base: "20px ", md: "20px", lg: "40px" }}
            spacingY={{ base: "20px", lg: "20px" }}
            justifyItems="center"
          >
            <CourseA />
            <CourseB />
            <CourseC />
            <CourseD />
            <CourseE />
            <CourseF />
            <CourseG />
            <CourseH />
          </SimpleGrid>
        </Container>
      </VStack>
    </>
  );
}
