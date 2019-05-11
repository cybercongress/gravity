import React from 'react';
import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import {LineExample} from "./LineExample";
import {
    Pane,
} from 'evergreen-ui';

storiesOf('Line', module)
    .addDecorator(centered)
    .add('Doughnut', () => {

        const bens = [
            {
                address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
                stake: 22,
                stakeY: 10,
            },
            {
                address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
                stake: 123,
                stakeY: 15,
            },
            {
                address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
                stake: 98,
                stakeY: 10,
            },
            {
                address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
                stake: 40,
                stakeY: 5,
            },
            {
                address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
                stake: 66,
                stakeY: 40,
            },
        ];

        const calculateBensShares = (beneficiaries, fixed = 0) => {
            let allStake = 0;

            beneficiaries.forEach((ben) => {
                allStake += +ben.stake;
            });

            return beneficiaries.map(ben => ({
                ...ben,
                share: (ben.stake / allStake * 100).toFixed(fixed),
            }));
        };

        return (
            <Pane
              width='100%'
            >   
                    <LineExample
                        bens={bens}
                        calculateBensShares={calculateBensShares}
                    />
            </Pane>
           
        )
    });
