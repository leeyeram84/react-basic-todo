import { useState } from "react";
import { TODO_SAMPLE } from "../constants/TodoSample";

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
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}-{todo.isCompleted ? "취소" : "미완료"}
                        <button
                            onClick={() => {
                                onDelete(todo.id);
                            }}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;
