import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsApple } from "react-icons/bs";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import GoogleLogin from "./Google";

export default function LoginPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <Flex
        w="55%"
        gap="5"
        alignItems={"center"}
        justifyContent={"center"}
        m="auto"
        flexDirection="column"
      >
        <Text
          fontWeight={"300"}
          fontSize={{ base: "25px", md: "40px" }}
          color="gray"
        >
          🐼 Login here !! 🐼
        </Text>
        <br />
        <Box>
          <GoogleLogin />
        </Box>
        <Link to="/phonelogin">
          <Button
            colorScheme="green"
            w={{ base: "250px", lg: "400px" }}
            rightIcon={<ArrowRightIcon />}
          >
            Login with phone number
          </Button>
        </Link>
        <Image
          src="https://media.tenor.com/APAoWgAqNxkAAAAM/cat-dance-catto-dace.gif"
          borderRadius={"50%"}
        />
      </Flex>
      <br />
    </>
  );
}
