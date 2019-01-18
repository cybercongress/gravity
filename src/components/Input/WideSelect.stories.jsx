import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { WideSelect } from './Input';

const Permission = {
    OnlyAdmin: 0,
    Whitelist: 1,
    AllUsers: 2,
};

const CreateEntryPermissionGroup = {
    [Permission.OnlyAdmin]: {
        key: 'OnlyAdmin',
        label: 'ONLY OWNER',
    },
    [Permission.AllUsers]: {
        key: 'AllUsers',
        label: 'All Users',
    },
};

storiesOf('commponents/WideSelect', module)
    .addDecorator(centered)
    .add('WideSelect', () => (
        <WideSelect
            //   inputRef={ (node) => {
            //         dbPage.permissionGroup = node;
            //   } }
          defaultValue='{ permissionGroup }'
        >
            {Object.keys(CreateEntryPermissionGroup).map((n) => {
                const { label } = CreateEntryPermissionGroup[n];

                return (
                    <option value={ n } key={ n }>
                        {label}
                    </option>
                );
            })}
        </WideSelect>
    ));
