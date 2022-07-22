import Banner from "./Banner"
import Devices from "./Devices"
import FinalBottom from "./FinalBottom"
import GridElements from "./GridItems"
import Laptop from "./Laptop"
import "./middlestyles.css"
import Range from "./Range"
import SmallComp from "./SmallComp"
import SubPart_1 from "./SubPart_1"
import IndividualIntervalsExample from "./Subpart_2"
import Washing from "./Washing"
function Main(){
    return (
        <div>
            <SubPart_1 />
            <IndividualIntervalsExample />
            <Laptop />
            <Devices />
            <Washing />
            <GridElements />
            <Banner />
            <Range />
            <SmallComp />
            <FinalBottom />


            
        </div>
    )
}
export default Main