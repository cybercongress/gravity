import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import FormField from './FormFild';
import { InfoButton, Select } from '../..';

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

storiesOf('Elements/FormField', module).add('FormField', () => (
    <div>
        <FormField
          label='Description'
          value='{description}'
          onUpdate='isOwner'
        />
        <FormField label='Tags' value='{tag}' />
        <FormField
          label='Record Fee'
          value='{entryCreationFee.toString()}'
          valueType='ETH'
          onUpdate='isOwner'
        />
        <FormField
          label='Permissions'
          value='{permissionGroupStr}'
          onUpdate='isDbPaused'
          icon={ <InfoButton /> }
        >
            <Select
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
            </Select>
        </FormField>
        <FormField label='Entries' value='{rows.length}' />
        <FormField label='Version' value='{contractVersion}' />
        <FormField label='Database address' value='{databaseAddress}' />
        <FormField label='Schema address' value='{entryCoreAddress}' />
        <FormField
          label='Abi link'
          value={ (
              <a href='/' target='_blank'>
                    QmdkrMcmKBWsg5K2senjLCFYLBxbqgamNF8d8ZC8xn1BHt
              </a>
            ) }
        />
    </div>
));
