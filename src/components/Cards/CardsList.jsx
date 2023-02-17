import React, { useEffect, useRef } from 'react';
import { useGetCardsQuery } from '../../redux/reducers/expenseCardReducer';
import Card from './Card';

const CardsList = () => {
    const { data: list, isSuccess } = useGetCardsQuery();

    if (!isSuccess) return;

    let content = '';

    if (!list?.length) content = 'Добавьте новый пункт';

    if (!content) {
        content = list.map(item => <Card key={item.id} item={item} />);
    }

    return <ul className="p-5">{content}</ul>;
};

export default CardsList;
