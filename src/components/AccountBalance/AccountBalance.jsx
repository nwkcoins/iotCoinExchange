import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionAccountBalance = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <SectionAccountBalance>
                Accountbalance: ${this.props.amount}
            </SectionAccountBalance>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}