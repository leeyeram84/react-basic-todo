import { useState } from "react";
import { TODO_SAMPLE } from "../constants/TodoSample";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
    const [todos, setTodos] = useState(TODO_SAMPLE);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    };

    const onDelete = (id) => {
        const filteredTodos = todos.filter((todo) => {
            if (todo.id === id) {
                return false;
            }
            return true;
        });

        setTodos(filteredTodos);
    };

    const onToggleCompleted = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }

            return todo;
        });

        setTodos(newTodos);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />

            <TodoList
                todos={todos}
                onToggleCompleted={onToggleCompleted}
                onDelete={onDelete}
            />
        </div>
    );
};

export default TodoContainer;
