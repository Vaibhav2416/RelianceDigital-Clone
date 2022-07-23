
import { Box, Icon, Spacer } from "@chakra-ui/react"
=======
import { Icon, Spacer } from "@chakra-ui/react"
>>>>>>> main
import MenuItem from "./BlueHover"
import Menu from "./BlueHover"
import CollapseEx from "./BlueHover"
import MenuCards from "./BlueHover"
import BlueHover from "./BlueHover"
import CartIcon from "./CartIcon"
import "./header.css"
import Location from "./LocationIcon"
import Login from "./Login"
import SearchBar from "./Searchbar"
function Header(){
    return (

        <div id="fix" >
=======
        <div>

        <div className="header">

            {/* small head */}
            <div className="location_head">
                <div style={{display:"flex", gap:"5px"}} > 
                    <Location />
                    Find a Store
                </div>
                <div>
                    Buying Guides
                </div>
                <div>
                    Contact Us
                </div>
            </div>

            {/* search bar */}

            <div className="below_header">

                <div className="image-Reliance">
                    <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
                </div>
                
                    <SearchBar />
                
                
                
                    <div className="login_head">
                <div style={{display:"flex", gap:"5px"}} > 
                    Select Your Location
                </div>
                <div>
                    <CartIcon />
                    Cart
                </div>
                <div > 
                    <Login  />
                   Login
                </div>
            </div>

            </div>

        

        </div>
        <div className="navbuttons">

        <MenuCards Title="Mobiles & Tablets"     Item_1="Smart-Phones" Item_2="Wearable Technology" Item_3="Accessories"   Item_4="Headphones & Headsets"     />
        <Spacer />
        <MenuCards Title="Televisions" Item_1="Television" Item_2="Gaming" Item_3="Projectors"   Item_4="Streaming Devices"  />
        <Spacer  />
        <MenuCards Title="Headphones & Speakers" Item_1="Headphones & Headsets" Item_2="BlueTooth & Wifi Speakers" Item_3="TV-Speakers & Soundbars"   Item_4="Musical-Instruments"      />
        <Spacer />
        <MenuCards Title="Home Appliances"       Item_1="Air-Conditionars" Item_2="Washing Machines" Item_3="Vaccum Cleaner"   Item_4="Refrigerators"         />
        <Spacer />
        <MenuCards Title="Computer"              Item_1="Laptop" Item_2="BlueTooth & Wifi Speakers" Item_3="Printers"   Item_4="Devices"                 />
        <Spacer />
        <MenuCards Title="Cameras" Item_1="DSLR" Item_2="Binoculars" Item_3="Action Cameras"   Item_4="Pen-Drives"  />
        <Spacer />
        <MenuCards Title="Kitchen Appliances"    Item_1="Microwave Ovens" Item_2="Water Purifier" Item_3="Juicers"   Item_4="Sandwitch Makers"              />
        <Spacer />
        <MenuCards Title="Personal Care"         Item_1="Irons" Item_2="Trimmers" Item_3="Dryers"   Item_4="Epilators"                 />
        <Spacer />
        <MenuCards Title="ACCESSORIES"           Item_1="Memory Guard" Item_2="Router" Item_3="Screen-Guards"   Item_4="Pen-Drives"                   />
        <Spacer />
        </div>

    </div>
    )

}
export default Header