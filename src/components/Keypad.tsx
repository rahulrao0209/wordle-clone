import React, { useEffect, useState } from 'react';
import type { UsedKeys } from '../hooks/useWordle';

type Keys = {
  key: string;
};

type KeypadProps = {
  usedKeys: UsedKeys;
};

const Keypad = ({ usedKeys }: KeypadProps) => {
  const [letters, setLetters] = useState<Keys[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/letters');
      const data: Keys[] = await response.json();
      setLetters(data);
    };

    fetchData();
  }, []);

  console.log('Used Keys: ', usedKeys);

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
