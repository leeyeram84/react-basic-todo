import React from "react";
import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
];

const TodoList = () => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);

    const hadleSubmit = (e) => {
        e.preventDefault(); // 화면 리로드 방지

        // 공백 유효성 검사 // trim() : 문자열의 양 쪽 공백을 제거하는 함수
        // trim으로 공백을 제거하여 값이 없는 경우 바로 리턴 => 아무런 행동도 일어나지 않음
        if (!newTodo.trim()) {
            return;
        }

        // 새로 받은 데이터 추가 및 그리기
        setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]);

        // input box 초기화
        setnewTodos("");
    };

    // 새로운 입력뱓은 값 저장
    const [newTodo, setnewTodos] = useState("");

    // 새로운 값 입력 받기
    const handleInputChange = (e) => {
        setnewTodos(e.target.value);
    };

    return (
        <div>
            <form onSubmit={hadleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter a new Todo"
                ></input>
                <button type="submit">+</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
