import React, { Component } from 'react';
import './pointsTracker.css';
import { connect } from 'react-redux';

class PointsTracker extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        // call function 
        this.setPointTracker(); 
    }

    setPointTracker() {
        // get props from redux 
        const { data } = this.props.data;

        let output = data.filter(function (item) {
            // check if Close Time if not empty 
            if (item['Close Time'] !== '') {
                // get month 
                let month = new Date(item['Close Time']).getMonth();
                // add 1 to the month 
                if (month < 12) {
                    month += 1;
                }
    
                // return result    @todo change to current year
                return (new Date(item['Close Time']).getFullYear() === 2018 && month === 9 && item.State === 'closed successful');
            }  
        });

        let obj = {};
        let totalInno = 0;
        let totalNonInno = 0;

        // check the length
        if (output.length > 0) {
            output.forEach(item => {
                // check Priority
                if (item.Priority === '4. Innovation (Enhancement)') {
                    // create an Innovation property and add Points 
                    totalInno += item.Points; 
                    // add to the object 
                    obj.Innovation = totalInno;
                } else {
                    totalNonInno += item.Points + 20;
                    // if others, add SDM points to ClosedRequests
                    obj.ClosedRequests = totalNonInno;
                    // add Innovation property 
                    obj.Innovation = totalInno;
                }
            });
        } else {
            // create Innovation property and assign to 0
            obj.Innovation = totalInno; 
            // create ClosedRequests property and assign to 0
            obj.ClosedRequests = totalInno; 
        }
        
        // month array 
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            
        Highcharts.chart('pointsTrackerChart', {
            chart: {
                plotBackgroundColor: true,
                plotBorderWidth: false,
                plotShadow: false,
                type: 'bar'
            },
            title: {
                text: 'POINTS TRACKER'
            },
            subtitle: {
                text: new Date().getFullYear() - 2
            },
            xAxis: {
                categories: [monthNames[new Date().getMonth()]]
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Innovation',
                data: [obj.Innovation],
                lineWidth: 2
            }, {
                name: 'ClosedRequests',
                data: [obj.ClosedRequests],
                lineWidth: 2
            }]
        }); 
    }

    render() {
        return(
            <div className="points-container">
                <div id="pointsTrackerChart" style={{ width: '100%', height: '400px'}}></div>
            </div>
        )
    }
}

const mapStateToProps = (data) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(PointsTracker);