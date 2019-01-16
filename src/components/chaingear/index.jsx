import * as React from 'react';

const styles = require("./Chaingear.css");
import cx from 'classnames'; 

import { Link } from 'react-router';

export const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.containerInner}>
    {children}
    </div>
  </div>
);


export const Paper = ({ children }) => (
  <div className={styles.paper}>
    {children}
  </div>
);

export const Title = ({ children }) => (
  <h2 className={styles.titile}>
    {children}
  </h2>
);

export const Badge = ({ children }) => (
  <span className={styles.badge} >
    {children}
  </span>
);

export const FooterButton = (props) => (
    <Link {...props} className={styles.footerButton}/>
);

export const TotalCost = ({ value }) => (
  <div className={styles.totalCost}>
    <span>Total cost:</span>
    <span>{value} gwei</span>
  </div>
);

export const SectionTabs = ({ children }) => (
  <div className={styles.sectionTabContainer}>
    {children}
  </div>
);

export const SectionTitle = ({ children }) => (
  <h3 className={styles.sectionTitle}>
    {children}
  </h3>
);

export const Section = ({ children, title, ...props }) => (
    <div>
        {title && <SectionTitle>{title}</SectionTitle>}
        <div {...props} className={cx(styles.section, { [styles.sectionNoWrap]: props.noWrap,[styles.sectionNoMargin]: props.noMargin })}>
            {children} 
        </div>
    </div>
);

export const SectionContent = ({ children, title, grow = 1, style }) => (
  <div className={styles.sectionContent} style={{ flexGrow: grow, ...style }}>
    {title && <SectionTitle>{title}</SectionTitle>}
    <Paper>
    {children}
    </Paper>
  </div>
);

export const Centred = (props) => (
    <div {...props} className={styles.centred}/>
);

export const CentredPanel = (props) => (
  <div {...props} className={styles.CentredPanel}/>
);

export const FundContainer = (props) => (
    <div {...props} className={styles.fundContainer}/>
);
