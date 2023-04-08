import React, { useState } from "react";
import Todo from "./Todo";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  console.log(inputVal);

  function addToList() {
    if (inputVal != "") {
      const updatedTodo = [...todos, inputVal];
      setTodos(updatedTodo);
      setInputVal("");
      console.log(todos);
    }
  }

  return (
    <div className="App">
      <div className="input" >
      <input placeholder="What's on your mind?" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={addToList}>
        + Add
      </button>
      </div>
      
      <div>
        {todos.length == 0 ? <p>No todo items.</p>
          : <ul>{todos.map(todo => <Todo text={todo} />)}</ul>}
      </div>
    </div>
  )
}

export default App;