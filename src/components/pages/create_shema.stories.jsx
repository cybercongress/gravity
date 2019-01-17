import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    MainContainer,
    AddButton,
    Code,
    Checkbox,
    WideSelect,
    WideInput,
    CircleLable,
    ProgressBar,
    FlexContainer,
    FlexContainerLeft,
    FlexContainerRight,
    Message,
    Button,
    ContainerRegister,
    Content,
    FieldsTable,
    PageTitle,
    Panel,
    RemoveButton,
    SideBar,
    TableRegistry,
    PopupBar,
    PopupBarFooter,
    Text,
} from '../..';
// import {
//     ContainerRegister,
//     Content,
//     FieldsTable,
//     PageTitle,
//     RemoveButton,
//     SideBar,
// } from '../newregistry';
// import { TableRegistry } from '../Table/Table';
import code from './code';

const type = '';

const canCreate = true;
const Pages = ({ databaseId, disabled, disabledPopup, message  }) => (
    <MainContainer>
        <PageTitle>New database creation</PageTitle>
        <ProgressBar>
            <CircleLable type="complete" number="1" text="Registry initialization" />
            <CircleLable number="1" text="Schema definition">
               {disabledPopup &&(
                   <PopupBar>
                        <Text lineheight>To operate with records, please, define schema</Text>
                        <PopupBarFooter>
                            <Button transparent style={{color: '#b00020'}}>complete step</Button>
                        </PopupBarFooter>
                    </PopupBar>
               )} 
            </CircleLable>
        </ProgressBar>
        <ContainerRegister>
            <SideBar title='Input'>
                <Panel noPadding title='Record Structure' style={{minHeight: '403px'}}>
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
                                        <WideInput placeholder='Name' />
                                    </td>
                                    <td>
                                        <WideSelect>
                                            <option value=''>Type</option>
                                            <option value='V1'>V1 (Basic Database)</option>
                                        </WideSelect>
                                    </td>
                                    <td>
                                        <Checkbox>unique</Checkbox>
                                    </td>
                                    <td>
                                        <AddButton />
                                    </td>
                                </tr>
                            </tbody>
                        </TableRegistry>
                    </FieldsTable>
                </Panel>
            </SideBar>

            <Content title='Database code'>
                <Code>{code}</Code>

                {type === 'error' && message && <Message type='error'>{message}</Message>}
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
                    <Button type='button' color='blue' disabled={ disabled }>
                        Next
                    </Button>
                )}
            </FlexContainerRight>
        </FlexContainer>
    </MainContainer>
);

storiesOf('pages/create_shema', module)
    .add('index', () => <Pages />)
    .add('have_id', () => <Pages databaseId='1' />)
    .add('error', () => <Pages message='error' />)
    .add('disabledBttn', () => <Pages disabled='1' />)
    .add('popupProgressBar', () => <Pages disabledPopup='1' />);
