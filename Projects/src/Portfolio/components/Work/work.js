import React, { Component, useState, useCallback } from 'react';
import './work.scss';
import icons from '../global/public/spritesheet.svg';
import GlobalSVG from '../global/public/globalSVG';

class Work extends Component {

    render() {
        return(
            <section className="work" id="portfolio">
                <h1 className="heading-1 mb-medium">Portfolio</h1>
                <div className="company">
                    <div className="company--comcast mb-medium">
                        <h2 className="company--heading2 mb-small">Comcast</h2>
                        <div className="company__photo mb-medium">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578340815/Comcast.png" alt="Comcast Photo" className="photo" />
                        </div>
                        <h3 className="company--heading3">Essential Duties:</h3>
                        <div className="company__description mb-medium">   
                            <ul className="company__list">
                                <li>Participate in agile software development team for planning and grooming</li>
                                <li>Develop new user-facing feature and reusable components</li>
                                <li>Work alongside with Content Management team for xfinity.com website</li>
                                <li>Assist with any front end work related issues</li>
                                <li>Develop reusable component</li>
                                <li>Perform other related duties and responsibilities as assigned</li>
                            </ul>
                        </div>
                        <h3 className="company--heading3 mb-small">Tech Stack:</h3>
                        <div className="company--tech">
                            <GlobalSVG />
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-jquery'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-react'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-webpack'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-babel'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-github'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-greensock'}`} />
                            </svg>
                        </div>
                    </div>
                    <div className="company--reveal mb-medium">
                        <h2 className="company--heading2 mb-small">Reveal</h2>
                        <div className="company__photo mb-medium">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578340031/Reveal.png" alt="Reveal Photo 2" className="photo" />
                        </div>
                        <h3 className="company--heading3">Essential Duties:</h3>
                        <div className="company__description mb-medium">
                            <ul className="company__list">
                                <li>Develop and maintain web analytic apps to support various clients 
                                    for their supply chain performance </li>
                                <li>Adhere to web standard and best practices for accessibility and usability</li>
                                <li>Work alongside with Content Management team for xfinity.com website</li>
                                <li>Assist with any front end work related issues</li>
                                <li>Develop reusable component</li>
                            </ul>
                        </div>
                        <h3 className="company--heading3 mb-small">Tech Stack:</h3>
                        <div className="company--tech">
                            <GlobalSVG />
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-jquery'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-sap'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-babel'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-github'}`} />
                            </svg>
                            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <use xlinkHref={`${icons}#${'icon-bootstrap'}`} />
                            </svg>
                        </div>
                    </div>

                    <div className="company--ibx mb-medium">
                        <h2 className="company--heading2 mb-small">IBX</h2>
                        <div className="company__photo mb-medium">
                            <img src="https://res.cloudinary.com/djpzwzllb/image/upload/v1578341168/IBX.png" alt="IBX Photo" className="photo" />
                        </div>
                        <h3 className="company--heading3">Essential Duties:</h3>
                        <div className="company__description mb-medium">
                            <ul className="company__list">
                                <li>Participate in agile software development team for planning and grooming</li>
                                <li>Develop new user-facing feature and reusable components</li>
                                <li>Work alongside with Content Management team for xfinity.com website</li>
                                <li>Assist with any front end work related issues</li>
                                <li>Develop reusable component</li>
                                <li>Perform other related duties and responsibilities as assigned</li>
                            </ul>
                        </div>
                        <h3 className="company--heading3 mb-small">Tech Stack:</h3>
                        <div className="ibx__tech">
                            <div className="company--tech">
                                <GlobalSVG />
                                <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                    <use xlinkHref={`${icons}#${'icon-java'}`} />
                                </svg>
                                <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                    <use xlinkHref={`${icons}#${'icon-ios'}`} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Work; 
