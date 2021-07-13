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
const Button = styled.button`
    margin: 0 8px;
`;
const ButtonBalanceToggle = styled(Button)`
    width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance(props) {
    const btnText = (props.showBalance ? 'Hide' : 'Show') + ' balance';
    const btnClass = 'btn btn-' + (props.showBalance ? 'warning' : 'info'); 
    return (
        <DivAccountBalance>
            <SectionAccountBalance>
                <span style={{display:props.showBalance ? 'flex' : 'none'}}>Accountbalance: ${props.amount}</span>
                <ButtonBalanceToggle onClick={props.doBalanceDisplay} className={btnClass}>{btnText}</ButtonBalanceToggle>
                <Button onClick={props.doAddBalance} className="btn btn-success"><i className="fas fa-helicopter"></i></Button>
            </SectionAccountBalance>
        </DivAccountBalance>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}