import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

type WordleProps = {
  solution: string;
}

const Wordle = ({ solution }: WordleProps) => {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);
     
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup])

  return (
    <>
      <div>Solution: {solution}</div>
      <div>Guess - {currentGuess}</div>
    </>
  )
}

export default Wordle;
