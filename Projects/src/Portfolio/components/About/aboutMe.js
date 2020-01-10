import React from 'react';
import './aboutMe.scss';
import icons from '../global/public/spritesheet.svg';
import Resume from './Updated_resume.pdf';

const handleResume = (evt) => {
    // prevent browser refresh 
    evt.preventDefault();
    // Get Resume id 
    const resume = document.querySelector('#resume');
    // set display to block 
    resume.style.display = 'block';
    // prevent scrolling in the body
    document.body.style.overflow = 'hidden';
}

const handleClose = (evt) => {
    // Get Resume id 
    const resume = document.querySelector('#resume');
    // set display to none 
    resume.style.display = 'none';
    // allow scrolling in the body
    document.body.style.overflow = 'unset';
}

const About = () => {


    return (
        <section className="about" id="about-me">
            <div className="about__headings mb-large">
                <h3 className="heading-3">About</h3>
                <h1 className="heading-1 heading-1__display">Personal Details</h1>
            </div>
            <div className="about__detail">
                <div className="about__detail--me">
                    <p className="p-text mb-large">With more than five years of professional experiences working as a front end developer,
                        I can utilize web technologies and tools to develop scalable web application that meets
                        any project size and business requirements. I follow the best practices and web standard to
                        write clean semantic markups and layout that supports across different browsers and devices.
                        I have worked with senior developers, UI/UX designers, business analysis, and product owner
                        from different departments to deliver the quality software for customer.
                        </p>
                    <div className="about__detail--skills">
                        <h3 className="heading-3 mb-medium">My Top 5 Skills:</h3>
                        <div className="tech">
                            <svg className="tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-html5'}`} />
                            </svg>

                            <div className="tech__meter tech__meter--html5">
                                <div className="tech__meter--bg inner--html5"></div>
                                <span className="meter__value">80%</span>
                            </div>
                        </div>
                        <div className="tech">
                            <svg className="tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-css3'}`} />
                            </svg>
                            <div className="tech__meter tech__meter--css3">
                                <div className="tech__meter--bg inner--css3"></div>
                                <span className="meter__value">80%</span>
                            </div>
                        </div>
                        <div className="tech">
                            <svg className="tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-javascript'}`} />
                            </svg>
                            <div className="tech__meter tech__meter--js">
                                <div className="tech__meter--bg inner--js"></div>
                                <span className="meter__value">70%</span>
                            </div>
                        </div>
                        <div className="tech">
                            <svg className="tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-react'}`} />
                            </svg>

                            <div className="tech__meter tech__meter--react">
                                <div className="tech__meter--bg inner--react"></div>
                                <span className="meter__value">60%</span>
                            </div>
                        </div>
                        <div className="tech">
                            <svg className="tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-jquery'}`} />
                            </svg>
                            <div className="tech__meter tech__meter--jQuery">
                                <div className="tech__meter--bg inner--jQuery"></div>
                                <span className="meter__value">50%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__detail--work">
                    <h1 className="heading-1 heading-1__exp mb-medium">Experience</h1>
                    <div className="exp">
                        <div className="exp__comcast">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578338324/Comcast-logo_ttem3h.png" alt="Comcast Logo" className="exp__logo exp__logo--comcast" />
                            <h4 className="heading-4 heading-4__year">2019</h4>
                        </div>
                        <div className="exp__line"></div>
                        <div className="exp__reveal">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578338323/Reveal_vylciw.png" alt="Reveal Logo" className="exp__logo" />
                            <h4 className="heading-4 heading-4__year">2015</h4>
                        </div>
                        <div className="exp__line"></div>
                        <div className="exp__bluecross">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578338324/BlueCross_jt31fp.jpg" alt="Indepedence Blue Cross Logo" className="exp__logo" />
                            <h3 className="heading-4 heading-4__year">2014</h3>
                        </div>
                        <div className="exp__line"></div>
                        <a href="#resume" className="exp__link" onClick={handleResume}>
                            See Resume
                            </a>
                    </div>
                </div>
            </div>

            <div className="resume" id="resume">
                <div className="resume__close">
                    <button type="text" className="resume__btn" aria-label="Close Overlay" onClick={handleClose}>Close &times;</button>
                </div>
                <div className="resume__pdf">
                    <embed src={Resume} width="800px" height="1200px" title="Test Name" />
                </div>
            </div>
        </section>
    )
}

export default About; 