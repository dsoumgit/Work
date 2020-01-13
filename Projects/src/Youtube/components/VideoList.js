import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // map each object
    const renderedList = videos.map((video) => {
        
        // passing props to child (VideoItem) component 
        return(
            <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
        )
    })

    // print out render list 
    return(
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList; 