"use client";
import React from "react";
import { Flex, useColorMode, Image, Button, VStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import CircleIcon from "@/(resources)/CircleIcon";
import Link from "next/link";

export default function RightNav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        position={"fixed"}
        flexDirection={"column"}
        justify={"space-around"}
        top={"30%"}
        right={0}
        h={"md"}
        w={"auto"}
        p={{ base: "none", md: 0.5, lg: 2 }}
        display={{ base: "none", md: "flex" }}
        boxShadow="md"
        {...(colorMode === "light"
          ? { bg: "#DDDDDD", color: "#252a33" }
          : { bg: "#2D3748" })}
        transition="background-color 0.2s"
        zIndex={1}
      >
        <Flex align={"flex-start"} pt={2}>
          <CircleIcon boxSize={3} color={"red.500"} />
          <CircleIcon boxSize={3} color={"yellow.500"} />
          <CircleIcon boxSize={3} color={"green.600"} />
        </Flex>
        <VStack my={5} justify={"space-between"} h={"full"}>
          <Link href={"https://www.youtube.com/@panaverse"}>
            <Image src="/youtube.png" w={"35px"} h={"35px"} />
          </Link>
          <Link href={"https://www.facebook.com/groups/panaverse"}>
            <Image src="/Facebook.png" w={"35px"} h={"35px"} />
          </Link>
          <Link href={"https://twitter.com/Panaverse_edu"}>
            <Image src="/Twitter.png" w={"35px"} h={"35px"} />
          </Link>
          {colorMode === "light" ? (
            <MoonIcon
              color={"white"}
              onClick={toggleColorMode}
              bgColor="red.600"
              boxSize={"2rem"}
              borderRadius={"50%"}
              p={1.5}
            />
          ) : (
            <SunIcon
              color={"white"}
              onClick={toggleColorMode}
              bgColor="red.600"
              boxSize={"2rem"}
              borderRadius={"50%"}
              p={1.5}
            />
          )}
        </VStack>
      </Flex>
    </>
  );
}
