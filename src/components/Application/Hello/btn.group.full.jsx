import React, { Component } from 'react';
import { Pane, Button, Text, Tooltip } from 'evergreen-ui';

const Identity = ({ title, description, btnClass }) => (
    <Tooltip
      position='left'
      content={ (
          <Pane
            paddingX={ 10 }
            paddingY={ 10 }
            display='flex'
            flexDirection='column'
            alignItems='center'
            width={ 200 }
            borderRadius={ 5 }
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
    </Tooltip>
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
