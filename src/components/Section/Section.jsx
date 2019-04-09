import * as React from 'react';
import cx from 'classnames';
import {
    Pane,
    Text,
} from 'evergreen-ui';

const styles = require('./Section.less');

export const Paper = ({ children, flex, direction }) =>(
    <div className={ cx(styles.paper, {
                        [styles.paperFlex]: flex,
                        [styles.paperDirectionColumn]: direction === 'column',
                        [styles.paperDirectionRow]: direction === 'row',
                    }) }
    >
        {children}
    </div>
);

export const SectionTabs = ({ children }) => (
    <div className={ styles.sectionTabContainer }>{children}</div>
);

export const SectionTitle = ({ children }) => (
    <h3 className={ styles.sectionTitle }>
        {children}
    </h3>
);

export const Section = ({ title, children, ...props }) => (
    <Pane marginBottom={ 40 }>
        <Text display='inline-block' marginBottom={ 16 } fontSize='20px' color='#ffffff'>
            {title}
        </Text>
        <Pane { ...props } display='flex'>
            {children}
        </Pane>
    </Pane>
);


export const SectionContent = ({ children, title, grow = 1, style, ...props}) => (
    <div className={ styles.sectionContent } style={ { flexGrow: grow, ...style } }>
        {title && <SectionTitle>{title}</SectionTitle>}
        <Paper {...props}>{children}</Paper>
    </div>
);
