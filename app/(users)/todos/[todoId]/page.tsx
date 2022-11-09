import React from "react";
import { notFound } from "next/navigation";
interface PageProps {
  params: {
    todoId: string;
  };
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const todo = await res.json();

  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-rose-300 border-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Complete : {todo.complete ? "Yes" : "No"}</p>
      <p className="">By User: {todo.userId}</p>
    </div>
  );
};

export default TodoPage;
