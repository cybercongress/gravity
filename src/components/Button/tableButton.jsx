import * as React from 'react';

const styles = require('./tableButton.css');

export const RemoveButton = props => <button {...props} className={styles.removeButton} />;

export const AddButton = props => <button {...props} className={styles.addButton} />;
