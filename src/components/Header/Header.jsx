import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { budget } from '../../redux/reducers/budgetReducer';

const Header = () => {
    const budgetValue = useSelector(budget);
    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Budget of Family</h2>
            <Link className={styles.header__edit_budget} to="/edit-budget">
                <p>{budgetValue} р.</p>
            </Link>
        </header>
    );
};

export default Header;
