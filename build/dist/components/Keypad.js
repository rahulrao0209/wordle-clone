import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import LETTERS from "../data/letters.json.proxy.js";
const Keypad = ({usedKeys}) => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(LETTERS));
    const letters2 = data.letters;
    setLetters(letters2);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "keypad"
  }, letters && letters.map((letter) => {
    const keyColor = usedKeys[letter.key];
    return /* @__PURE__ */ React.createElement("div", {
      key: letter.key,
      className: keyColor
    }, letter.key);
  }));
};
export default Keypad;
