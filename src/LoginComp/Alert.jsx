import { AlertDialog,Button, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function TransitionExample( num) {
    const { isOpen, onOpen, onClose} = useDisclosure()
    const cancelRef = React.useRef()
    const [text, setText]=useState("")
    // const isAnonymous=true;

     const [isAnonymous, setisAnonymus] = useState(true)


    let array=[]

    
     let p1=Math.floor((Math.random() * 1000000) + 1000);
    //  setText(p1)
   

    
      console.log(num.num.length)
      useEffect(()=>{
        if(num.num.length>8){
          // p1=Math.floor((Math.random() * 1000000) + 1000);
          setisAnonymus(false)
         
        // localStorage.setItem("logdata",JSON.stringify(array))
          console.log(array)
        }
      },[num.num.length])

      function submitPart(){
        console.log("heealjhe")
        array.push(p1)
        localStorage.setItem("logdata",JSON.stringify(array))
      }
 
   
  
    return (
      <>
     
      
        <Button disabled={isAnonymous ? true : false} onClick={onOpen}>PROCEED</Button>


        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
             Your OTP is {p1}
           
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button  onClick={submitPart}>
               <Link to="/insert" > Okay!</Link>
              </Button>
              {/* <Button colorScheme='red' ml={3}>
                Yes
              </Button> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }
  export default TransitionExample