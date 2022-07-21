import { Box, HStack, Stack, Tag, Text, VStack } from "@chakra-ui/react"
import pdata from "./database_devices"

function Devices(){
    console.log(pdata)
    return (
       <VStack  h="460px">

        <Box h="60px" width="100%" paddingLeft="20px" padding="12px" >
            <Text fontSize="22px" fontWeight="semibold">LOWEST PRICES ON SMALL APPLIANCES | <span className="viewover" style={{fontSize:"14px"}}>VIEW ALL</span></Text>
        </Box>
        <HStack 
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        h="auto" width="100%" display="flex" justifyContent="space-around" gap="30px" padding="20px" >
            {
                pdata.map((items)=>(
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

       </VStack>
    )
}
export default Devices