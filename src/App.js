import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 2);

  console.log("I run all the time!");

  //When you don't want something to re-render after first rendering
  useEffect(() => {
    console.log("Call the API");
  }, []);

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
