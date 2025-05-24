 import { useState } from "react";
import { TextInput } from "../../components/TextInputs/TextInput";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TodoListWrapper } from "../../components/TodoListWrapper/TodoListWrapper";
import { useTodoLogic } from "../../infrastructure/usecases/TodoList/useTodoLogic";
import { Button } from "../../components/Button/Button";


export const TodoList = () => {
  const {
    todos,
    isLoading,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodoLogic();

  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div>
      <TextInput
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task..."
      />
      <Button onClick={handleAdd}>Add</Button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoListWrapper>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onDelete={deleteTodo}
              onToggle={toggleComplete}
              onEdit={editTodo}
            />
          ))}
        </TodoListWrapper>
      )}
    </div>
  );
};
