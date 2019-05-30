import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Menu, Popover, Button } from 'evergreen-ui';

storiesOf('Elements|Menu', module)
    .addDecorator(centered)
    .add('Menu', () => (
        <Popover
          content={ (
              <Menu>
                  <Menu.Item icon="people">Transfer Ownership</Menu.Item>
                  <Menu.Item icon="edit">Fund Registry</Menu.Item>
                  <Menu.Item icon="circle-arrow-right">Claim Funds</Menu.Item>
                  <Menu.Divider />
                  <Menu.Group>
                      <Menu.Item icon="trash" intent="danger"> Delete </Menu.Item>
                  </Menu.Group>
              </Menu>
) }
        >
            <Button>Menu</Button>
        </Popover>
    ));
