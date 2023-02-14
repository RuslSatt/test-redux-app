import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './EditBudgetPage.module.scss';
import { addBudget } from '../redux/reducers/budgetReducer';
import { useDispatch } from 'react-redux';

const EditBudgetPage = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleEditBudget = () => {
        if (!value) return;
        const numberValue = Number(value);
        dispatch(addBudget(numberValue));
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
