"use client";
import React from "react";
import { Flex, Box, Text, Container, useColorMode } from "@chakra-ui/react";
import CircleIcon from "@/(resources)/CircleIcon";

type EditorLayoutProps = {
  children: React.ReactNode;
};

const EditorLayout = ({ children }: EditorLayoutProps) => {
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
              <Text fontSize={"xl"} fontWeight={"normal"}>
                {children}
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EditorLayout;
