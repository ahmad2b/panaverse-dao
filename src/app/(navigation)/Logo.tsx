"use client";
import React from "react";

import { Flex, useColorMode } from "@chakra-ui/react";
import CircleIcon from "@/(resources)/CircleIcon";

export default function Logo() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justify="normal"
      top={0}
      w="15%"
      wrap="wrap"
      px={{ base: 0, md: 2, lg: 8 }}
      padding="1.5rem"
      h={"150px"}
      as="nav"
      position={"sticky"}
      align="center"
      right={0}
      display={{ base: "none", md: "flex" }}
      {...(colorMode === "light"
        ? { bg: "#DDDDDD", color: "#252a33" }
        : { bg: "#252a33" })}
      transition="background-color 0.2s"
      zIndex={"overlay"}
    >
      <Flex align="center" px={{ base: 0, md: 2, lg: 8 }}>
        <CircleIcon boxSize={6} color={"red.500"} />
        <CircleIcon boxSize={6} color={"yellow.500"} />
        <CircleIcon boxSize={6} color={"green.600"} />
      </Flex>
    </Flex>
  );
}
