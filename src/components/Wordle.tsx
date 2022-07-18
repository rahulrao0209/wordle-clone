import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import useWordle from '../hooks/useWordle';

type WordleProps = {
  solution: string;
};

const Wordle = ({ solution }: WordleProps) => {
  const { currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      console.log('Congrats! You Won the game!');
      window.removeEventListener('keyup', handleKeyup);
      setTimeout(() => setShowModal(true), 2000);
      return;
    }

    if (turn > 5) {
      console.log("Oops! You're out of guesses!");
      window.removeEventListener('keyup', handleKeyup);
      setTimeout(() => setShowModal(true), 2000);
      return;
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
};

export default Wordle;
