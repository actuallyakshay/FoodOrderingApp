import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useContext } from "react";
import { LOADING_ACTION } from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";

export default function Filter() {


    const { state, dispatch } = useContext(FoodContext)
    
    const handleRatingHL = () => {
        dispatch(LOADING_ACTION)
        dispatch({type:"rating_hl"})
    }

    const handleRatingLH = () => {
        dispatch(LOADING_ACTION)
        dispatch({type : "rating_lh"})
    }

    const handlepriceHL = () => {
        dispatch({type : "price_hl"})
    }

    const handlepriceLH = () => {
        dispatch({type : "price_lh"})
    }

  return (
    <>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "yellow.400" }}
          _expanded={{ bg: "red.500" }}
          _focus={{ boxShadow: "outline" }}
        >
          Filter By Rating <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleRatingHL}>High to Low</MenuItem>
          <MenuItem onClick={handleRatingLH}>Low to High</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "yellow.400" }}
          _expanded={{ bg: "red.500" }}
          _focus={{ boxShadow: "outline" }}
        >
          Filter By Price <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handlepriceHL}>High to Low</MenuItem>
          <MenuItem onClick={handlepriceLH}>Low to High</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
