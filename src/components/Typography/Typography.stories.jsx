import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
    Button,
    // Text,
    // Heading,
    // Strong,
    // Code,
    // Link,
    // Paragraph,
    Pane,
    UnorderedList,
    ListItem,
} from 'evergreen-ui';
import {
    Text,
    Heading,
    Strong,
    Code,
    Link,
    Paragraph,
} from './Typography';

storiesOf('Elements|Typography', module).add('Typography', () => (
    <Pane width='80%' marginX='auto' paddingTop='1em'>
        <Heading size={ 700 }>Text components</Heading>
        <UnorderedList>
            <ListItem>
                <Strong>Heading:</Strong>
                {' '}
used for headings. A
                <Code>h2</Code>
                {' '}
element by default.
            </ListItem>
            <ListItem>
                <Strong>Text:</Strong>
                {' '}
used for single line text. A
                <Code>span</Code>
                {' '}
element by
                default.
            </ListItem>
            <ListItem>
                <Strong>Paragraph:</Strong>
                {' '}
used for multiline text. A
                <Code>p</Code>
                {' '}
element by
                default.
            </ListItem>
            <ListItem>
                <Strong>Strong:</Strong>
                {' '}
used to make text strong. A
                <Code>strong</Code>
                {' '}
element by
                default.
            </ListItem>
            <ListItem>
                <Strong>Link:</Strong>
                {' '}
used for links. A
                <Code>a</Code>
                {' '}
element by default.
            </ListItem>
            <ListItem>
                <Strong>Code:</Strong>
                {' '}
used for inline code. A
                <Code>code</Code>
                {' '}
element by default.
            </ListItem>
        </UnorderedList>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>List components</Heading>
            <UnorderedList>
                <ListItem>
                    <Strong>OrderedList:</Strong>
                    {' '}
used for ordered lists. A
                    <Code>ol</Code>
                    {' '}
element.
                </ListItem>
                <ListItem>
                    <Strong>UnorderedList:</Strong>
                    {' '}
used for unordered lists. A
                    <Code>ul</Code>
                    {' '}
                    element.
                </ListItem>
                <ListItem>
                    <Strong>ListItem:</Strong>
                    {' '}
used as the list item in either an unordered list, or
                    ordered list. A
                    <Code>li</Code>
                    {' '}
element.
                </ListItem>
            </UnorderedList>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>Heading component</Heading>
            <Pane>
                <Heading size={ 100 } marginTop='default'>
                    100: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 200 } marginTop='default'>
                    200: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 300 } marginTop='default'>
                    300: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 400 } marginTop='default'>
                    400: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 500 } marginTop='default'>
                    500: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 600 } marginTop='default'>
                    600: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 700 } marginTop='default'>
                    700: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 800 } marginTop='default'>
                    800: The quick brown fox jumps over the lazy dog
                </Heading>
                <Heading size={ 900 } marginTop='default'>
                    900: The quick brown fox jumps over the lazy dog
                </Heading>
            </Pane>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading marginBottom={10} size={ 700 }>Text component</Heading>
            <div>
                <div>
                    <Text size={ 300 }>Size 300. The quick brown fox jumps over the lazy dog</Text>
                </div>
                <div>
                    <Text size={ 400 }>Size 400. The quick brown fox jumps over the lazy dog</Text>
                </div>
                <div>
                    <Text size={ 500 }>Size 500. The quick brown fox jumps over the lazy dog</Text>
                </div>
            </div>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>Paragraph component</Heading>
            <div>
                <Paragraph size={ 300 } marginTop='default'>
                    Size 300. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
                <Paragraph size={ 400 } marginTop='default'>
                    Size 400. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
                <Paragraph marginTop='default'>
                    Size 500. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
            </div>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>Link component</Heading>
            <div>
                <Link href='#' marginRight={ 12 }>
                    Default
                </Link>
                <Link href='#' marginRight={ 12 } color='green'>
                    Green
                </Link>
                <Link href='#' marginRight={ 12 } color='blue'>
                    Blue
                </Link>
                <Link href='#' marginRight={ 12 } color='neutral'>
                    Neutral
                </Link>
            </div>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>Strong component</Heading>
            <div>
                <div>
                    <Strong size={ 300 }>Size 300. The quick brown fox jumps over the lazy dog</Strong>
                </div>
                <div>
                    <Strong size={ 400 }>Size 400. The quick brown fox jumps over the lazy dog</Strong>
                </div>
                <div>
                    <Strong size={ 500 }>Size 500. The quick brown fox jumps over the lazy dog</Strong>
                </div>
            </div>
        </Pane>
        <Pane marginY={ 30 }>
            <Heading size={ 700 }>Code component</Heading>
            <div>
                <div>
                    <Code size={ 300 }>Size 300. The quick brown fox jumps over the lazy dog</Code>
                </div>
                <div>
                    <Code size={ 400 }>Size 400. The quick brown fox jumps over the lazy dog</Code>
                </div>
                <div>
                    <Code size={ 500 }>Size 500. The quick brown fox jumps over the lazy dog</Code>
                </div>
                <div>
                    <Code size={ 300 } appearance='minimal'>
                    Size 300 and appearance minimal. The quick brown fox jumps over the lazy dog
                    </Code>
                </div>
                <div>
                    <Code size={ 400 } appearance='minimal'>
                    Size 400 and appearance minimal. The quick brown fox jumps over the lazy dog
                    </Code>
                </div>
                <div>
                    <Code size={ 500 } appearance='minimal'>
                    Size 500 and appearance minimal. The quick brown fox jumps over the lazy dog
                    </Code>
                </div>
            </div>
        </Pane>
    </Pane>
));
