import React, { Component } from "react";
import './home.css';
import logo from '../img/reveal-logo-1.png';
import Papa from 'papaparse';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postsActions from "../_actions/posts";

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
        console.log(file);
        // read the file 
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: results => {
                // hide 
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
            // navigate to the page 
            this.props.history.push('/main');
        } 
    }

    getPosts = () => {
        this.props.postsActions.getPosts();
        this.props.history.push("/posts");

    //    this.props.dataActions.getData();

    //    this.props.storeSomething.getPosts();
    }

    render() {
        return(
            <div className="container">
                <header>
                    <div className="company-logo">
                        <img src={logo} alt="Reveal Logo" />
                    </div>
                    <div className="company-name">
                        <h1 className="heading-1">Lighthouse Sustainment</h1>
                    </div>
                </header>

                <div className="file-wrapper">
                    <div className="file-upload">
                        <div className="image-upload-wrap">
                            <input className="file-upload-input" type="file" accept=".csv" onChange={this.onReadFile}  />
                            <div className="drag-text">
                                <h3>Upload a file (.csv)</h3>
                            </div>
                        </div>
                        <div className="file-upload-content">
                            <p className="filename"></p>
                            {/*<img className="file-upload-image" src="#" alt="CSV file" />
                            <div className="image-title-wrap">
                                <button type="button" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
        </div>*/}
                        </div>
                        <div className="submit">
                            <button type="button" className="btn-submit" onClick={this.onUpload}>
                                <i className="fa fa-paper-plane"></i> Submit
                            </button>
                        </div>
                    </div>
                </div> 

                <footer>
                    <div className="social-icons">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/RevealValue/" className="icon facebook"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/revealusa" className="icon twitter"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/company/reveal-usa-inc/" className="icon linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.youtube.com/user/RevealValueUSA" className="icon youtube"><i className="fa fa-youtube"></i></a>
                                <a href="https://plus.google.com/106284037178750474606" className="icon google-plus"><i className="fa fa-google-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer">
                        <p>&copy; 2020 Reveal USA, Inc. All rights reserved.</p>
                    </div>
                </footer>   
            </div>
        )
    }

    
}

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = dispatch => (
    {
        postsActions: bindActionCreators(postsActions, dispatch)
    }
); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
