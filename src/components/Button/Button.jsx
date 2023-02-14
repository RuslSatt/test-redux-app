import React from 'react';
import styles from './Button.module.scss';

const Button = ({ handleSubmit, text }) => {
    return (
        <button className={styles.button} onClick={handleSubmit}>
            {text}
        </button>
    );
};

export default Button;
