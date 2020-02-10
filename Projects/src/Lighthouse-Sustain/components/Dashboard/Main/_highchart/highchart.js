import React, { Component } from 'react';


const renderChart = ({ title, subtitle, type, createdSeriesName, closedSeriesName, categories, createdData, closedData}) => {

    
}

// const Highchart = (props) => {

//     return(
//         <React.Fragment>
//             <div id="testChart" className="sev3" style={{ width: '100%', height: '400px'}}></div>
//             {renderChart(props)}
//         </React.Fragment>
//     )
// }

class Highchart extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //console.log(this.props.data);        
        const { title, subtitle, type, createdSeriesName, closedSeriesName, categories, createdData, closedData} = this.props.data;

        console.log(createdData);
        if (createdData === undefined) {
            return '';
        } else {

            Highcharts.chart('testChart', {
                chart: {
                    plotBackgroundColor: true,
                    plotBorderWidth: false,
                    plotShadow: false,
                    type: type
                },
                title: {
                    text: title
                },
                subtitle: {
                    text: subtitle
                },
                xAxis: {
                    categories: categories
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: createdSeriesName,
                    data: createdData,
                    lineWidth: 2
                }, {
                    name: closedSeriesName,
                    data: closedData,
                    lineWidth: 2
                }]
            });
        }
    }

    render() {
        return(
            <React.Fragment>
                <div id="testChart" className="sev3" style={{ width: '100%', height: '400px'}}></div>
            </React.Fragment>
        )
    }

}

export default Highchart; 