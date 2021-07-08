import React from "react";

export const ComplateTodos = (props) => {
  const { todos, onClickReverse } = props;
  return (
    <div className="complate-area">
      <p className="title">完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReverse(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
