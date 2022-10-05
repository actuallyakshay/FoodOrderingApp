import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FoodContext } from "../FoodContext/FoodContext";

export default function CartTotal() {
  const { state, dispatch } = useContext(FoodContext);

  const total = state?.cartData.reduce((acc, elem) => {
    return (acc = acc + Number(elem?.price));
  }, 0);
  console.log("total", total);

  return (
    <>
      <Accordion allowToggle w="full">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Order Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>Food Cost : {total} </Text>
            <Text>Food items : {state?.cartData.length} </Text>
            <Text>Shipping Charge : 0 </Text>
            <Text>Discount : 0 </Text>
            <br />
            <hr />
            <Text mt='2'>Grand Total : {total} </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
