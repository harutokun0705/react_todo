import React from "react";

export const IncomplateTodos = (props) => {
  const { incomplateTodos, onclickComplate, onclickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了のtodo</p>
      <ul>
        {incomplateTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onclickComplate(index)}>完了</button>
              <button onClick={() => onclickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
