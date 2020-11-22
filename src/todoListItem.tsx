import React from 'react';
import { TodoList } from './todoList';


export const TodoListItem = ({ todos, toggleTodo } :AddTodoListProps) => {
	return (
		<ul>
		{todos.map(todo=>{
			return <TodoList key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
		})

		}
			
		</ul>
	
	);
}