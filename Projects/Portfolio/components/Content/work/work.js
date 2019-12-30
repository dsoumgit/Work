import React, { Component } from 'react'; 
import './work.scss'; 
import Challenger2 from './img/Reveal/Photo-2.png';

class Work extends Component {

    render() {
        return(
            <div className="work">
                <h1 className="heading-1">Portfolio</h1>
                <div className="work__company">
                    <div className="work__name work__name--reveal">
                        <div className="type">
                            <img src={Challenger2} alt="Challenger Photo 2" className="type__reveal" />
                            <span className="type__more">
                                <button className="">View</button>
                            </span>
                        </div>
                        <h2>Description</h2>
                        <ul className="work__items">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    { /* <div className="work__name work__name--ibx">
                        <img src={Challenger2} alt="Challenger Photo 2" className="photo" />
                        <h2>Description</h2>
                        <ul className="work__items">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div className="work__name work__name--comcast">
                        <img src={Challenger2} alt="Challenger Photo 2" className="photo" />
                        <h2>Description</h2>
                        <ul className="work__items">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
        </div> */ }
                </div>
            </div>
        )
    }
}

export default Work; 
