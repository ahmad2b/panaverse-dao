"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { SimpleGrid, GridItem, Flex } from "@chakra-ui/react";

export default function FooterBar() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        as="footer"
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        {...(colorMode === "light"
          ? { bg: "#DDDDDD", color: "#252a33" }
          : { bg: "#2D3748" })}
        py={8}
        borderBottom={"2px"}
        display={{ base: "flex", md: "flex" }}
        wrap="wrap"
      >
        <Container
          maxW={"6xl"}
          width={"full"}
          px={{ base: 8, md: 0 }}
          justifyContent={"stretch"}
        >
          <SimpleGrid
            columns={[1, 2, 2]}
            alignItems={"center"}
            justifyContent={"stretch"}
          >
            <GridItem>
              <Box>
                <Link href={"https://www.panaverse.co/"}>
                  <Heading fontWeight="extrabold">Panaverse</Heading>
                  <Heading fontWeight="extrabold">Dao</Heading>
                </Link>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Stack direction={"row"} spacing={6}>
                  <Link href="/privacy-policy">
                    <Text>Privacy Policy</Text>
                  </Link>
                  <Link href="/terms-of-service">
                    <Text>Terms of Service</Text>
                  </Link>
                  <Link href="/cookie-policy">
                    <Text>Cookie Policy</Text>
                  </Link>
                </Stack>
              </Box>
            </GridItem>

            {/* <GridItem>
              <Box>
                <Input variant={"filled"}></Input>
              </Box>
            </GridItem> */}
          </SimpleGrid>
        </Container>
      </Flex>

      <Box
        w={"full"}
        {...(colorMode === "light"
          ? { bg: "#DDDDDD", color: "#252a33" }
          : { bg: "#252a33" })}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          width={"full"}
          py={10}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            Made with 💖 by{" "}
            <Link href={"https://github.com/ahmad2b"}>M Ahmad</Link>
          </Text>
          <Text>© 2023 Panaverse. All rights reserved</Text>
        </Container>
      </Box>
    </>
  );
}
