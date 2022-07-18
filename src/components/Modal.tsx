import React from 'react';

type ModalProps = {
  isCorrect: boolean;
  turn: number;
  solution: string;
};

const Modal = ({ isCorrect, turn, solution }: ModalProps) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p className="message">You found the solution in {turn} guesses</p>
          <button onClick={reloadPage}>Play Again!</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p className="message">Better luck next time :)</p>
          <button onClick={reloadPage}>Play Again!</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
