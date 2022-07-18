import React, { useState, useEffect } from 'react';
import Wordle from './components/Wordle';
import SOLUTIONS from './data/solutions.json';

export const App = () => {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(SOLUTIONS));
    const solutions = data.solutions;
    console.log('solutions: ', solutions);
    const randomSolution =
      solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomSolution.word);
  }, []);

  return (
    <div className="app">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};
