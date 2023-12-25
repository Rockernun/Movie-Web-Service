import {useState, useEffect} from "react";

function App() {
  const [selectCoins, setSelectCoins] = useState("0");
  const [result, setResult] = useState("0");
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

const onChange = (event) => {
  setSelectCoins(event.target.value);
}

const onSubmit = (event) => {
  event.preventDefault();
  const priceUSD = event.target[0].value;
  calculate(priceUSD);
}

const calculate = (priceUSD) => {
  setResult(priceUSD / selectCoins);
}

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(response => 
    response.json()
    ).then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>) : 
      <select onChange={onChange}>{coins.map((coin, index) =>
      <option key={index} value={coin.quotes.USD.price}>
        {coin.name} : {coin.quotes.USD.price}
      </option>)}
        </select>}
        <form onSubmit={onSubmit}>
          <input type="number" placeholder="Insert US Dollar..." />
          <button>Exchange Coin...</button>
        </form>
        <h2>You can get {result} coins!</h2>
    </div>
  );
}

export default App;
