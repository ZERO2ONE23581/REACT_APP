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
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //array에 넣어줌
        setLoading(false); //loading = false
      });
  }, []);
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
          <select>
            {coins.map((coin, index) => (
              <option key={index}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
