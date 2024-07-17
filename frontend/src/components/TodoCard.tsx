import { useState } from "react";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { AiFillEdit } from "react-icons/ai";
import { IoSave } from "react-icons/io5";
import useUpdateTodo from "../hooks/useUpdateTodo";
const TodoCard = ({
  todo,
  setAllTodos,
  alltodos,
}: {
  todo: {
    _id: string;
    title: string;
    description: string;
  };
  setAllTodos: (todos: any) => void;
  alltodos: any[];
}) => {
  const { deletetodo } = useDeleteTodo();
  const { updatetodo } = useUpdateTodo();

  const [check, setCheck] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [title, setTitle] = useState(todo.title || "");

  async function handleCheck(e: any) {
    e.preventDefault();
    setCheck(!check);
    deletetodo(todo._id);
    setAllTodos((prevTodos: any) =>
      prevTodos.filter((t: any) => t._id !== todo._id)
    );
  }

  async function handleUpdate(e: any) {
    e.preventDefault();
    updatetodo({ _id: todo._id, title });
    setUpdate(!update);
  }

  return (
    <div
      className={`m-4 box-border border-spacing-1  border-white h-2/4 w-1/5 ${
        check ? `bg-green-500 hover:bg-green-500 line-through` : `bg-gray-300`
      }  shadow-xl hover:cursor-pointer hover:bg-gray-400 rounded-md`}
    >
      <div className="flex flex-row ">
        {update ? (
          <input
            className="w-4/5 rounded-sm shadow-md m-1 "
            type="text"
            placeholder="update title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        ) : (
          <h2 className="p-2 text-2xl font-medium capitalize text-black">
            {title}
          </h2>
        )}
        <input type="checkbox" className="h-15" onClick={handleCheck} />
        {update ? (
          <IoSave
            size={30}
            className="m-2 box-border shadow-2xl hover:bg-white cursor-pointer rounded-lg"
            onClick={handleUpdate}
          />
        ) : (
          <AiFillEdit
            size={30}
            className="m-2 box-border shadow-2xl hover:bg-white cursor-pointer rounded-lg"
            onClick={() => setUpdate(!update)}
          />
        )}
      </div>
      <hr className="bg-black" />
      <p className="p-2 text-1xl font-mono text-black">{todo.description}</p>
    </div>
  );
};

export default TodoCard;
