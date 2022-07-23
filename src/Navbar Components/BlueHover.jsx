import { ChevronDownIcon } from "@chakra-ui/icons";
import { background, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./bluehover.css"

export default function MenuCards({
    Title,Item_1,Item_2,Item_3,Item_4
}){
    return (
        <div id="menuId">
            <Menu>
            <MenuButton fontSize="14px" colorScheme='#1f4985' _active={{color:"white",bgColor:"red"}}  _hover={{bg:"red"}} height="100%" as={Button} rightIcon={<ChevronDownIcon />}>
                {Title}
            </MenuButton>
            <MenuList backgroundColor="#1f4985" color="white" mt="-6px" >
                <MenuItem _hover={{bg:"none"}}>{Item_1}</MenuItem>
                <MenuItem _hover={{bg:"none"}}>{Item_2}</MenuItem>
                <MenuItem _hover={{bg:"none"}}>{Item_3}</MenuItem>
                <MenuItem _hover={{bg:"none"}}>{Item_4}</MenuItem>
                {/* <MenuItem>{Item_5}</MenuItem> */}
            </MenuList>
            </Menu>
        </div>
        )
}
