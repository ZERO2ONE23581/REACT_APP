import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 2);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("THIS RUNS ALL THE TIME!");

  useEffect(() => {
    console.log("RUNS ONLY ONCE!");
  }, []);

  useEffect(() => {
    console.log("RUNS WHEN 'counter' CHANGES");
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("RUNS WHEN 'keyword' WHERE ITS LENGTH MORE THAN 5 CHANGES");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I RUN WHEN 'keyword' && 'counter' CHANGES");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        className={styles.inp}
        type="text"
        placeholder="Min length is 5.."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick} className={styles.btn}>
        Click
      </button>
    </div>
  );
}

export default App;
