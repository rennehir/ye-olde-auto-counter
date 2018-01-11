import React from 'react';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className="Counter">
      <p>
        {props.text}: {props.count}
      </p>
      <div>
        <button className="green" onClick={props.plusOne}>+1</button>
        <button className="yellow" onClick={props.minusOne}>-1</button>
        <button className="blue" onClick={props.reset}>Reset</button>
      </div>
      <button onClick={props.deleteCounter}>Delete</button>
    </div>
  );
};

export default Counter;