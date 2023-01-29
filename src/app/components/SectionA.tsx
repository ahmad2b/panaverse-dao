"use client";
import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorMode,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import ImageSlider from "@/(resources)/ImageSlide";

let images: string[] = [
  "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7562249/pexels-photo-7562249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8721314/pexels-photo-8721314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7561807/pexels-photo-7561807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8728383/pexels-photo-8728383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7562023/pexels-photo-7562023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3761118/pexels-photo-3761118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function SectionA() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box padding="1.5rem">
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          py={{ base: 10, md: 20 }}
          w={{ base: "100%", lg: "95%" }}
          px={{ base: 0, md: 6, lg: 8 }}
        >
          <Stack spacing={4}>
            <Heading
              lineHeight={1.1}
              fontWeight={800}
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              {...(colorMode === "light"
                ? { color: "#21242C" }
                : { color: "" })}
            >
              <Text as={"span"}>Become a</Text>
              <br />
              <Text as={"span"}>Certified Web 3.0 Developer</Text>
              <br />
              <Text as={"span"}>at Panaverse</Text>
            </Heading>
            <Text color={"gray.500"}>
              The internet is without a doubt the most important technological
              development in human history.{" "}
              <Text as={"mark"}>
                <Text as={"b"}>Web3,</Text>
              </Text>{" "}
              <Text as={"mark"}>
                <Text as={"b"}>3D Metaverse,</Text>
              </Text>{" "}
              <Text as={"mark"}>
                <Text as={"b"}>AI,</Text>
              </Text>{" "}
              <Text as={"mark"}>
                <Text as={"b"}>IoT,</Text>
              </Text>{" "}
              <Text as={"mark"}>
                <Text as={"b"}>Cloud</Text>
              </Text>{" "}
              <Text as={"mark"}>
                <Text as={"b"}>and Edge technologies</Text>
              </Text>{" "}
              expand the internet as we know it by introducing novel features
              and advancements. Metaverse will make use of all aspects of modern
              technology, including 3D, VR, AR, AI, blockchain, cloud and edge
              computing, voice computing, ambient computing, and more.
            </Text>
            <Text color={"gray.500"}>
              Citi (the latest Wall Street Business) stated in a March 2022
              research paper that the metaverse economy might have a total
              addressable market of up to
              <Text as={"mark"}>
                <Text as={"b"}> $13 trillion </Text>
              </Text>
              and five billion people by 2030.
            </Text>
            <Stack spacing={6} direction={{ base: "column", md: "row" }}>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"red"}
                bg={"#D3152F"}
                _hover={{ bg: "red.400" }}
              >
                Apply Now
              </Button>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"red"}
                bg={"#D3152F"}
                _hover={{ bg: "red.400" }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            bg={"gray.100"}
            rounded={"lg"}
            p={8}
            boxShadow={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <ImageSlider images={images} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
