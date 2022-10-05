import { Flex } from "@chakra-ui/react";
import FoodList from "../Pages/FoodList";
import Filter from "./Filter";

export default function FoodCompo() {
  return (
    <>
      <br />
      <Flex w="90%" m="auto" gap='4' justifyContent={{base:'center' , md:"flex-end"}}>
        <Filter />
      </Flex>
      <FoodList />
    </>
  );
}
