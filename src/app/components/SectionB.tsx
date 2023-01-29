"use client";
import React from "react";
import {
  Flex,
  Box,
  Text,
  Container,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import CircleIcon from "@/(resources)/CircleIcon";
// import JobList from "./JobList";

export default function SectionB() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box padding="1.5rem" color="white" mt={"100px"}>
        <Container maxW={"7xl"} px={{ base: 0, md: 8, lg: 16 }}>
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
              <Heading py={4} as={"h3"} fontSize={"2xl"}>
                The Outcome for Participants of the Program
              </Heading>
              <Text fontSize={"xl"} fontWeight={"normal"}>
                The graduates of this program will own products (Full-Stack App
                Templates, AR and VR Experiences, and APIs) that are marketed
                globally by the Panaverse DAO and, if they like, will also be
                able to start off by offering services at a rate of $50 per hour
                ($96,000 per year).
              </Text>
              <Text pt={4} fontSize={"xl"} fontWeight={"normal"}>
                This would give Pakistani professionals and students a fantastic
                opportunity to better their financial situation while also
                giving the economy a much-needed boost by expanding software
                exports.
              </Text>
              <Text pt={4} fontSize={"xl"} fontWeight={"normal"}>
                <Text as={"mark"}>
                  <Text as={"b"}>
                    Top 5 'Metaverse' jobs that will rule the future of tech
                    industry
                  </Text>
                </Text>
              </Text>
              {/* <JobList /> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
