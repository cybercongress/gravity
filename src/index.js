import './index.less';

import Title from './components/Title/Title';

import {
    Badge,
    FooterButton,
    Section,
    SectionTabs,
    SectionContent,
    Container as MainContainer,
    FundContainer,
    Centred,
    CentredPanel,
    TotalCost,
} from './components/chaingear';
import {
    Container,
    Link as ActionLink,
} from './components/CallToAction';
import {
    LinkHash,
} from './components/LinkHash';
import {
    Message,
} from './components/Message';
import {
    BlockRow,
} from './components/BlockRow/BlockRow';
import {
    ParamRow,
} from './components/ParamRow/ParamRow';
import {
    WideInput,
    WideSelect,
} from './components/Input/WideInput';
import {
    FlexContainerLeft,
    FlexContainerRight,
    FlexContainer,
} from './components/DbHeader/DbHeader';
import {
    DbMenu,
} from './components/DbMenu/DbMenu';
import {
    MenuPopup,
    MenuPopupItem,
    MenuSeparator,
    MenuPopupDeleteIcon,
    MenuPopupEditIcon,
    MenuPopupTransferIcon,
    MenuPopupPauseIcon,
    MenuPopupResumeIcon,
    MenuPopupAccountIcon,
} from './components/MenuPopup/MenuPopup';
import {
    Popup,
    PopupContent,
    PopupFooter,
    PopupTitle,
    PopupSkillBar,
    PopupBar,
    PopupBarFooter,
    PopupNotification,
} from './components/Popup/Popup';

import {
    BenContainer,
    BenPieChart,
    BenList,
    Ben,
} from './components/Beneficiary/Ben';
import {
    DarkPanel,
} from './components/DarkPanel/DarkPanel';
import {
    ProgressBar,
} from './components/ProgressBar/ProgressBar';
import CircleLable from './components/ProgressBar/CricleLable';
import Table, {
    HomeTable,
    TableRow,
    TableItem,
    TableAddRow,
    TableRegistry,
    TableItemBen,
} from './components/Table/Table';
import {
    Checkbox,
} from './components/Checkbox/index';
import {
    AddNewRecordButton,
    Button,
} from './components/Button/button';
import FormField from './components/FormField/FormFild';
import ValueInput from './components/ValueInput';
import {
    TableRecords,
} from './components/TableRecords/TableRecords';
import {
    ContentLine,
    ContentLineTextInput,
    LineControl,
    ContentInput,
    LineTitle,
    ContentLineFund,
} from './components/PopupContent/PopupContent';
import { DatabaseItemsContainer } from './components/DatabaseTable/DatabaseItemsContainer';
import { DbMenuPoints } from './components/DbMenuPoints/DbMenuPoints';
import { SkillBar } from './components/SkillBar/SkillBar';
import { Text } from './components/Text/Text';
import {
    SearchItem,
} from './components/SearchItem/SearchItem';

import {
    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar,
} from './components/browser/Browser';

import {
    calculateBensShares,
} from './components/utils/utils';
import {
    InfoButton,
} from './components/DatabaseItem/index';

import {
    Content,
    ContainerRegister,
    SideBar,
    FieldsTable,
    Panel,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    AddButton,
} from './components/newregistry';

import {
    AddField,
} from './components/newregistry/AddField';

import StatusBar from './components/StatusBar';
import {
    LinkContainer,
} from './components/LinkContainer/LinkContainer';
import {
    Vitalick,
} from './components/Vitalick/vitalick';

import Code from './components/SolidityHighlight';
import { Status } from './components/Popup/status';


export {
    Title,
    Badge,
    FooterButton,
    Button,
    Container,
    Text,
    ActionLink,
    Section,
    SectionTabs,
    SectionContent,
    MainContainer,
    FundContainer,
    LinkHash,
    Centred,
    CentredPanel,
    TotalCost,
    Message,
    TableRecords,

    Content,
    ContainerRegister,
    SideBar,
    FieldsTable,
    Panel,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    AddButton,
    AddField,
    StatusBar,
    Code,
    BlockRow,
    ParamRow,
    WideInput,
    WideSelect,
    Checkbox,
    AddNewRecordButton,
    MenuPopupEditIcon,
    SkillBar,

    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar,

    FlexContainerLeft,
    FlexContainerRight,
    FlexContainer,
    DbMenu,
    MenuPopup,
    MenuPopupItem,
    MenuSeparator,
    MenuPopupDeleteIcon,
    MenuPopupTransferIcon,
    MenuPopupPauseIcon,
    MenuPopupResumeIcon,
    MenuPopupAccountIcon,
    Popup,
    PopupContent,
    PopupFooter,
    PopupTitle,
    PopupSkillBar,
    PopupBar,
    PopupBarFooter,
    BenContainer,
    BenPieChart,
    BenList,
    Ben,

    DarkPanel,

    ProgressBar,
    CircleLable,

    Table,
    HomeTable,
    TableRow,
    TableItem,
    TableAddRow,
    TableItemBen,
    TableRegistry,

    ContentLine, ContentLineTextInput, LineControl,
    ContentInput, LineTitle, ContentLineFund,
    FormField, ValueInput,

    DatabaseItemsContainer, DbMenuPoints,
    calculateBensShares,
    InfoButton,
    SearchItem,
    LinkContainer,
    Vitalick,

    Status,
    PopupNotification,
};
