import {
  Box,
  Text,
  Container,
  Heading,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Component/Footer";
import PhoneLogin from "./PhoneLogin";

export default function ContinueLogin() {
  return (
    <Box w="full">
      <Box justifyContent="center" display="flex" py="30px">
        <Image
          src="https://media.tenor.com/RIxCFKqtj6cAAAAj/guitar-cat.gif"
          w="80px"
        />
      </Box>
      <Container
        justifyContent="center"
        w={{ base: "90%", md: "36%" }}
        p="6"
      >
        <Box>
          <Heading size="md">Login with phone number</Heading>
          <Text fontSize="18px" color="gray.600">
            Keep you account safe.{" "}
          </Text>
          <br />
          <PhoneLogin />
        </Box>
      </Container>
    </Box>
  );
}
