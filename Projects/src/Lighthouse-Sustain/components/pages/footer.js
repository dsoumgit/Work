import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/RevealValue/" className="icon facebook"><i className="fab fa-facebook"></i></a>               
                    </li>
                    <li>
                        <a href="https://twitter.com/revealusa" className="icon twitter"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/reveal-usa-inc/" className="icon linkedin"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/RevealValueUSA" className="icon youtube"><i className="fab fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/106284037178750474606" className="icon google-plus"><i className="fab fa-google-plus"></i></a>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <p>&copy; 2020 Reveal USA, Inc. All rights reserved.</p>
            </div>
        </footer>   
    )
}

export default Footer; 