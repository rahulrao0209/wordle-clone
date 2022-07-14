import React from "react";
import Row from "./Row";

type GridProps = {
  currentGuess: string;
  guesses: string[];
  turn: number;
}

const Grid = ({ currentGuess, guesses, turn }: GridProps) => {
  return (
    <div className="grid">
      {guesses.map((guess, index) => {
        return <Row key={index} />
      })}
    </div>
  )
}

export default Grid;
