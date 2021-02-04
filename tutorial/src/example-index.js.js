import React from "react";
import ReactDom from "react-dom";

// JSX RULES
// return single element
// div / section / article or Fragment
// use camelCase for HTML attribute 
// close every element
// formatting

// Stateless functional component
// Always return JSX

// function Greeting() {
//   return <h4>This is Jack and this is my first component :D</h4>
// }

/* 
  Generating single elements with create element Examples
*/
// Using Arrow Function
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World!")
// };

/* 
  Generating multiple elements with create element Examples
*/ 
// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     "div", 
//     {},
//     React.createElement("h1", {}, "Hello World!")
//     )
// }

/*
  Fragments
*/
// function Greeting() {
//   return( 
//     <React.Fragment>
//       <div className="Like-This">
//         <h3>Hello People</h3>
//         <ul>
//           <li>
//             <a href="#">Hello World</a>
//           </li>
//           <img src="" alt=""/>
//         </ul>
//       </div>
//       <div></div>
//     </React.Fragment>
//   );
// }

/*
  Nested Components, React Tools
*/
function Greeting() {
  return(
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>Jack</h2>;
const Message = () => {
  return <p>I love React :D</p>
}

ReactDom.render(<Greeting/>, document.getElementById("root"));
