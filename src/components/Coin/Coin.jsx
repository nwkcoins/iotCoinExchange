import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCoinRow = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`;

export default class Coin extends Component {
    doCoinRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        
        this.props.doCoinRefresh(this.props.ticker);
    }

    render() {
        return (
            <tr>
                <TdCoinRow>{this.props.name}</TdCoinRow>
                <TdCoinRow>{this.props.ticker}</TdCoinRow>
                <TdCoinRow>${this.props.price}</TdCoinRow>
                <TdCoinRow style={{display:this.props.showBalance ? 'block' : 'none'}}>${this.props.balance}</TdCoinRow>
                <TdCoinRow><button onClick={this.doCoinRefresh}>Refresh</button></TdCoinRow>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

