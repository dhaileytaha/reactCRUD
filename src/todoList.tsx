import React from 'react';
import './todoList.css'; 

interface TodoListProps {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

export const TodoList = ({ todo, toggleTodo } :TodoListProps) => {
	return (
		<li>
			<label className= { todo.complete ? "complete" : undefined}>
				<input type="checkbox"
				checked={todo.complete}
				onChange={()=> toggleTodo(todo)}/>
				{todo.text}
			</label>
		</li>
	);
}

// <input type="checkbox" value="{todoList.complete}" onChange={() => toggleTodo(todoList)}/>
// 				{todoList.text} 