import React, { useEffect } from 'react';
import Grid from './Grid';
import Keypad from './Keypad';
import useWordle from '../hooks/useWordle';

type WordleProps = {
  solution: string;
};

const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  return (
    <>
      <div>Solution: {solution}</div>
      <div>Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad />
    </>
  );
};

export default Wordle;
