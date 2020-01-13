import React from 'react';

const VideoDetail = ({ video }) => {
    // check if there is no video 
    if (!video) {
        return <div>Loading...</div>
    }

    // source link for iframe and use template string to reference the id 
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <React.Fragment>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player" />
            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </React.Fragment>
    )
}

export default VideoDetail; 