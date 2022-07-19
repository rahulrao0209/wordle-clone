import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import type { UsedKeys } from '../hooks/useWordle';
import { IoBackspaceOutline } from 'react-icons/io5';
import KEYS from '../data/keys.json';

type Keys = {
  key: string;
};

type KeypadProps = {
  usedKeys: UsedKeys;
  solution: string;
};

const Keypad = ({ usedKeys, solution }: KeypadProps) => {
  const [keys, setKeys] = useState<Keys[] | null>(null);

  const { handleKeypad } = useWordle(solution);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(KEYS));
    const keys = data.keys;
    setKeys(keys);
  }, []);

  return (
    <div className="keypad" onClick={handleKeypad}>
      {keys &&
        keys.map((key) => {
          const keyColor = usedKeys[key.key];
          return (
            <div key={key.key} className={keyColor} data-value={key.key}>
              {key.key === 'Backspace' ? (
                <IoBackspaceOutline />
              ) : (
                key.key.toUpperCase()
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
