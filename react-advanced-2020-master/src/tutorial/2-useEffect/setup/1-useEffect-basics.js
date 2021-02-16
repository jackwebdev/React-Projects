import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  // Runs every time when called and if the condition is true. Also note the second paraemter has access to the value in array and will change when this [value] changes.
   useEffect(() => {
    console.log("Call Use Effect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  // Only runs once because of the second parameter 
  useEffect(() =>{
    console.log("Hello World")
  }, []);


  console.log("Render Component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
