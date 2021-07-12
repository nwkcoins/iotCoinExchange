import React from 'react'
import Coin from '../Coin/Coin';

export default function CoinList(props) {
  return (
      <table className="coin-table">
      <thead>
          <tr><th>Name</th><th>Ticker</th><th>Price</th>
          <th style={{display:props.showBalance ? 'block' : 'none'}}>Balance</th>
          <th>Action</th></tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) => 
            <Coin key={key} 
            doCoinRefresh={props.doCoinRefresh}
            showBalance={props.showBalance}
            name={name} ticker={ticker} balance={balance} price={price} />
          )
        }
      </tbody>
    </table>
    );
}