import React from "react";

function Board() {
  //useState(defaultState)that board should be in
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="board">
      <div className = "row"></div>
      <div className = "row"></div>
      <div className = "row"></div>
      <div className = "row"></div>
      <div className = "row"></div>
      <div className = "row"></div>
    </div>
  );
}

export default Board;
