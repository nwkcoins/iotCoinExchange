import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      showBalance: false,
      coinData: [
        { name:"Bitcoin",      ticker:"BTC",  balance: 0.5,  price:35000.90 },
        { name:"Ethereum",     ticker:"ETH",  balance: 32.0, price:2123.55 },
        { name:"Tether",       ticker:"USDT", balance: 0,    price:1.0 },
        { name:"Ripple",       ticker:"XRP",  balance: 1000, price:0.2 },
        { name:"Bitcoin Cash", ticker:"BCH",  balance: 10.0, price:399.99 },
      ]
    }
    this.doCoinRefresh = this.doCoinRefresh.bind(this);
    this.doBalanceDisplay = this.doBalanceDisplay.bind(this);
  }

  doCoinRefresh(selectedTicker) {
    const newCoinData = this.state.coinData.map( ({ticker, name, price, balance}) => {
      let newPrice = price;
      if (ticker === selectedTicker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice *= randomPercentage;
      }
      return {ticker, name, price:newPrice, balance};
    });
    this.setState({coinData: newCoinData}); // replaces only mentioned part
  }

  doBalanceDisplay(setBalanceDisplay) {
    this.setState({showBalance: setBalanceDisplay});
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} doBalanceDisplay={this.doBalanceDisplay} />
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} doCoinRefresh={this.doCoinRefresh} />
      </div>
    );
  }
}

export default App;
