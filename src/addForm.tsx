import React, {ChangeEvent, useState, FormEvent}  from 'react';

interface AddTodoProps {
	addTodo: AddTodo;
}

export const AddForm = ({addTodo}: AddTodoProps) => {
	const [newTodo, setNewTodo] = useState("");


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	}

	const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
		console.log(12);
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo("");

	}


	return (
			<form>
				<input type="text" value={newTodo} onChange={handleChange}/>
				<button type="submit" onClick={handleSubmit}>Add Todo</button>
			</form>
		);
}