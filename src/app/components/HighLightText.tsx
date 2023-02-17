"use client";
import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const HighLightText = ({ children }: Props) => {
  return (
    <Text pt={4} fontSize={"xl"} fontWeight={"normal"}>
      <Text as={"mark"}>
        <Text as={"b"}>{children}</Text>
      </Text>
    </Text>
  );
};

export default HighLightText;
