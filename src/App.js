import { useEffect, useState } from "react";

function App() {
  //TO-DO LIST
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //todo database

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //if there's nothing typed, return nothing
    }
    setToDo(""); //submit -> empty the input
    setToDos((currentArray) => [toDo, ...currentArray]); //toDos === [] === currentArray
  };
  //COIN TRACKER
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [currentUSD, setCurrentUSD] = useState(1);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //array에 넣어줌
        setLoading(false); //loading = false
      });
  }, []);

  //현재 보유한 usd로 선택한 코인을 얼마나 살수 있는가?
  const onSelect = (event) => {
    //select에서 선택하면
    console.log(event.target.value);
    console.log(event.target.name);
    setCost(event.target.value); // cost = 해당선택값 (코인가격)
  };

  const handleInput = (event) => {
    setCurrentUSD(event.target.value); //현재 보유 usd 입력 = need
  };

  return (
    <div>
      <div id="todolist">
        <h1>My To-dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
          />
          <button>Add To-Do</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div id="coinTracker">
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={onSelect}>
            <option>Select Coin!</option>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price} name={coin.name}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
        <div>
          <h2>Enter your USD amount.</h2>
          <div>
            <input
              onChange={handleInput}
              type="number"
              value={currentUSD}
              placeholder="type your usd to exchange"
            />
            $
          </div>
          <h2>You can get {currentUSD / cost}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
