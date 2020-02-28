// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import centered from '@storybook/addon-centered';
// import { addDecorator } from '@storybook/react';
// import {
//     MenuPopup,
//     MenuPopupItem,
//     MenuSeparator,
//     MenuPopupAccountIcon,
//     MenuPopupTransferIcon,
//     MenuPopupDeleteIcon,
//     MenuPopupEditIcon,
//     LinkHash,
//     DbMenuPoints,
//     DatabaseItemsContainer,
//     TableRecords,
// } from '../..';

// const Table = ({ disabled }) => (
//     <DatabaseItemsContainer disabled={ disabled }>
//         <TableRecords>
//             <thead>
//                 <tr>
//                     <th>Action</th>
//                     <th>
//                         <DbMenuPoints>
//                             <MenuPopup>
//                                 <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
//                                     Transfer Ownership
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Fund Registry
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Claim Funds
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
//                                     {' '}
//                                     Delete Registry
//                                     {' '}
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
//                                     Delete Registry
//                                 </MenuPopupItem>
//                             </MenuPopup>
//                         </DbMenuPoints>
//                     </th>
//                     <th>
//                         <DbMenuPoints>
//                             <MenuPopup>
//                                 <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
//                                     Transfer Ownership
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Fund Registry
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Claim Funds
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
//                                     {' '}
//                                     Delete Registry
//                                     {' '}
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
//                                     Delete Registry
//                                 </MenuPopupItem>
//                             </MenuPopup>
//                         </DbMenuPoints>
//                     </th>
//                     <th>
//                         <DbMenuPoints>
//                             <MenuPopup>
//                                 <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
//                                     Transfer Ownership
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Fund Registry
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Claim Funds
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
//                                     {' '}
//                                     Delete Registry
//                                     {' '}
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
//                                     Delete Registry
//                                 </MenuPopupItem>
//                             </MenuPopup>
//                         </DbMenuPoints>
//                     </th>
//                     <th>
//                         <DbMenuPoints>
//                             <MenuPopup>
//                                 <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>
//                                     Transfer Ownership
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Fund Registry
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>
//                                     Claim Funds
//                                 </MenuPopupItem>
//                                 <MenuSeparator />
//                                 <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }>
//                                     {' '}
//                                     Delete Registry
//                                     {' '}
//                                 </MenuPopupItem>
//                                 <MenuPopupItem icon={ <MenuPopupEditIcon /> }>
//                                     Delete Registry
//                                 </MenuPopupItem>
//                             </MenuPopup>
//                         </DbMenuPoints>
//                     </th>
//                 </tr>
//                 <tr>
//                     <th>Id</th>
//                     <th>1</th>
//                     <th>2</th>
//                     <th>3</th>
//                     <th>4</th>
//                 </tr>
//                 <tr>
//                     <th>Funded</th>
//                     <th>3 ETH</th>
//                     <th>3 ETH</th>
//                     <th>3 ETH</th>
//                     <th>3 ETH</th>
//                 </tr>
//                 <tr>
//                     <th>Owner</th>
//                     <th>YOU</th>
//                     <th>YOU</th>
//                     <th>YOU</th>
//                     <th>YOU</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Name</td>
//                     <td>Wallet</td>
//                     <td>Chaingear</td>
//                     <td>Dragons</td>
//                     <td>ContractDeveloper</td>
//                 </tr>
//                 <tr>
//                     <td>Address</td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Developer</td>
//                     <td>Congress</td>
//                     <td>Congress</td>
//                     <td>Dragonereum</td>
//                     <td>ParityTech</td>
//                 </tr>
//                 <tr>
//                     <td>Name</td>
//                     <td>Wallet</td>
//                     <td>Chaingear</td>
//                     <td>Dragons</td>
//                     <td>ContractDeveloper</td>
//                 </tr>
//                 <tr>
//                     <td>Address</td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Developer</td>
//                     <td>Congress</td>
//                     <td>Congress</td>
//                     <td>Dragonereum</td>
//                     <td>ParityTech</td>
//                 </tr>
//                 <tr>
//                     <td>Name</td>
//                     <td>Wallet</td>
//                     <td>Chaingear</td>
//                     <td>Dragons</td>
//                     <td>ContractDeveloper</td>
//                 </tr>
//                 <tr>
//                     <td>Address</td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                     <td>
//                         {' '}
//                         <LinkHash value='0x727b557aeec8203A8e0f3f43FD30885d94399010' />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Developer</td>
//                     <td>Congress</td>
//                     <td>Congress</td>
//                     <td>Dragonereum</td>
//                     <td>ParityTech</td>
//                 </tr>
//             </tbody>
//         </TableRecords>
//     </DatabaseItemsContainer>
// );

// storiesOf('Atoms|DatabaseItemsContainer', module)
//     .addDecorator(centered)
//     .add('DatabaseItemsContainer', () => <Table />)
//     .add('DatabaseItemsContainerDisabled', () => <Table disabled />);
