import { useState } from 'react';
import './ButtonTest.css';

const ButtonTest = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  const result = () => {
    if (count === 0) {
      return "You haven't click";
    }
    return `You clicked ${count} times`;
  };

  const sentence = 'Please press +1 to increment count by 1';
  return (
    <>
      <h1 className="sentence">{sentence}</h1>
      <h2 className="result-button">
        {result()}
      </h2>
      <button className="button-count" type="button" onClick={() => onClickHandler()}>
        +1
      </button>
    </>
  );
};

export default ButtonTest;
