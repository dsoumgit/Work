import React, { Component } from 'react';
import './main.css';
import logo from '../img/reveal-logo.png';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // add event listener on menu 
        const toggle = document.querySelector('.toggle');

        toggle.addEventListener('click', () => {
            // toggle class
            document.body.classList.toggle('menu-open');
        });
    }


    render() {
        return (
            <div className="main-container">
                <nav class="nav-menu">
                    <div className="site-logo">
                        <img src={logo} alt="Reveal logo" className="logo" />
                    </div>
                    <ul>
                        <li>
                            <span className="menu-item request"><i class="far fa-chart-bar"></i></span> 
                            <a href="#" className="request-link">Open vs Closed Requests</a>
                        </li>
                        <li>
                            <span className="menu-item point"><i className="fa fa-braille"></i></span>
                            <a href="#" className="point-link">Points Consumption</a>
                        </li>
                        <li>
                            <span className="menu-item functional"><i className="fas fa-chart-area"></i></span>
                            <a href="#" className="functional-link">Functional Area</a>
                        </li>
                        <li>
                            <span className="menu-item contact"><i className="fa fa-envelope"></i></span>
                            <a href="#" className="contact-link">Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div className="main-header">
                    <button id="toggle" class="toggle">
                        <i class="fa fa-bars fa-2x"></i>
                    </button>
                    <h1 className="heading-1">Reveal oVo Sustainment</h1>
                </div>


            </div>
        )
    }
}

export default Main;