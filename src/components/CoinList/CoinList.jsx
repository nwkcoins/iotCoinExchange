import React, { Component } from 'react'
import Coin from '../Coin/Coin';

export default class CoinList extends Component {
    render() {
        return (
            <table className="coin-table">
            <thead>
                <tr><th>Name</th><th>Ticker</th><th>Price</th>
                <th style={{display:this.props.showBalance ? 'block' : 'none'}}>Balance</th>
                <th>Action</th></tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map( ({name, ticker, price, balance}) => 
                  <Coin key={ticker} 
                  doCoinRefresh={this.props.doCoinRefresh}
                  showBalance={this.props.showBalance}
                  name={name} ticker={ticker} balance={balance} price={price} />
                )
              }
            </tbody>
          </table>
          );
    }
}