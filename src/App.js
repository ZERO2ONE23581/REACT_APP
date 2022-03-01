import { useState } from "react";

function App() {
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
    console.log(toDo, toDos);
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
