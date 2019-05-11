import * as React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { LinkHash } from '../../index';

const palette = require('google-palette');

// const styles = require('./Ben.less');

export const BenContainer = ({ children, ...props }) => (
    <div
      { ...props }
        // className={styles.benContainer}
    >
        {children}
    </div>
);

const { draw } = Chart.controllers.line.prototype;

Chart.controllers.line = Chart.controllers.line.extend({
    draw() {
        const { ctx } = this.chart.chart;

        ctx.save();
        ctx.shadowColor = '#36d6ae';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.stroke();
        draw.apply(this, arguments);
        ctx.restore();
    },
});


export class LineExample extends React.Component {
    render() {
        const { bens, calculateBensShares } = this.props;
        var tooltipEl = document.getElementById('chartjs-tooltip');
        const labels = bens.map(ben => ben.stakeY);
        const data = bens.map(ben => ben.stake);
        const colors = palette('cb-Set2', data.length).map(hex => `#${hex}`);

        const options = {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            color: '#fff',
                            
                        },
                        ticks: {
                            beginAtZero:true,
                            fontColor:'#fff',
                            fontSize: 16,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            
                           
                        },
                        ticks: {
                            beginAtZero:true,
                            fontColor:'#fff',
                            fontSize: 16,
                        },
                        
                    },
                ],
            },
            tooltips: {
                displayColors: false,
                intersect: false,
                custom: tooltipEl,
                callbacks: {
                    title(tooltipItem, data) {
                        return `Day ${data.labels[tooltipItem[0].index]}`;
                    },
                    label(tooltipItem, data) {
                        return `CBD price: ${
                            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                        } ETH`;
                    },
                },
            },
        };

        const chartData = {
            labels,
            type: 'line',
            datasets: [
                {
                    data,
                    lineTension: 0.5,
                    borderColor: '#36d6ae',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 5,
                    pointRadius: 0,
                    pointHitRadius: 5,
                    fill: false,
                },
            ],
        };

        return <Line ref="chart" data={ chartData } options={ options } />;
    }
    
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data;
        console.log(datasets[0].data);
      }

}

export const BenList = ({ children }) => <div>{children}</div>;

export const Ben = ({ color, address }) => (
    <div>
        <div
            // className={styles.dot}
          style={ { backgroundColor: color } }
        />
        {/* <LinkHash value={address} /> */}
    </div>
);
