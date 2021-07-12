import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCoinRow = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`;

export default function Coin(props) {
    const doCoinRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        
        props.doCoinRefresh(props.ticker);
    }

    return (
        <tr>
            <TdCoinRow>{props.name}</TdCoinRow>
            <TdCoinRow>{props.ticker}</TdCoinRow>
            <TdCoinRow>${props.price}</TdCoinRow>
            <TdCoinRow style={{display:props.showBalance ? 'block' : 'none'}}>${props.balance}</TdCoinRow>
            <TdCoinRow><button onClick={doCoinRefresh}>Refresh</button></TdCoinRow>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

