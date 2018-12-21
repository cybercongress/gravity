import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ActionLink,
  LinkHash,
  MainContainer,
  Section,
  SectionContent,
  Centred,
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
  Popup,
  PopupContent,
  PopupFooter,
  PopupTitle,
  BenContainer,
  BenPieChart,
  MenuPopupResumeIcon,
  MenuPopupPauseIcon
} from '../..';

storiesOf('Chaingear_NewDatabase', module).add('registry', () => {

  const Permission = {
    OnlyAdmin: 0,
    Whitelist: 1,
    AllUsers: 2,
  };

  const isOwner = false;
  const totalFee = 0;
  const funded = '';

  const beneficiaries = [];
  const ipfsGateway = null;

  const name = '';
  const description = '';
  const tag = '';
  const createdTimestamp = null;
  const entryCreationFee = 0;
  const admin = '';
  const isDbPaused = null;

  const contractVersion = null;
  const databaseAddress = null;
  const databaseSymbol = null;
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
        <DbHeaderLine>
          <DbHeaderLeft>
            <DbHeaderName>{name}</DbHeaderName>
          </DbHeaderLeft>
          <DbHeaderRight>
            <DbMenu>
              <MenuPopup>
                {isOwner && !isDbPaused && (
                  <span>
                    <MenuPopupItem
                      icon={<MenuPopupTransferIcon />}
                      onClick={this.onTransferOwnership}
                    >
                      Transfer ownership
                    </MenuPopupItem>
                    <MenuSeparator />
                  </span>
                )}
                {!isDbPaused && (
                  <MenuPopupItem icon={<MenuPopupEditIcon />} onClick={this.onFundDb}>
                    Fund registry
                  </MenuPopupItem>
                )}
                {!isDbPaused && isOwner && (
                  <span>
                    <MenuPopupItem icon={<MenuPopupEditIcon />} onClick={this.onClaimFunds}>
                      Claim Funds
                    </MenuPopupItem>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupPauseIcon />} onClick={this.onPauseDb}>
                      Pause database
                    </MenuPopupItem>
                  </span>
                )}
                {isDbPaused && isOwner && (
                  <MenuPopupItem icon={<MenuPopupResumeIcon />} onClick={this.onResumeDb}>
                    Resume database
                  </MenuPopupItem>
                )}
                {!isDbPaused && isOwner && (
                  <span>
                    <MenuSeparator />
                    <MenuPopupItem icon={<MenuPopupDeleteIcon />} onClick={this.onDeleteDb}>
                      Delete registry
                    </MenuPopupItem>
                  </span>
                )}
              </MenuPopup>
            </DbMenu>
          </DbHeaderRight>
        </DbHeaderLine>

        <DbHeaderLine>
          <DbHeaderLeft>symbol: {databaseSymbol}</DbHeaderLeft>

          <DbHeaderRight>status: {isDbPaused ? 'paused' : 'operational'}</DbHeaderRight>
        </DbHeaderLine>
      </DbHeader>
      <Section title="General">
        <SectionContent style={{ width: '25%' }}>
          <Centred>
            <BoxTitle>Created:</BoxTitle>
            <div style={{ height: 100, color: '#000000' }}>
              {createdTimestamp
                ? moment(new Date(createdTimestamp.toNumber() * 1000)).format('DD/MM/YYYY mm:hh:ss')
                : ''}
            </div>
          </Centred>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <Centred>
            <BoxTitle>Admin:</BoxTitle>
            <div style={{ height: 100 }}>
              <LinkHash value={admin} />
            </div>
          </Centred>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <Centred>
            <BoxTitle>FUNDED:</BoxTitle>

            <FundContainer
              style={{
                height: 100,
                justifyContent: isOwner && !isDbPaused ? 'space-around' : 'start'
              }}
            >
              <span>{funded} ETH</span>

              {isOwner && !isDbPaused && (
                <ValueInput onInter={this.claimDatabase} buttonLable="claim funds" color="second" />
              )}
            </FundContainer>
          </Centred>
        </SectionContent>

        <SectionContent style={{ width: '25%' }}>
          <Centred>
            <BoxTitle>FEES:</BoxTitle>

            <FundContainer
              style={{
                height: 100,
                justifyContent: isOwner && !isDbPaused ? 'space-around' : 'start'
              }}
            >
              <span>{totalFee} ETH</span>
              {isOwner && !isDbPaused && (
                <Button style={{ width: 119 }} onClick={this.claimFee}>
                  clame fee
                </Button>
              )}
            </FundContainer>
          </Centred>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent title="Overview" grow={3}>
          <FormField
            label="Description"
            value={description}
            onUpdate={isOwner && !isDbPaused && this.changeDescription}
          />
          <FormField label="Tags" value={tag} />
          <FormField
            label="Record Fee"
            value={entryCreationFee.toString()}
            valueType="ETH"
            onUpdate={isOwner && isDbPaused && this.changeEntryCreationFee}
          />
          <FormField
            label="Permissions"
            value={permissionGroupStr}
            onUpdate={isOwner && isDbPaused && this.onUpdatePermissionGroup}
          >
            <select
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
            </select>
          </FormField>
          <FormField label="Entries" value={rows.length} />
          <FormField label="Version" value={contractVersion} />
          <FormField label="Database address" value={databaseAddress} />
          <FormField label="Schema address" value={entryCoreAddress} />
          <FormField
            label="Abi link"
            value={
              <a href={`${ipfsGateway}/ipfs/${ipfsHash}`} target="_blank">
                {ipfsHash}
              </a>
            }
          />
        </SectionContent>

        <SectionContent title="Beneficiaries" grow={0} style={{ width: '25%' }}>
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
            {showAddButton && <Button onClick={this.add}>Add new record</Button>}
          </DbHeaderRight>
        </DbHeaderLine>
      </DbHeader>
      <DatabaseList>{rows}</DatabaseList>
    </MainContainer>
  );
});
