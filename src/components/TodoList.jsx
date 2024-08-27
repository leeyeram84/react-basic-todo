import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
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

    // todo 삭제
    const handleDelete = (id) => {
        // filter를 통해 새로운 배열 생성
        // todo.id와 id의 값이 같으면 false를 반환하여 해당 id를 가진 배열을 제외한 새로운 배열 리턴
        const filteredTodos = todos.filter((todo) => todo.id !== id);

        setTodos(filteredTodos);
    };

    return (
        <div className="container">
            <h2>힛츄윗댓 Todo Todo 투</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter a new Todo"
                ></input>
                <button id="sumBtn" type="submit">
                    +
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {/* 완료한 항목 취소선 넣기 */}
                        {/* checkbox를 통해 완료 항목 completed 값 변경 */}
                        <input
                            id={todo.id}
                            type="checkbox"
                            onClick={() => toggleCompleted(todo.id)}
                        />
                        <label htmlFor={todo.id}></label>

                        {/* todo.completed 의 상태에 따라 span태그의 스타일 적용 */}
                        {todo.completed ? (
                            <span className="completedLine">{todo.text}</span>
                        ) : (
                            <span className="">{todo.text} - 진행중</span>
                        )}
                        <button
                            id="delete"
                            onClick={() => handleDelete(todo.id)}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
