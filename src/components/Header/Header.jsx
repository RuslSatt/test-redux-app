import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ balance }) => {
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Budget of Family</h2>
            <Link className={styles.header__edit_budget} to="/edit-budget">
                <p>{balance} р.</p>
            </Link>
        </header>
    );
};

export default Header;
