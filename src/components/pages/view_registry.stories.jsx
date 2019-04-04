import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Card, Text, Menu, Popover, Button, IconButton, Pill,
} from 'evergreen-ui';
import {
    LinkHash,
    MainContainer,
    //  Section,
    SectionContent,
    CentredPanel,
    FlexContainerLeft,
    FlexContainerRight,
    FlexContainer,
    DbMenu,
    MenuPopup,
    MenuPopupItem,
    MenuSeparator,
    MenuPopupDeleteIcon,
    MenuPopupTransferIcon,
    MenuPopupAccountIcon,
    MenuPopupEditIcon,
    BenContainer,
    BenPieChart,
    MenuPopupResumeIcon,
    MenuPopupPauseIcon,
    ProgressBar,
    CircleLable,
    PageTitle,
    AddNewRecordButton,
    FormField,
    TableRecords,
    // Button,
    calculateBensShares,
    InfoButton,
    DatabaseItemsContainer,
    DbMenuPoints,
    // Text,
    Select,
    PopupBarFooter,
    PopupBar,
    ScrollContainer,
    CardHover,
} from '../..';
import Application from '../Application/Application';

const totalFee = 3;
const funded = '5';

const beneficiaries = [
    {
        address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
        stake: 22,
    },
    {
        address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
        stake: 123,
    },
    {
        address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
        stake: 98,
    },
    {
        address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
        stake: 40,
    },
    {
        address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
        stake: 66,
    },
];
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
    // 1: {
    //     key: 'Whitelist',
    //     label: 'Whitelist',
    // },
    [Permission.AllUsers]: {
        key: 'AllUsers',
        label: 'All Users',
    },
};

const name = 'Appstore';
const admin = '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef';
// const isDbPaused = true;
const isOwner = null;
const databaseSymbol = 'appstore';
const isSchemaExist = false;
const canCreate = true;

const CardGeneral = ({ value, title }) => (
    <CardHover
      flex={ 1 }
      paddingY={ 50 }
      display='flex'
      alignItems='center'
      flexDirection='column'
      backgroundColor='#fff'
        //   marginX={ 15 }
      boxShadow='0 0 10px 1px #36d6ae'
    >
        <Text display='inline-block' marginBottom={ 15 } color='#000' fontSize='1em'>
            {value}
        </Text>

        <Text display='inline-block' color='#000'>
            {title}
        </Text>
    </CardHover>
);

const Section = ({ title, children, ...props }) => (
    <Pane marginBottom={ 40 }>
        <Text display='inline-block' marginBottom={ 16 } fontSize='20px' color='#ffffff'>
            {title}
        </Text>
        <Pane { ...props } display='flex'>
            {children}
        </Pane>
    </Pane>
);

