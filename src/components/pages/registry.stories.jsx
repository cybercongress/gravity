import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ActionLink,
  LinkHash,
  MainContainer,
  Section,
  SectionContent,
  Centred,
  CentredPanel,
  Button,
  FundContainer,
  BoxTitle,
  StatusBar,
  DbHeader,
  DbHeaderLeft,
  DbHeaderRight,
  DbHeaderLine,
  DbHeaderName,
  DbMenu,
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupDeleteIcon,
  MenuPopupEditIcon,
  MenuPopupTransferIcon,
  MenuPopupDeletePencilIcon,
  Popup,
  PopupContent,
  PopupFooter,
  PopupTitle,
  BenContainer,
  BenPieChart,
  MenuPopupResumeIcon,
  MenuPopupPauseIcon,
  ProgressBar,
  CircleLable,
  PageTitle,
  AddNewRecordButton,
  TableRegistry,
  FormField,
  WideSelect,
  WideInput,
} from '../..';

import { TableRecords } from '../TableRecords/TableRecords';
import { DbMenuPoints } from '../DbMenuPoints/DbMenuPoints';
import { DatabaseItemsContainer } from '../DatabaseTable/DatabaseItemsContainer';
import { InfoButton } from '../DatabaseItem/index';
import { calculateBensShares } from '../utils/utils';

