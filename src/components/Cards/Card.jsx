import React from 'react';

const Card = ({ item }) => {
    return (
        <li className="flex gap-5 p-2 mb-3 border border-slate-500 justify-between">
            <p>Категория: {item.name}</p>
            <p>Сумма: {item.value}</p>
        </li>
    );
};

export default Card;
