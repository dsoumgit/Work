import React, { Component, useState, useCallback } from 'react';
import './work.scss';
//import Challenger2 from './img/Reveal/Photo-2.png';
//import Gallery from 'react-photo-gallery';
//import Carousel, { Modal, ModalGateway } from 'react-images';
//import { photos } from './photos';
import RevealPhoto2 from './img/Reveal/Photo-1.png'; 
import ComcastPhoto1 from './img/Reveal/Photo-3.png'; 

class Work extends Component {

    render() {
        return(
            <div className="work" id="portfolio">
                <h1 className="heading-1">Portfolio</h1>
                <section className="company">
                    <div className="company__section company__section--comcast">
                        <h2 className="heading mb-medium">Comcast</h2>
                        <img src={RevealPhoto2} alt="Reveal Photo 2" className="photo" />
                        <div className="company__description">
                            <h4 className="">Description</h4>
                            <p className="text-display">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.</p>
                            <button type="button" className="btn__tech">Tech Stack &rarr;</button>    
                        </div>
                    </div>
                    <div className="company__section">
                        <h2 className="heading mb-medium">Reveal</h2>
                        <img src={RevealPhoto2} alt="Reveal Photo 2" className="photo" />
                        <div className="company__description">
                            <h4 className="">Description</h4>
                            <p className="text-display">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.</p>
                            <button type="button" className="btn__tech">Tech Stack &rarr;</button>     
                        </div>
                    </div>
                    <div className="company__section">
                        <h2 className="heading mb-medium">IBX</h2>
                        <img src={RevealPhoto2} alt="Reveal Photo 2" className="photo" />
                        <div className="company__description">
                            <h4 className="">Description</h4>
                            <p className="text-display">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.</p>
                            <button type="button" className="btn__tech">Tech Stack &rarr;</button>     
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Work; 
