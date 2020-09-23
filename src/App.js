import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
    //States
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    //Functions
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === true)
                );
                break;
            case "uncompleted":
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === false)
                );
                break;
            default:
                setFilteredTodos(todos);
        }
    };
    //Save to LocalStorage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodo);
        }
    };

    return (
        <Container>
            <div>
                <header>
                    <h1>To do list</h1>
                </header>
                <Form
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    setStatus={setStatus}
                />
                <TodoList
                    setTodos={setTodos}
                    todos={todos}
                    filteredTodos={filteredTodos}
                />
            </div>
        </Container>
    );
};

export default App;
