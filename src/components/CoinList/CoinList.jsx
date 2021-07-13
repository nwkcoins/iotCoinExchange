import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  font-size: 1rem;
  background-color: #4d6088;
  margin: 50px auto 50px auto;
  display: inline-block;
`;

export default function CoinList(props) {
  return (
      <Table classNameNot="table table-primary table-bordered">
      <thead>
          <tr><th>Name</th><th>Ticker</th><th>Price</th><th>Balance</th><th>Action</th></tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) => 
            <Coin key={key} 
            doCoinRefresh={props.doCoinRefresh}
            doHandleTransaction={props.doHandleTransaction}
            showBalance={props.showBalance}
            name={name} ticker={ticker} balance={balance} price={price} tickerId={key} />
          )
        }
      </tbody>
    </Table>
    );
}