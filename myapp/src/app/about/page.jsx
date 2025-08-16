import React from 'react'
import Image from 'next/image'
import AboutImageOne from "../../../public/Images/About1.jpg"
import AboutImageTwo from "../../../public/Images/About2.jpg"
import AboutImageThree from "../../../public/Images/About3.jpg"
import AboutImageFour from "../../../public/Images/About4.jpg"
import AboutImageFive from "../../../public/Images/About5.jpg"
import AboutImageSix from "../../../public/Images/About6.jpg"

function About() {
    return (
        <div>
            <div className="about-one">
                <h1>Key Features</h1>
                <h4>Your Future Journey</h4>
                <div className="grid-box">
                    <div className="grid-1 about-grid">
                        <h1>Faith</h1>
                        <p>
                            We build strong faith and self confidence in our pupils.
                            Pupils also learn to always speak truth and always accept
                            their mistake. They also learn the be polite.They also learn
                            the advatages of faith that faith is a strenth to face every day's
                            difficult and easy problems.
                        </p> 
                    </div>
                    <div className="grid-2 about-grid">
                        <Image src={AboutImageOne} alt='Image Not Found' className='Image'/>
                    </div>
                    <div className="grid-3 about-grid">
                        <h1>Unity</h1>
                        <p>
                            Students learn team managment and leadership qualities.
                            Pupils also learn to make a que during break and off time.
                            They learn how to help each other. They also learn to share 
                            your things to others. They also learn the advantages of unity
                            that with unity we can face every day's difficult and easy problems. 
                        </p>                        
                    </div>
                </div>
            </div>
             <div className="about-two">
                <div className="text-container-about-one">
                    <h1>Facilities</h1>
                    <h1>Situated in the south of Lahore near Lake City.</h1>
                    <p>
                        The school provides a fantastic range of facilities to enhance pupils’
                        learning and experience. We have bright and well-resourced classrooms,
                        complete with an ICT suite, dedicated Art and Design studio, music room,
                        library and a fully equipped science laboratory.A large playground and 
                        outside classroom give pupils much needed space for play and outdoor 
                        learning. With a planting area, amphitheatre, Astroturf football and 
                        netball pitch and giant chess board, playtimes are full of fun at 
                        TechSchool.Besides using the wonderful playground for sports and 
                        PE lessons, the school also makes use of fabulous local facilities 
                        such as Poolside Manor Swimming Pool and Power League.
                    </p>
                </div>
                <div className="image-container-about-one">
                    <Image src={AboutImageTwo} alt="Image Not Found"/>
                </div>
            </div>                              
            <section className="about-three">
                <div className="outer_box">
                    <h1 className="heading2">Why People Choose Us</h1>
                    <div className="inner_box">
                        <h1>700+</h1>
                        <h2>Trending Courses</h2>
                    </div>
                    <div className="inner_box">
                        <h1>1,000+</h1>
                        <h2>Online Courses</h2>
                    </div>
                    <div className="inner_box">
                        <h1>300,000+</h1>
                        <h2>Projects</h2>
                    </div>
                    <div className="inner_box">
                        <h1>500,000+</h1>
                        <h2>Expert Teacher</h2>
                    </div>        
                </div>
            </section>
            <section className="about-four">
                <div className="main-contaner">
                    <div className="text-container-four">
                        <h1>Give Your Child Best Education Here.</h1>
                        <p>
                            Our children learn in an environment where they feel 
                            represented and included.Our broad and creative curriculum 
                            challenges pupils to think critically, develop curiosity,
                            confidence, and independence, ensuring that they are prepared 
                            for whatever they encounter, in school and beyond.
                        </p>
                    </div>
                    <div className="box-container">
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageThree} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>First Class</h1>
                                <p>6 - 7 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageFour} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Second Class</h1>
                                <p>7 - 8 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageFive} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Third Class</h1>
                                <p>8 - 9 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageSix} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Fourth Class</h1>
                                <p>9 - 10 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageThree} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Fifth Class</h1>
                                <p>10 - 11 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageFour} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Sixth Class</h1>
                                <p>11 - 12 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageFive} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Seventh Class</h1>
                                <p>12 - 13 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageSix} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Eight Class</h1>
                                <p>13 - 14 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageThree} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Nineth Class</h1>
                                <p>14 - 15 Years Old Student</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-section-box">
                                <Image src={AboutImageFour} alt="Image Not Found"/>
                            </div>
                            <div className="text-section-box">
                                <h1>Thenth Class</h1>
                                <p>15 - 16 Years Old Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
