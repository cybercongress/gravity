import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Menu, Popover, Button, IconButton, Pill, Table, TextInput,
} from 'evergreen-ui';
import {
    LinkHash,
    MainContainer,
    BenContainer,
    BenPieChart,
    FormField,
    calculateBensShares,
    InfoButton,
    DatabaseItemsContainer,
    Select,
    ScrollContainer,
    CardHover,
    Avatar,
    Section,
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

const databases = [
    {
        name: 'database_1',
        funded: '5',
        developer: 'Cybercongress',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        hash: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
    },
    {
        name: 'database_2',
        funded: '5',
        developer: 'Cybercongress',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        hash: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
    },
    {
        name: 'database_1',
        funded: '5',
        developer: 'Cybercongress',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        hash: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
    },
    {
        name: 'database_1',
        funded: '5',
        developer: 'Cybercongress',
        version: 'v1',
        date: '12/12/2010 4:26:20',
        hash: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
    },
];

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

class PagesViewRegistry extends Component {
    renderRowMenu = () => {
        return (
          <Menu>
            <Menu.Group>
                <Menu.Item icon='people'>Transfer Ownership</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
                <Menu.Item icon='exchange'>Fund Registry</Menu.Item>
                <Menu.Item icon='exchange'>Claim Fee</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
                <Menu.Item icon='edit'>Edit Record</Menu.Item>
                <Menu.Item icon='trash'>Delete Record </Menu.Item>
            </Menu.Group>
          </Menu>
        )
      }
    renderItem = (item, index ) => {
        const {
            hash, name, funded, developer, version,
        } = item;
    
        return (
            <Table.Row isSelectable key={ name } width='fit-content' position='relative'>
                <Table.TextCell width={48} flex='none'>{index}</Table.TextCell>
                <Table.TextCell flex='none' width={150}>{name}</Table.TextCell>
                <Table.TextCell flex='none' width={150}>
                    <LinkHash value={hash} />
                </Table.TextCell>
                <Table.TextCell flex='none' width={150}>{developer}</Table.TextCell>
                <Table.TextCell flex='none' width={150}>{version}</Table.TextCell>
                <Table.TextCell flex='none' width={150}>{funded} ETH</Table.TextCell>
                <Table.TextCell flex='none' width={150}>
                    <Avatar style={{ height: 25, width: 25 }} hash={hash} />
                </Table.TextCell>

                <Table.TextCell flex='none' width={150}>{funded} ETH</Table.TextCell>
                
                <Table.Cell position='sticky' right={0} backgroundColor='#fff' flexBasis='auto' width={48} flex="none">
                    <Popover
                        content={this.renderRowMenu}
                        position='top'
                    >
                        <IconButton icon="more" height={24} appearance="minimal" />
                    </Popover>
                </Table.Cell>
            </Table.Row>
        );
    };
    render(){
        const { showTable, disabled, isDbPaused, databasesItem } = this.props;
        return(
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
                            <FormField label='developer' value='{rows.length}' />
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
                    <Section title='Records'>
                         <DatabaseItemsContainer disabled={ disabled }>
                     <Table>
                         
                         <Table.Body style={ { overflowY: 'hidden'}}>
                         <Table.Row width='fit-content'>
                            <Table.TextCell width={48} flex='none'>ID</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Name</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Address</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Developer</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Version</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Funded</Table.TextCell>
                            <Table.TextCell flex='none' width={150}>Owner</Table.TextCell>

                            <Table.TextCell flex='none' width={150}>Funded</Table.TextCell>

                            <Table.TextCell position='sticky' right={0} backgroundColor='#fff' width={48} flex="none"></Table.TextCell>
                         </Table.Row>
                            {databasesItem.map(this.renderItem)}
                         </Table.Body>
                     </Table>
                    </DatabaseItemsContainer>
                    </Section>
                   
                </div>
            )}
        </MainContainer>
    </ScrollContainer>
        );
    }
}


