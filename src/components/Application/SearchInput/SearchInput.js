import React from 'react';
import{
    TextInput,
    IconButton,
    Button,
} from 'evergreen-ui';
import style from './FavoriteButton.less';
import cx from 'classnames';

const styles = require('./SearchInput.less');

const SearchInput = ({ inputRef, ...props }) => (
    <TextInput { ...props } ref={ inputRef } className={styles.SearchInput} />
);


export const BackButton = props => (
    <button { ...props } className={styles.BackButton} />
);

export const ForwardButton = props => (
    <button { ...props } className={styles.ForwardButton} />
);

export const NavigationContainer = ({ children }) => (
    <div className={styles.NavigationContainer}>
        {children}
    </div>
);


export const FavoriteButtonContainer = ({ children }) => (
    <div className={style.container}>
        {children}
    </div>
);

export const FavoriteButton = ({ isFavorited, ...props }) => {
    const className = `${style.button} ${isFavorited ? style.buttonFavorite : ''}`;
    return (
        // <button className={ className } {...props} />
        <IconButton {...props} className={ className } />
    );
}

export const SearchIcon = (props) => (
    <div {...props} className={style.searchIcon}/>
)

export default SearchInput;
