import React from 'react'
import Image from 'next/image'
import LogoImage from '../../public/Images/logo.png'
import { FaCaretDown,FaFacebook,FaInstagram,FaYoutubeSquare,FaTwitter} from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import Link from 'next/link'
function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src={LogoImage} alt="Image Not Found"/>
                    <h2>Tech School</h2>
                    {/* <FaFacebook  className="text-2xl text-blue-700"/>
                    <FaInstagram  className="text-2xl text-orange-700 relative -top-6 left-7"/>
                    <FaYoutubeSquare  className="text-2xl text-red-700 relative -top-12 left-14"/>
                    <FaTwitter  className="text-2xl text-blue-700 relative -top-[72px] left-[84px]"/> */}
                </div>
                <ul className="links">
                    <li className='main-list'><a href="/" className="main-anchor">Home</a></li>
                    <li className='main-list'><a href="/about" className="main-anchor">About</a></li>
                    <li className='main-list'><a href="#" className="main-anchor">Contact</a></li>
                    <li className="main-list"><a href="#" className="main-anchor">Curriculum<FaCaretDown className='rotate'/></a>
                        <ul className="dropdown">
                            <li><a href="">Syllabus</a></li>
                            <li><a href="">Time Table</a></li>
                            <li><a href="">Course Outline</a></li>
                        </ul>
                    </li>
                    <li className="main-list"><a href="#" className="main-anchor">ExtraCurriculum<FaCaretDown className='rotate' /></a>
                        <ul className="dropdown">
                            <li><a href="">Sports</a></li>
                            <li><a href="">Health</a></li>
                            <li><a href="">Game Competitions</a></li>
                        </ul>
                    </li>
                    <li className="main-list"><a href="#" className="main-anchor">Information<FaCaretDown className='rotate' /></a>
                        <ul className="dropdown">
                            <li><a href="">Fees</a></li>
                            <li><a href="">New Updates</a></li>
                            <li><a href="">Annoucements</a></li>
                            <li><a href="">Dates of Terms</a></li>
                        </ul>
                    </li>
                    <li className="main-list"><a href="#" className="main-anchor">Admission Information<FaCaretDown className='rotate' /></a>
                        <ul className="dropdown">
                            <li><a href="">Admission Form</a></li>
                            <li><a href="">Admission Result</a></li>
                            <li><a href="">Admission Process</a></li>
                        </ul>
                    </li>
                    <li className="main-list"><a href="#" className="main-anchor">Login<FaCaretDown className='rotate' /></a>
                        <ul className="dropdown">
                            <li><a href="">User Login</a></li>
                            <li><a href="">Admin Login</a></li>
                            <li><a href="">Teacher Login</a></li>
                            <li><a href="">Student Login</a></li>
                            <li><a href="">Principal Login</a></li>
                            <li><a href="">Coordinator Login</a></li>
                        </ul>
                    </li>

                </ul>
                <div className="input-container">
                    <input type="text" placeholder='Search'/>
                    <hr />
                    <IoSearch className='Search-Icon'/>
                </div>
            </nav>     
        </div>
    )
}

export default Navbar
