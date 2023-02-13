import React, { useEffect } from 'react';
import styles from './BudgetPage.module.scss';
import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { allCategories, getCategories, selectCategory } from '../redux/reducers/categoryReducer';

const BudgetPage = () => {
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
        dispatch(selectCategory(id));
    };

    console.log();

    return (
        <div className={styles.budget}>
            <div className={styles.budget__category}>
                <p>Выберите категорию расходов</p>
                <Select onChange={handleSelect} options={options} style={{ width: 230 }}></Select>
            </div>
        </div>
    );
};

export default BudgetPage;
