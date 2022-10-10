import { AddIcon, CloseIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { RiBuildingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartTotal from "../Component/CartTotal";
import Star from "../Component/Star";
import { DELETE_ACTION, CHANGE_PRICE } from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";
import Emptycart from "./EmptyCart";
export default function CartPage() {
  const { state, dispatch } = useContext(FoodContext);
  const toast = useToast();


  const handlePlus = (val, name) => {
    console.log("valname", val, name);
    dispatch({ type: "plus", payload: { val, name } });
    console.log("cartttolllll", state.total);
    console.log("page" , state.cartData);
  };


  return state?.cartData.length < 1 ? (
    <Emptycart />
  ) : (
    <>
      <Flex
        w="80%"
        m="auto"
        mt="4"
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        <CartTotal  />
      </Flex>
      {state.cartData?.map((elem, i) => {
        return (
          <>
            <Grid
              w="80%"
              m="auto"
              mt="10"
              gridTemplateColumns={{
                base: "repeat(1fr)",
                sm: "repeat(1fr)",
                md: "2fr 1fr",
              }}
            >
              <Flex gap="8">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  <Image
                    src={elem.strMealThumb}
                    w="150px"
                    _hover={{
                      transform: "scale(1.2)",
                      transformOrigin: "50% 50%",
                    }}
                    transition="transform .5s"
                  />
                </Flex>
                <Flex flexDirection="column" gap="1">
                  <Heading size={{ base: "sm", md: "md" }}>
                    {elem.strMeal}
                  </Heading>
                  <Text>{elem.strCategory}</Text>
                  <Text>Rating ⭐{elem.rating}</Text>
                  <br />
                  <Text fontSIze="14px" color="red">
                    💫 {elem.q * elem.price} /-
                  </Text>
                </Flex>
              </Flex>
              <Flex
                mt={{ base: "3", md: "0" }}
                gap="3"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Grid gridTemplateColumns={"repeat(3,1fr)"} gap="2">
                  <Button
                    onClick={() => handlePlus(-1, elem.strMeal)}
                    colorScheme={"yellow"}
                    disabled ={elem.q === 1}
                  >
                    -
                  </Button>
                  <Button>{elem?.q}</Button>
                  <Button
                    onClick={() => handlePlus(1, elem.strMeal)}
                    colorScheme={"facebook"}
                  >
                    +
                  </Button>
                </Grid>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    toast({
                      title: "Item removed from the cart",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });

                    dispatch(DELETE_ACTION(elem.strMeal));
                  }}
                  leftIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </Flex>
            </Grid>
          </>
        );
      })}
    </>
  );
}