storiesOf('Chaingear_pages', module).add('registry', () => {
  const Permission = {
    OnlyAdmin: 0,
    Whitelist: 1,
    AllUsers: 2
  };

  const isOwner = true;
  const totalFee = 3;
  const funded = '5';

  const fundDatabaseOpen = true;

  const beneficiaries = [
    {
      address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
      stake: 22
    },
    {
      address: '0xb175b6F3A4C712Da8CC59A824F1d3BC31f398CB8',
      stake: 123
    },
    {
      address: '0x805dD5291406D081c7100916E1ACdb070d5b4DC5',
      stake: 98
    },
    {
      address: '0x885dD5291406D081c9900916E1ACdb070d5b4DD5',
      stake: 40
    },
    {
      address: '0x555dD52914000081c990091222ACdb070d5b4Dz1',
      stake: 66
    }
  ];
  const ipfsGateway = null;

  const name = 'Appstore';
  const description = '';
  const tag = '';
  const createdTimestamp = null;
  const entryCreationFee = 0;
  const admin = '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef';
  const isDbPaused = null;

  const contractVersion = null;
  const databaseAddress = null;
  const databaseSymbol = 'APP';
  const CreateEntryPermissionGroup = {
    [Permission.OnlyAdmin]: {
      key: 'OnlyAdmin',
      label: 'ONLY OWNER'
    },
    // 1: {
    //     key: 'Whitelist',
    //     label: 'Whitelist',
    // },
    [Permission.AllUsers]: {
      key: 'AllUsers',
      label: 'All Users'
    }
  };

  const entryCoreAddress = null;
  const ipfsHash = null;
  const isSchemaExist = false;
  const permissionGroup = 0;
  const permissionGroupStr = CreateEntryPermissionGroup[permissionGroup].label;

  const showAddButton =
    (isOwner || permissionGroup === Permission.AllUsers) && !isDbPaused && isSchemaExist;

  return (
    <MainContainer>
      <Section>
        <div style={{ marginLeft: '15px' }}>
          <ActionLink to="/">BACK TO CHAINGEAR</ActionLink>
          {!isSchemaExist && (
            <ActionLink style={{ marginLeft: 15 }} to={`/schema/${databaseSymbol}`}>
              Define schema
            </ActionLink>
          )}
        </div>
      </Section>
      <DbHeader>
        <PageTitle>{name}</PageTitle>
        <ProgressBar>
          <CircleLable type="complete" number="1" text="Registry initialization" />
          <CircleLable type="edit" number="2" text="Schema definition" />
          <CircleLable number="3" text="Contract code saving" />
        </ProgressBar>

        <DbHeaderLine>
          <DbHeaderLeft>symbol: {databaseSymbol}</DbHeaderLeft>

          <DbHeaderRight>
            status: {isDbPaused ? 'paused' : 'operational'}
            <DbMenu>
              <MenuPopup>
                {/* {isOwner && !isDbPaused && ( */}
                {/* <span> */}
                <MenuPopupItem
                  icon={<MenuPopupTransferIcon />}
                  // onClick={this.onTransferOwnership}
                >
                  Transfer ownership
                </MenuPopupItem>
                <MenuSeparator />
                {/* </span>
                )}
                {!isDbPaused && ( */}
                <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund registry</MenuPopupItem>
                {/* )}
                {!isDbPaused && isOwner && (
                  <span> */}
                <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                <MenuSeparator />
                <MenuPopupItem icon={<MenuPopupPauseIcon />}>Pause database</MenuPopupItem>
                {/* </span>
                )}
                {isDbPaused && isOwner && ( */}
                <MenuPopupItem icon={<MenuPopupResumeIcon />}>Resume database</MenuPopupItem>
                {/* )}
                {!isDbPaused && isOwner && (
                  <span> */}
                <MenuSeparator />
                <MenuPopupItem icon={<MenuPopupDeleteIcon />}>Delete registry</MenuPopupItem>
                {/* </span>
                )} */}
              </MenuPopup>
            </DbMenu>
          </DbHeaderRight>
        </DbHeaderLine>
      </DbHeader>
      <Section title="General">
        <SectionContent style={{ width: '25%' }}>
          <CentredPanel>
            <BoxTitle>Created:</BoxTitle>
            <div>
              7/2/2018 17:13:33
              {/* {createdTimestamp
                ? moment(new Date(createdTimestamp.toNumber() * 1000)).format('DD/MM/YYYY mm:hh:ss')
                : ''} */}
            </div>
          </CentredPanel>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <CentredPanel>
            <BoxTitle>Admin:</BoxTitle>
            <div>
              <LinkHash value={admin} />
            </div>
          </CentredPanel>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <CentredPanel>
            <BoxTitle>FUNDED:</BoxTitle>

            <FundContainer>
              <span>{funded} ETH</span>

              {/* {isOwner && !isDbPaused && (
                <ValueInput
                  // onInter={this.claimDatabase}
                  buttonLable="claim funds"
                  color="second"
                />
              )} */}
            </FundContainer>
          </CentredPanel>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <CentredPanel>
            <BoxTitle>FEES:</BoxTitle>

            <FundContainer>
              <span>{totalFee} ETH</span>
              {/* {isOwner && !isDbPaused && (
                <Button
                  style={{ width: 119 }}
                  //  onClick={this.claimFee}
                >
                  clame fee
                </Button>
              )} */}
            </FundContainer>
          </CentredPanel>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent title="Overview" style={{ width: '70%' }} grow={3}>
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
            icon={<InfoButton />}
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
            value="QmdkrMcmKBWsg5K2senjLCFYLBxbqgamNF8d8ZC8xn1BHt"
          />
        </SectionContent>

        <SectionContent title="Beneficiaries" grow={0} style={{ width: '30%' }}>
          <Centred>
            <BenContainer>
              <BenPieChart bens={beneficiaries} calculateBensShares={calculateBensShares} />
            </BenContainer>
          </Centred>
        </SectionContent>
      </Section>

      <DbHeader>
        <DbHeaderLine>
          <DbHeaderLeft>RECORDS</DbHeaderLeft>

          <DbHeaderRight>
            <AddNewRecordButton>Add New Record</AddNewRecordButton>
          </DbHeaderRight>
        </DbHeaderLine>
      </DbHeader>
      {/* <DatabaseList>{rows}</DatabaseList> */}
      <DatabaseItemsContainer>
        <TableRecords>
          <thead>
            <tr>
              <th>Action</th>
              <th>
                <DbMenuPoints>
                  <MenuPopup>
                    <MenuPopupItem icon={<MenuPopupTransferIcon />}>
                      Transfer Ownership
                    </MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
                      Delete Registry
                    </MenuPopupItem>
                  </MenuPopup>
                </DbMenuPoints>
              </th>
              <th>
                <DbMenuPoints>
                  <MenuPopup>
                    <MenuPopupItem icon={<MenuPopupTransferIcon />}>
                      Transfer Ownership
                    </MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
                      Delete Registry
                    </MenuPopupItem>
                  </MenuPopup>
                </DbMenuPoints>
              </th>
              <th>
                <DbMenuPoints>
                  <MenuPopup>
                    <MenuPopupItem icon={<MenuPopupTransferIcon />}>
                      Transfer Ownership
                    </MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
                      Delete Registry
                    </MenuPopupItem>
                  </MenuPopup>
                </DbMenuPoints>
              </th>
              <th>
                <DbMenuPoints>
                  <MenuPopup>
                    <MenuPopupItem icon={<MenuPopupTransferIcon />}>
                      Transfer Ownership
                    </MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                    <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
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
              <th>YOU</th>
              <th>YOU</th>
              <th>YOU</th>
              <th>YOU</th>
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
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
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
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
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
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
              </td>
              <td>
                <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
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
    </MainContainer>
  );
});
