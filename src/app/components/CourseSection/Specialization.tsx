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

export default function Sepecialization() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <VStack w={"full"} py={4}>
        <Heading fontWeight={"semibold"}>Specialization</Heading>
        <Text fontSize={"lg"} fontWeight={"normal"}>
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
        <SimpleGrid columns={2} spacing={10} w={"full"} py={4}>
          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>Web 3 and Metaverse Specialization</Text>
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
                    Quater IV
                    <br />
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
                    Dapps
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  In this course you will learn how to develop Web 3.0 DApps,
                  create a project, deploy it in production, write smart
                  contracts, unit test them, and create user interfaces for
                  them. We will also learn to develop ERC-20 and NFT tokens,
                  DAOs, Oracles, etc. Please note that in order to develop Web 3
                  applications you also need to build on top of Web 2.0
                  technologies which we have already covered in the previous
                  quarters.
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    MV-361: Developing Planet-Scale Open Virtual and Augmented
                    Metaverse Experiences
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  The Web is the Metaverse. The metaverse requires an
                  infrastructure that connects all of the metaverses so that we
                  can travel between them. This is only achievable with open
                  web-based metaverses. The internet and its browsers are
                  magical. Federated but linked experiences connect pages,
                  people, technology, businesses, standards, and nations. It's
                  unlike anything else. The metaverse should replicate the best
                  qualities of the web - it should just be the web. We just have
                  to extend online responsive design from mobile to desktop to
                  3D, Augmented Reality, and Virtual Reality. This course will
                  teach you how to build the Open Social Spatial Web with WebXR
                  and WebGPU technologies.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>
                Artificial Intelligence (AI) and Deep Learning Specialization
              </Text>
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
                    Quater IV
                    <br />
                    AI-351: Developing Planet-Scale Intelligent APIs and Python
                    Programming
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  The AI and Deep Learning Specialization is a foundational
                  program that will aid in your comprehension of deep learning's
                  potential, difficulties, and effects as well as equip you to
                  take part in the creation of cutting-edge AI technology. We
                  will start this course by understanding the fundamentals and
                  use cases for AI and move on to building next-gen intelligent
                  apps using OpenAI's powerful models and Next.js 13. We'll
                  conclude the course by learning about basic programming
                  concepts using Python, such as lists, dictionaries, classes,
                  functions, and loops, and practice writing clean and readable
                  code with exercises for each topic. We'll also learn how to
                  make your programs interactive and how to test your code
                  safely before adding it to a project. It is a fast-paced,
                  thorough introduction to programming with Python 3.10+ that
                  will have you writing programs, solving problems, and making
                  things that work in no time. In this quarter we will also
                  learn Git, the distributed version control system. We will
                  also review Git-based GitHub services
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    AI-361: Deep Learning and MLOps
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  This course will help you understand the capabilities,
                  challenges, and consequences of deep learning and prepare you
                  to participate in the development of leading-edge AI
                  technology. We will finish the program by learning how to
                  envision, create, and maintain integrated systems that run
                  constantly in production. Production systems must manage
                  constantly changing data, in stark contrast to typical machine
                  learning modeling. The production system must also operate
                  continuously at the lowest possible cost while delivering the
                  highest possible performance.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>Cloud-Native Computing Specialization</Text>
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
                    Quater IV
                    <br />
                    CN-351: Certified Kubernetes Application Developer (CKAD)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  Cloud-native architecture and technologies are an approach to
                  designing, constructing, and operating workloads that are
                  built in the cloud and take full advantage of the cloud
                  computing model. Cloud-native technologies empower
                  organizations to build and run scalable applications in
                  modern, dynamic environments such as public, private, and
                  hybrid clouds. Containers, service meshes, microservices,
                  immutable infrastructure, and declarative APIs exemplify this
                  approach. These techniques enable loosely coupled systems that
                  are resilient, manageable, and observable. Combined with
                  robust automation, they allow engineers to make high-impact
                  changes frequently and predictably with minimal toil.
                  Kubernetes is an open-source system for automating the
                  deployment, scaling, and management of containerized
                  applications. In this course, you will learn how to develop
                  cloud applications using cloud-native technologies like
                  Containers, Kubernetes, and CDK for Kubernetes.
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    CN-361: Developing Multi-Cloud Apps using CDK for Terraform{" "}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  Terraform lets you use the same workflow to manage multiple
                  providers and handle cross-cloud dependencies. This simplifies
                  management and orchestration for large-scale, multi-cloud
                  infrastructures. Cloud Development Kit for Terraform (CDKTF)
                  allows you to use familiar programming languages to define and
                  provision infrastructure. This gives you access to the entire
                  Terraform ecosystem without learning HashiCorp Configuration
                  Language (HCL) and lets you leverage the power of your
                  existing toolchain for testing, dependency management, etc.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>Ambient Computing and IoT Specialization</Text>
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
                    Quater IV
                    <br />
                    AC-351: Ambient Computing with Voice Assistants and Matter
                    Devices
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  Ambient computing, also commonly referred to as ubiquitous
                  computing, is the concept of blending computing power into our
                  everyday lives in a way that is embedded into our surroundings
                  - invisible but useful. In a multi-device world, people don't
                  want to spend their life fussing with technology. An ambient
                  approach gets the tech out of your way so you can live your
                  life while getting the help you need. It doesn't matter what
                  device you're using, what context you're in, whether you're
                  talking, typing, or tapping. The technology in your life works
                  together seamlessly. Ambient computing uses all aspects of
                  modern-day technology, including voice assistants, artificial
                  intelligence, sensors, connectivity, cloud computing and more.
                  If you were thinking that the IoT and ambient computing sound
                  a lot alike, you aren't wrong; the two concepts are
                  intertwined. IoT refers to the vast array of devices that
                  connect to the internet to optimize their functionality, like
                  smart sensors and smart speakers: ambient computing builds on
                  that. Ambient computing focuses on the interaction between
                  these devices once they are connected. Matter, the
                  next-generation smart home standard, solves many smart home
                  pain points while bringing all our IoT devices together. Some
                  of the biggest tech companies are working together to make
                  Matter a unified protocol for future smart homes. These
                  companies include Apple, Amazon, and Google. This means Apple
                  HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and
                  Samsung SmartThings will support the Matter standard by
                  default for all new devices. In this course we will learn to
                  build smart homes with Amazon Alexa and Matter protocol.
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    AC-361: Embedded Programming using C and Rust
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  This is an introductory course about using the C and Rust
                  Programming Languages on "Bare Metal" embedded systems, such
                  as Microcontrollers. We will start by introducing embedded
                  systems and move on to learn the C++ and Rust programming
                  languages. We'll learn about basic programming concepts using
                  C and Rust, then we will explore key concepts in electronics,
                  microcontrollers, and embedded programming. It is a
                  fast-paced, thorough introduction to programming with C and
                  Rust that will have you writing programs, solving problems,
                  burning your code on microcontrollers, playing with GPIOs, and
                  making things that work in no time.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>
                Genomics and Bioinformatics Specialization
              </Text>
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
                    Quater IV
                    <br />
                    Bio-351: Python for Biologists
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  This course will focus on learning the basics of the Python
                  programming language through genomics examples.
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    Bio-361: Bioinformatics with Python
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  In this course we will discover modern, next-generation
                  sequencing libraries from the powerful Python ecosystem to
                  perform cutting-edge research and analyze large amounts of
                  biological data.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem padding={2} colSpan={{ base: 2, lg: 1 }}>
            <Heading py={4} as={"h3"} fontSize={"xl"} fontWeight={"semibold"}>
              <Text as={"mark"}>
                Network Programmability and Automation Specialization
              </Text>
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
                    Quater IV
                    <br />
                    NPA-351: CCNA 200-301 Certification
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  This course will focus on learning the basics of the
                  networking and preparing for the new Cisco Certified Network
                  Associate (CCNA) exam. This comprehensive course focuses on
                  the solutions and technologies needed to implement and
                  administer a broad range of modern networking and IT
                  infrastructure.
                </AccordionPanel>
              </AccordionItem>

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
                    Quater V
                    <br />
                    NPA-361: Network Programmability and Automation
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={"md"} fontWeight={"normal"}>
                  Traditional network management techniques can't be effectively
                  automated and don't scale well. By implementing network
                  programmability based on Application Programming Interfaces,
                  this course will assist in overcoming issues of the future and
                  help you develop the skills required for the Next-Generation
                  Network Engineer.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}
