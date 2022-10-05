import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../FoodContext/FoodContext";

export default function CartTotal() {
  const { state, dispatch } = useContext(FoodContext);
  const toast = useToast();

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
            <Flex alignItems={"center"} gap="5">
              <Text mt="2">Grand Total : {total} </Text>
              <Link to='/'>
                <Button
                  mt="2"
                  colorScheme={"facebook"}
                  rightIcon={<CheckCircleIcon />}
                  onClick={() => {
                    toast({
                      title: "Order Submitted Successfully",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                  }}
                >
                  Checkout
                </Button>
              </Link>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
