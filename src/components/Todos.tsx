import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos";


const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [ searchParams ] = useSearchParams();

  let todosData = searchParams.get("todos")

  console.log(todosData)

  let filterData = todos;

  if(todosData === "active"){
    filterData = todos.filter((task) => !task.completed)
  }

  if(todosData === "completed"){
    filterData = todos.filter((task) => task.completed)
  }


  return (
    <ul className="main-task">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor="">{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
