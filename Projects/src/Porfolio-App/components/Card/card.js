import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            open: false
        }
    }

    onArrowToggle = evt => {
        console.log('clicked...');
        console.log(evt);
        console.log(this.props.data);
        this.setState({ open: !this.state.open })
    }


    render() {

        return (
            <div className="card-container">
                {this.props.data.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="card-header">
                                <div className="card-img">
                                    <img src={`${item.logo}`} alt="Card Image" />
                                </div>
                                <h2 className="card-display2">{item.company}</h2>
                            </div>
                            <div className="card-bg"></div>
                            <div className="card-body">
                                <p>
                                    {item.description}
                                </p>
                                <h3 className="card-display3">Projects:</h3>
                                <div className="card-project">
                                    <p>
                                        <a href={`${item.link1}`} target="_blank" className="card-link">{item.link1_name}</a>
                                    </p>
                                    <p>
                                        <a href={`${item.link2}`} target="_blank" className="card-link">{item.link2_name}</a>
                                    </p>
                                    <p>
                                        <a href={`${item.link3}`} target="_blank" className="card-link">{item.link3_name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        )
    }
}

export default Card;