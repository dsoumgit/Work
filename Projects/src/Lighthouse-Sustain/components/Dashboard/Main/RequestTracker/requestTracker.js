import React, { Component } from 'react';
import './requestTracker.css';
import { connect } from 'react-redux';

class RequestTracker extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            data: {
                title: 'Sustainment Request Tracker',
                subtitle: 'Created vs Closed Tickets',
                type: 'column',
                createdSeriesName: 'Created Tickets',
                closedSeriesName: 'Closed Tickets',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            createdData: [],
            closedData: []
        }
    }

    componentDidMount() {
        // call function to get request tracker 
        this.requestTracker();
    }

    requestTracker = () => {
        // function for ticket monthly
        const data = this.props.data;
        const createdMonthly = this.getCreatedMonthly(data);
        const closedMonthly = this.getClosedMonthly(data);

        const title = 'Sustainment Request Tracker';

        Highcharts.chart('requestChart', {
            chart: {
                plotBackgroundColor: true,
                plotBorderWidth: false,
                plotShadow: false,
                type: 'column',
                // options3d: {
                //     enabled: true,
                //     alpha: 15,
                //     beta: 15,
                //     depth: 50,
                //     viewDistance: 25
                // }
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
            credits: {
                enabled: false
            },
            series: [{
                name: 'Created Tickets',
                data: createdMonthly,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: closedMonthly,
                lineWidth: 2
            }]
        }); 

        // copy both results to 'data'
    //    const newArr = {...this.state.data, createdData: createdResults, closedData: closedResults };
    //    console.log(newArr);
        // update state 
    //    this.setState({ data: newArr });
    }

    getCreatedMonthly = (data) => { 
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

    getClosedMonthly = (data) => { 
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
                </main>

                {/* <Highchart props={this.state.data} /> */}
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
