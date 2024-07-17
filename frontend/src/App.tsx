import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import "./index.css";
import useGetTodos from "./hooks/useGetTodos";
import { useState, useEffect } from "react";

function App() {
  const { todos } = useGetTodos();
  const [alltodos, setAllTodos] = useState([]);

  useEffect(() => {
    if (todos) {
      setAllTodos(todos);
    }
  }, [todos]);

  return (
    <div className="flex flex-col px-4 h-full w-full items-center">
      <h1 className="text-white font-bold flex items-center p-4 text-3xl">
        My Todo App!
      </h1>
      <TodoForm setAllTodos={setAllTodos} alltodos={alltodos} />

      <div className="m-4 container p-1 flex items-start justify-normal box-border border-spacing-1 h-2/4">
        {alltodos.length > 0 ? (
          alltodos.map((todo: any) => (
            <TodoCard
              key={todo._id}
              todo={todo}
              setAllTodos={setAllTodos}
              alltodos={alltodos}
            />
          ))
        ) : (
          <p className="text-white text-2xl font-normal">
            No Todos to display...!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
