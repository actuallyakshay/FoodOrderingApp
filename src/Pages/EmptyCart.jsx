import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Emptycart() {
  return (
    <>
      <br />
      <br />
      <VStack w="70%" m="auto">
        <Flex textAlign={'center'}>
          <Text
            fontWeight={"300"}
            fontSize={{ base: "20px", lg: "30px" }}
            mt={{ base: "5", md: "0" }}
            color="gray"
          >
            Cart is Empty ! Hmmm... Waana order food 🤩? <br />
            Please add some foods 😋
          </Text>
        </Flex>
        <br />
        <Image
          src="https://mohit-foodstore.netlify.app/assets/search-item.gif"
          w="30%"
          borderRadius="50%"
        />
        <br />
        <Link to="/food">
          <Button colorScheme="facebook">See all Foods 🧑‍🍳</Button>
        </Link>
      </VStack>
    </>
  );
}
