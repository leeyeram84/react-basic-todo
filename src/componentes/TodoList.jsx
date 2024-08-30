import TodoItems from "./TodoItems";

const TodoList = ({ todos, onToggleCompleted, onDelete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItems
                    key={todo.id}
                    todo={todo}
                    onToggleCompleted={onToggleCompleted}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;
