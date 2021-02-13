import React, { useState } from 'react';
// use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("Random Title")

  const handleClick = () => {
    if(text === 'Random Title') {
      setText("Hello, world")
    } else {
      setText("Random Title")
    }
  }

  return (
      <React.Fragment>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>
          Change title
        </button>
      </React.Fragment>
  )
};

export default UseStateBasics;
