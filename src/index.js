import './index.less'

import Title from './components/Title/Title'

import {
    Badge, FooterButton,
    Section, SectionTabs, SectionContent,
    Container as MainContainer,
    FundContainer, Centred,CentredPanel,
    BoxTitle,
    TotalCost,
} from './components/chaingear';
import { Container, Link as ActionLink } from './components/CallToAction';
import { LinkHash } from './components/LinkHash';
import { Message } from './components/Message';
import { BlockRow } from './components/BlockRow/BlockRow';
import { ParamRow } from './components/newregistry/ParamRow/ParamRow';
import { WideInput, WideSelect } from './components/Input/WideInput';
import { Description } from './components/newregistry/Description/Description';
import { FlexContainerLeft, FlexContainerRight, FlexContainer } from './components/DbHeader/DbHeader'
import { DbMenu } from './components/DbMenu/DbMenu';
import { MenuPopup, MenuPopupItem, MenuSeparator, MenuPopupDeleteIcon,MenuPopupDeletePencilIcon, MenuPopupEditIcon, MenuPopupPauseIcon, MenuPopupResumeIcon, MenuPopupTransferIcon } from './components/MenuPopup/MenuPopup';
import { Popup, PopupContent, PopupFooter, PopupTitle, PopupButton, PopupSkillBar, PopupBar, PopupBarFooter, PopupBarButton, } from './components/Popup/Popup';
import { BenContainer, BenPieChart, BenList, Ben } from './components/Beneficiary/Ben';
import {DarkPanel} from './components/newregistry/DarkPanel/DarkPanel';
import {ProgressBar} from './components/ProgressBar/ProgressBar';
import CircleLable from './components/ProgressBar/CricleLable';
import Table, { HomeTable, TableRow, TableItem, TableAddRow, TableRegistry, TableItemBen } from './components/Table/Table';
import { Checkbox } from './components/Checkbox/index';
import { AddNewRecordButton, Button } from './components/Button/button';
import FormField from './components/FormField/FormFild';
import ValueInput from  './components/ValueInput';
import { TableRecords } from './components/TableRecords/TableRecords';
import {
ContentLine,
ContentLineTextInput,
LineControl,
ContentInput,
LineTitle,
LineText,
ContentLineFund,
} from './components/PopupContent/PopupContent';
import { SearchItem } from './components/SearchItem/SearchItem';

import { SkillBar } from './components/SkillBar/SkillBar';
import { Text } from './components/Text/Text';

import {
    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar,
} from './components/browser/Browser';

import { calculateBensShares } from './components/utils/utils';
import { InfoButton } from './components/DatabaseItem/index';
import { DbMenuPoints } from './components/DbMenuPoints/DbMenuPoints';
import { DatabaseItemsContainer } from './components/DatabaseTable/DatabaseItemsContainer';

import {
    Content, ContainerRegister, SideBar,
    FieldsTable,
    Panel,
    PanelRecord,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    AddButton,
} from './components/newregistry';

import { AddField } from './components/newregistry/AddField';

import StatusBar from './components/StatusBar';
import { LinkContainer } from './components/LinkContainer/LinkContainer';

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
    CentredPanel,
    TotalCost,
    Message,
    TableRecords,

    Content, ContainerRegister, SideBar,
    FieldsTable,
    Panel,
    PanelRecord,
    //Label,
    CreateButton,
    Control,
    PageTitle,
    RemoveButton,
    AddButton,
    AddField,
    StatusBar,
    Code,
    //RightContainer,
    BlockRow,
    ParamRow,
    WideInput,
    WideSelect,
    Description,
    Checkbox,
    AddNewRecordButton,
    MenuPopupDeletePencilIcon,
    SkillBar,

    Browser,
    BrowserHeader,
    BrowserContent,
    BrowserSidebar,

    FlexContainerLeft, FlexContainerRight, FlexContainer,
    DbMenu,
    MenuPopup, MenuPopupItem, MenuSeparator, MenuPopupDeleteIcon, MenuPopupEditIcon, MenuPopupPauseIcon, MenuPopupResumeIcon, MenuPopupTransferIcon,
    Popup, PopupContent, PopupFooter, PopupTitle, PopupSkillBar, PopupBar, PopupBarFooter, PopupBarButton,
    BenContainer, BenPieChart, BenList, Ben,

    DarkPanel,

    ProgressBar, CircleLable,

    Table, HomeTable, TableRow, TableItem, TableAddRow, TableItemBen, TableRegistry,

    ContentLine, ContentLineTextInput, LineControl, ContentInput, LineTitle, LineText, ContentLineFund, PopupButton,
    FormField, ValueInput,calculateBensShares,InfoButton,DatabaseItemsContainer,DbMenuPoints,SearchItem, LinkContainer,
}
