import React, { Component } from 'react';
import '../css/style.css';
import axios from 'axios';

class SeasonDisplay extends Component {
    
    constructor(props) {
        super(props);
        
        // default coordinates in NY 
        this.state = {
            data: [],
            message: false
        }
    }

    componentDidMount() {
        // get current location. Needs two callback functions. 
        // Note: based on documentation on MDN, some countries prohibit the wifi or location.
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // get latitude 
                const lat = position.coords.latitude;
                // get longitude
                const long = position.coords.longitude;
                // API Keys
                const KEY = '02330938495c9c9faf0e4f4fe1ac2de4'; 
                // 
                axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial&APPID=' + KEY + '&cnt=10')
                    .then(result => {
                        // update the state 
                        this.setState({ data: result.data, message: true });
                    })
                    .catch(err => {
                        console.log(err.message);
                    });
            },
            (err) => console.log(err)
        );
    }

    render() {
        const { data } = this.state;
        
        // check the length
        if (data.length === 0) {
            return(
                <div>Loading...</div>    
            )
        } else {

            const { name, main } = data; 
            const { icon } = data.weather[0];
            const imageIcon = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            
            return(
                <div className="container">
                    <div className="content">
                        <h1>{name}</h1>
                        <img src={imageIcon} alt="Weather icon" className="photo" />
                        <p>Temperature: {main.temp} &#8457;</p>
                        <p>Feels Like: {main.feels_like}</p>
                        <p>Min: {main.temp_min}</p>
                        <p>Max: {main.temp_max}</p>
                        <p>Humidity: {main.humidity}</p>
                    </div>
                </div>
            )
        }
    }
}


export default SeasonDisplay;