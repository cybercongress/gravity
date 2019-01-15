import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    MainContainer,
    LinkHash,
    AddButton,
    Code,
    WideSelect,
    WideInput,
    CircleLable,
    ProgressBar,
    FlexContainerRight,
    FlexContainerLeft,
    FlexContainer,
    Button,
    Message,
    TableRegistry,
    TableItemBen,
    ParamRow,
    Text,
    ContainerRegister,
    Content,
    PageTitle,
    Panel,
    RemoveButton,
    SideBar,
    PopupBar,
    PopupBarFooter,
} from '../..';

import code from './code';

const beneficiaries = [
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 51,
        share: 1,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 23,
        share: 1,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
    {
        address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
        stake: 1,
        share: 100,
    },
];

const canCreate = false;

const Pages = ({ databaseId, message }) => (
    <MainContainer>
        <PageTitle>New database creation</PageTitle>
        <ProgressBar>
      <CircleLable type="complete" number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization">
      <PopupBar>
          <Text lineheight>To operate with records, please, define schema</Text>
          <PopupBarFooter>
              <Button transparent style={{color: '#b00020'}}>complete step</Button>
          </PopupBarFooter>
        </PopupBar>
      </CircleLable>
    </ProgressBar>

        <ContainerRegister>
            <SideBar title='Input'>
                <Panel title='General Parameters'>
                    <ParamRow>
                        <WideInput placeholder='Name' defaultValue='' />
                    </ParamRow>
                    <ParamRow>
                        <WideInput defaultValue='' placeholder='Symbol' />
                    </ParamRow>
                    <ParamRow>
                        <WideSelect>
                            <option value=''>Version</option>
                            <option value='V1'>V1 (Basic Database)</option>
                        </WideSelect>
                    </ParamRow>
                    <ParamRow>
                        <Text size='sm' lineheight justify>
                            <b>Description:</b>
                            One morning, when Gregor Samsa woke from troubled dreams, he found
                            himself transformed in his bed into a horrible vermin. He lay on his
                            armour-like back, and if he lifted his head a little he could see his
                            brown belly, slightly domed and divided by arches.
                        </Text>
                    </ParamRow>
                </Panel>
                <Panel title='Beneficiaries (Optional)' noPadding>
                    <TableItemBen>
                        <tbody>
                            {beneficiaries.map(ben => (
                                <tr key={ ben.address }>
                                    <td>
                                        <LinkHash noCopy noPadding value={ ben.address } />
                                    </td>
                                    <td>{ben.stake}</td>
                                    <td>
                                        {ben.share}
                                        %
                                    </td>
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
                                    <WideInput placeholder='Address' />
                                </td>
                                <td>
                                    <WideInput placeholder='Stake' />
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

            <Content title='Database code'>
                <Code>{code}</Code>
            </Content>
        </ContainerRegister>
        <FlexContainer>
            <FlexContainerLeft>
                {message && <Message type='error'>{message}</Message>}
            </FlexContainerLeft>
            <FlexContainerRight>
                {databaseId ? (
                    <span>
                        <Button color='blue' style={ { marginRight: '10px' } } to={ `/databases/${databaseId}` }>
                            Go to database
                        </Button>
                        <Button color='blue' to={ `/schema/${databaseId}` }>
                            Go to schema definition
                        </Button>
                    </span>
                ) : (
                    <Button type='button' color='blue' disabled={ !canCreate }>
                        Next
                    </Button>
                )}
            </FlexContainerRight>
        </FlexContainer>
    </MainContainer>
);

storiesOf('pages/create_database', module)
    .add('create_db', () => <Pages />)
    .add('create_db_have_id', () => <Pages databaseId='1' />)
    .add('create_db_error', () => <Pages message='error' />);
