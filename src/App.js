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
      coinData: [
        { name:"Bitcoin",  ticker:"BTC",  price:35000.90 },
        { name:"Ethereum", ticker:"ETH",  price:2123.55 },
        { name:"Tether",   ticker:"USDT", price:1.0 },
        { name:"Ripple",   ticker:"XRP",  price:0.2 },
        { name:"Bitcoin Cash", ticker:"BCH",  price:399.99 },
      ]
    }
    this.doCoinRefresh = this.doCoinRefresh.bind(this);
  }

  doCoinRefresh(selectedTicker) {
    //const coin = this.state.coinData.find( ({ticker}) => ticker === selectedTicker );
    //console.log(coin);

    const newCoinData = this.state.coinData.map( ({ticker, name, price}) => {
      let newPrice = price;
      if (ticker === selectedTicker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice *= randomPercentage;
      }
      return {ticker, name, price:newPrice};
    });
    this.setState({coinData: newCoinData}); // replaces only mentioned part
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AccountBalance amount={this.state.balance} />
      <CoinList coinData={this.state.coinData} doCoinRefresh={this.doCoinRefresh} />
      </div>
    );
  }
}

export default App;
