import React, { Component } from 'react';
import './requestTracker.css';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class RequestTracker extends Component {
    constructor(props) {    
        super(props);
    }

    componentDidMount() {
        console.log(this.props.data);  
        // function for ticket monthly
        const data = this.props.data;
        // direct to home page when going to directly to the path 
         
        const createdResults = this.getCreatedTickets(data);
        const closedResults = this.getClosedTickets(data);

        const title = 'Sustainment Request Tracker';

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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
        
            series: [{
                name: 'Created Tickets',
                data: createdResults,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: closedResults,
                lineWidth: 2
            }]
        }); 

        Highcharts.chart('requestChart2', {
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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
        
            series: [{
                name: 'Created Tickets',
                data: createdResults,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: closedResults,
                lineWidth: 2
            }]
        }); 
        
    }

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

    render() {
        return(
            <React.Fragment>
                <main className="main-content">
                    <div id="requestChart" style={{ width: '100%', height: '400px'}}></div>

                    <div id="requestChart2" style={{ width: '100%', height: '400px'}}></div>
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
