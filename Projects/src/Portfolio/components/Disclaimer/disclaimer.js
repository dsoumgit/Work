import React from 'react'; 
import './disclaimer.scss';

const Disclaimer = () => {

    return(
        <div className="disclaimer">
            <div className="disclaimer__items">
                <ul className="list">
                    <li className="list__item">
                        <a href="#about-me" className="list__link">About</a>
                    </li>
                    <li className="list__item">
                        <a href="#portfolio" className="list__link">Work</a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__link">Resources</a>
                    </li>
                    </ul>
                {/*<nav>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
                        <li className="nav-item"><a href="#">My Apps</a>
                            <ul>
                                <li><a href="#">item</a></li>
                                <li><a href="#">item</a></li>
                                <li><a href="#">item</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>*/ }
            </div>
            <div className="disclaimer__social">
                <ul className="social">
                    <li className="social__list">
                        <a href="https://www.linkedin.com/in/dara-soumgit-a57387106/" target="_blank" className="social__link">
                            <svg className="social__icon icon-linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>LinkedIn</title>    
                                <path fill="#0077b5" d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="social__list">
                        <a href="https://twitter.com/DSoumgit" target="_blank" className="social__link">
                            <svg className="social__icon icon-linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Twitter</title>   
                                <path fill="#1da1f2" d="M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397z"></path> 
                            </svg>
                        </a>
                    </li>
                    <li className="social__list">
                        <a href="https://github.com/dsoumgit" target="_blank" className="social__link">
                            <svg className="social__icon icon-linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Github</title>    
                                <path d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"></path>
                            </svg>
                        </a>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Disclaimer;