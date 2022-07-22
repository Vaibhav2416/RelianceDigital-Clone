import { AlertDialog,Button, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react"

import React from "react"

function TransitionExample( {otp} ) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen}>PROCEED</Button>
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
             Your OTP is {otp}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Okay!
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