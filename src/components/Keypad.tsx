import React, { useEffect, useState } from 'react';

type keypadProps = {
  key: string;
};

const Keypad = () => {
  const [letters, setLetters] = useState<keypadProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/letters');
      const data: keypadProps[] = await response.json();
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
