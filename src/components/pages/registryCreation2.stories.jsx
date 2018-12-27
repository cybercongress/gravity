import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Badge,
  Container,
  FooterButton,
  Section,
  SectionContent,
  ActionLink,
  Text,
  Table,
  MainContainer,
  LinkHash,
  AddButton,
  Code,
  HomeTable,
  Checkbox
} from '../..';
import {
  ContainerRegister,
  Content,
  CreateButton,
  ErrorMessage,
  FieldsTable,
  Label,
  PageTitle,
  Panel,
  PanelRecord,
  RemoveButton,
  SideBar
} from '../newregistry';
import { RightContainer } from '../..';
import { ParamRow } from '../newregistry/ParamRow/ParamRow';
import { WideSelect, WideInput } from '../newregistry/WideInput/WideInput';
import { Description } from '../newregistry/Description/Description';
import { DarkPanel } from '../newregistry/DarkPanel/DarkPanel';
import { ProgressBar } from '../newregistry/ProgressBar/ProgressBar';
import CircleLable from '../newregistry/ProgressBar/CricleLable';
import { TableRegistry, TableAddRow, TableAddItem } from '../Table/Table';

storiesOf('Chaingear_pages', module).add('registryCreation2.stories', () => {
  const contractName = 'contract name';
  const message = 'message';
  const inProgress = false;
  const contracts = [];
  const type = '';
  const beneficiaries = [
    {
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
      stake: 1,
      share: 100
    },
    {
      address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
      stake: 1,
      share: 100
    },
  ];
  const databaseId = null;

  const DatabaseSource = 'Database source code';

  const exist = false;
  const benCount = 1;
  const canCreate = true;

  const onContractNameChange = undefined;

  return (
    <MainContainer>
      <PageTitle>New database creation</PageTitle>
      <ProgressBar>
        <CircleLable type="complete" number="1" text="Registry initialization" />
        <CircleLable type="edit" number="2" text="Schema definition" />
        <CircleLable number="3" text="Contract code saving" />
      </ProgressBar>
      {/* <ProgressBarItems key="1">Registry initialization</ProgressBarItems>
        <ProgressBarItemsLine key="2">Schema definition</ProgressBarItemsLine>
        <ProgressBarItemsLine key="3">Contract code saving</ProgressBarItemsLine> */}

      <ContainerRegister>
        <SideBar>
          <Label>Input</Label>
          <PanelRecord title="Record Structure" noPadding>
            <FieldsTable>
              {/* <TableRow>
              <TableItem></TableItem>
            </TableRow> */}
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
                        /*
                                                                                       ref='benAddress'
                                            */
                        placeholder="Name"
                      />
                    </td>
                    <td>
                      <WideSelect

                      /*
                                                                        ref='databaseVersion'
                                    */
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
                      /*
                                                                                        onClick={this.addBeneficiary}
                                            */
                      />
                    </td>
                  </tr>
                </tbody>
              </TableRegistry>
              {/* 
              <Table>
                <TableAddRow>
                  <TableAddItem>
                    <WideInput
                 
                      placeholder="Address"
                    />
                  </TableAddItem>
                  <TableAddItem>
                    <WideInput
                  
                      placeholder="Stake"
                    />
                  </TableAddItem>
                  <TableAddItem>
                    <span>0</span>
                    <span>%</span>
                  </TableAddItem>
                  <TableAddItem>
                    <AddButton
                    
                    />
                  </TableAddItem>
                </TableAddRow>
              </Table> */}
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
            /*
                                                                  onClick={this.createDatabase}
                            */
          >
            Next
          </CreateButton>
        )}
      </RightContainer>
    </MainContainer>
  );
});
const code = `
contract Coin {
  address minter;
  mapping (address => uint) balances;

  event Send(address from, address to, uint value);

  function Coin() {
      minter = msg.sender;
  }
  function mint(address owner, uint amount) {
      if (msg.sender != minter) return;
      balances[owner] += amount;
  }
  function send(address receiver, uint amount) {
      if (balances[msg.sender] < amount) return;
      balances[msg.sender] -= amount;
      balances[receiver] += amount;
      Send(msg.sender, receiver, amount);
  }
  function queryBalance(address addr) constant returns (uint balance) {
      return balances[addr];
  }
}
{
  address minter;
  mapping (address => uint) balances;

  event Send(address from, address to, uint value);

  function Coin() {
      minter = msg.sender;
  }
  function mint(address owner, uint amount) {
      if (msg.sender != minter) return;
      balances[owner] += amount;
  }
  function send(address receiver, uint amount) {
      if (balances[msg.sender] < amount) return;
      balances[msg.sender] -= amount;
      balances[receiver] += amount;
      Send(msg.sender, receiver, amount);
  }
  function queryBalance(address addr) constant returns (uint balance) {
      return balances[addr];
  }
}
{
  address minter;
  mapping (address => uint) balances;

  event Send(address from, address to, uint value);

  function Coin() {
      minter = msg.sender;
  }
  function mint(address owner, uint amount) {
      if (msg.sender != minter) return;
      balances[owner] += amount;
  }
  function send(address receiver, uint amount) {
      if (balances[msg.sender] < amount) return;
      balances[msg.sender] -= amount;
      balances[receiver] += amount;
      Send(msg.sender, receiver, amount);
  }
  function queryBalance(address addr) constant returns (uint balance) {
      return balances[addr];
  }
}
    `;
