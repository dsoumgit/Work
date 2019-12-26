import React from 'react';
import './aboutMe.scss';

const About = () => {

    return (
        <section className="about">
            <div className="about__headings">
                <h3 className="heading-3">About</h3>
                <h1 className="heading-1 heading-1__display">Personal Details</h1>
            </div>
            <div className="about__detail">
                <div className="about__me">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="about__education">
                    <h2>Education</h2>
                </div>
            </div>
        </section>
    )
}

export default About; 