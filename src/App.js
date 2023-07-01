import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [originalArray, setOriginalArray] = useState([1, 2, 3, 4]);
  const [squaredArray, setSquaredArray] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    const numbers = input
      ? input
          .split(/,\s*|,\s*,/)
          .map((item) => Number(item.trim()))
          .filter((item) => item || item === 0)
      : [];
    setOriginalArray(numbers);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArray = originalArray.map((number) => number ** 2);
    setSquaredArray(newArray);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="inputArray">Enter Numbers:</label>
        <input
          type="text"
          id="inputArray"
          value={originalArray.join(', ')}
          onChange={handleInputChange}
        />

        <button type="submit">Square</button>

        {squaredArray.length > 0 && (
          <>
            <label>Squared Array:</label>
            <p>{squaredArray.join(', ')}</p>
          </>
        )}
      </form>
    </div>
  );
}
