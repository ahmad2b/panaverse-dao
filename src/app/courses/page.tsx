"use client";
import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Image,
  Card,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  GridItem,
  Flex,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import CircleIcon from "@/(resources)/CircleIcon";
import { useState, useEffect } from "react";
import "src/app/style.css";

const CoursesPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Web 3.0 and Blockchain",
      color: "",
      image: "",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.",
      additionalDetails: "",
    },
    {
      id: 2,
      title: "Metaverse",
      color: "",
      image: "",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.",
      additionalDetails: "",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      color: "",
      image: "",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      additionalDetails: "",
    },
    {
      id: 4,
      title: "Cloud-Native Computing Specialization",
      color: "",
      image: "",
      description:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      additionalDetails: "",
    },
    {
      id: 5,
      title: "Ambient Computing and IoT Specialization",
      color: "",
      image: "",
      description:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.",
      additionalDetails: "",
    },
    {
      id: 6,
      title: "Genomics and Bioinformatics Specialization",
      color: "",
      image: "",
      description:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured.",
      additionalDetails: "",
    },
    {
      id: 7,
      title: "Network Programmability and Automation Specialization",
      color: "",
      image: "",
      description:
        "This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      additionalDetails: "",
    },
  ]);

  const [isHovered, setIsHovered] = useState(false);
  const bg = { light: "#DDDDDD", dark: "" };
  const color = { light: "#252a33", dark: "" };
  useEffect(() => {
    if (isHovered) {
      setIsHovered(false);
    }
  }, []);

  return (
    <VStack>
      <Box p={4}>
        <Stack spacing={4} maxW={"7xl"} px={{ base: 0, md: 6, lg: 8 }}>
          {courses.map((course, index) => (
            <SimpleGrid columns={3} spacing={10} p={4}>
              <GridItem borderRight={"2px"} py={"80px"}>
                <Stack
                  // Make it center aligns
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Heading as="h2" size="2xl" mb={2}>
                    {course.id}
                  </Heading>
                </Stack>
              </GridItem>
              <GridItem colSpan={2}>
                <Card
                  key={index}
                  p={4}
                  {...(colorMode === "light"
                    ? { bg: "#DDDDDD", color: "#252a33" }
                    : { bg: "" })}
                >
                  <Flex align="center" py={2}>
                    <CircleIcon boxSize={4} color={"red.500"} />
                    <CircleIcon boxSize={4} color={"yellow.500"} />
                    <CircleIcon boxSize={4} color={"green.600"} />
                  </Flex>
                  <Heading as="h3" size="lg" mb={2} mt={2}>
                    {course.title}
                  </Heading>
                  {/* <Image src={course.image} alt={course.title} mb={4} /> */}
                  <Text>{course.description}</Text>
                  <Accordion bg={"gray.200"} p={2} mt={2}>
                    <AccordionItem>
                      <Box flex="1" textAlign="left">
                        Additional Details
                      </Box>
                      <AccordionIcon />

                      <AccordionPanel>
                        {course.additionalDetails}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </GridItem>
            </SimpleGrid>
          ))}
        </Stack>
      </Box>
    </VStack>
  );
};

export default CoursesPage;
