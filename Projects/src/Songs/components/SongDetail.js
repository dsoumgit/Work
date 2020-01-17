import React from 'react'; 
import '../css/style.css';
import { connect } from 'react-redux'; 

                // use destructing 
const SongDetail = ({ song }) => {
    
    if (song) {
        return(
            <div className="detail">
                <h1>Song Detail</h1>
                <p>Title: <span className="text">{song.title}</span></p>
                <p>Duration: <span className="text">{song.duration}</span></p>
            </div>
        )
    }

    return true;
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail); 