import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Star from "../Component/Star";

export default function FoodBox({ elem, addCart }) {
  const [dis, setDis] = useState(true);
  const toast = useToast();

  const { authState } = useContext(AuthContext);

  const handleCLick = (elem) => {
    setDis(!dis);
    addCart(elem, dis);
  };

  return (
    <VStack
      boxShadow="xl"
      pb="5"
      m="auto"
      borderRadius={"10px"}
      overflow="hidden"
    >
      <Box overflow="hidden">
        <Image
          src={elem?.strMealThumb}
          w="100%"
          borderTopLeftRadius={"8px"}
          borderTopRightRadius={"8px"}
          _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
          transition="transform .5s"
        />
      </Box>
      <br />
      <Heading size="sm">{elem?.strMeal}</Heading>
      <Text>{elem?.type}</Text>
      {elem.price ? (
        <Heading size="md" color="red.500">
          🪡 {elem?.price} /-
        </Heading>
      ) : null}

      {elem.rating ? (
        <HStack>
          <Star rating={elem?.rating} />
          <Text> {elem?.rating}</Text>
        </HStack>
      ) : null}

      <Button
        colorScheme={dis ? "orange" : "red"}
        w="90%"
        onClick={() => {
          {
            dis
              ? toast({
                  title: `${
                    authState.isAuth
                      ? "Item added to cart"
                      : "You have to login first"
                  }`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              : toast({
                  title: "Item remove from the cart",
                  status: "error",
                  duration: 2000,
                  isClosable: true,
                });
          }

          handleCLick(elem);
        }}
      >
        {dis ? "Add to Cart" : "Remove from Cart"}
      </Button>
    </VStack>
  );
}
