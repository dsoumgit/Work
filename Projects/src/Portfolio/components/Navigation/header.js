import React from 'react';
import { Link } from 'react-router-dom';
import '../global/sass/main.scss';
import './header.scss';
//import logo from '../asset/img/Logo.png';

const Header = () => {
    return (
        <div className="container">
            <header>
                <div className="site-logo">
                    <h1>D.S</h1>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <a href="#about-me" className="nav-link">About</a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#portfolio" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="hero__background">
                <div className="hero__text">
                    <h1 className="heading-1">Dara Soumgit</h1>
                    <h2 className="heading-2 mb-large">Front End Developer</h2>
                    <button className="btn">Read More <span className="hero__text--more">&darr;</span></button>
                </div>
            </div>
        </div>
    )
}

export default Header; 