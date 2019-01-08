import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ActionLink,
  MainContainer,
  AddButton,
  Code,
  Checkbox,
  WideSelect,
  WideInput,
  CircleLable,
  ProgressBar
} from '../..';
import {
  ContainerRegister,
  Content,
  CreateButton,
  ErrorMessage,
  FieldsTable,
  Label,
  PageTitle,
  PanelRecord,
  RemoveButton,
  SideBar
} from '../newregistry';
import { RightContainer } from '../..';
import { DarkPanel } from '../newregistry/DarkPanel/DarkPanel';
import { TableRegistry} from '../Table/Table';
import code from './code';

storiesOf('pages/create_shema', module).add('registryCreation2.stories', () => {
  const message = 'message';
  const type = '';

  const databaseId = null;

  const canCreate = true;

  return (
    <MainContainer>
      <PageTitle>New database creation</PageTitle>
      <ProgressBar>
        <CircleLable type="complete" number="1" text="Registry initialization" />
        <CircleLable type="edit" number="2" text="Schema definition" />
        <CircleLable number="3" text="Contract code saving" />
      </ProgressBar>
      <ContainerRegister>
        <SideBar>
          <Label>Input</Label>
          <PanelRecord title="Record Structure" noPadding>
            <FieldsTable>
              
              <TableRegistry>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>string</td>
                    <td>
                      <Checkbox>unique</Checkbox>
                    </td>
                    <td>
                      <RemoveButton />
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>address</td>
                    <td>
                      <Checkbox>unique</Checkbox>
                    </td>
                    <td>
                      <RemoveButton />
                    </td>
                  </tr>
                </tbody>
              </TableRegistry>

              <TableRegistry>
                <tbody>
                  <tr>
                    <td>
                      <WideInput
                        placeholder="Name"
                      />
                    </td>
                    <td>
                      <WideSelect
                      >
                        <option value="">Type</option>
                        <option value="V1">V1 (Basic Database)</option>
                      </WideSelect>
                    </td>
                    <td>
                      <Checkbox>unique</Checkbox>
                    </td>
                    <td>
                      <AddButton
                      />
                    </td>
                  </tr>
                </tbody>
              </TableRegistry>
            </FieldsTable>
          </PanelRecord>
        </SideBar>

        <Content>
          <Label color="#3fb990">Database code</Label>
          <DarkPanel>
            <Code>{code}</Code>
          </DarkPanel>

          {type === 'error' && message && <ErrorMessage>{message}</ErrorMessage>}
        </Content>
      </ContainerRegister>
      <RightContainer>
        {databaseId ? (
          <span>
            <ActionLink to={`/databases/${databaseId}`}>Go to database</ActionLink>
            <ActionLink to={`/schema/${databaseId}`}>Go to schema definition</ActionLink>
          </span>
        ) : (
          <CreateButton
            disabled={!canCreate}
          >
            Next
          </CreateButton>
        )}
      </RightContainer>
    </MainContainer>
  );
});
