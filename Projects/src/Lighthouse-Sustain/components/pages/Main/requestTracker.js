import React, { Component } from 'react';
import './requestTracker.css';
import { connect } from 'react-redux';
import { getCreatedLastThreeYears, getClosedLastThreeYears, getTotalYears } from '../_globalFunc/globalFunc';

class RequestTracker extends Component {
    constructor(props) {    
        super(props);

        this.state = {
            isEmpty: false
        }
    }

    componentDidMount() {
        // function for ticket monthly
        const data = this.props.data;
        
        let title = 'Sustainment Request Tracker';

        Highcharts.chart('requestChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: title.toUpperCase()
            },
            subtitle: {
                text: 'Created vs Closed Tickets' 
            },
            xAxis: {
                categories: getTotalYears(data)
            },
            series: [{
                name: 'Created Tickets',
                data: getCreatedLastThreeYears(data),
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: getClosedLastThreeYears(data),
                lineWidth: 2
            }]
        });     
    }

    render() {
        return(
            <React.Fragment>
                <main className="main-content">
                    <div id="requestChart" style={{ width: '100%', height: '400px'}}></div> 
                </main>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ 
    data
 }) => ({ 
    data, // this.props.data
 });
// function mapDispatchToPropsExplained(reduxState){
//     return {
//         data: reduxState.data
//     }
// }

export default connect(mapStateToProps)(RequestTracker);
