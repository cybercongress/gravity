import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Select } from './Input';


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

storiesOf('Elements/Select', module)
    .addDecorator(centered)
    .add('Select', () => (
        <Select
        >
            {Object.keys(CreateEntryPermissionGroup).map((n) => {
                const { label } = CreateEntryPermissionGroup[n];

                return (
                    <option value={ n } key={ n }>
                        {label}
                    </option>
                );
            })}
        </Select>
    ));
