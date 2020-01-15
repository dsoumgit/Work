import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddPhoto extends Component {

    state = {
        url: '',
        description: ''
    } 

    onChangeUrl = (evt) => {
        // update state
        this.setState({
            url: evt.target.value
        })
    }

    onChangeDesc = (evt) => {
        // update state
        this.setState({
            description: evt.target.value
        })
    }

    onAddPhoto = (evt) => {
        evt.preventDefault();

        const post = {
            id: Number(new Date),
            description: this.state.description,
            imageLink: this.state.url
        }

        this.props.onAddPhoto(post); 
    }

    render() {
        return(
            <div>
                <h1>New Photo</h1>
                <div className="form-container">
                    <form className="form" onSubmit={this.onAddPhoto}>
                        <div className="form-content">
                            <label htmlFor="URL" className="label">Link <span className="required">*</span></label>
                            <input type="text" placeholder="Enter url" className="input" value={this.state.url} onChange={this.onChangeUrl} required></input>
                        </div>
                        <div className="form-content">
                            <label htmlFor="desc" className="label">Description <span className="required">*</span></label>
                            <input type="text" placeholder="Enter description" value={this.state.description} onChange={this.onChangeDesc} required></input>
                        </div>
                        <button type="submit" className="post-btn">Post</button>
                        <Link to="/" className="cancel-btn">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto; 