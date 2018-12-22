import './index.less'

import Title from './components/Title/Title'

import {
    Badge, FooterButton,
    Section, SectionTabs, SectionContent,
    Container as MainContainer,
    FundContainer, Centred,
    Button,
    BoxTitle,
    TotalCost,
    RightContainer
} from './components/chaingear';
import { Container, Text, Link as ActionLink } from './components/CallToAction';
import { LinkHash } from './components/LinkHash';
import { Message } from './components/Message'
import { BlockRow } from "./components/BlockRow/BlockRow";
import { ParamRow } from "./components/newregistry/ParamRow/ParamRow";
import { WideInput,  WideSelect } from "./components/newregistry/WideInput/WideInput";
import { Description } from "./components/newregistry/Description/Description";
import { DbHeader, DbHeaderLeft, DbHeaderRight, DbHeaderLine, DbHeaderName } from './components/DbHeader/DbHeader'
import { DbMenu } from "./components/DbMenu/DbMenu";
import { MenuPopup, MenuPopupItem, MenuSeparator, MenuPopupDeleteIcon, MenuPopupEditIcon, MenuPopupPauseIcon, MenuPopupResumeIcon, MenuPopupTransferIcon } from './components/MenuPopup/MenuPopup';
import { BenContainer, BenPieChart, BenList, Ben } from "./components/Beneficiary/Ben";
import {DarkPanel} from "./components/newregistry/DarkPanel/DarkPanel";
import {ProgressBar} from "./components/newregistry/ProgressBar/ProgressBar";
import CircleLable from './components/newregistry/ProgressBar/CricleLable';
import Table, { HomeTable, TableRow, TableItem, TableAddRow } from './components/Table/Table';
import {
ContentLine,
ContentLineTextInput,
LineControl,
ContentInput,
LineTitle,
LineText,
ContentLineFund
} from './components/PopupContent/PopupContent';
import { Popup, PopupButton, PopupTitle, PopupContent, PopupFooter } from './components/Popup/Popup';

import {
    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar
} from './components/browser/Browser';

import {
    Content, ContainerRegister, SideBar,
    FieldsTable,
    Panel,
    Label,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    ErrorMessage,
    AddButton
} from './components/newregistry';

import { AddField } from './components/newregistry/AddField';

import StatusBar from './components/StatusBar';

import Code from './components/SolidityHighlight';

export {
    Title,
    Badge, FooterButton, Button,
    Container, Text, ActionLink,
    Section, SectionTabs, SectionContent,
    BoxTitle,
    MainContainer,
    FundContainer,
    LinkHash,
    Centred,
    TotalCost,
    Message,

    Content, ContainerRegister, SideBar,
    FieldsTable,
    Panel,
    Label,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    ErrorMessage,
    AddButton,
    AddField,
    StatusBar,
    Code,
    RightContainer,
    BlockRow,
    ParamRow,
    WideInput,
    WideSelect,
    Description,


    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar,

    DbHeader, DbHeaderLeft, DbHeaderRight, DbHeaderLine, DbHeaderName,
    DbMenu,
    MenuPopup, MenuPopupItem, MenuSeparator, MenuPopupDeleteIcon, MenuPopupEditIcon, MenuPopupPauseIcon, MenuPopupResumeIcon, MenuPopupTransferIcon,
    Popup, PopupContent, PopupFooter, PopupTitle,
    BenContainer, BenPieChart, BenList, Ben,

    DarkPanel,

    ProgressBar, CircleLable,

    Table, HomeTable, TableRow, TableItem, TableAddRow,

    ContentLine, ContentLineTextInput, LineControl, ContentInput, LineTitle, LineText, ContentLineFund, PopupButton,
}
