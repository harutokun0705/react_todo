import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncomplateTodos } from "./components/IncomplateTodos";
import { ComplateTodos } from "./components/ComplateTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onclickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onclickComplate = (index) => {
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(index, 1);
    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  const onClickReverse = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);
    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplateTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncomplateTodos
        incomplateTodos={incomplateTodos}
        onclickComplate={onclickComplate}
        onclickDelete={onclickDelete}
      />
      <ComplateTodos todos={complateTodos} onClickReverse={onClickReverse} />
      <div></div>
    </>
  );
};
