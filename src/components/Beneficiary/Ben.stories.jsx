import React from 'react';
import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import {BenContainer, BenPieChart} from "../..";

storiesOf('Beneficiaries', module)
    .addDecorator(centered)
    .add('Doughnut', () => {

        const bens = [
            {
                address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
                share: 10,
            },
            {
                address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
                share: 20,
            },
            {
                address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
                share: 30,
            },
            {
                address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
                share: 15,
            },
            {
                address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
                share: 25,
            },
        ];

        return (
            <BenContainer>
                <BenPieChart bens={bens}/>
            </BenContainer>
        )
    });
