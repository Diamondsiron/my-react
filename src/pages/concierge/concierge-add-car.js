import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import raf from 'raf';
function Car() {

  const [count, setCount] = useState(0);

    return (
      <div className="App">
      <p>
        You clicked {count} times
      </p>
      <button onClick={()=>setCount(count + 1)}>
        click me 
      </button>
      </div>
    );
  }
  
  export default Car;