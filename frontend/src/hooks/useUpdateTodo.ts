const useUpdateTodo = () => {
  const updatetodo = async ({
    _id,
    title,
    description,
  }: {
    _id: string;
    title?: string;
    description?: string;
  }) => {
    try {
      const res: any = await fetch(
        `http://localhost:3000/api/update-todo/${_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return { updatetodo };
};

export default useUpdateTodo;
