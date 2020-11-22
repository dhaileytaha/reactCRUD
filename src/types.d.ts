type Todo = {
  text: string;
  complete: boolean;
}
type ToggleTodo = (selectedTodo: Todo) => unknown;

interface AddTodoListProps {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
}

type AddTodo = (newTodo:string) => unknown;

