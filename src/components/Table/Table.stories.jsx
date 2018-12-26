import React from "react";
import { storiesOf } from "@storybook/react";
import Table, { TableRow, TableItem, TableAddRow } from "./Table";
import { AddButton, RemoveButton } from "../newregistry";
import { LinkHash } from "../..";


storiesOf('Table', module)
    .add('table', () => (
        <Table>
            <TableRow>
                <TableItem>
                    <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618"/>
                </TableItem>
                <TableItem>1</TableItem>
                <TableItem>1 %</TableItem>
                <TableItem>
                    <RemoveButton/>
                </TableItem>
            </TableRow>
            <TableRow>
                <TableItem>
                    <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618"/>
                </TableItem>
                <TableItem>2</TableItem>
                <TableItem>50 %</TableItem>
                <TableItem>
                    <RemoveButton/>
                </TableItem>
            </TableRow>
        </Table>
    ))
    
    .add('table_Input', () => (
        <Table>
            <TableAddRow>
                <input />
                <input />
                <span>100%</span>
                <AddButton/>
            </TableAddRow>
        </Table>
    ));

