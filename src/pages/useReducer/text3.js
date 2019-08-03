import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const Example03 = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
      <div>
        {count1}
        <button onClick={() => dispatch1('increment')}>+1</button>
        <button onClick={() => dispatch1('decrement')}>-1</button>
        <button onClick={() => dispatch1('reset')}>reset</button>
        {count2}
        <button onClick={() => dispatch2('increment')}>+1</button>
        <button onClick={() => dispatch2('decrement')}>-1</button>
        <button onClick={() => dispatch2('reset')}>reset</button>
      </div>
    );
  };
  
  export default Example03;