import * as React from 'react';
import cx from 'classnames';

const styles = require('./Section.css');

export const Paper = ({ children }) => <div className={ styles.paper }>{children}</div>;

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


export const SectionContent = ({ children, title, grow = 1, style }) => (
    <div className={ styles.sectionContent } style={ { flexGrow: grow, ...style } }>
        {title && <SectionTitle>{title}</SectionTitle>}
        <Paper>{children}</Paper>
    </div>
);
