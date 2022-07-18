import React from "../../_snowpack/pkg/react.js";
const Row = (props) => {
  const {guess, currentGuess} = props;
  if (guess) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "row past"
    }, guess.map((guess2, index) => {
      return /* @__PURE__ */ React.createElement("div", {
        key: index,
        className: guess2.color
      }, guess2.key);
    }));
  }
  if (currentGuess) {
    const letters = [...currentGuess];
    return /* @__PURE__ */ React.createElement("div", {
      className: "row current"
    }, letters.map((letter, index) => /* @__PURE__ */ React.createElement("div", {
      role: "input",
      key: index,
      className: "filled"
    }, letter)), [...Array(5 - letters.length)].map((_, index) => /* @__PURE__ */ React.createElement("div", {
      key: index
    })));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    role: "input"
  }), /* @__PURE__ */ React.createElement("div", {
    role: "input"
  }), /* @__PURE__ */ React.createElement("div", {
    role: "input"
  }), /* @__PURE__ */ React.createElement("div", {
    role: "input"
  }), /* @__PURE__ */ React.createElement("div", {
    role: "input"
  }));
};
export default Row;
