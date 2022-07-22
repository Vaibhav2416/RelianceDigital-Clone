import FaceBookIcon from "./FaceBookIcon"
import "./footer.css"
import Tweeter from "./Twitter"
import Youtube from "./Youtube"

function StartFoot(){
    return (
     <div className="box">
        <div className="comp">
            <div>
                <h3 className="whitehover">PRODUCT CATEGORIES</h3>
                <p>Smartphones</p>
                <p>Laptops</p>
                <p>DSLR Cameras</p>
                <p>Televisons</p>
                <p>Air Conditioners</p>
                <p>Refrigerators</p>
                <p>Kitchen Appliances</p>
                <p>Accessories</p>
                <p>Personal Care & Grooming</p>
            </div>

            <div>
            <h3 className="whitehover">SITE INFO</h3>
                <p>About Reliance Digital</p>
                <p>resQ Services</p>
                <p>Site Map</p>
                <p>Gift Cards</p>
                <p>Corporate Enquires</p>
                <p>Contact Us</p>
                

            </div>

            <div>
                <h3 className="whitehover">RESOURCE CENTRE</h3>
                <p>Product Reviews</p>
                <p>Buying Guides</p>
                <p>How TOs</p>
                <p>Featured Stories</p>
                <p>Events & Happenings</p>
            </div>

            <div>
                <h3 className="whitehover">POLICIES</h3>
                <p>Termas of Use</p>
                <p>FAQs</p>
                <p>Cancellation and Return Policy</p>
                <p>Pricing and Payments Policy</p>
                <p>Privacy Policy</p>
                <p>E-waste Policy</p>
                <p>EMI and Additional Cashback T&C</p>
                <p>RelianceOne Loyality Program T&C</p>
            </div>

        </div>


        <div className="footPart">
            <div>
                <h3>FOLLOW US</h3>
                <div className="subdiv">
                    <FaceBookIcon />
                    <Tweeter />
                    <Youtube />
                </div>
            </div>

            <div>
                <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
                <div className="play">

                    <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" />

                    <img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
                    </div>

            </div>

        </div>


     </div>
    )
}
export default StartFoot