const PagesViewRegistry = ({ showTable, disabled, isDbPaused }) => (
    <ScrollContainer>
        <MainContainer>
            <Section>
                <div style={ { marginLeft: '15px' } }>
                    <Button className='btn' style={ { marginRight: '15px' } } to='/'>
                        BACK TO CHAINGEAR
                    </Button>
                    {!isSchemaExist && (
                        <Button className='btn' to={ `/schema/${databaseSymbol}` }>
                            Define schema
                        </Button>
                    )}
                </div>
            </Section>
            <Pane display='flex' alignItems='center' marginBottom={ 8 }>
                <Pane display='flex' alignItems='baseline' flexGrow={ 1 }>
                    <Pill
                      height={ 6 }
                      width={ 6 }
                      borderRadius='50%'
                      backgroundColor={ isDbPaused ? '#f5a623' : '#3ab793' }
                      paddingX={ 0 }
                      isSolid
                      marginRight={ 10 }
                    />
                    <Text color={ isDbPaused ? '#f5a623' : '#50e3c2' }>{databaseSymbol}</Text>
                </Pane>
                <Popover
                  position='BOTTOM_LEFT'
                  content={ (
                      <Menu>
                          <Menu.Group>
                              <Menu.Item icon='people'>Transfer Ownership</Menu.Item>
                              <Menu.Divider />
                              <Menu.Item icon='exchange'>Fund Registry</Menu.Item>
                              <Menu.Item icon='exchange'>Claim Fee</Menu.Item>
                              <Menu.Item icon='exchange'>Claim Funds</Menu.Item>

                              <Menu.Divider />

                              <Menu.Item icon='pause' intent='#d32f2f'>
                                    Pause Regisrty
                              </Menu.Item>
                              <Menu.Item icon='play' intent='#438cef'>
                                    Resume Registry
                              </Menu.Item>
                              <Menu.Divider />
                              <Menu.Item icon='trash'>Delete</Menu.Item>
                          </Menu.Group>
                      </Menu>
) }
                >
                    <IconButton
                      appearance='minimal'
                      className='icon-btn color-white-svg'
                      icon='settings'
                      iconSize={ 18 }
                    />
                </Popover>
            </Pane>
            <Pane width='100%' height={ 2 } boxShadow='inset 0 0 1px #fff' marginBottom={ 40 } />
            <Section title='General'>
                <Pane
                  display='grid'
                  gridTemplateColumns='1fr 1fr 1fr 1fr'
                  width='100%'
                  gridGap='15px'
                >
                    <CardGeneral value='appstore' title='name' />
                    <CardGeneral value={ <LinkHash value={ admin } /> } title='owner' />
                    <CardGeneral value='7/2/2018 17:13:33' title='creation time (UTC)' />
                    <CardGeneral value='5 ETH / 3 ETH' title='funds / fee' />
                </Pane>
            </Section>
            <Section marginTop='-1em'>
                <Pane display='grid' gridTemplateColumns='3.2fr 1fr' width='100%' gridGap='15px'>
                    <Pane display='flex' flexDirection='column'>
                        <Text
                          display='inline-block'
                          marginBottom={ 16 }
                          fontSize='20px'
                          color='#ffffff'
                        >
                            Overview
                        </Text>
                        <Pane
                          display='flex'
                          backgroundColor='#fff'
                          title='Overview'
                          flexDirection='column'
                          boxShadow='0 0 10px 1px #36d6ae'
                          borderRadius={ 4 }
                        >
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
                                </Select>
                            </FormField>
                            <FormField label='Entries' value='{rows.length}' />
                            <FormField label='Version' value='{contractVersion}' />
                            <FormField
                              label='Database address'
                              value='0x000F3754f028c704FDCe4e8ab9aAdba220f39618'
                            />
                            <FormField
                              label='Schema address'
                              value='0x000F3754f028c704FDCe4e8ab9aAdba220f39618'
                            />
                            <FormField
                              label='Abi link'
                              value={ (
                                  <a href='/' target='_blank'>
                                        QmdkrMcmKBWsg5K2senjLCFYLBxbqgamNF8d8ZC8xn1BHt
                                  </a>
) }
                            />
                        </Pane>
                    </Pane>
                    <Pane display='flex' flexDirection='column'>
                        <Text
                          display='inline-block'
                          marginBottom={ 16 }
                          fontSize='20px'
                          color='#ffffff'
                        >
                            Beneficiaries
                        </Text>
                        <Pane
                          backgroundColor='#fff'
                          title='Beneficiaries'
                          display='flex'
                          flexDirection='column'
                          alignItems='center'
                          justifyContent='center'
                          paddingY={ 20 }
                          boxSizing='border-box'
                          height='100%'
                          boxShadow='0 0 10px 1px #36d6ae'
                          borderRadius={ 4 }
                        >
                            <BenContainer>
                                <BenPieChart
                                  bens={ beneficiaries }
                                  calculateBensShares={ calculateBensShares }
                                />
                            </BenContainer>
                        </Pane>
                    </Pane>
                </Pane>
            </Section>
            {!showTable && (
                <div>
                    <FlexContainer line>
                        <FlexContainerLeft>RECORDS</FlexContainerLeft>

                        <FlexContainerRight>
                            <AddNewRecordButton>Add New Record</AddNewRecordButton>
                        </FlexContainerRight>
                    </FlexContainer>
                    <DatabaseItemsContainer disabled={ disabled }>
                        <TableRecords>
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>
                                        <DbMenuPoints>
                                            <MenuPopup>
                                                <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                    Transfer Ownership
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Fund Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Claim Funds
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                            </MenuPopup>
                                        </DbMenuPoints>
                                    </th>
                                    <th>
                                        <DbMenuPoints>
                                            <MenuPopup>
                                                <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                    Transfer Ownership
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Fund Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Claim Funds
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                            </MenuPopup>
                                        </DbMenuPoints>
                                    </th>
                                    <th>
                                        <DbMenuPoints>
                                            <MenuPopup>
                                                <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                    Transfer Ownership
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Fund Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Claim Funds
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                            </MenuPopup>
                                        </DbMenuPoints>
                                    </th>
                                    <th>
                                        <DbMenuPoints>
                                            <MenuPopup>
                                                <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
                                                    Transfer Ownership
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Fund Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
                                                    Claim Funds
                                                </MenuPopupItem>
                                                <MenuSeparator />
                                                <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                                <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
                                                    Delete Registry
                                                </MenuPopupItem>
                                            </MenuPopup>
                                        </DbMenuPoints>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Id</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>Funded</th>
                                    <th>3 ETH</th>
                                    <th>3 ETH</th>
                                    <th>3 ETH</th>
                                    <th>3 ETH</th>
                                </tr>
                                <tr>
                                    <th>Owner</th>
                                    <th>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </th>
                                    <th>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </th>
                                    <th>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </th>
                                    <th>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Wallet</td>
                                    <td>Chaingear</td>
                                    <td>Dragons</td>
                                    <td>ContractDeveloper</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Developer</td>
                                    <td>Congress</td>
                                    <td>Congress</td>
                                    <td>Dragonereum</td>
                                    <td>ParityTech</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Wallet</td>
                                    <td>Chaingear</td>
                                    <td>Dragons</td>
                                    <td>ContractDeveloper</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Developer</td>
                                    <td>Congress</td>
                                    <td>Congress</td>
                                    <td>Dragonereum</td>
                                    <td>ParityTech</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Wallet</td>
                                    <td>Chaingear</td>
                                    <td>Dragons</td>
                                    <td>ContractDeveloper</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                    <td>
                                        <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Developer</td>
                                    <td>Congress</td>
                                    <td>Congress</td>
                                    <td>Dragonereum</td>
                                    <td>ParityTech</td>
                                </tr>
                            </tbody>
                        </TableRecords>
                    </DatabaseItemsContainer>
                </div>
            )}
        </MainContainer>
    </ScrollContainer>
);

storiesOf('chaingear/view_registry', module)
    .add('registry', () => (
        <Application>
            <PagesViewRegistry />
        </Application>
    ))
    .add('registry_disabled_table', () => (
        <Application>
            <PagesViewRegistry disabled isDbPaused />
        </Application>
    ))
    .add('registry_no_table', () => (
        <Application>
            <PagesViewRegistry showTable='1' />
        </Application>
    ));
