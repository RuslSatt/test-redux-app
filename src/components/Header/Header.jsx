import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { balance, getBalance } from '../../redux/reducers/balanceReducer';

const Header = () => {
    const dispatch = useDispatch();
    let balanceValue = useSelector(balance);

    useEffect(() => {
        balanceValue = dispatch(getBalance());
    }, []);

    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Budget of Family</h2>
            <Link className={styles.header__edit_budget} to="/edit-budget">
                <p>{balanceValue} р.</p>
            </Link>
        </header>
    );
};

export default Header;
