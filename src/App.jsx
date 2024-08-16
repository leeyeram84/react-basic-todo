import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoList from "./components/TodoList";

function App() {
    return (
        <main className="main-center">
            <TodoList />
        </main>
    );
}

export default App;
