import React, { Component } from 'react'; 
import PostList from './PostList';

class Home extends Component {


    render() {
        return(
            <div className="ui container">
                <PostList />
            </div>
        )
    }
}

export default Home; 