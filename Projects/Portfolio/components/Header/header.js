import React from 'react';
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
                            <a href="#" className="nav-list__link">
                                <svg
                                    className="nav-list__icon"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">

                                    <path d="M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"></path>
                                </svg>
                                <span className="nav-list__text">About Me</span>
                            </a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#" className="nav-list__link">
                                <svg
                                    className="nav-list__icon"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z"></path>
                                </svg>
                                <span className="nav-list__text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#" className="nav-list__link">
                                <svg
                                    className="nav-list__icon"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">

                                    <path d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"></path>
                                </svg>
                                <span className="nav-list__text">Contact Me</span>
                            </a>
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