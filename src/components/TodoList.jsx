import React from "react";
import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Finish homework", completed: false },
    { id: 5, text: "Call mom", completed: false },
    { id: 6, text: "Buy groceries", completed: false },
    { id: 7, text: "Walk the dog", completed: false },
    { id: 8, text: "Read a book", completed: false },
    { id: 9, text: "Do laundry", completed: false },
    { id: 10, text: "Write code", completed: false },
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

        // 새로 받은 데이터 저장
        const newTodoObj = {
            id: crypto.randomUUID(),
            text: newTodo,
            completed: false,
        };

        // 새로 받은 데이터 추가 및 그리기
        setTodos([newTodoObj, ...todos]);

        // input box 초기화
        setnewTodos("");
    };

    // 새로운 입력뱓은 값 저장
    const [newTodo, setnewTodos] = useState("");

    // 새로운 값 입력 받기
    const handleInputChange = (e) => {
        setnewTodos(e.target.value);
    };

    // completed 업데이트

    //forEach
    // const toggleCompleted = (id) => {
    //     const updatedTodos = [];

    //     todos.forEach((todo) => {
    //         if (todo.id === id) {
    //             const updatedTodo = {
    //                 id: todo.id,
    //                 text: todo.text,
    //                 completed: !todo.completed,
    //             };

    //             updatedTodos.push(updatedTodo);
    //         } else {
    //             updatedTodos.push(todo);
    //         }
    //     });

    //     setTodos(updatedTodos);
    // };

    //map
    const toggleCompleted = (id) => {
        // map을 통해 순환
        const updatedTodos = todos.map((todo) => {
            // 동일한 id의 값을 가진 배열만 수정
            if (todo.id === id) {
                return {
                    id: todo.id, // 기존 데이터 받아오기
                    text: todo.text,
                    completed: !todo.completed, //completed상태 반전
                };
            } else {
                // id가 다를 경우 그대로 반환
                return todo;
            }
        });

        setTodos(updatedTodos);
    };

    // 완료 시 취소선 생성
    const completedLine = (completed) => {};

    return (
        <div className="container">
            <h2>힛츄윗댓 Todo Todo 투</h2>
            <form onSubmit={hadleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter a new Todo"
                ></input>
                <button id="sumbtn" type="submit">
                    +
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {/* 완료한 항목 취소선 넣기 */}
                        {/* className을 삼항 연산자로 하여 todo.completed의 상채가 true 일 경우 취소선 스타일 적용 */}
                        {/* <span className={todo.completed ? "completedLine" : ""}>
                            {todo.text} - {String(todo.completed)}
                        </span> */}

                        {/* todo.completed 의 상태에 따라 span태그의 스타일 적용 */}
                        {todo.completed ? (
                            <span className="completedLine">
                                {todo.text} - {String(todo.completed)}
                            </span>
                        ) : (
                            <span className="notCompletedLine">
                                {todo.text} - {String(todo.completed)}
                            </span>
                        )}
                        <button
                            id="completed"
                            onClick={() => toggleCompleted(todo.id)}
                        >
                            완료
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
