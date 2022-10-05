import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import SkeletonFunc from "../Component/Skeleton";
import { LOADING_ACTION, SUCCESS_ACTION } from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";
import FoodList from "./FoodList";

export default function TrendingPage() {
  const { state, dispatch } = useContext(FoodContext);

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (e) => {
    axios
      .get(`https://themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
      .then((res) => dispatch(SUCCESS_ACTION(res.data.meals)));
  };

  const getData = () => {
    axios
      .get(`https://themealdb.com/api/json/v1/1/search.php?s=breakfast`)
      .then((res) => dispatch(SUCCESS_ACTION(res.data.meals)));
  };

  return (
    <>
      <br />
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w="40%"
        m="auto"
        alignItems={"center"}
        justifyItems="center"
        justifyContent="center"
      >
        <Button
          value="breakfast"
          variant="outline"
          colorScheme="green"
          w="100px"
          onClick={handleClick}
        >
          Breakfast
        </Button>
        <Button
          value="cake"
          variant="outline"
          colorScheme="facebook"
          w="100px"
          onClick={handleClick}
        >
          Cake
        </Button>
        <Button
          value="pork"
          variant="outline"
          colorScheme="red"
          w="100px"
          onClick={handleClick}
        >
          Pork
        </Button>
        <Button
          value="pie"
          variant="outline"
          colorScheme="yellow"
          w="100px"
          onClick={handleClick}
        >
          Pie
        </Button>
        <Button
          value="chicken"
          variant="outline"
          colorScheme="orange"
          w="100px"
          onClick={handleClick}
        >
          Chicken
        </Button>
      </Grid>
      <FoodList />
    </>
  );
}
