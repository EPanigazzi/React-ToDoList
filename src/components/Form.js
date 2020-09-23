import React from "react";
import { Form as FormBootstrap, Col, Button } from "react-bootstrap";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (!validateInput()) {
            return;
        }
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 1000) + 1,
            },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    const validateInput = (e) => {
        if (!inputText) {
            alert("You have to complete this field");
            return false;
        }
        return true;
    };

    return (
        <FormBootstrap>
            <FormBootstrap.Row>
                <Col xs={6} md={8}>
                    <FormBootstrap.Control
                        type="text"
                        value={inputText}
                        onChange={inputTextHandler}
                        className="todo-input"
                        placeholder="To do..."
                    />
                </Col>
                <Col xs={2} md={2}>
                    <Button
                        onClick={submitTodoHandler}
                        className="todo-button"
                        type="submit"
                    >
                        <i className="fas fa-plus-square"></i>
                    </Button>
                </Col>
                <Col xs={4} md={2}>
                    <FormBootstrap.Group >
                        <FormBootstrap.Control
                            as="select"
                            onChange={statusHandler}
                            name="todos"
                            className="filter-todo"
                            custom
                        >
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </FormBootstrap.Control>
                    </FormBootstrap.Group>
                </Col>
            </FormBootstrap.Row>
        </FormBootstrap>
    );
};

export default Form;
