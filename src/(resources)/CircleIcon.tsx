"use client";
import React from "react";
import { Icon } from "@chakra-ui/react";

type props = {
  boxSize: number;
  color: string;
};

export default function CircleIcon(props: props) {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}
