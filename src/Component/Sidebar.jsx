import {
  ChevronDownIcon,
  HamburgerIcon,
  MinusIcon,
  StarIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        w="fit-content"
        bg="gray.100"
        color="black"
      >
        <HamburgerIcon />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Filters</DrawerHeader>
          <DrawerBody>
            <br />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                By Rating
              </MenuButton>
              <MenuList>
                <MenuItem icon={<MinusIcon />}>Above 1 * </MenuItem>
                <MenuItem icon={<MinusIcon />}>Above 2 *</MenuItem>
                <MenuItem icon={<MinusIcon />}>Above 3 *</MenuItem>
                <MenuItem icon={<MinusIcon />}>Above 4 *</MenuItem>
              </MenuList>
            </Menu>
            <br />
            <br />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                By Price
              </MenuButton>
              <MenuList>
                <MenuItem icon={<MinusIcon />}>High to Low</MenuItem>
                <MenuItem icon={<MinusIcon />}>Low to High</MenuItem>
              </MenuList>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
