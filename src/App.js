import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import axios from 'axios';

//import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";

const COIN_COUNT = 5;
const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const TICKER_URL = 'https://api.coinpaprika.com/v1/tickers/';
const DECIMALS = 6;
const formatPrice = price => parseFloat(Number(price).toFixed(DECIMALS));

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
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
    setCoinData(coinPriceData);
  }

  useEffect( () => {
    if (coinData.length === 0) {
      // component did mount
      componentDidMount();
    } else {
      // component did update
    }
  });

  //componentDidUpdate = () => {
  //  console.log('componentDidUpdate');
  //}

  const doCoinRefresh = async (selectedTicker) => {
    let newCoinData = coinData;
    for (var key in newCoinData) {
      if (newCoinData[key].ticker === selectedTicker) {
        const ticker = await axios.get(TICKER_URL + newCoinData[key].key);
        newCoinData[key].price = formatPrice(ticker.data.quotes['USD'].price);
        setCoinData(newCoinData);
        break;
      }
    };
  }

  const doHandleTransaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map( values => {
      let newValues = {...values};
      if (values.key === valueChangeId) {
        console.log(values);
        newValues.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * newValues.price);
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  /*doBalanceDisplay = (setBalanceDisplay) => {
    this.setState({showBalance: setBalanceDisplay});
  }*/
  const doBalanceDisplay = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const doAddBalance = () => {
    setBalance(oldValue => oldValue + 1200);
  }

  return (
    <div className="App">
      <AppHeader />
      <AccountBalance amount={balance} showBalance={showBalance} doBalanceDisplay={doBalanceDisplay} doAddBalance={doAddBalance} />
      <CoinList coinData={coinData} showBalance={showBalance} doHandleTransaction={doHandleTransaction} doCoinRefresh={doCoinRefresh} />
    </div>
  );
}

export default App;
