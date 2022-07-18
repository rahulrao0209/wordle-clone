import React from "../../_snowpack/pkg/react.js";
const Modal = ({isCorrect, turn, solution}) => {
  const reloadPage = () => {
    window.location.reload();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, isCorrect && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "You Win!"), /* @__PURE__ */ React.createElement("p", {
    className: "solution"
  }, solution), /* @__PURE__ */ React.createElement("p", {
    className: "message"
  }, "You found the solution in ", turn, " guesses"), /* @__PURE__ */ React.createElement("button", {
    onClick: reloadPage
  }, "Play Again!")), !isCorrect && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Nevermind"), /* @__PURE__ */ React.createElement("p", {
    className: "solution"
  }, solution), /* @__PURE__ */ React.createElement("p", {
    className: "message"
  }, "Better luck next time :)"), /* @__PURE__ */ React.createElement("button", {
    onClick: reloadPage
  }, "Play Again!")));
};
export default Modal;
