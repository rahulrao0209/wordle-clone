import { useState } from 'react';

export type FormattedGuess = {
  key: string;
  color: string;
};

export type UsedKeys = {
  [key: string]: string;
};

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<(FormattedGuess[] | undefined)[]>([
    ...Array(6),
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [usedKeys, setUsedKeys] = useState<UsedKeys>({});
  const [isCorrect, setIsCorrect] = useState(false);

  /*
      Format a guess into an array of letter objects
      ex: [{key: "a", color: "green"}]
    */
  const formatGuess = () => {
    let solutionArray: string[] | null[] | any = [...solution];

    let formattedGuesses: FormattedGuess[] = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' };
    });

    // Check for exact matches i.e check letters which should be colored green
    formattedGuesses.forEach((letter, index) => {
      if (letter.key === solutionArray[index]) {
        formattedGuesses[index].color = 'green';
        solutionArray[index] = null;
      }
    });

    // Check for letters in the solution but not at the right position i.e  letters that should be colored green
    formattedGuesses.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuesses[index].color = 'yellow';
        // solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuesses;
  };

  /*
      Add a new guess to the guesses state
      Update the isCorrect state if the guess is correct
      Add one to the turn state
    */
  const addNewGuess = (guess: FormattedGuess[]) => {
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
      let newKeys = { ...prevUsedKeys };

      guess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === 'green') {
          newKeys[letter.key] = 'green';
          return;
        }

        if (letter.color === 'yellow' && currentColor !== 'green') {
          newKeys[letter.key] = 'yellow';
          return;
        }

        if (
          letter.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[letter.key] = 'grey';
          return;
        }
      });
      return newKeys;
    });

    setCurrentGuess('');
  };

  /*
      Handle keyup event & track current guess
      If user presses enter, add the new guess
    */
  const handleKeyup = ({ key }: KeyboardEvent) => {
    const pattern = /^[A-Za-z]$/;
    console.log('KEY: ', key);
    if (key === 'Enter') {
      if (turn > 5) {
        console.log("Sorry! You've used all your guesses!");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log('You have already tried that word!');
        return;
      }

      if (currentGuess.length !== 5) {
        console.log('The word must be 5 chars long');
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (key === 'Backspace') {
      setCurrentGuess((prevState) => prevState.slice(0, -1));
      return;
    }
    pattern.test(key) &&
      currentGuess.length < 5 &&
      setCurrentGuess((prevState) => prevState + key);
  };

  // TEST
  const handleKeypad = (event: React.BaseSyntheticEvent<MouseEvent> | any) => {
    console.log('Clicked: ', event.target.dataset.value);
    const key = event.target.dataset.value;
    const pattern = /^[A-Za-z]$/;

    if (key === 'Enter') {
      if (turn > 5) {
        console.log("Sorry! You've used all your guesses!");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log('You have already tried that word!');
        return;
      }

      if (currentGuess.length !== 5) {
        console.log('The word must be 5 chars long');
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (key === 'Backspace') {
      setCurrentGuess((prevState) => prevState.slice(0, -1));
      return;
    }

    pattern.test(key) &&
      currentGuess.length < 5 &&
      setCurrentGuess((prevState) => prevState + key);

    console.log('I am here');
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
    handleKeypad,
  };
};

export default useWordle;
