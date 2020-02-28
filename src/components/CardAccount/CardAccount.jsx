import React from 'react';
import {
    Pane, Text, Pill, Card,
} from 'evergreen-ui';
import { PaneBalance } from '../..';

export const CardAccount = ({
    addressEth, balanceEth, addressCyberd, balanceCyberd,
}) => {
    const winner = !!addressCyberd;
    const balanceCyberdGcyb = (balanceCyberd / 1000000000).toFixed(0);

    return (
        <Card
          boxShadow='0 0 6px 1px #3ab793'
          display='flex'
          flexDirection='column'
          alignItems='center'
          backgroundColor='#000'
          paddingX='3vw'
          paddingY='10vh'
          maxHeight={ 500 }
        >
            <Text
              display='inline-block'
              marginBottom={ 155 }
              color='#fff'
              fontSize={ 24 }
              fontWeight={ 600 }
              className='fontSF'
            >
                {winner ? 'Congratulations :-)' : 'You Loose :-('}
            </Text>
            <Pane width='100%' marginBottom={ 30 }>
                <Pane display='flex' flexDirection='row' marginBottom={ 45 }>
                    <Pane>
                        <Pill
                          height={ 10 }
                          width={ 10 }
                          borderRadius='50%'
                          color='yellow'
                          paddingX={ 0 }
                          isSolid
                          marginRight={ 15 }
                        />
                    </Pane>
                    <PaneBalance position='relative' display='flex' flexDirection='column'>
                        <Text display='inline-block' marginBottom={ 11 } color='#fff' fontSize={ 30 }>
                            {balanceEth}
                            &nbsp;ETH
                        </Text>
                        <Text display='inline-block' color='#fff'>
                            {addressEth}
                        </Text>
                    </PaneBalance>
                </Pane>
                <Pane display='flex' flexDirection='row'>
                    <Pane>
                        <Pill
                          height={ 10 }
                          width={ 10 }
                          borderRadius='50%'
                          color='blue'
                          paddingX={ 0 }
                          isSolid
                          marginRight={ 15 }
                        />
                    </Pane>
                    <PaneBalance position='relative' display='flex' flexDirection='column'>
                        <Text display='inline-block' marginBottom={ 11 } color='#fff' fontSize={ 30 }>
                            {balanceCyberdGcyb}
                            &nbsp;GCYB
                        </Text>
                        <Text display='inline-block' color='#fff'>
                            {addressCyberd}
                        </Text>
                    </PaneBalance>
                </Pane>
            </Pane>
        </Card>
    );
};
