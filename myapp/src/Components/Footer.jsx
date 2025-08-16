import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LogoImage from '../../public/Images/logo.png'
import { FaFacebook , FaInstagram , FaYoutubeSquare , FaTwitter, FaPhoneAlt, FaTicketAlt, FaBook, FaEnvelope, FaLocationArrow, FaSearchLocation } from "react-icons/fa";import {FaLocationDot} from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineMail } from 'react-icons/md';

function Footer() {
    return (
        <div className='footer'>
            <div className="first-container">
                <div className="logo-container-footer">
                    <Image src={LogoImage} alt="Image Not Found"/>
                </div>
                <div className="logo-text">
                    TechSchool is a Part of The Islamic Group, and focuses on providing 
                    Affordable Educational Solutions Pan-Pakistan.
                </div>
                <div className="relative top-5">
                            <FaFacebook  className="text-2xl text-blue-700"/>
                            <FaInstagram  className="text-2xl text-orange-700 relative -top-6 left-7"/>
                            <FaYoutubeSquare  className="text-2xl text-red-700 relative -top-12 left-14"/>
                            <FaTwitter  className="text-2xl text-blue-700 relative -top-[72px] left-[84px]"/>
                </div>
            </div>    
            <div className="second-container">
                <h1>Contact Us</h1>
                <div className="contact-us">
                    <FaPhoneAlt className="text-xl relative top-7 text-green-700"/>
                    <h1>Phone</h1>
                    <li><span>+92556786791</span></li>
                    <li><span>+92558968991</span></li>
                </div>
                <div className="contact-us">
                    <MdOutlineMail className="text-xl relative top-7 text-orange-700"/>
                    <h1>Email</h1>
                    <li><span>info@techschool.com</span></li>
                </div>
                <div className="contact-us">
                    <FaLocationDot className="text-xl relative top-7 text-red-700"/>
                    <h1>Head Office</h1>
                    <li>
                        <span>
                            109 Punjab Block Chinar Bagh<br/>
                            <p className='inner-span'> Main Raiwind Road Lahore</p>
                        </span>
                    </li>
                </div>
            </div>
            <div className="third-container">
                <h1>Useful Links</h1>
                <div className="useful-links">
                    <Link href='/about' >About</Link>
                    <Link href='#' >Our Programs</Link>
                    <Link href='#' >Blog</Link>
                    <Link href='/contact' >Contact</Link>
                    <Link href='#' >Franchise</Link>           
                </div>
            </div>  
            <div className="fourth-container">
                <h1>Important Resources</h1>
                <div className="important-resources">
                    <Link href='/about' >Raise a Ticket</Link>
                    <Link href='#' >School Login</Link>
                    <Link href='#' >Book Centers</Link>
                    <Link href='/contact' >Feedback</Link>
                    <Link href='#' >Complain</Link>           
                </div>
            </div>        
        </div>
    )
}

export default Footer
