import React, { Component } from 'react';
import './css/style.css';
import { Route } from 'react-router-dom';

import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';


class Home extends Component {
    constructor() {
        super();   // in order to use 'this' from parent 

        this.state = {
            // Array of objects 
            posts: []
        }
        this.onRemovePhoto = this.onRemovePhoto.bind(this); // bind(this) is bound to the method
    }
    
    componentDidMount() {
        // call method to get data 
        const data = fetchData();
        // update the state 
        this.setState({
            posts: data
        });
    }

    onRemovePhoto(removedPhoto) {
        // update the state and render a new state 
        // REMEMBER: the reason 'this' is not defined because the onclick event handler is the context that is
        //  outside of this component and needs to restore using .bind() 
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== removedPhoto)
        }))
    }

    /*
      We want to update the post state in this component when creating a new photo from AddPhoto component. 
      So we need to create a mothod to update the state that is submitted by the form.
    */
   addPhoto(postSubmitted) {
       // return a new array for the new one we submitted
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }));
   }



    render() {
        console.log(this.state.posts);
        return(
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title="Photowall" />
                        <Photowall posts={this.state.posts} onRemovePhoto={this.onRemovePhoto} />
                    </div>
                )}/>

                <Route path="/add-photo" render={({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost);
                        // back to previous page
                        history.push('/');
                    }} />
                )}/>    
            </div>
        )       
    }
}

const fetchData = () => {
    return [
        {
            id: 0,
            description: "Picture 1",
            imageLink: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            id: 1,
            description: "Waterfall",
            imageLink: "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
        },
        {
            id: 2,
            description: "Sea",
            imageLink: "https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg"
        },
        {
            id: 3,
            description: "Waterfall",
            imageLink: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
        }
    ];
}

export default Home;