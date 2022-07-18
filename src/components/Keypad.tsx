import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import type { UsedKeys } from '../hooks/useWordle';
import LETTERS from '../data/letters.json';

type Keys = {
  key: string;
};

type KeypadProps = {
  usedKeys: UsedKeys;
  solution: string;
};

const Keypad = ({ usedKeys, solution }: KeypadProps) => {
  const [letters, setLetters] = useState<Keys[] | null>(null);

  const { handleKeypad } = useWordle(solution);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(LETTERS));
    const letters = data.letters;
    setLetters(letters);
  }, []);

  return (
    <div className="keypad" onClick={(event) => handleKeypad(event)}>
      {letters &&
        letters.map((letter) => {
          const keyColor = usedKeys[letter.key];
          return (
            <div key={letter.key} className={keyColor} data-value={letter.key}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
