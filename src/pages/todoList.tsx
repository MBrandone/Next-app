import { useState } from "react";

interface Todo {
    status: 'TODO' | 'DONE'
    description: string
}

const ToDoList:React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [currentTodo, setCurrent] = useState<string>('')

    const addTodo = () => {
        setTodos([...todos, {description: currentTodo, status: "TODO"}])
    }

    function onChangeCurrentTodo(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrent(event.target.value)
    }

    return (
        <>
            <h1>Welcome to the greatest to do list in the world!</h1>
            <ul>
                { todos.map((todo, index) => (
                        <li key={index.toString()}>{todo.description}</li>
                    ))
                }
            </ul>
            <input value={currentTodo} onChange={onChangeCurrentTodo}/>
            <button onClick={addTodo}>Ajouter à la todo list</button>
        </>
    );
};

export default ToDoList;
