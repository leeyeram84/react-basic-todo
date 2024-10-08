import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoList from "./components/TodoList";
import "the-new-css-reset/css/reset.css";

function App() {
    return (
        <main className="main-center">
            <TodoList />
        </main>
    );
}

export default App;
