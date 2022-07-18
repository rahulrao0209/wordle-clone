import {useState} from "../../_snowpack/pkg/react.js";
const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([
    ...Array(6)
  ]);
  const [history, setHistory] = useState([]);
  const [usedKeys, setUsedKeys] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuesses = [...currentGuess].map((letter) => {
      return {key: letter, color: "grey"};
    });
    formattedGuesses.forEach((letter, index) => {
      if (letter.key === solutionArray[index]) {
        formattedGuesses[index].color = "green";
        solutionArray[index] = null;
      }
    });
    formattedGuesses.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuesses[index].color = "yellow";
      }
    });
    return formattedGuesses;
  };
  const addNewGuess = (guess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = guess;
      return newGuesses;
    });
    setHistory((prevHistory) => [...prevHistory, currentGuess]);
    setTurn((prevTurn) => prevTurn + 1);
    setUsedKeys((prevUsedKeys) => {
      let newKeys = {...prevUsedKeys};
      guess.forEach((letter) => {
        const currentColor = newKeys[letter.key];
        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (letter.color === "grey" && currentColor !== "green" && currentColor !== "yellow") {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };
  const handleKeyup = ({key}) => {
    const pattern = /^[A-Za-z]$/;
    if (key === "Enter") {
      if (turn > 5) {
        console.log("Sorry! You've used all your guesses!");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("You have already tried that word!");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("The word must be 5 chars long");
        return;
      }
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }
    if (key === "Backspace") {
      setCurrentGuess((prevState) => prevState.slice(0, -1));
      return;
    }
    pattern.test(key) && currentGuess.length < 5 && setCurrentGuess((prevState) => prevState + key);
  };
  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup};
};
export default useWordle;
