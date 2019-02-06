import * as React from 'react';
import cx from 'classnames';

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

export const Section = ({ children, title, noWrap, noMargin, ...props }) => (
    <div>
        {title && <SectionTitle>{title}</SectionTitle>}
        <div { ...props } className={ cx(styles.section, { [styles.sectionNoMargin]: noMargin }) }>
            {children}
        </div>
    </div>
);


export const SectionContent = ({ children, title, grow = 1, style, ...props}) => (
    <div className={ styles.sectionContent } style={ { flexGrow: grow, ...style } }>
        {title && <SectionTitle>{title}</SectionTitle>}
        <Paper {...props}>{children}</Paper>
    </div>
);
