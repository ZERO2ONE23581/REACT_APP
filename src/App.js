import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 2);
  console.log("I don't like this to be rendered after first click!");
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button className={styles.btn} onClick={onClick}>
        Click
      </button>
    </div>
  );
}

export default App;
