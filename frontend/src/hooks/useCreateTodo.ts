const useCreateTodo = () => {
  const create = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    try {
      const res: any = await fetch("http://localhost:3000/api/create-todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return { create };
};
export default useCreateTodo;
