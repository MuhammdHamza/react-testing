import { useState } from 'react';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const useTodoLogic = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return {
    todos,
    isLoading,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo,
  };
};
