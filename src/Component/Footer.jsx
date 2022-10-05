import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Flex
        justifyContent={"center"}
        textAlign="center"
        w="100vw"
        h="40vh"
        flexDirection={"column"}
        alignItems="center"
        backgroundColor={"gray.800"}
      >
        <Text color="white" fontWeight={"400"}>
          Made with ❣️ by Akshay Rajput
        </Text>
        <Flex w="fit-content" gap="5" mt="5">
          <a href="https://www.linkedin.com/in/akshay-rajput-422794220">
            <Button colorScheme="linkedin">LinkedIn</Button>
          </a>
          <a href="https://github.com/actuallyakshay">
            <Button colorScheme="red">Github</Button>
          </a>
        </Flex>
      </Flex>
    </>
  );
}
