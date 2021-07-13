import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCoinRow = styled.td`
    border: 1px solid #ccc;
    width: 6vw;
`;

const TdCoinName = styled(TdCoinRow)`
    width: 16vw;
`;

const TdAction = styled(TdCoinRow)`
    width: 18vw;
`;

const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Coin(props) {
    const doCoinRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.doCoinRefresh(props.ticker);
    }
    const doCoinBuy = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.doHandleTransaction(true, props.tickerId);
    }
    const doCoinSell = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.doHandleTransaction(false, props.tickerId);
    }

    return (
        <tr>
            <TdCoinName>{props.name}</TdCoinName>
            <TdCoinRow>{props.ticker}</TdCoinRow>
            <TdCoinRow>${props.price}</TdCoinRow>
            <TdCoinRow>{props.showBalance ? props.balance : '-'}</TdCoinRow>
            <TdAction>
                <Button className="btn btn-info" onClick={doCoinRefresh}>Refresh</Button>
                <Button className="btn btn-warning" onClick={doCoinBuy}>Buy</Button>
                <Button className="btn btn-danger" onClick={doCoinSell}>Sell</Button>
            </TdAction>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

