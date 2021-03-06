import React from 'react';
import type { FormattedGuess } from '../hooks/useWordle';

type RowProps = {
  key: number;
  guess?: FormattedGuess[] | undefined;
  currentGuess?: string;
};
const Row = (props: RowProps) => {
  const { guess, currentGuess } = props;

  if (guess) {
    return (
      <div className="row past">
        {guess.map((guess, index) => {
          return (
            <div key={index} className={guess.color}>
              {guess.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    const letters = [...currentGuess];

    return (
      <div className="row current">
        {letters.map((letter, index) => (
          <div role="input" key={index} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div role="input"></div>
      <div role="input"></div>
      <div role="input"></div>
      <div role="input"></div>
      <div role="input"></div>
    </div>
  );
};

export default Row;
