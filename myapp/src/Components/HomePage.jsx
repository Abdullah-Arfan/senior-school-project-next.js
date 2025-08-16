import React from 'react'
import Image from 'next/image'
import LogoImage from '../../public/Images/logo.png'
import HomeImage from '../../public/Images/Home.jpg'
import ImageThreeOne from '../../public/Images/section-three-one.jpg'
import ImageThreeTwo from '../../public/Images/section-three-two.jpg'
import ImageThreeThree from '../../public/Images/section-three-three.jpg'
// import ImageFour from '../../public/Images/section-four.jpg'

function Home() {
    return (
        <div>
            <div className="section-one">
                <div className="image-container-one">
                    <Image src={HomeImage} alt='Image Not Found'/>
                </div>
                <div className="logo-container">
                    <Image src={LogoImage} alt='Image Not Found'/>
                    <h1>Tech School</h1>
                </div>
            </div>      
            <div className="section-two">
                <div className="text-container-two">
                    <h1>Welcome to TechSchool Website</h1>
                    <p>
                        Rated Excellent in all areas by the ISI in January 2023, TechSchool 
                        is a small independent Day School and Preschool in Pakistan for girls and 
                        boys from 3 -11 years old.We are an inclusive, friendly, family-feel 
                        school which nurtures excellence in a diverse culture.We promote and 
                        celebrate wellbeing alongside academic attainment.
                        At TechSchool we see and develop the potential in every child. 
                        Our children engage enthusiastically with knowledge, embrace new ideas and 
                        are intellectually stimulated and extended beyond their age, resulting in 
                        excellent academic outcomes and confident independent learners.We would be 
                        delighted to talk to you about our wonderful school and share with you 
                        what a Little Genius TechSchool education has to offer your child.
                    </p>
                </div>
                <div className="image-container-two">
                    <img src="/Images/section-two.jpg"/>
                </div>
            </div>
            <div className="section-three">
                <div className="inner-container-one">
                    <div className="text-container-three-one">
                        <h1>Prepared for ACADEMIC SUCCESS</h1>
                        <p>
                            Our broad and creative curriculum challenges pupils on a daily basis, building confidence 
                            and curiosity and helping them to discover a life-long love of learning.    
                        </p>
                    </div>
                    <div className="image-container-three-one">
                        <Image src={ImageThreeOne} alt="Image Not Found"/>
                    </div>
                </div>
                <div className="inner-container-two">
                    <div className="text-container-three-two">
                        <h1>Prepared for PUPIL WELLBEING</h1>
                        <p>
                            As a school which values academic attainment and pupil wellbeing 
                            equally, the environment we have created at TechSchool ensures 
                            that every child feels valued, included, and represented.    
                        </p>
                    </div>
                    <div className="image-container-three-two">
                        <Image src={ImageThreeTwo} alt="Image Not Found"/>
                    </div>
                </div>
                <div className="inner-container-three">
                    <div className="text-container-three-three">
                        <h1>Prepared for 11 PLUS</h1>
                        <p>
                           Tech School pupils consistently achieve excellent results at 11+, 
                           enabling them to move on to some of the most selective senior 
                           schools in the country.
                        </p>
                    </div>
                    <div className="image-container-three-three">
                        <Image src={ImageThreeThree} alt="Image Not Found"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
