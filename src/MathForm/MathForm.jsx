import { useState } from 'react';
import './MathForm.css';

const MathForm = () => {
  const ADDITION = 'addition';
  const MULTIPLICATION = 'multiplication';
  const SUBSTRACTION = 'substraction';
  const DIVISIONS = 'division';

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState(ADDITION);
  const [finalResult, setFinalResult] = useState('');

  const handleFirstChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondChange = (event) => {
    setSecondNumber(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleResult = () => {
    const intFirst = parseInt(firstNumber, 10);
    const intSecond = parseInt(secondNumber, 10);

    if (operation === ADDITION) {
      setFinalResult(`${intFirst} added with ${intSecond} equals ${intFirst + intSecond}`);
    }

    if (operation === MULTIPLICATION) {
      setFinalResult(`${intFirst} multiplied by ${intSecond} equals ${intFirst * intSecond}`);
    }

    if (operation === SUBSTRACTION) {
      setFinalResult(`${intFirst} substracted by ${intSecond} equals ${intFirst - intSecond}`);
    }

    if (operation === DIVISIONS) {
      setFinalResult(`${intFirst} divided by ${intSecond} equals ${Math.round((intFirst / intSecond) * 100) / 100}`);
    }

    if (firstNumber === '' && secondNumber === '') {
      setFinalResult('whoa! you forgot to enter the number dude!');
    }

    if (Number.isNaN(intFirst) || Number.isNaN(intSecond)) {
      setFinalResult('bruh! all number man!');
    }

    if (Number.isNaN(intFirst) && Number.isNaN(intSecond)) {
      setFinalResult('bruh! all number man!');
    }
  };

  return (
    <>
      <h1 className="title">Let&apos;s do some calculatin&apos;</h1>
      <select className="operation-select" value={operation} onChange={handleOperationChange}>
        <option value="addition">Addition</option>
        <option value="multiplication">Multiplication</option>
        <option value="substraction">Substraction</option>
        <option value="division">Division</option>
      </select>
      <form className="input-container">
        <label className="input-label" htmlFor="firstNumber">
          First Number:
          <input type="text" name="firstNumber" value={firstNumber} onChange={handleFirstChange} />
        </label>
        <label className="input-label" htmlFor="secondNumber">
          Second Number:
          <input type="text" name="firstNumber" value={secondNumber} onChange={handleSecondChange} />
        </label>
      </form>
      <button className="button-math" type="button" onClick={handleResult}>Start Count!</button>
      <p className="result">{finalResult}</p>
    </>
  );
};

export default MathForm;
