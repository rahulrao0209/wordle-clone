import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import Grid from "./Grid.js";
import Keypad from "./Keypad.js";
import Modal from "./Modal.js";
import useWordle from "../hooks/useWordle.js";
const Wordle = ({solution}) => {
  const {currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup} = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (isCorrect) {
      console.log("Congrats! You Won the game!");
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => setShowModal(true), 2e3);
      return;
    }
    if (turn > 5) {
      console.log("Oops! You're out of guesses!");
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => setShowModal(true), 2e3);
      return;
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid, {
    currentGuess,
    guesses,
    turn
  }), /* @__PURE__ */ React.createElement(Keypad, {
    usedKeys
  }), showModal && /* @__PURE__ */ React.createElement(Modal, {
    isCorrect,
    turn,
    solution
  }));
};
export default Wordle;
