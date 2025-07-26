import React from "react";
import todos from '../data/todos.json';

export default function ToDoList() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-3 mb-2">
            <input type="checkbox" defaultChecked={todo.done} />
            <span className={`${todo.done ? 'line-through text-gray-500' : ''}`}>
              {todo.task}
            </span>
            <span className="ml-auto text-sm text-gray-400">{todo.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
