import React, { Component } from 'react';
import './slaTracker.css';
import { connect } from 'react-redux';

class SLATracker extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        Highcharts.chart('slaChart', {
            chart: {
            //    plotBackgroundColor: true,
            //    plotBorderWidth: false,
            //    plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'SEVERITY I'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    size: 120
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'SEV 1',
                    y: 100
                }]
            }]
        });

        Highcharts.chart('slaChart2', {
            chart: {
            //    plotBackgroundColor: true,
            //    plotBorderWidth: false,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'SEVERITY 2'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    size: 120
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'SEV 2',
                    y: 100
                }]
            }]
        });

        Highcharts.chart('slaChart3', {
            chart: {
                plotBackgroundColor: true,
                plotBorderWidth: false,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'SEVERITY 3'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    size: 120
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'SEV 3',
                    y: 100
                }]
            }]
        });
    }

    render() {
        return(
            <div className="sla-container">
                <div id="slaChart" className="sev1" style={{ width: '100%', height: '400px'}}></div>
                <div id="slaChart2" className="sev2" style={{ width: '100%', height: '400px'}}></div>
                <div id="slaChart3" className="sev3" style={{ width: '100%', height: '400px'}}></div>
            </div>
        )
    }
}

const mapStateToProps = (data) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(SLATracker);