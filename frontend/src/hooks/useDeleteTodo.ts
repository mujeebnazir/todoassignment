const useDeleteTodo = () => {
  const deletetodo = async (_id: string) => {
    try {
      const res: any = fetch(`http://localhost:3000/api/delete-todo/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return { deletetodo };
};

export default useDeleteTodo;
