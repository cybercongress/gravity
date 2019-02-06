import * as React from 'react';
import {LinkHash} from "../../index";
import {Doughnut} from "react-chartjs-2";
const palette = require('google-palette');

const styles = require('./Ben.less');

export const BenContainer = ({children, ...props}) => (
    <div {...props} className={styles.benContainer}>
        {children}
    </div>
);

export class BenPieChart extends React.Component {

    render() {
        const { bens, calculateBensShares } = this.props;

        const labels = bens.map(ben => ben.address);
        const data = calculateBensShares(bens, 2).map(ben => parseFloat(ben.share));
        const colors = palette('cb-Set2', data.length).map(function(hex) {
            return '#' + hex;
        });

        const options = {
            legend: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItems, data) {
                        return '';
                    },
                    label: function(tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                    },
                },
            }
        };

        const chartData = {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
            }]
        };

        return <div className={styles.benPieChart}>
            <Doughnut data={chartData} options={options} />
                <BenList>
                    {
                        bens.map((ben, index) => (
                            <Ben key={ben.address} color={colors[index]} address={ben.address} />
                        ))
                    }
                </BenList>
        </div>
    }
}

export const BenList = ({children}) => (
    <div className={styles.benList}>
        {children}
    </div>
);

export const Ben = ({color, address}) => (
    <div className={styles.ben}>
        <div className={styles.dot} style={{backgroundColor: color}} />
        <LinkHash value={address} />
    </div>
);
