"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Assets/Theme";

type Props = {
  children: React.ReactNode;
};

export default function ChakraWrapper({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
