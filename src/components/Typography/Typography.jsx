import * as React from 'react';
import {
    Text as TextEv,
    Heading as HeadingEv,
    Code as CodeEv,
    Paragraph as ParagraphEv,
    Link as LinkEv,
    Strong as StrongEv,
} from 'evergreen-ui';

export const Heading = ({ children, ...props }) => (
    <HeadingEv { ...props }>
        {children}
    </HeadingEv>
);

export const Text = ({ children, ...props }) => (
    <TextEv { ...props }>
        {children}
    </TextEv>
);

export const Strong = ({ children, ...props }) => (
    <StrongEv { ...props }>
        {children}
    </StrongEv>
);

export const Paragraph = ({ children, ...props }) => (
    <ParagraphEv { ...props }>
        {children}
    </ParagraphEv>
);

export const Link = ({ children, ...props }) => (
    <LinkEv { ...props }>
        {children}
    </LinkEv>
);

export const Code = ({ children, ...props }) => (
    <CodeEv { ...props }>
        {children}
    </CodeEv>
);
