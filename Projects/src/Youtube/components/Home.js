/***
 * 
 * The app is using Youtube API via Google when signed in and created a project.
 *  I have named the project called Video Browser. Below is a link to check the
 *  project that created. 
 *  https://console.developers.google.com/
 *  We can do a search on any API. In this app, we're using YouTube Data API v3.
 *  To use the API, we need to first Enable it, then create credentials.
 * 
 */

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from './apis/youtube';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class Home extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    /***
     * We want to default the video when the page is initially loaded 
     *  to the screen.
     * 
     */
    componentDidMount() {
        // passing any default search key 
        this.onTermSubmit('cars');     
    }

    /***
     * Note: any time we make async operation, we have to interact with
     *  it using either promises or the async await syntax. 
     * 
     */
    // callback function to retrieve props from child component (SearchBar)
    onTermSubmit = async (term) => {

        // Youtube request 
        const response = await youtube.get('/search', {
            // passing parameters
            params: {   // 'q' means query
                ...baseParams,
                q: term
            }
        });

        // update state 
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        }) 
    }

    // callback function to retrieve the selected video from child component 
    onVideoSelect = (video) => {
        // update state
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar onFormSubmit={this.onTermSubmit} /> 

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 