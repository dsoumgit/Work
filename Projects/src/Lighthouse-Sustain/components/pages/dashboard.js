import React, { Component } from 'react';
import './dashboard.css';
import logo from '../img/reveal-logo.png';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
//import MainContent from '../Dashboard/Main/mainContent';
import RequestTracker from './Main/requestTracker';
import PointsTracker from './Main/pointsTracker';
//import SLATracker from './Main/slaTracker';
import AgingReport from './Main/agingReport';
import SustainRequest from './SustainRequest/sustainRequest';
import PointConsumption from './PointConsumption/pointConsumption';
import FunctionalArea from './FunctionalArea/functionalArea';
import ContactUs from './ContactUs/contactUs';
import NotFound from './notfound';

const MainDash = () => (
    <div className="">
        {/* <MainContent /> */}
        <RequestTracker />
        <AgingReport />
        {/* <SLATracker /> */}
        <PointsTracker />
    </div>
);

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.match.params.subpage
        // add event listener on menu 
        const toggle = document.querySelector('.toggle');

        toggle.addEventListener('click', () => {
            // toggle class
            document.body.classList.toggle('menu-open');
        });
        
        // get props from store in redux 
        const { data } = this.props;
        // check if user type url path directly 
        if (data === undefined) {
            // redirect to home 
            return this.props.history.push('/');
        } else {
            // direct to 'main page'
            return this.props.history.push('/dashboard/home');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <nav className="nav-menu">
                        <div className="site-logo">
                            <img src={logo} alt="Reveal logo" className="logo" />
                        </div>
                        <ul>
                            <li>
                                <span className="menu-item main"><i className="fas fa-industry"></i></span> 
                                <Link to='/dashboard/home' className="main-link">Main Dashboard</Link>
                            </li>
                            <li>
                                <span className="menu-item request"><i className="far fa-chart-bar"></i></span> 
                                <Link to='/dashboard/sustainment-request' className="request-link">Open vs Closed Requests</Link>
                            </li>
                            <li>
                                <span className="menu-item point"><i className="fa fa-braille"></i></span>
                                <Link to='/dashboard/point-consumption' className="point-link">Points Consumption</Link>
                            </li>
                            <li>
                                <span className="menu-item functional"><i className="fas fa-chart-area"></i></span>
                                <Link to='/dashboard/functional-area' className="functional-link">Functional Area</Link>
                            </li>
                            <li>
                                <span className="menu-item contact"><i className="fa fa-envelope"></i></span>
                                <Link to='/dashboard/contact-us' className="contact-link">Contact Us</Link>
                            </li>
                        </ul> 
                            
                    </nav>

                    <div className="main-header">
                        <button id="toggle" className="toggle">
                            <i className="fa fa-bars fa-2x"></i>
                        </button>
                        <h1 className="heading-1">Reveal oVo Sustainment</h1>
                    </div>
                    <div className="home-icon">
                        <Link to="/" className="home-link"><i className="fas fa-home"></i></Link>
                    </div>
                </div>
                
                <Switch>
                    <Route exact path="/dashboard/contact-us" component={ContactUs} />
                    <Route exact path="/dashboard/functional-area" component={FunctionalArea} />
                    <Route exact path="/dashboard/sustainment-request" component={SustainRequest} />
                    <Route exact path="/dashboard/point-consumption" component={PointConsumption} />
                    <Route exact path="/dashboard/home" component={MainDash} /> 
                    <Route path="/*" component={NotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ 
    data
 }) => ({ 
    data, // this.props.data
 });

export default connect(mapStateToProps)(Dashboard);