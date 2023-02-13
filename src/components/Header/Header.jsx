import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Budget of Family</h2>
        </header>
    );
};

export default Header;
