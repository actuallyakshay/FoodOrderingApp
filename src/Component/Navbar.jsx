import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const Links = [
  { path: "/food", title: "Food" },
  { path: "/mealday", title: "Meal Of the day" },
  { path: "/trendingpage", title: "Trending" },
  { path: "/search", title: "Search" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const { authState, authDispatch } = useContext(AuthContext);


  const handlenav = () => {
    navigate("/cart");
  };

  const handleSignout = () => {
    authDispatch({type:"SIGN_OUT"})
  }


  console.log("akshay",authState?.result)

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.800")}
        px={4}
        color={useColorModeValue("black", "white")}
        position={"sticky"}
        top="0px"
        zIndex={'2'}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            // backgroundColor='red'
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Image
                src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png"
                w="80px"
                borderRadius={"10px"}
              />
            </NavLink>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((elem) => (
                <NavLink to={elem.path} key={elem.title}>
                  {elem.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="7">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {!authState.isAuth ? (
              <NavLink to="/login">
                <Stack direction="row">
                  <Avatar src="https://i.ibb.co/w41dpxF/278571109-323254896588655-1345789070748190565-n.png" />
                </Stack>
              </NavLink>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                      src={authState?.result?.user?.photoURL}
                      name='Akshay Rajput'
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                        src={authState?.result?.user?.photoURL}
                        name='Akshay Rajput'
                    />
                  </Center>
                  <br />
                  <Center>
                      <Text>{ `${authState?.result?.user?.displayName || authState?.result?.user?.phoneNumber}` }</Text>
                    </Center>
                    <Center mt='2'>
                      <Text>{ authState?.result?.user?.email}</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={handlenav}>
                    <Link to="/cart">Cart</Link>
                  </MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleSignout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((elem) => (
                <NavLink to={elem.path} key={elem.title}>
                  {elem.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
