import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export default function LandingPage() {
  const { authstate, authDispatch } = useContext(AuthContext);

  console.log("object", authstate?.result);

  return (
    <>
      <br />
      <Flex textAlign={"center"} w="60%" m="auto">
        <Text
          fontWeight={"300"}
          fontSize={{ base: "30px", lg: "60px" }}
          mt={{ base: "5", md: "0" }}
          color="gray"
        >
          Menu that always make you fall in love 💓
        </Text>
      </Flex>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(4,1fr)" }}
        gap="5"
        w={{ base: "80%", md: "90%" }}
        m="auto"
      >
        <Link to="/foodlist">
          <Box boxShadow={"md"}>
            <VStack overflow="hidden">
              <Box overflow="hidden">
                <Image
                  src="https://mohit-foodstore.netlify.app/assets/foodmenu.jpg"
                  borderRadius={"10px"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  transition="transform .5s"
                />
              </Box>
              <Text fontSize={"20px"} pt="3">
                Food Menu
              </Text>
              <br />
            </VStack>
          </Box>
        </Link>
        <Link to="/trendingpage">
          <Box boxShadow={"md"}>
            <VStack overflow="hidden">
              <Box overflow="hidden">
                <Image
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  transition="transform .5s"
                  src="https://mohit-foodstore.netlify.app/assets/trending.jpg"
                  borderRadius={"10px"}
                />
              </Box>
              <Text fontSize={"20px"} pt="3">
                Trending Food
              </Text>
              <br />
            </VStack>
          </Box>
        </Link>
        <Box boxShadow={"md"}>
          <VStack overflow="hidden">
            <Box  overflow="hidden">
              <Image
                _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
                transition="transform .5s"
                src="https://mohit-foodstore.netlify.app/assets/search.jpg"
                borderRadius={"10px"}
              />
            </Box>
            <Text fontSize={"20px"} pt="3">
              Search Food
            </Text>
            <br />
          </VStack>
        </Box>
        <Link to="/mealday">
          <Box boxShadow={"md"}>
            <VStack overflow="hidden">
              <Box overflow="hidden">
                <Image
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  transition="transform .5s"
                  src="https://mohit-foodstore.netlify.app/assets/cart.jpg"
                  borderRadius={"10px"}
                />
              </Box>
              <Text fontSize={"20px"} pt="3">
                Meal of the Day
              </Text>
              <br />
            </VStack>
          </Box>
        </Link>
      </Grid>
      <br />
      <br />
    </>
  );
}
