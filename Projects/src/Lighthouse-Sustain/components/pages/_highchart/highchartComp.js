import React, { Component } from 'react';


class HighchartComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {
        console.log(this.props);
        // get name 
      //  const name = this.props.name;
        // call function 
        this.setHighchart(); 

        /*const { chartId } = this.state;

        Highcharts.chart(chartId, {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Testing...'
            },
            subtitle: {
                text: 'Created vs Closed Tickets'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                name: 'Created Tickets',
                data: this.props.RequestTracker.createdResults,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: this.props.RequestTracker.closedResults,
                lineWidth: 2
            }]
        }); */
    }

    setHighchart() {
        // use modular pattern 
        function Chart(chartId, chartType, title, subTitle) {
            this.chartId = chartId; 
            this.chartType = chartType; 
            this.title = title; 
            this.subTitle = subTitle;
        }

        Chart.prototype.getChart = () => {

            Highcharts.chart(this.chartId, {
                chart: {
                    type: this.chartType
                },
                title: {
                    text: this.title.toUpperCase()
                },
                subtitle: {
                    text: this.subTitle 
                },
                xAxis: {
                    categories: categories
                },
                series: series
            });        
        }

        const requestChart = new Chart(this.props.chartId, 'column', this.props.chartId, 'Created vs Closed Tickets');
    }

    assetHighchart() {
        console.log(this.props);
        // destructing 
        let chartId= '', subTitle = '', title = '', categories = [], series = [];
        // check each name 
        if (this.props.chartId === 'requestChart') {
            // assign chart id 
        //    chartId = this.props.RequestTracker.chartId;
            // set title 
            title = 'Sustainment Request Tracker';
            subTitle = 'Created vs Closed Tickets';
            // define categories
            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // define series
            series = [{
                name: 'Created Tickets',
                data: this.props.RequestTracker.createdResults,
                lineWidth: 2
            }, {
                name: 'Closed Tickets',
                data: this.props.RequestTracker.closedResults,
                lineWidth: 2
            }];
        } 

        if (this.props.chartId === 'pointsTrackerChart') {
            // assign chart id 
        //    chartId = this.props.PointTracker.chartId;
            // set title 
            title = 'Points Tracker';
            subTitle = new Date().getFullYear() - 2
            // define categories
            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // define series
            series = [{
                name: 'Innovation',
                data: [this.props.PointTracker.innovation],
                lineWidth: 2
            }, {
                name: 'ClosedRequests',
                data: [this.props.PointTracker.closedRequest],
                lineWidth: 2
            }]
        }


        Highcharts.chart(this.props.chartId, {
            chart: {
                type: 'column'
            },
            title: {
                text: title.toUpperCase()
            },
            subtitle: {
                text: subTitle 
            },
            xAxis: {
                categories: categories
            },
            series: series
        });     
    }

    render() {
        return(
            <div id={this.props.chartId} style={{ width: '100%', height: '400px'}}></div>
        )
    }
}

export default HighchartComp;