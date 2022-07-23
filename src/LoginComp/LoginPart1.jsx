import { FormControl, Input } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import Navbar from '../Components/Nabar';
import TransitionExample from './Alert';
import { useEffect } from 'react';
import React from 'react';
import "./log.css"
import { useState } from 'react';

function LoginPart1() {
    // const [pass, setPass]=useState("")

    const [number, setNumber] =useState("")
   const checkPwd=useState("empty")
      

 

// function getvalue(){
      
// }
  return (
    <div>
      <Navbar />


      <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br /> 
     
    <div className='sign'>
        <div className='innerDiv'>
            <div style={{height:"60px", width:"100%",  backgroundColor:"#eee"}}>
                <p style={{color:"rgb(0, 0, 0)",fontSize:"17px", padding:"16px 24px", fontWeight:"500"}}>Login / Register </p>
            </div>

            <div className='inputBox'>
                <p>Enter Mobile Number</p>
                <Input onChange={(e)=>{setNumber(e.target.value)}}
                 id="mob" border="1px solid black" outline="black solid 1px" 
                  />
                

                {/* {let y=number.length}                */}
              
                <TransitionExample
                  num={number}
                />
                
                


            </div>
            

        </div>

    </div>


    <br /> <br /> <br /> 
    <Footer  />
    </div>

    
  );
}

export default LoginPart1;