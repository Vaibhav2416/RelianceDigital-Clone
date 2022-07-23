import {Routes, Route} from "react-router-dom"
import LoginPart1 from "../LoginComp/LoginPart1"
import HomePage from "../MainComponents/HomePage"
import React from "react"
import Insert from "../LoginComp/Insert"
function AllRoutes(){
    return (
        
            <Routes>
             <Route path="/" element={<HomePage />} />

             <Route path="/login" element={<LoginPart1 />} />

             <Route path="/insert"  element={<Insert />} />

            </Routes>

        
    )
}
export default AllRoutes