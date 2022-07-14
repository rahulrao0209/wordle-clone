import React from "react";
import type { formattedGuess } from "../hooks/useWordle";

type RowProps = {
  key: number; 
  guess: formattedGuess[] | undefined;
}
const Row = (props: RowProps) => {
  const { guess } = props;

  if(guess) {
    return (
      <div className="row past">
        { guess.map((guess, index) => {
          return <div key={index} className={guess.color}>{guess.key}</div>;
        })}
      </div>
    )
  }

  return (
    <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row;
