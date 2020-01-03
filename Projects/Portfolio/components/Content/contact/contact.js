import React from 'react'; 
import './contact.scss'; 

const Contact = () => {

    return(
        <section className="contact">
            <div className="form">
                <form>
                    <div className="form-name">
                        <label>Name</label>
                        <input type="text" name="" />
                    </div>
                    <div className="form-email">
                        <label>Email</label>
                        <input type="text" name="" />
                    </div>
                </form>
            </div>
            <div className="image">
                Image placeholder 
            </div>
        </section>
    )
}

export default Contact; 