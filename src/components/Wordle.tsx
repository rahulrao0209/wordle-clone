import React, { useEffect } from 'react';
import Grid from './Grid';
import Keypad from './Keypad';
import useWordle from '../hooks/useWordle';

type WordleProps = {
  solution: string;
};

const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      console.log('Congrats! You Won the game!');
      window.removeEventListener('keyup', handleKeyup);
      return;
    }

    if (turn > 5) {
      console.log("Oops! You're out of guesses!");
      window.removeEventListener('keyup', handleKeyup);
      return;
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <div>Solution: {solution}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </>
  );
};

export default Wordle;
