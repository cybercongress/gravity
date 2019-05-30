import * as React from 'react';
import {LinkHash} from "../../index";
import {Doughnut} from "react-chartjs-2";
const palette = require('google-palette');

const styles = require('./Structure.less');

export const StructureContainer = ({children, ...props}) => (
    <div {...props} className={styles.StructureContainer}>
        {children}
    </div>
);

export class Structure extends React.Component {

    render() {
        const { bens, calculateBensShares, noLegend } = this.props;

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

        return <div className={styles.Structure}>
            <Doughnut data={chartData} width={150} options={options} />
            {!noLegend &&(
                <StructureList>
                    {
                        bens.map((ben, index) => (
                            <Struct key={ben.address} color={colors[index]} address={ben.address} />
                        ))
                    }
                </StructureList>
            )}
        </div>
    }
}

export const StructureList = ({children}) => (
    <div className={styles.StructureList}>
        {children}
    </div>
);

export const Struct = ({color, address}) => (
    <div className={styles.ben}>
        <div className={styles.dot} style={{backgroundColor: color}} />
        <LinkHash value={address} />
    </div>
);
