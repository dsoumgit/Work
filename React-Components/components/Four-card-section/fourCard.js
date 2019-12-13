import React, { Component } from 'react';
import './fourCard.scss';

class FourCard extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>Reliable, efficient delivery<br /><span>Powered by Technology</span></h1>
                    <p>Our Artificial Intelligence powered tools use millions of project data <br /> points
                        to ensure that your project is successful</p>
                </header>

                <div className="container">
                    <div className="card supervisor">
                        <div>
                            <h2>Supervisor</h2>
                            <p>Monitors activity to identify project roadblocks</p>
                        </div>
                        <img src={'./images/icon-supervisor.svg'} alt="supervisor icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default FourCard; 