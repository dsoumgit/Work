import React, { Component } from 'react';
import './css/style.css';
import { Route } from 'react-router-dom';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';

class Main extends Component {
    constructor() {
        super();   // in order to use 'this' from parent 

        // this.state = {
        //     // Array of objects 
        //     posts: []
        // }
        // this.onRemovePhoto = this.onRemovePhoto.bind(this); // bind(this) is bound to the method
    }
    
//     componentDidMount() {
//         // call method to get data 
//         const data = fetchData();
//         // update the state 
//         this.setState({
//             posts: data
//         });
//     }

//     onRemovePhoto(removedPhoto) {
//         // update the state and render a new state 
//         // REMEMBER: the reason 'this' is not defined because the onclick event handler is the context that is
//         //  outside of this component and needs to restore using .bind() 
//         this.setState((state) => ({
//             posts: state.posts.filter(post => post !== removedPhoto)
//         }))
//     }

//     /*
//       We want to update the post state in this component when creating a new photo from AddPhoto component. 
//       So we need to create a mothod to update the state that is submitted by the form.
//     */
//    addPhoto(postSubmitted) {
//        // return a new array for the new one we submitted
//         this.setState(state => ({
//             posts: state.posts.concat(postSubmitted)
//         }));
//    }

    render() {
        console.log(this.props);
        return(
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title="Photowall" />
                        { /* passing all props and destructing it individually */ }
                        <Photowall {...this.props} /> 
                    </div>
                )}/>

                <Route path="/add-photo" render={({history}) => (
                    <AddPhoto {...this.props } onHistory={history} />
                )}/>    
            </div>
        )       
    }
}

export default Main;