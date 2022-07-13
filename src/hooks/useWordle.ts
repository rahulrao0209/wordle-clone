import { useState } from "react";

const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    /*
      Format a guess into an array of letter objects
      ex: [{key: "a", color: "green"}]
    */
    const formatGuess = () => {
      console.log("Formatting the current guess: ", currentGuess);
    }

    /*
      Add a new guess to the guesses state
      Update the isCorrect state if the guess is correct
      Add one to the turn state
    */
    const addNewGuess = () => {

    }

    /*
      Handle keyup event & track current guess
      If user presses enter, add the new guess
    */
    const handleKeyup = ({ key }: KeyboardEvent) => {
        const pattern = /^[A-Za-z]$/;

        if(key === 'Enter') {
          if(turn > 5) {
            console.log("Sorry! You've used all your guesses!");
            return;
          }

          if(history.includes(currentGuess)) {
            console.log("You have already tried that word!");
            return;
          }

          if(currentGuess.length !== 5) {
            console.log("The word must be 5 chars long");
            return;
          }

          formatGuess();
        }

        if(key === 'Backspace') {
          setCurrentGuess(prevState => prevState.slice(0, -1));
          return;
        }
        pattern.test(key) && (currentGuess.length < 5) && setCurrentGuess(prevState => prevState + key);
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle;