import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div className="copyright">
                    <p>Copright &copy; {new Date().getFullYear()} Dara Soumgit. All rights reserved.</p>
                </div>
                <div className="social">
                    <ul className="social-item">
                        <li>
                            <a href="https://www.linkedin.com/in/dara-soumgit-a57387106/" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                        <li>
                            <a href="https://twitter.com/DSoumgit" target="_blank"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;