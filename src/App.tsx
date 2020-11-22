import React, { useState } from 'react';
import { TodoListItem } from './todoListItem';
import { AddForm } from './addForm';


const initialTodos: Array<Todo> = [
  { text:"walk", complete: true},
  { text:"run", complete: false},
]
function App() {

  const [todos, setTodos] = useState(initialTodos);

const toggleTodo: ToggleTodo = selectedTodo => {
      const newTodos = todos.map(todo => {
        if(todo === selectedTodo){
          return {
            ...todo,
            complete: !todo.complete 
          }
        }
          return todo;
      });
      setTodos(newTodos);
}

const addTodo: AddTodo = newTodo => {

    newTodo.trim() !== "" && 
    setTodos([...todos, {text: newTodo, complete: false}]);
  }
  return (
    <React.Fragment>
      <TodoListItem todos={todos} toggleTodo={toggleTodo}/>
      <AddForm addTodo={addTodo}/>
    </React.Fragment>
    );
}

export default App;
