"use client";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add your form submission logic here
  };

  return (
    <Box p={2} margin={8} borderRadius={"md"}>
      <Heading fontWeight={"semibold"} textAlign={"center"}>
        Ask any Question!
      </Heading>
      <Text fontSize={"lg"} fontWeight={"normal"} textAlign={"center"} py={2}>
        We are more than happy to help you.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl py={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <FormControl py={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <FormControl py={4}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <Button mt={4} colorScheme="red" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
