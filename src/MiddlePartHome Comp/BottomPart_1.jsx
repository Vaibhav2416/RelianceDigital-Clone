import { Box, HStack, Image, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import bottomdata from "./Bottom_1"

function BottomPart_1(){
    console.log(bottomdata)
    return (
       <VStack  h="380px" display="flex" justifyContent="start" paddingLeft="30px"  >

        <Box h="60px" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold">BEST SELLING SOUNDBARS | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <HStack height="100%" width="100%" paddingLeft="30px" >
        <HStack 
             boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
             h="100%" width="70%" display="flex" justifyContent="space-around" gap="30px" padding="20px" >
            {
                bottomdata.map((items)=>(
                    <div style={{width:"30%",boxSizing:"border-box"}} key={items.id}>
                    {/* <h4>{products.id}</h4> */}
                    <img style={{height:"200px"}} width="200px"  src={items.image} alt={items.id} />
                    <div  className="title_lapi">
                    <h3  > {items.title}</h3>
                    </div>

                    <div className="price">
                        <h4><span className="offer"> Offer Price:</span> ₹ {items.offer}</h4>
                        <h5 ><span className="offer">M.R.P : ₹{" "} <span className="off">{items.save}</span> </span> </h5>
                    
                        
                    </div>

                    <Tag size="md" mt="5px" borderRadius="30px"  variant='solid' colorScheme='teal'>
                                  Offer Available
                    </Tag>

                    </div>
                ))
            }

        </HStack>

        <Box padding="20px">
            <Image width="360px" src="https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI" />
        </Box>


        </HStack>

       </VStack>
    )
}
export default BottomPart_1