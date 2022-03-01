import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>HELLO WORLD</h1>
      <Button text={"HELLO WORLD"} />
    </div>
  );
}

export default App;
