
import Container from "../ui/Container";
import AddNewTodo from "./AddNewTodo/AddNewTodo";
import Filter from "./Filter/Filter";
import Todos from "./Todos/Todos";

// main component, that consists of creating todo, displaying todos and filtering them
export default function TodoList() {
	return (
		<Container>
			<AddNewTodo />
            <Filter />
			<Todos />
		</Container>
	);
}
