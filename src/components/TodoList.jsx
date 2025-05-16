import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import SearchBar from "../SearchBar/SearchBar";
import { nanoid } from "@reduxjs/toolkit";
import { changeFilter } from "../../redux/filterSlice";
import { addTodo } from "../../redux/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todolist.todos);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const handleAddTodo = (data) => {
    const newTodo = {
      id: nanoid(),
      todo: data.todo,
    };
    dispatch(addTodo(newTodo));
  };

  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const filteredData = todos.filter((item) =>
    item.todo.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <h2>{item.todo}</h2>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
