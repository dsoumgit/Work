import React, { Component } from 'react';
import './sustainRequest.css'; 
import { connect } from 'react-redux';

class SustainRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.onSelect = this.onSelect.bind(this)
    }

    componentDidMount() {
        // call function 
        this.setSustainRequest();
    }

    getCreatedOutput(arr) {

        let result = {};
        arr.filter(item => {
            return new Date(item.Created).getFullYear() === 2018;
        })
        .forEach(elem => {
            // get month 
            let month = new Date(elem.Created).getMonth();
            // add 1 
            if (month < 12) {
                month += 1;
            }

            if (month >= 1 && month <= 3) {
                result.Q1 = (result.Q1 || 0) + 1;
            } else if (month >= 4 && month <= 6) {
                result.Q2 = (result.Q2 || 0) + 1;
            } else if (month >= 7 && month <= 9) {
                result.Q3 = (result.Q3 || 0) + 1;
            } else if (month >= 10 && month <= 12) {
                result.Q4 = (result.Q4 || 0) + 1;
            }  
        });

        // convert to array and assign each key value pairs 
        const output = Object.values(Object.assign({Q1: 0, Q2: 0, Q3: 0, Q4: 0}, result));

        return output;
    }

    getClosedOutput(arr) {

        let result = {};

        arr.filter(item => {
            return (new Date(item['Close Time']).getFullYear() === 2018 && item.State === 'closed successful');
        })
        .forEach(elem => {
            // get month 
            let month = new Date(elem['Close Time']).getMonth();
            // add 1 
            if (month < 12) {
                month += 1;
            }

            if (month >= 1 && month <= 3) {
                result.Q1 = (result.Q1 || 0) + 1;
            } else if (month >= 4 && month <= 6) {
                result.Q2 = (result.Q2 || 0) + 1;
            } else if (month >= 7 && month <= 9) {
                result.Q3 = (result.Q3 || 0) + 1;
            } else if (month >= 10 && month <= 12) {
                result.Q4 = (result.Q4 || 0) + 1;
            }  
        });

        // convert to array and assign each key value pairs 
        const output = Object.values(Object.assign({Q1: 0, Q2: 0, Q3: 0, Q4: 0}, result));

        return output;
    }


    setSustainRequest() {
        // get props 
        const { data } = this.props.data; 
        
        const createdResult = this.getCreatedOutput(data);
        const closedResult = this.getCreatedOutput(data);

        Highcharts.chart('sustainChart', {
            chart: {
                plotBackgroundColor: true,
                plotBorderWidth: false,
                plotShadow: false,
                type: 'column'
            },
            title: {
                text: 'Quarterly'
            },
            subtitle: {
                text: 'Created vs Closed Tickets'
            },
            xAxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Created Tickets',
                data: createdResult,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: closedResult,
                lineWidth: 2
            }]
        });
    }

    onSelect = (evt) => {
        console.log(evt.target.value);
        this.setState({ value: evt.target.value })
    }

    render() {
        return(
            <div className="sustainment-page">
                <div className="request-dropdown">
                <div className="request-heading">Overview of Open vs Closed Sustainment Request</div>
                    <div className="request-select">
                        <select name="tickets" onChange={this.onSelect} value={this.state.value}>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
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