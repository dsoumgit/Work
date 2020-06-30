import React from 'react';
import PropTypes from 'prop-types';
// contains each photo 
import Photo from './Photo';
import { Link } from 'react-router-dom';

const Photowall = (props) => {

    return(
        <React.Fragment>
            {/*<a href="#add-photo" className="btn-add" onClick={props.onNavigate}></a>*/}
            <Link className="btn-add" to="/add-photo"></Link>

            <div className="photo-grid">
                {
                    props.posts.sort((a, b) => {
                        return b.id - a.id;
                    })
                    .map((elem, i) => <Photo key={i} post={elem} {...props} index={i} /> )
                }
            </div>
        </React.Fragment>
    )
}

Photowall.propTypes = {
    // make sure the posts is an array type that is passing as props from Home component 
    posts: PropTypes.array.isRequired
 //   onRemovePhoto: PropTypes.func.isRequired 
}

export default Photowall;