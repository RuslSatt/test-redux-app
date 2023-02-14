import React from 'react';
import styles from './Input.module.scss';

const Input = ({ value, setValue, text }) => {
    return (
        <div className={styles.input}>
            <label className={styles.input__label} htmlFor="sum">
                {text}
            </label>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                className={styles.input__elem}
                type="text"
                name="summary"
                id="sum"
            />
        </div>
    );
};

export default Input;
