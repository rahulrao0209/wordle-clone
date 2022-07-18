import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import Wordle from "./components/Wordle.js";
import SOLUTIONS from "./data/solutions.json.proxy.js";
export const App = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(SOLUTIONS));
    const solutions = data.solutions;
    console.log("solutions: ", solutions);
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomSolution.word);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, /* @__PURE__ */ React.createElement("h1", null, "Wordle"), solution && /* @__PURE__ */ React.createElement(Wordle, {
    solution
  }));
};
