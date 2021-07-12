import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import axios from 'axios';

const COIN_COUNT = 5;
const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const TICKER_URL = 'https://api.coinpaprika.com/v1/tickers/';
const DECIMALS = 6;
const formatPrice = price => parseFloat(Number(price).toFixed(DECIMALS));

class App extends React.Component {
  state = {
    balance: 1000,
    showBalance: false,
    coinData: []
  }

  componentDidMount = async () => {
    const response = await axios.get(COINS_URL);
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const promises = coinIds.map( id => axios.get(TICKER_URL + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map( response => {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        price: formatPrice(coin.quotes['USD'].price),
        balance: 0,        
      };
    });
    this.setState( {coinData: coinPriceData} );
  }
  //componentDidUpdate = () => {
  //  console.log('componentDidUpdate');
  //}

  doCoinRefresh = async (selectedTicker) => {
    let newCoinData = this.state.coinData;
    for (var key in newCoinData) {
      if (newCoinData[key].ticker === selectedTicker) {
        const ticker = await axios.get(TICKER_URL + newCoinData[key].key);
        newCoinData[key].price = formatPrice(ticker.data.quotes['USD'].price);
        this.setState({coinData: newCoinData});
        break;
      }
    };
  }

  doBalanceDisplay = (setBalanceDisplay) => {
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
