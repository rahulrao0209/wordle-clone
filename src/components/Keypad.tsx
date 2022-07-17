import React, { useEffect, useState } from 'react';

type KeypadProps = {
  key: string;
};

const Keypad = () => {
  const [letters, setLetters] = useState<KeypadProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/letters');
      const data: KeypadProps[] = await response.json();
      setLetters(data);
    };

    fetchData();
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => <div key={letter.key}>{letter.key}</div>)}
    </div>
  );
};

export default Keypad;
