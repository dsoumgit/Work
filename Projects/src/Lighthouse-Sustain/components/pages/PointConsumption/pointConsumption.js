import React, { Component } from 'react';
import './pointConsumption.css'; 
import { connect } from 'react-redux';
import { 
    getCreatedQuarterly, getClosedQuarterly, getCreatedTickets, getClosedTickets, 
    getCreatedLastThreeYears, getClosedLastThreeYears, getTotalYears
} from '../_globalFunc/globalFunc';

class PointConsumption extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Quarterly',
            
        };
    }

    componentDidMount() {
        // call function 
        this.setPointConsumption(this.state.value);
    }

    setPointConsumption(selectedVal) {
        // get props 
        const { data } = this.props.data; 
        

        // define variables 
        let categories = [], series = []; 

        if (selectedVal === 'Quarterly') {
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

        Highcharts.chart('consumptionChart', {
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
        this.setPointConsumption(selectedVal);
    }

    render() {
        return(
            <div className="consumption-page">
                <div className="consumption-dropdown">
                <div className="consumption-heading">Overview of Open vs Closed</div>
                    <div className="consumption-select">
                        <select id='select' onChange={this.handleChange} value={this.state.value}>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Monthly">Monthly</option>
                            {/* <option value="Weekly">Weekly</option> */}
                        </select>
                    </div>
                </div>
                <div id="consumptionChart" style={{ width: '100%', height: '400px'}}></div> 
            </div>
        )
    }
}

const mapStateToProps = (data) => {

    return {
        data
    }
}

export default connect(mapStateToProps)(PointConsumption); 