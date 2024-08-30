import { useState } from "react";
import { TODO_SAMPLE } from "../constants/TodoSample";
import TodoList from "./TodoList";

const TodoContainer = () => {
    const [todos, setTodos] = useState(TODO_SAMPLE);
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            text,
            isCompleted: false,
        };

        setTodos([...todos, newTodo]);

        setText("");
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

        console.log(newTodos);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button type="submit">추가</button>
            </form>

            <TodoList
                todos={todos}
                onToggleCompleted={onToggleCompleted}
                onDelete={onDelete}
            />
        </div>
    );
};

export default TodoContainer;
