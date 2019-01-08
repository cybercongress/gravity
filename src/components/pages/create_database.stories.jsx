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
import {
  TableRegistry,
  TableItemBen,
  TableRow,
  TableItem,
  TableAddRow,
  TableAddItem
} from '../Table/Table';
import code from './code';

const contractName = 'contract name';
const message = 'message';
const inProgress = false;
const contracts = [];
const type = 'error';
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
  }
];
const databaseId = 1;

const DatabaseSource = 'Database source code';

const exist = false;
const benCount = 1;
const canCreate = true;

const onContractNameChange = undefined;

const Pages = ({databaseId, message}) => (
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
          <Panel title="General Parameters">
            <ParamRow>
              <WideInput placeholder="Name" defaultValue="" />
            </ParamRow>
            <ParamRow>
              <WideInput defaultValue="" placeholder="Symbol" />
            </ParamRow>
            <ParamRow>
              <WideSelect>
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
                    <WideInput placeholder="Address" />
                  </td>
                  <td>
                    <WideInput placeholder="Stake" />
                  </td>
                  <td>
                    <span>0</span>
                    <span>%</span>
                  </td>
                  <td>
                    <AddButton />
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
          { message && <ErrorMessage>{message}</ErrorMessage>}
        </Content>
      </ContainerRegister>
      <RightContainer>
        {databaseId ? (
          <span>
            <ActionLink to={`/databases/${databaseId}`}>Go to database</ActionLink>
            <ActionLink to={`/schema/${databaseId}`}>Go to schema definition</ActionLink>
          </span>
        ) : (
          <CreateButton disabled={!canCreate}>Next</CreateButton>
        )}
      </RightContainer>
    </MainContainer>
)

storiesOf('pages/create_database', module)
    .add('create_db', () => <Pages />)
    .add('create_db_have_id', () => <Pages databaseId="1" />)
    .add('create_db_error', () => <Pages message="error"/>);
