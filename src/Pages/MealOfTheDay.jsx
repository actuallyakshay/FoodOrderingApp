import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  ListItemst,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Skeleton from "../Component/Skeleton";
import SkeletonFunc from "../Component/Skeleton";
export default function MealOfTheDay() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://themealdb.com/api/json/v1/1/random.php`)
      .then((res) => setData(res.data.meals[0]));
    setLoading(false);
  };
  console.log("data", data);

  return isLoading ? (
    <SkeletonFunc />
  ) : (
    <>
      <br />
      <br />
      <br />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
        w="80vw"
        m="auto"
        gap="10"
        aListItemgnItems={"center"}
        justifyContent="center"
      >
        <Box ml={{ base: "12", md: "0" }} overflow="hidden">
          <Image
            src={data.strMealThumb}
            w="80%"
            _hover={{ transform: "scale(1.3)", transformOrigin: "50% 50%" }}
            transition="transform .5s"
          />
        </Box>
        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <Heading size="sm" as="i" color="teal">
                Area
              </Heading>
              <Text>{data?.strArea}</Text>
              <br />
              <Heading size="sm" as="i" color="teal">
                Category
              </Heading>
              <Text>{data?.strCategory}</Text>
            </Box>
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              w={{ base: "45%", md: "60%" }}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Heading
                      as="i"
                      size="sm"
                      flex="1"
                      textAListItemgn="left"
                      color="teal"
                    >
                      Ingredients
                    </Heading>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList fontSize={"13px"}>
                    <Grid
                      gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
                    >
                      <ListItem>{data?.strIngredient1}</ListItem>
                      <ListItem>{data?.strIngredient2}</ListItem>
                      <ListItem>{data?.strIngredient3}</ListItem>
                      {data?.strIngredient4 ? (
                        <ListItem>{data?.strIngredient4}</ListItem>
                      ) : null}
                      {data?.strIngredient5 ? (
                        <ListItem>{data?.strIngredient5}</ListItem>
                      ) : null}
                      {data?.strIngredient6 ? (
                        <ListItem>{data?.strIngredient6}</ListItem>
                      ) : null}
                      {data?.strIngredient7 ? (
                        <ListItem>{data?.strIngredient7}</ListItem>
                      ) : null}
                      {data?.strIngredient8 ? (
                        <ListItem>{data?.strIngredient8}</ListItem>
                      ) : null}

                      {data?.strIngredient9 ? (
                        <ListItem>{data?.strIngredient9}</ListItem>
                      ) : null}
                      {data?.strIngredient10 ? (
                        <ListItem>{data?.strIngredient10}</ListItem>
                      ) : null}
                    </Grid>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <br />
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Heading
                    size="sm"
                    flex="1"
                    textAListItemgn="left"
                    as="i"
                    color="teal"
                  >
                    Instructions
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="sm">{data?.strInstructions}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Grid>
    </>
  );
}
