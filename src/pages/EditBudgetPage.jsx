import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './EditBudgetPage.module.scss';
import { useEditBalanceMutation } from '../redux/reducers/balanceReducer';

const EditBudgetPage = () => {
    const [value, setValue] = useState('');

    const [editBalance] = useEditBalanceMutation();

    const handleEditBudget = async () => {
        if (!value) return;
        const balance = { value: Number(value) };
        await editBalance(balance);
        setValue('');
    };

    return (
        <div className={styles.edit_card}>
            <Input value={value} setValue={setValue} text={'Введите сумму вашего бюджета'} />
            <Button
                handleSubmit={handleEditBudget}
                text={'Сохранить'}
                className={styles.edit_card__button}
                onClick={handleEditBudget}
            />
        </div>
    );
};

export default EditBudgetPage;
