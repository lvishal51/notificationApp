import c3 from 'c3';
import React, { Component } from 'react';
import '../PieChart/pie-chart.css';

class LineChart extends React.Component {

    componentDidMount() {

        this.generateLineChart();
    }

    generateLineChart() {

        var lineChart = c3.generate({
            bindto: '#line-chart',
            data: {
                json: [
                    {
                      "date": "2014-08-25",
                      "Tata Steel": 34.259,
                      "Reliance Comm": 100,
                      "Infosys": 510,
                      "IOCL": 250,
                      "United Spirits": 32,
                      "TCS": 78
                    },
                    {
                      "date": "2014-12-01",
                      "Tata Steel": 32.259,
                      "Reliance Comm": 105,
                      "Infosys": 490,
                      "IOCL": 270,
                      "United Spirits": 32,
                      "TCS": 83
                    },
                    {
                      "date": "2015-05-04",
                      "Tata Steel": 28,
                      "Reliance Comm": 120,
                      "Infosys": 498,
                      "IOCL": 260,
                      "United Spirits": 32,
                      "TCS": 72
                    },
                    {
                      "date": "2015-09-02",
                      "Tata Steel": 31,
                      "Reliance Comm": 110,
                      "Infosys": 515,
                      "IOCL": 275,
                      "United Spirits": 32,
                      "TCS": 70
                    }
                  ],
                keys: {
                    x: 'date',
                    value: [
                        'Tata Steel',
                        'Reliance Comm',
                        'Infosys',
                        'IOCL',
                        'United Spirits',
                        'TCS'
                    ]
                }
            },
            axis: {
                x: {
                  type: 'timeseries',
                  tick: {
                    format: function(x) {
            
                        return x.toLocaleDateString();
                      
                    }
                  }
                }
              }
        });
    }

    render() {

        return (<div className="pie-summary">
                    <h3 className='chart-title'>My Stocks Price vs Date</h3>
                    <div id="line-chart"></div>
                </div>) 
        
        
    }
}

export default LineChart;