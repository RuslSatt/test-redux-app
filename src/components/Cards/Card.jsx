import React from 'react';

const Card = ({ item }) => {
    return (
        <li>
            <p>{item.name}</p>
            <p>{item.value}</p>
        </li>
    );
};

export default Card;
