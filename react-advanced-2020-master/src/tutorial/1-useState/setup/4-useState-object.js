import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // Using spread operator to pass all the objects in so we can change just the message
    // setPerson({...person, message: "Hello World" });

    // Using single useStates();
    setMessage("Hello World");
  }
  return (
    <>
    {/* These below are for the object example */}
    {/* <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3> */}

    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
