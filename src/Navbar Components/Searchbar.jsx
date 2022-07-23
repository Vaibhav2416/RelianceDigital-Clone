import { Button, Icon, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons"
import "./header.css"

export default function SearchBar(){
    return (
    
        <div>
            <InputGroup>
            <Input
                    isInvalid
                    errorBorderColor='red.300'

                    placeholder='Find your favourite products'
=======
                    placeholder='Here is a sample placeholder'

                    borderRadius="30px"
                    bgColor="white"
                    width="600px"
                   
                />
            <InputRightElement  paddingRight="40px">
            <Button bg="none" height="35px"><Icon  as={Search2Icon}/></Button>
            </InputRightElement>
            </InputGroup>
        </div>
   
    )
}