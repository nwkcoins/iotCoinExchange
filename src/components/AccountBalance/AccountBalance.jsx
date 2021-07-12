import React from 'react';
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

export default function AccountBalance(props) {
    const btnBalanceDisplay = (event) => {
        event.preventDefault();
        props.doBalanceDisplay(!props.showBalance);
    }

    const btnText = (props.showBalance ? 'Hide' : 'Show') + ' balance';
    return (
        <DivAccountBalance>
            <SectionAccountBalance>
                <span style={{display:props.showBalance ? 'flex' : 'none'}}>Accountbalance: ${props.amount}</span>
                <button onClick={btnBalanceDisplay}>{btnText}</button>
            </SectionAccountBalance>
        </DivAccountBalance>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}