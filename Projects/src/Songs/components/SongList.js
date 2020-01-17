import React, { Component } from 'react';
// Second step: using connect object to integrate React with Redux
// connect Redux with React using connect object 
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';
import SongDetail from './SongDetail';

class SongList extends Component {

    // create a function to render the list 
    renderList() {
        //console.log(this.props);
        const songs = this.props.songs; 
       // console.log(this.props);
        return this.props.songs.map((song) => {
            return (// JSX
                
                <li key={song.id}>{song.title}
                    <div className="btn">
                        <button 
                            className="btn-select"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                </li>
                
            )
        });

    }

    render() {
        // this.props ==== { songs: state.songs }
        //console.log(this.props);
        return(
            <div className="song-list">
                <div className="song-items">
                    <h1>List of songs:</h1>
                    <ul>
                        { this.renderList() }
                    </ul>
                </div>    
                <div className="song-detail">
                    <SongDetail />
                </div>
            </div>
        )
    }
}

// First step: creating this function to call all states inside a React store 
// By convention, we normally call this function mapStateToProps but it can be any name
//                      this state parameter contains Song List, and Selected Song in reducer
const mapStateToProps = state => {
    // return as an object and we can access this as a prop in the render class component 
    return { songs: state.songs };
}

// Third step: passing in function to connect with the state 
export default connect(
    mapStateToProps,
    // using ES6 syntax instead of selectedSong: selectedSong
    { selectSong }   // REMEMBER: selected song must wire to this connect() function or use dispatch()
                    //      but we can't call it directly like this selectSong()  
)(SongList);

/***
 * REMEMBER: these entire flow are going to repeat it over again and again with the same steps.  
 */