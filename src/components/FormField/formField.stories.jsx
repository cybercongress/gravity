import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import FormField from './FormFild';

storiesOf('commponents/FormField', module)
  .addDecorator(centered)
  .add('FormField', () => (
    <div>
      <FormField
        label="Description"
        value="{description}"
        // onUpdate={isOwner && !isDbPaused && this.changeDescription}
        onUpdate="isOwner"
      />
      <FormField label="Tags" value="{tag}" />
      <FormField
        label="Record Fee"
        value="{entryCreationFee.toString()}"
        valueType="ETH"
        // onUpdate={isOwner && isDbPaused && this.changeEntryCreationFee}
        onUpdate="isOwner"
      />
      <FormField
        label="Permissions"
        value="{permissionGroupStr}"
        // onUpdate={isOwner && isDbPaused && this.onUpdatePermissionGroup}
        onUpdate="isDbPaused"
      >
        {/* <select
              ref={node => {
                this.permissionGroup = node;
              }}
              defaultValue={permissionGroup}
            >
              {Object.keys(CreateEntryPermissionGroup).map(n => {
                const { label } = CreateEntryPermissionGroup[n];

                return (
                  <option value={n} key={n}>
                    {label}
                  </option>
                );
              })}
            </select> */}
      </FormField>
      <FormField label="Entries" value="{rows.length}" />
      <FormField label="Version" value="{contractVersion}" />
      <FormField label="Database address" value="{databaseAddress}" />
      <FormField label="Schema address" value="{entryCoreAddress}" />
      <FormField
        label="Abi link"
        // value={
        //   <a href={`${ipfsGateway}/ipfs/${ipfsHash}`} target="_blank">
        //     {ipfsHash}
        //   </a>
        // }
        value="ipfsGateway"
      />
    </div>
  ));
