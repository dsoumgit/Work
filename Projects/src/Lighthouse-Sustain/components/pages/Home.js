import React, { Component } from "react";
import './home.css';
import logo from '../img/reveal-logo-1.png';
import Footer from './footer';
import Papa from 'papaparse';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataActions from "../_actions/data";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: '',
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
                // hide 
                document.querySelector('.error-message').style.display = '';
                document.querySelector('.image-upload-wrap').style.display = 'none'; 
                document.querySelector('.file-upload-content').style.display = 'block';
                document.querySelector('.filename').innerHTML = `${file.name} selected`;
                // update the state 
                this.setState({ isFile: true, data: results.data });
            }, 
            error: (err, file) => {
                console.log(error);
            }
        });
    }

    onUpload = () => {
        // get data from state 
        const data = this.state.data;
        // check the result 
        if (data.length > 0) {
            // 1. get the first object in an array since they all have the same column names 
            const obj = data[0];
            // 2. check the column names to make sure they are valid 
            if (obj.hasOwnProperty('Number') && obj.hasOwnProperty('Ticket#') && obj.hasOwnProperty('Age') 
                && obj.hasOwnProperty('Title') && obj.hasOwnProperty('Created') && obj.hasOwnProperty('Changed')
                && obj.hasOwnProperty('Close Time') && obj.hasOwnProperty('Queue') && obj.hasOwnProperty('State') 
                && obj.hasOwnProperty('Priority') && obj.hasOwnProperty('Customer User') && obj.hasOwnProperty('CustomerID') 
                && obj.hasOwnProperty('Service') && obj.hasOwnProperty('SLA') && obj.hasOwnProperty('Type') 
                && obj.hasOwnProperty('FirstResponseInMin') && obj.hasOwnProperty('SolutionTime') && obj.hasOwnProperty('SolutionInMin') 
                && obj.hasOwnProperty('SolutionDiffInMin') && obj.hasOwnProperty('StateType') && obj.hasOwnProperty('Points') 
                && obj.hasOwnProperty('Functional Area') ) {
                // hide error message
                document.querySelector('.error-message').style.display = '';
                
                // store data in action  
                this.props.dataActions.setData(data);
                // navigate to the page and pass state as an argument 
                this.props.history.push('/dashboard');
            } else {
                // invalid column names 
                document.querySelector('.error-message').style.display = 'block';
                // hide message 
                document.querySelector('.file-upload-content').style.display = 'none';
                // show input 
                document.querySelector('.image-upload-wrap').style.display = 'block';
                // update the error message 
                { this.setState({errorMsg: 'Invalid fields!', data: [] })};
            }

            
        } else {
            document.querySelector('.error-message').style.display = 'block';
            // update the error message 
            { this.setState({errorMsg: 'File is not found!'})};
        }
    }
    
    render() {

        return(
            <div className="container">
                <header>
                    <div className="company-logo">
                        <img src={logo} alt="Reveal Logo" className="logo-img" />
                    </div>
                    <div className="company-name">
                        <h1 className="heading-1">oVo Lighthouse Sustainment &trade;</h1>
                    </div>
                </header>

                <div className="file-wrapper">
                    <div className="error-message">
                        <i className="fas fa-exclamation-circle"></i>
                        { this.state.errorMsg }
                    </div>
                    <div className="file-upload">
                        <div className="image-upload-wrap">
                            <input className="file-upload-input" type="file" accept=".csv" onChange={this.onReadFile}  />
                            <div className="drag-text">
                                <h3>Upload a file (.csv)</h3>
                            </div>
                        </div>
                        <div className="file-upload-content">
                            <p className="filename"></p>
                        </div>
                        <div className="submit">
                            <button type="button" className="btn-submit" onClick={this.onUpload}>
                                <i className="fa fa-paper-plane"></i> Submit
                            </button>
                        </div>
                    </div>
                </div> 

                <Footer />
                
            </div>
        )
    }

    
}

const mapStateToProps = ({ 
    data
 }) => ({ 
    uploadedData: data, // this.props.uploadedData
 });


// function mapDispatchToPropsExplained(reduxState){
//     return {
//         data: reduxState.data
//     }
// }
const mapDispatchToProps = dispatch => (
    {
        dataActions: bindActionCreators(dataActions, dispatch), // this.props.dataActions.setData(data)
    }
); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
