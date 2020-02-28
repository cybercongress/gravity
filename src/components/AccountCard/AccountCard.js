import React from 'react';

const styles = require('./AccountCard.less');

//import './AccountCard.css';

export const AccountCard = props => (
    <div { ...props } className={styles.account_card} />
);

export const AccountCardLeft = props => (
    <div { ...props } className={styles.account_card__left} />
);

export const AccountCardRight = props => (
    <div { ...props } className={styles.account_card__right} />
);


export const AccountCardContent = props => (
    <div { ...props } className={styles.account_card__content} />
);

export const AccountCardContentItem = props => (
    <div { ...props } className={styles.account_card__content_item} />
);

export const MainIndecator = props => (
    <div { ...props } className={styles.account_card__main_indecator}>main</div>
);

export const SelectButton = props => (
    <button { ...props } className={styles.account_card__select_btn} />
);

export const CreateButtonContainer = props => (
    <div { ...props } className={styles.account_card__create_button_container} />
);
