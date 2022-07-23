// import { Input } from "@chakra-ui/react"
import {  Alert, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
// import Alert from 'react-bootstrap/Alert';
import Footer from "../Components/Footer"
import Navbar from "../Components/Nabar"
import React from "react"
// import TransitionExample from "./Alert"
import "./log.css"
import HomePage from "../MainComponents/HomePage"


function Insert(){
    const[ text, setText]=useState("")
    const [otp, setOtp] =useState("")
    // const [show, setShow] = useState(true);
        
    

    function sho(){
        let strname=[]
        console.log("tri")
        let ans=JSON.parse(localStorage.getItem("logdata"))
       if(ans[0]!=otp) {
        return (
            alert("Please Enter Correct OTP")
        )

       }
       else{
            strname.push(text)
            localStorage.setItem("profilename",JSON.stringify(strname))
            alert("Sign In Successfully")
        return window.location.href="/"
       }
        console.log(text)
        console.log(otp)
    }

    


    return (
        <div>
        <Navbar />
  
  
    <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br /> 
       
            <div className='sign' style={{justifyContent:"center"}}>
     <div className='innerDiv'>
         <div style={{height:"60px", width:"100%",  backgroundColor:"#eee"}}>
             <p style={{color:"rgb(0, 0, 0)",fontSize:"17px", padding:"16px 24px", fontWeight:"500"}}>Enter Your Name & OTP</p>
         </div>
  
         <div className='inputBox'>
             
             <Input onChange={(e)=>{setText(e.target.value)}}
              border="1px solid black" placeholder="Enter Your Name" outline="black solid 1px"  mt="8px" 
               />

             <Input id="mob" border="1px solid black"  placeholder="Enter Your OTP" outline="black solid 1px"  mt="8px" 
              onChange={(e)=>{setOtp(e.target.value)}} />
                      
            <Button onClick={sho}>Enter HomePage</Button> 
               {/* <TransitionExample  /> */}
  
  
              </div>
              
  
          </div>
  
      </div>
  
  
      <br /> <br /> <br />  
      <Footer  />
      </div>
  
    )
}
export default Insert