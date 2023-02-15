"use client";
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import {
  HStack,
  useColorMode,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        as="nav"
        position={"sticky"}
        justify="space-between"
        align="center"
        top={0}
        right={0}
        w={{ base: "100%", md: "85%" }}
        ml={{ base: "0", md: "15%" }}
        display={{ base: "flex", md: "flex" }}
        wrap="wrap"
        padding="1.5rem"
        {...(colorMode === "light"
          ? { bg: "#DDDDDD", color: "#252a33" }
          : { bg: "#252a33" })}
        transition="background-color 0.2s"
        zIndex={"sticky"}
        h={"150px"}
        px={10}
      >
        <Flex>
          <Image src="/panaverse.webp" alt="logo" width={150} height={100} />
        </Flex>

        <HStack
          as="nav"
          spacing="4"
          display={{ base: "none", lg: "flex" }}
          fontSize={"lg"}
          fontWeight="medium"
          align={"flex-end"}
        >
          <Button
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#252a33" })}
          >
            <Link
              _hover={{
                color: "red.600",
              }}
              href="/"
            >
              Home
            </Link>
          </Button>
          <Button
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#252a33" })}
          >
            <Link
              _hover={{
                color: "red.600",
              }}
              href="/courses"
            >
              Courses
            </Link>
          </Button>
          <Button
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#252a33" })}
          >
            <Link
              _hover={{
                color: "red.600",
              }}
              href="/about"
            >
              About
            </Link>
          </Button>
          <Button
            {...(colorMode === "light"
              ? { bg: "#DDDDDD", color: "#252a33" }
              : { bg: "#252a33" })}
          >
            <Link
              _hover={{
                color: "red.600",
              }}
              href="/contact"
            >
              Contact
            </Link>
          </Button>
          <Button
            size="md"
            variant="outline"
            border="2px"
            borderColor="#D3152F"
            onClick={toggleColorMode}
            color="#D3152F"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        <HStack display={{ base: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              border="2px"
              borderColor="#D3152F"
              color="#D3152F"
            />
            <MenuList>
              <MenuItem icon={<LinkIcon />} as="a" href="/">
                Home
              </MenuItem>
              <MenuItem icon={<LinkIcon />} as="a" href="/courses">
                Courses
              </MenuItem>
              <MenuItem icon={<LinkIcon />} as="a" href="/about">
                About
              </MenuItem>
              <MenuItem icon={<LinkIcon />} as="a" href="/contact">
                Contact
              </MenuItem>
              <MenuItem icon={<MoonIcon />} onClick={toggleColorMode}>
                Switch Color Mode
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
}
