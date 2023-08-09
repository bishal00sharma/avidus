import styles from "./Footer.module.css";
import {GrFacebook} from "react-icons/gr"
import {SiTwitter} from "react-icons/si"
import {FaInstagramSquare} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs"
// import {GrFacebook} from "react-icons/gr"
// import {GrFacebook} from "react-icons/gr"
export default function Footer(){
    return(
        <div>
        <div className={styles.main}>
            <hr />
            <div>
                <div className={styles.logoBox}>
                    <img src="hotelgo.png" alt="" />
                    <p>India's Largest Travel Community</p>
                    <hr />
                    <div>
                        <a target="blank" ><GrFacebook /></a>
                        <a target="blank" ><SiTwitter /></a>
                        <a target="blank" ><FaInstagramSquare /></a>
                        <a target="blank" ><BsYoutube /></a>
                        <a target="blank"><BsLinkedin /></a>
                </div>
                <p>Dowload our App</p>
                    <img className={styles.playstore} src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="" />
                </div>
            </div>

            <div className={styles.footerOptions}>
                <b>About HotelGo</b>
                <p>How it works</p>
                <p>FAQ's</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>

            <div className={styles.footerOptions}>
            <b>Products</b>
                <p>Hotels</p>
                <p>Homestays</p>
                <p>Car Rentals</p>
                <p>Packages</p>
                <p>Trips</p>
                <p>India</p>
                <p>International</p>
            </div>
            

            <div className={styles.footerOptions}>
                <b>Help</b>
                <p>Your Booking</p>
                <p>Support</p>
                <p>Refund Policy</p>
                <p>Centers</p>
                <p>FAQs</p>
                <p>Why Us</p>
            </div>
            

            <div className={styles.footerOptions}>
                <b>Partner Programs</b>
                <p>Investor Relations</p>
                <p>Partner With Us</p>
                <p>Earn Credits</p>
                <p>Policy</p>
                <p>Import Blog To Itinerary</p>
                <p>More</p>
            
            </div>
            <hr />
            
        </div>
        
        <p style={{textAlign:"center"}}>© All rights reserved.</p>
        </div>
    )
}