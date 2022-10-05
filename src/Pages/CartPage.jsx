import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { RiBuildingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Star from "../Component/Star";
import { DELETE_ACTION, CHANGE_PRICE } from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";
import Emptycart from "./EmptyCart";
export default function CartPage() {
  const [count, setCount] = useState(1);

  const { state, dispatch } = useContext(FoodContext);

//   useEffect(() => {}, [count]);

  const handleCount = (val, name) => {
    // setCount(count + val);
    // dispatch(CHANGE_PRICE({ count: count + Number(val), name }));
      
  };

  return state?.cartData.length < 1  ? <Emptycart /> : (
    <>
      {state.cartData?.map((elem) => {
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
                <Flex alignItems="center" justifyContent="center">
                  <Image src={elem.strMealThumb} w="150px" borderRadius={"5px"} />
                </Flex>
                <Flex flexDirection="column" gap="1">
                  <Heading size={{ base: "sm", md: "md" }}>{elem.strMeal}</Heading>
                  <Text>{elem.strCategory}</Text>
                  <Text>
                 Rating ⭐{elem.rating}
                  </Text>
                  <br />
                  <Text fontSIze="14px" color="red">
                  💫 {elem.price} /-
                  </Text>
                </Flex>
              </Flex>
              <Flex p="3" gap="3" flexDirection={{ base: "column", md: "row" }}>
                <Flex gap="3">
                  <Button
                    disabled={count === 1 ? true : false}
                    colorScheme="yellow"
                    variant="solid"
                    onClick={() => handleCount(-1, elem.name)}
                    w={{ base: "130px", md: "fit-content" }}
                  >
                    {<MinusIcon />}
                  </Button>
                  <Button colorScheme="facebook" variant="solid">
                    {count}
                  </Button>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    w={{ base: "130px", md: "fit-content" }}
                    onClick={() => handleCount(1, elem.strMeal)}
                  >
                    {<AddIcon />}
                  </Button>
                </Flex>
                <Button
                  colorScheme="red"
                  onClick={() => dispatch(DELETE_ACTION(elem.strMeal))}
                >
                  <CloseIcon />
                </Button>
              </Flex>
            </Grid>
          </>
        );
      })}
    </>
  );
}
