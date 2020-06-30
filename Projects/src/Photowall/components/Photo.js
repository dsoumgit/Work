import React from 'react';
import PropTypes from 'prop-types';
 
const Photo = (props) => {

    const post = props.post;

    return(
        <figure className="figure">
            <img src={post.imageLink} alt={post.description} className="photo" />
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="btn-container">
                <button className="btn-remove" onClick={() => {
                    props.removePost(props.index)
                }}>Remove</button>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
  //  onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;