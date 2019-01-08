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
  Panel,
  RemoveButton,
  SideBar
} from '../newregistry';
import { RightContainer } from '../..';
import { ParamRow } from '../newregistry/ParamRow/ParamRow';
import { Description } from '../newregistry/Description/Description';
import { DarkPanel } from '../newregistry/DarkPanel/DarkPanel';
import { TableRegistry, TableItemBen, TableRow, TableItem, TableAddRow, TableAddItem } from '../Table/Table';


storiesOf('pages/create_database', module).add('create_db', () => {
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
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
      stake: 1,
      share: 100
    },
    {
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
      stake: 1,
      share: 100
    },
    {
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
      stake: 1,
      share: 100
    },
    {
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
      stake: 1,
      share: 100
    },
    {
      address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
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
          <Panel title="General Parameters">
            <ParamRow>
              <WideInput placeholder="Name" defaultValue="" />
            </ParamRow>
            <ParamRow>
              <WideInput
                /*
                                                                        ref='symbol'
                                    */
                defaultValue=""
                placeholder="Symbol"
               
              />
            </ParamRow>
            <ParamRow>
              <WideSelect
              /*
                                                                        ref='databaseVersion'
                                    */
              >
                <option value="">Version</option>
                <option value="V1">V1 (Basic Database)</option>
              </WideSelect>
            </ParamRow>
            <ParamRow>
              <Description>
                <b>Description:</b> One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He lay on his
                armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches.
              </Description>
            </ParamRow>
          </Panel>
          <Panel title="Beneficiaries (Optional)" noPadding>
              {/* <TableRow>
              <TableItem></TableItem>
            </TableRow> */}
              <TableItemBen>
                <tbody>
                  {beneficiaries.map(ben => (
                    <tr key={ben.address}>
                      <td>
                        <LinkHash noCopy noPadding value={ben.address} />
                      </td>
                      <td>{ben.stake}</td>
                      <td>{ben.share}%</td>
                      <td>
                        <RemoveButton />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </TableItemBen>

              <TableRegistry>
                <tbody>
                  <tr>
                    <td>
                      <WideInput
                        /*
                                                                                       ref='benAddress'
                                            */
                        placeholder="Address"
                      />
                    </td>
                    <td>
                      <WideInput
                        /*
                                                                                       ref='benAddress'
                                            */
                        placeholder="Stake"
                      />
                    </td>
                    <td>
                      <span>0</span>
                      <span>%</span>
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
          </Panel>
        </SideBar>

        <Content>
          <Label color="#3fb990">Database code</Label>
          <DarkPanel>
            <Code>${code}</Code>
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
}`;
