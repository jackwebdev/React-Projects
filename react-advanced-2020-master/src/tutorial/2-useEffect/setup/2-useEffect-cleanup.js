import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth)
  };

  useEffect(() => {
    console.log("UseEffect Called")
    window.addEventListener('resize', checkSize);
    return () => {
      console.log("Clean Up, Removed Event Listener");
      window.removeEventListener("resize", checkSize)
    };
  });
  
  console.log("Render")
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
