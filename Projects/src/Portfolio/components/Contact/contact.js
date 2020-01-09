import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: '',
            email: '', 
            message: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleNameChange(evt) {
        // set state 
        this.setState({ name: evt.target.value });
    }

    handleEmailChange(evt) {
        this.setState({ email: evt.target.value }); 
    }

    handleMessageChange(evt) {
        this.setState({ message: evt.target.value });
    }

    handleSubmit(evt) {
        
        // prevent event 
        evt.preventDefault(); 
        console.log(this.state);
    }

    render() {

        //console.log(this.state);
        return (
            <section className="contact" id="contact-me">
                <h1 className="heading-1 mb-medium">Contact Me</h1>
                <div className="form__wrapper">
                    <div className="form__section">
                        <form method="Post" onSubmit={this.handleSubmit}>
                            <label className="form__label">Name *</label>
                            <input type="text" value={this.state.name.value} onChange={this.handleNameChange} placeholder="Enter..." required/>

                            <label className="form__label">Email *</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter..." required />

                            <label className="form__label">Message *</label>
                            <textarea rows="4" cols="50" value={this.state.message} placeholder="Enter a brief message..." onChange={this.handleMessageChange} required></textarea>

                            <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                    <div className="form__map">
                        <iframe className="iframe__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.2883874286!2d-75.25845520920528!3d40.00241326233223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1578314105681!5m2!1sen!2sus" frameBorder="0" allowFullscreen=""></iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact; 