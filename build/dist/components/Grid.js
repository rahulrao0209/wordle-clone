import React from "../../_snowpack/pkg/react.js";
import Row from "./Row.js";
const Grid = ({currentGuess, guesses, turn}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid"
  }, guesses.map((guess, index) => {
    if (turn === index)
      return /* @__PURE__ */ React.createElement(Row, {
        key: index,
        currentGuess
      });
    return /* @__PURE__ */ React.createElement(Row, {
      key: index,
      guess
    });
  }));
};
export default Grid;
