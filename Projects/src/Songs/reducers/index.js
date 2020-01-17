import { combineReducers } from 'redux'; 

// Songs reducer 
const songsReducer = () => {
    return [
        { id: 0, title: 'All Star', duration: '4:10' },
        { id: 1, title: 'Motivation', duration: '3:12' },
        { id: 2, title: '1000 Hours', duration: '3:50' },
        { id: 3, title: 'Love the way you are', duration: '3:55'},
        { id: 4, title: 'Friends', duration: '2:12'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    // check
    if (action.type === 'SONG_SELECTED') {
        return action.payload; 
    }

    return selectedSong; 
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer   
}); 