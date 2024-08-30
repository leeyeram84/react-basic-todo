import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            text,
            isCompleted: false,
        };

        addTodo(newTodo);

        setText("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;
