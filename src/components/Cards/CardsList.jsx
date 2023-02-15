import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCards, getCards } from '../../redux/reducers/expenseCardReducer';
import Card from './Card';

const CardsList = () => {
    const dispatch = useDispatch();
    const list = useSelector(getAllCards);

    let content = '';

    const ref = useRef(false);

    useEffect(() => {
        if (!list?.length) {
            if (!ref.current) {
                dispatch(getCards());
                ref.current = true;
            }
        }
    }, [dispatch]);

    if (!list?.length) content = 'Добавьте новый пункт';

    if (!content) {
        content = list.map(item => <Card key={item.id} item={item} />);
    }

    return <ul className="p-5">{content}</ul>;
};

export default CardsList;
