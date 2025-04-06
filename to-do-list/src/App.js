import React, { useState } from 'react';
import './App.css';

function App() {
  const[task,settask] = useState('');
  const [todos, setTodos] = useState([]);

  const AddTask = () => {
    if(task.trim()){
      setTodos([...todos,{text:task,completed:false}]);
      settask('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_,i) => i !==index);
    setTodos(newTodos);
  }
  return (
    <>
    <div className='body'>
    <div className='app'>
      <h2>📝 To-Do List</h2>
      <div className='input-section'>
        <input
          type='text'
          placeholder='Add a new task...'
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={AddTask}>Add</button>
      </div>

      <ul className='todo-list'>
        {todos.map((todo,index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={()=> toggleComplete(index)}>{todo.text}</span>
            <button onClick={()=> deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default App;
