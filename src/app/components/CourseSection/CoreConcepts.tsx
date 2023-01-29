"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButton,
  VStack,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function CoreConcepts() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <VStack w={"full"} py={4}>
        <Heading fontWeight={"semibold"}>Core Concepts</Heading>
        <Text fontSize={"lg"} fontWeight={"normal"}>
          Every participant of the program will start by completing the
          following three core courses:
        </Text>
        <SimpleGrid columns={2} spacing={10} w={"full"} py={4}>
          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              Quater I
            </Heading>
            <Accordion allowMultiple>
              <AccordionItem
                {...(colorMode === "light"
                  ? { borderColor: "blackAlpha.700" }
                  : { borderColor: "whiteAlpha.700" })}
              >
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"md"}
                    fontWeight={"semibold"}
                  >
                    CS-101: Object-Oriented Programming using TypeScript
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              Quater II
            </Heading>
            <Accordion allowMultiple>
              <AccordionItem
                {...(colorMode === "light"
                  ? { borderColor: "blackAlpha.700" }
                  : { borderColor: "whiteAlpha.700" })}
              >
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                  >
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"lg"} fontWeight={"normal"}>
                  The objective of this course is to teach participants to
                  develop customer-facing planet-scale Websites, Full-Stack Apps
                  and templates, Dashboards, and Muti-Cloud Serverless APIs. By
                  the end of the quarter, the participants will be able to
                  develop and deploy web platforms like Facebook, Shopify, etc.
                  The technologies covered in this course will include Next.js
                  13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
                  Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                  Technologies, and Cloud Development Kit for Terraform (CDKTF).
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              Quater III
            </Heading>
            <Accordion allowMultiple>
              <AccordionItem
                {...(colorMode === "light"
                  ? { borderColor: "blackAlpha.700" }
                  : { borderColor: "whiteAlpha.700" })}
              >
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                  >
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"lg"} fontWeight={"normal"}>
                  In this Quater you will be assigned to build a template which
                  we will sell on Theme Forest and Panaverse DAO marketplace.
                  The Panaverse DAO will receive 25% share on the sale of the
                  template which will be used to manage the platform. An
                  additional 15% will be spent on marketing the template. 60% of
                  the revenues will be distributed to the developer through the
                  Panaverse DAO in the form of Panaverse tokens.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}