class FooterCyb extends Component{
    render(){
    const { transfer, fundDatabase, claimfunds, update } = this.props
    
    const updateFooter = (
        <Pane
        width='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
    >
                 <TextInput
                    height={ 42 }
                    width='40%'
                    // ref='cidToInput'
                    marginRight={ 15 }
                    fontSize='18px'
                    placeholder='Name'
                    textAlign='left'
                    backgroundColor='transparent'
                    className='input-green'
                />
                <TextInput
                    height={ 42 }
                    width='40%'
                    // ref='cidToInput'
                    marginRight={ 15 }
                    fontSize='18px'
                    placeholder='Name'
                    textAlign='left'
                    backgroundColor='transparent'
                    className='input-green'
                />
                <TextInput
                    height={ 42 }
                    width='40%'
                    // ref='cidToInput'
                    marginRight={ 15 }
                    fontSize='18px'
                    placeholder='Name'
                    textAlign='left'
                    backgroundColor='transparent'
                    className='input-green'
                />
                <TextInput
                    height={ 42 }
                    width='40%'
                    // ref='cidToInput'
                    marginRight={ 15 }
                    fontSize='18px'
                    placeholder='Name'
                    textAlign='left'
                    backgroundColor='transparent'
                    className='input-green'
                />
                <TextInput
                    height={ 42 }
                    width='40%'
                    // ref='cidToInput'
                    marginRight={ 15 }
                    fontSize='18px'
                    placeholder='Name'
                    textAlign='left'
                    backgroundColor='transparent'
                    className='input-green'
                />
                <Button paddingX={ 50 } height={ 42 } className='btn'>
                    Update
                </Button>
                </Pane>
    );
    const transferFooter = (
        <Pane
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
         <TextInput
            height={ 42 }
            width='40%'
            // ref='cidToInput'
            marginRight={ 15 }
            fontSize='18px'
            placeholder='New owner address'
            textAlign='left'
            backgroundColor='transparent'
            className='input-green'
        />
        <Button paddingX={ 50 } height={ 42 } className='btn'>
            Transfer
        </Button>
        </Pane>
    );
    const fundDatabaseFooter = (
        <Pane
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
         <TextInput
            height={ 42 }
            width='40%'
            // ref='cidToInput'
            marginRight={ 15 }
            fontSize='18px'
            placeholder='ETH'
            textAlign='left'
            backgroundColor='transparent'
            className='input-green'
        />
        <Button paddingX={ 50 } height={ 42 } className='btn'>
            Fund database
        </Button>
        </Pane>
        );

        const claimfundsFooter = (
            <Pane
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
         <TextInput
            height={ 42 }
            width='40%'
            // ref='cidToInput'
            marginRight={ 15 }
            fontSize='18px'
            placeholder='ETH'
            textAlign='left'
            backgroundColor='transparent'
            className='input-green'
        />
        <Button paddingX={ 50 } height={ 42 } className='btn'>
            Claim funds
        </Button>
        </Pane>
        );
    return(
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      position='absolute'
      bottom={ 0 }
      paddingY={ 20 }
      backgroundColor='#000000'
      zIndex={ 2 }
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
        >
            {
                transfer ? (transferFooter)
                : fundDatabase 
                ? (fundDatabaseFooter)
                : claimfunds 
                ? (claimfundsFooter)
                : update 
                ? (updateFooter) 
                : (
                    <Button paddingX={ 50 } height={ 42 } className='btn'>
                        Add record
                    </Button>
                )
            }
        </Pane>
    </Pane>
    );
}
}


storiesOf('chaingear/view_registry', module)
    .add('registry', () => (
        <Application>
            <PagesViewRegistry databasesItem={ databases } />
            <FooterCyb update/>
        </Application>
    ))
    .add('registry_disabled_table', () => (
        <Application>
            <PagesViewRegistry disabled isDbPaused databasesItem={ databases } />
            <FooterCyb />
        </Application>
    ))
    .add('registry_no_table', () => (
        <Application>
            <PagesViewRegistry showTable='1' />
            <FooterCyb />
        </Application>
    ));
