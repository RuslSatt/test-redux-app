import React, { useEffect, useState } from 'react';
import styles from './BudgetPage.module.scss';
import { InputNumber, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, allCategories, getCategories } from '../redux/reducers/expenseCardReducer';
import Button from '../components/Button/Button';
import CardsList from '../components/Cards/CardsList';
import { nanoid } from '@reduxjs/toolkit';
import { deleteBalance } from '../redux/reducers/balanceReducer';

const BudgetPage = () => {
    const [sum, setSum] = useState(0);
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();

    const categories = useSelector(allCategories);

    const ref = React.useRef(false);

    useEffect(() => {
        if (ref.current === false) {
            dispatch(getCategories());
            ref.current = true;
        }
    }, [categories, dispatch]);

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

    const handleAddCard = () => {
        const model = {
            id: nanoid(),
            name: category.name,
            value: sum,
        };
        dispatch(addCard(model));
        dispatch(deleteBalance(sum));
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
