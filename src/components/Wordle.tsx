import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

type WordleProps = {
  solution: string;
}

const Wordle = ({ solution }: WordleProps) => {

  const { currentGuess, handleKeyup } = useWordle(solution);
    
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup])

  return (
    <div>Wordle - {currentGuess}</div>
  )
}

export default Wordle;
