"use client";
import React from "react";
import {
  Container,
  useColorMode,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import CourseCard from "./CourseCard";

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
            <CourseCard cardHeading="Web 3.0">
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </CourseCard>
            <CourseCard cardHeading="Metaverse">
              This Metaverse specialization focuses on developing full-stack Web
              3.0 and Metaverse experiences for the next generation of the
              internet.
            </CourseCard>
            <CourseCard cardHeading="Blockchain">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet.
            </CourseCard>
            <CourseCard cardHeading="Artificial Intelligence">
              The AI and Deep Learning specialization focuses on building and
              deploying intelligent APIs using OpenAI models and building custom
              Deep Learning Tensorflow models.
            </CourseCard>
            <CourseCard cardHeading="Cloud-Native Computing">
              The Cloud-Native Computing Specialization focuses on Containers,
              Kubernetes, and CDK for Kubernetes.
            </CourseCard>
            <CourseCard cardHeading="Ambient Computing and IoT">
              Roll your own API to easily connect with other apps or services.
              Pull in updates.
            </CourseCard>
            <CourseCard cardHeading="Genomics and Bioinformatics Specialization">
              Genomics is the study of the total genetic makeup of individual
              organisms, and how this genetic information is structured,
              functions, and has evolved.
            </CourseCard>
            <CourseCard cardHeading="Network Programmability and Automation Specialization">
              Network automation is now crucial due to new protocols,
              technologies, delivery models, and the requirement for enterprises
              to become more adaptable and agile.
            </CourseCard>
          </SimpleGrid>
        </Container>
      </VStack>
    </>
  );
}
