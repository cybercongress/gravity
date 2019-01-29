import { Component } from 'react';
import React from 'react';

const styles = require('./settings.css');

export const SettingsContainer = props => (
    <div { ...props } className={styles.SettingsContainer} />
);

export const ConnectionContainer = props => (
    <div { ...props } className={styles.ConnectionContainer} />
);

export const NodeStatusContainer = props => (
    <div { ...props } className={styles.NodeStatusContainer} />
);

export const SettingLabel = props => (
    <span { ...props } className={styles.SettingLabel} />
);

export const SettingRow = props => (
    <div { ...props } className={styles.SettingRow} />
);
