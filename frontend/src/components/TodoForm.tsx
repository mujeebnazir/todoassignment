import { useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";

const TodoForm = ({
  alltodos,
  setAllTodos,
}: {
  setAllTodos: (todos: any) => void;
  alltodos: any[];
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { create } = useCreateTodo();

  async function handleSubmit(e: any) {
    e.preventDefault();
    create({ title, description });
    setAllTodos([...alltodos, { title, description }]);
    setTitle("");
    setDescription("");
  }
  return (
    <div className="container p-1  flex flex-col box-border border-spacing-1 border-white">
      <div className=" flex flex-col justify-center items-center ">
        <input
          className="w-2/3 block border-r-stone-800 m-1 h-10 placeholder:px-2 hover:bg-gray-100 cursor-pointer rounded-sm"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="w-2/3 block border-r-stone-800 m-1 placeholder:px-2 hover:bg-gray-100 cursor-pointer rounded-sm"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
        />
        <button
          onClick={handleSubmit}
          className="w-1/3 h-7 bg-blue-600 hover:bg-blue-300 text-white font-1xl m-1 rounded-md shadow-md"
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
