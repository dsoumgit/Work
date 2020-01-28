import React, { Component } from 'react';
import './main.css';
import CSVReader from 'react-csv-reader';
import Papa from 'papaparse';
import Main from './Main/main';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFile: false,
            data: []
        }
    }

    onReadFile = (evt) => {
        // get file 
        const file = evt.target.files[0];
        // read the file 
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: results => {
                console.log(results);
                // update the state 
                this.setState({ isFile: true, data: results.data });
            }, 
            error: (err, file) => {
                console.log(error);
            }
        });
    }

    onUpload = () => {
        console.log('click');
        // get data from state 
        const data = this.state.data;
        // check 
        if (data.length === 0) {
            return <div>zero</div>
        } else {
            return <div>Hello</div>
        }
    }

    render() {
        return(
            <div className="container">
                <div className="file-uploader">
                    <h1>Upload CSV</h1>
                    <div className="file-body">
                        <input type="file" id="file" className="input-file" name="file" accept=".csv" onChange={this.onReadFile} onClick={(event) => event.target.value} />
                        <div className="btn-submit">
                            <button type="submit" className="btn" onClick={this.onUpload}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 