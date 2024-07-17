import { useEffect, useState } from "react";

const useGetTodos = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res: any = await fetch("http://localhost:3000/api/get-todos", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log("Res:", res);
        console.log("Data:", data);
        if (data.error) {
          throw new Error(data.error);
        }
        setTodos(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getTodos();
  }, [todos]);

  return { todos };
};
export default useGetTodos;
