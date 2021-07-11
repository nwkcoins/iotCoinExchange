import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivAccountBalance = styled.div`
    text-align: center;
`;

const SectionAccountBalance = styled.section`
    display: inline-block;
    font-size: 2rem;
    text-align: center;
    padding: 1rem 1rem 1.5rem 1rem;
    border: 2px solid grey;
`;

export default class AccountBalance extends Component {
    constructor(props) {
        super(props);
        this.btnBalanceDisplay = this.btnBalanceDisplay.bind(this);
    }

    btnBalanceDisplay(event) {
        event.preventDefault();
        this.props.doBalanceDisplay(!this.props.showBalance);
    }

    render() {
        const btnText = (this.props.showBalance ? 'Hide' : 'Show') + ' balance';
        return (
            <DivAccountBalance>
                <SectionAccountBalance>
                    <span style={{display:this.props.showBalance ? 'flex' : 'none'}}>Accountbalance: ${this.props.amount}</span>
                    <button onClick={this.btnBalanceDisplay}>{btnText}</button>
                </SectionAccountBalance>
            </DivAccountBalance>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}