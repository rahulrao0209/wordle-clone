import React, { useEffect, useState } from 'react';
import type { UsedKeys } from '../hooks/useWordle';
import LETTERS from '../data/letters.json';

type Keys = {
  key: string;
};

type KeypadProps = {
  usedKeys: UsedKeys;
};

const Keypad = ({ usedKeys }: KeypadProps) => {
  const [letters, setLetters] = useState<Keys[] | null>(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(LETTERS));
    const letters = data.letters;
    setLetters(letters);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const keyColor = usedKeys[letter.key];
          return (
            <div key={letter.key} className={keyColor}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
