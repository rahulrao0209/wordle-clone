import React, { useState, useEffect } from 'react';
import Wordle from './components/Wordle';

export const App = () => {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/solutions');
        const data = await response.json();
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.word);
      } catch (err) {
        console.log('Error fetching data: ', err);
      }
    };

    fetchData();
  }, [setSolution]);

  return (
    <div className="app">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};
