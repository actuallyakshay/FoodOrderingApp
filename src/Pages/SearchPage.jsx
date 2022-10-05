import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import FoodCompo from "../Component/FoodListCompo";
import SkeletonFunc from "../Component/Skeleton";
import {
  ADD_ACTION,
  DELETE_ACTION,
  LOADING_ACTION,
  SUCCESS_ACTION,
} from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";
import FoodBox from "./FoodBox";

export default function SearchBox() {
  const { state, dispatch } = useContext(FoodContext);

  const hanldeChange = (e) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`
      )
      .then((res) => dispatch(SUCCESS_ACTION(res.data.meals)));
  };

  const addCart = (elem, dis) => {
    dis ? dispatch(ADD_ACTION(elem)) : dispatch(DELETE_ACTION(elem.name));
  };

    const hanldeFullname = (e) => {
      console.log(e.target.value);
    axios
      .get(`https://themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
      .then((res) => dispatch(SUCCESS_ACTION(res.data.meals)));
  };

  return (
    <>
      <br />
      <br />
      <Flex
        w={{ base: "90%", md: "60%" }}
        m="auto"
        gap="5"
        flexDirection={{ base: "column", md: "row" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            onChange={hanldeChange}
            placeholder="search by first letter of any meal"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            onChange={hanldeFullname}
            placeholder="search by meal name"
          />
        </InputGroup>
      </Flex>
      {/* ************** */}

      <Grid
        width="90%"
        m="auto"
        gap="8"
        mt="10"
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {state.data?.map((elem) => {
          return <FoodBox elem={elem} addCart={addCart} />;
        })}
      </Grid>
    </>
  );
}
