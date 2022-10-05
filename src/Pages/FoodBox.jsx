import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Star from "../Component/Star";

export default function FoodBox({ elem, addCart }) {
  const [dis, setDis] = useState(true);

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
      <Image
        src={elem?.strMealThumb}
        w="100%"
        borderTopLeftRadius={"8px"}
        borderTopRightRadius={"8px"}
        _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
        transition="transform .5s"
      />
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
        onClick={() => handleCLick(elem)}
      >
        {dis ? "Add to Cart" : "Remove from Cart"}
      </Button>
    </VStack>
  );
}
