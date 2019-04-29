import React, { Component } from 'react';
import { Pane, Button, Text } from 'evergreen-ui';
import { ToolTip } from '../../..';

const Identity = ({ title, description, btnClass }) => (
    <ToolTip
      top={ 0 }
      right='100%'
      content={ (
          <Pane
            paddingX={ 10 }
            paddingY={ 10 }
            display='flex'
            flexDirection='column'
            alignItems='center'
            width={ 200 }
            backgroundColor='#000'
            borderRadius={ 5 }
            opacity='0.8'
          >
              <Pane
                marginBottom={ 7 }
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                  <Text fontWeight='bold' color='#fff'>
                      {title}
                  </Text>
              </Pane>
              <Pane>
                  <Text color='#fff'>{description}</Text>
              </Pane>
          </Pane>
) }
    >
        <Button className={ `${btnClass} btn-group` } />
    </ToolTip>
);

export const BntGroupFull = () => (
    <Pane display='flex' flexDirection='column'>
        <Identity title='Soul' description='Enlightened new web user' btnClass='btn-group-soul' />
        <Identity title='Body' description='Created identity' btnClass='btn-group-body' />
        <Identity
          title='Immortality'
          description='Master of keys'
          btnClass='btn-group-imortality'
        />
        <Identity title='Security' description='Defended identity' btnClass='btn-group-security' />
        <Identity title='Oracle' description='Advanced communication' btnClass='btn-group-oracul' />
        <Identity title='Root' description='Base for growth' btnClass='btn-group-root' />
        <Identity title='Diplomat' description='Deals expert' btnClass='btn-group-diplomat' />
        <Identity title='Map' description='Smart travel' btnClass='btn-group-map' />
        <Identity title='Collection' description='Aquired values' btnClass='btn-group-earth' />
        <Identity
          title='Heritage'
          description='Preservation of traditions'
          btnClass='btn-group-heritage'
        />
        <Identity title='Wisdom' description='Sharing knowledge' btnClass='btn-group-wiki' />
    </Pane>
);
