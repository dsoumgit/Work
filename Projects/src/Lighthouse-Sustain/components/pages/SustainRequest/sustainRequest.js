import React, { Component } from 'react';
import './sustainRequest.css'; 
import { connect } from 'react-redux';
import { 
    getCreatedQuarterly, getClosedQuarterly, getCreatedTickets, getClosedTickets, 
    getCreatedLastThreeYears, getClosedLastThreeYears, getTotalYears
} from '../_helperFunc/helperFunc';


class SustainRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Yearly',
            
        };
    }

    componentDidMount() {
        // call function 
        this.setSustainRequest(this.state.value);
    }

    setSustainRequest(selectedVal) {
        // get props 
        const { data } = this.props.data; 
        

        // define variables 
        let categories = [], series = []; 

        if (selectedVal === 'Yearly') {
            categories = getTotalYears(data)
            series = [{
                name: 'Created Tickets',
                data: getCreatedLastThreeYears(data),
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: getClosedLastThreeYears(data),
                lineWidth: 2
            }]
        } else if (selectedVal === 'Quarterly') {
            categories = ['Q1', 'Q2', 'Q3', 'Q4'];
            series = [{
                name: 'Created Tickets',
                data: getCreatedQuarterly(data),
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: getClosedQuarterly(data),
                lineWidth: 2
            }]
        } else if (selectedVal === 'Monthly') {
            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            series = [{
                name: 'Created Tickets',
                data: getCreatedTickets(data),
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: getClosedTickets(data),
                lineWidth: 2
            }]
        }

        Highcharts.chart('sustainChart', {
            chart: {
                plotBackgroundColor: true,
                plotBorderWidth: false,
                plotShadow: false,
                type: 'column'
            },
            title: {
                text: selectedVal.toUpperCase()
            },
            subtitle: {
                text: 'Created vs Closed Tickets'
            },
            xAxis: {
                categories: categories
            },
            credits: {
                enabled: false
            },
            series: series
        });
    }

    handleChange = (evt) => {
        const selectedVal = evt.target.value; 

        this.setState({ value: selectedVal }); 
        // call function 
        this.setSustainRequest(selectedVal);
    }

    render() {
        return(
            <div className="sustainment-page">
                <div className="request-dropdown">
                <div className="request-heading">Overview of Open vs Closed Sustainment Request</div>
                    <div className="request-select">
                        <select id='select' onChange={this.handleChange} value={this.state.value}>
                            <option value="Yearly">Yearly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Monthly">Monthly</option>
                            {/* <option value="Weekly">Weekly</option> */}
                        </select>
                    </div>
                </div>
                <div id="sustainChart" style={{ width: '100%', height: '400px'}}></div> 
            </div>
        )
    }
}

const mapStateToProps = (data) => {

    return {
        data
    }
}

export default connect(mapStateToProps)(SustainRequest); 