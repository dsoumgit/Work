import React, { Component } from 'react';
// connect 
import { connect } from 'react-redux'; 
import { fetchUser } from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        // passing user id 
        this.props.fetchUser(this.props.userId);
    }

    render() {
        
        //const user = this.props.users.find(user => user.id === this.props.userId);
        
        const { user } = this.props; 

        // check if no user 
        if (!user) {
            return null; 
        }

        return(
            <div className="header">{user.name}</div>
        )
    }
}

const mapToStateProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(
    mapToStateProps,
    { fetchUser }
)(UserHeader); 