import React, { useState } from 'react';
import print from 'print-js'
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import raf from 'raf';
function Car() {

  const [count, setCount] = useState(0);
  function pp(){
    // fetch('https://printjs.crabbly.com/docs/base64.txt').then(function(response) {
		//   response.text().then(function(base64) {
		// 	printJS({
		// 	  printable: base64,
		// 	  type: 'pdf',
		// 	  base64: true
		// 	})
		//   })
		// })
    print('docs/PrintJS.pdf')
  }
    return (
      <div className="App">
      <p>
        You clicked {count} times
      </p>
      <button onClick={()=>setCount(count + 1)}>
        click me 
      </button>
      <button onClick={pp}>打印</button>
      </div>
    );
  }
  
  export default Car;