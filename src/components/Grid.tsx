import React from "react";
import Row from "./Row";
import type { formattedGuess } from "../hooks/useWordle";

type GridProps = {
  currentGuess: string;
  guesses: (formattedGuess[] | undefined)[];
  turn: number;
};

const Grid = ({ currentGuess, guesses, turn }: GridProps) => {
  return (
    <div className="grid">
      {guesses.map((guess, index) => {
        if (turn === index)
          return <Row key={index} currentGuess={currentGuess} />;
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
