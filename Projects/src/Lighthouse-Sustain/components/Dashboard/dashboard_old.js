import React, { Component } from 'react';
import './dashboard.css';
import logo from '../img/reveal-logo.png';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import RequestTracker from './RequestTracker/requestTracker';
import Request from '../SustainmentRequest/request';
import Consumption from '../Consumption/consumption';

const Topic = ({ match }) => (
    <div>
        <h2>Current Route</h2>
        <div>{`${match.params.topicId}`}</div>
    </div>
);

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     // this.props.match.params.subpage
    //     // add event listener on menu 
    //     const toggle = document.querySelector('.toggle');

    //     toggle.addEventListener('click', () => {
    //         // toggle class
    //         document.body.classList.toggle('menu-open');
    //     });
        
    //     // get props 
    //     // const data = this.props.location.state; 
    //     const {data} = this.props;
    //     // check if user type url path directly 
    //     if (data === undefined) {
    //         // redirect to home 
    //         return this.props.history.push('/');
    //     } else {

    //     }
    // }

    getCreatedTickets = (data) => { 
        // copy an array 
        const arr = data.slice(); 
        // define count to store key value pairs 
        const count = {};
        
        arr.filter(item => new Date(item.Created).getFullYear() === 2018)
            .map(cur => {
                // convert to date object 
                let createdMonth = new Date(cur.Created).getMonth();
                // month start from 1 
                if (createdMonth < 12) {
                    createdMonth += 1;
                }
                // return result of all the months 
                return createdMonth;
            })
            .forEach(elem => {
                count[elem] = (count[elem] || 0) + 1;
            });

        const output = new Array(12).fill(0).map((cur, ind) => count[ind + 1] || cur);

        return output; 
    }

    getClosedTickets = (data) => { 
        // copy an array 
        const arr = data.slice(); 
        // define count to store key value pairs 
        const count = {};
        
        arr.filter(item => new Date(item['Close Time']).getFullYear() === 2018)
            .map(cur => {
                // convert to date object 
                let month = new Date(cur['Close Time']).getMonth();
                // month start from 1 
                if (month < 12) {
                    month += 1;
                }
                // return result of all the months 
                return month;
            })
            .forEach(elem => {
                count[elem] = (count[elem] || 0) + 1;
            });

        const output = new Array(12).fill(0).map((cur, ind) => count[ind + 1] || cur);

        return output; 
    }

    // render() {
    //     return (
    //         <React.Fragment>
    //             <div className="main-container">
    //                 <nav className="nav-menu">
    //                     <div className="site-logo">
    //                         <img src={logo} alt="Reveal logo" className="logo" />
    //                     </div>
    //                     <ul>
    //                         <li>
    //                             <span className="menu-item request"><i className="far fa-chart-bar"></i></span> 
    //                             <Link to='/dashboard/request' className="request-link">Open vs Closed Requests</Link>
    //                         </li>
    //                         <li>
    //                             <span className="menu-item point"><i className="fa fa-braille"></i></span>
    //                             <Link to='/dashboard/consumption' className="point-link">Points Consumption</Link>
    //                         </li>
    //                         <li>
    //                             <span className="menu-item functional"><i className="fas fa-chart-area"></i></span>
    //                             <a href="#" className="functional-link">Functional Area</a>
    //                         </li>
    //                         <li>
    //                             <span className="menu-item contact"><i className="fa fa-envelope"></i></span>
    //                             <a href="#" className="contact-link">Contact Us</a>
    //                         </li>
    //                     </ul> 
    //                 </nav>

    //                 <div className="main-header">
    //                     <button id="toggle" className="toggle">
    //                         <i className="fa fa-bars fa-2x"></i>
    //                     </button>
    //                     <h1 className="heading-1">Reveal oVo Sustainment</h1>
    //                 </div>
    //                 <div className="home-icon">
    //                     <Link to="/" className="home-link"><i className="fas fa-home"></i></Link>
    //                 </div>
    //             </div>
                
            
    //             <RequestTracker />

                    
    //         </React.Fragment>
    //     )
    // }


    render() {
        const { match } = this.props;

        return(
            <div>
                <h4>Main Dashboard</h4>
                <ul>
                    <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
                    <li><Link to={`${match.url}/components`}>Components</Link></li>
                    <li><Link to={`${match.url}/props-vs-state`}>Props vs State</Link></li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic} />
            </div>
        )
    }
}

const mapStateToProps = ({ 
    data
 }) => ({ 
    data, // this.props.data
 });

export default connect(mapStateToProps)(Dashboard);