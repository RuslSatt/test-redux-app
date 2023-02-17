import React, { useEffect, useState } from 'react';
import styles from './BudgetPage.module.scss';
import { InputNumber, Select } from 'antd';
import { useAddCardMutation, useGetCategoriesQuery } from '../redux/reducers/expenseCardReducer';
import Button from '../components/Button/Button';
import CardsList from '../components/Cards/CardsList';
import { nanoid } from '@reduxjs/toolkit';
import { useEditBalanceMutation } from '../redux/reducers/balanceReducer';

const BudgetPage = ({ balance }) => {
    const [sum, setSum] = useState(0);
    const [category, setCategory] = useState(null);

    const { data: categories, isSuccess } = useGetCategoriesQuery();
    const [addCard] = useAddCardMutation();
    const [editBalance] = useEditBalanceMutation();

    if (!isSuccess) return;

    const options = categories?.map(model => {
        return {
            value: model.id,
            label: model.name,
        };
    });

    const handleSelect = id => {
        const foundCategory = categories.find(item => item.id === id);
        setCategory(foundCategory);
    };

    const handleAddCard = async () => {
        const model = {
            id: nanoid(),
            name: category.name,
            value: sum,
        };
        await addCard(model);
        const result = balance - sum;
        const dataBalance = { value: Number(result) };
        editBalance(dataBalance);
    };

    return (
        <div>
            <div className={styles.budget}>
                <div className={styles.budget__category}>
                    <p>Выберите категорию расходов</p>
                    <Select
                        onChange={handleSelect}
                        options={options}
                        style={{ width: 230 }}
                    ></Select>
                </div>
                <div className={styles.budget__summary}>
                    <label htmlFor="number">Введите сумму</label>
                    <InputNumber defaultValue={sum} onChange={e => setSum(e)} />
                </div>
                <div className="lg:ml-auto">
                    <Button handleSubmit={handleAddCard} text={'Добавить'} />
                </div>
            </div>
            <div className={styles.cards}>
                <CardsList />
            </div>
        </div>
    );
};

export default BudgetPage;
