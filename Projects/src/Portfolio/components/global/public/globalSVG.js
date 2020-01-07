import React from 'react';
import icons from './spritesheet.svg';

const GlobalSVG = () => {

    return(
        <React.Fragment>
            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref={`${icons}#${'icon-html5'}`} />
            </svg>
            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref={`${icons}#${'icon-css3'}`} />
            </svg>
            <svg className="company--tech__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref={`${icons}#${'icon-javascript'}`} />
            </svg>
        </React.Fragment>
    )
}

export default GlobalSVG; 