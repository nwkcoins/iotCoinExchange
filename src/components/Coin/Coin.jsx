import React, { Component } from 'react';
//import './Coin.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCoinRow = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.doCoinReferesh = this.doCoinReferesh.bind(this);
    }

    doCoinReferesh(event) {
        // Prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            }
        });
        // needs to add the this.doCoinReferesh inside constructor
    }

    render() {
        return (
            <tr>
                <TdCoinRow>{this.props.name}</TdCoinRow>
                <TdCoinRow>{this.props.ticker}</TdCoinRow>
                <TdCoinRow>${this.state.price}</TdCoinRow>
                <TdCoinRow><button onClick={this.doCoinReferesh}>Refresh</button></TdCoinRow>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

