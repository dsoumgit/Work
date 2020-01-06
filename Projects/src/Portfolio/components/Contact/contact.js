import React from 'react';
import './contact.scss';

const Contact = () => {

    return (
        <section className="contact">
            <h1 className="heading-1 mb-medium">Contact Me</h1>
            <div className="form__wrapper">
                <form method="Post">
                    <label className="form__label">Name:</label>
                    <input type="text" name="" placeholder="Enter..." />

                    <label className="form__label">Email:</label>
                    <input type="email" name="" placeholder="Enter..." />

                    <label className="form__label">Message:</label>
                    <textarea rows="4" cols="50" placeholder="Enter message..."></textarea>

                    <button type="button" className="btn-submit">
                        Submit
                    </button>
                </form>

                <div className="form__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.2883874286!2d-75.25845520920528!3d40.00241326233223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1578314105681!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:'0'}} allowFullscreen=""></iframe>
                </div>
            </div>

        </section>
    )
}

export default Contact; 