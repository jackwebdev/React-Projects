import React from 'react';
import ReactDom from "react-dom";

// Import CSS
import './index.css';

// setup vars
const books = [
    {   id: 1,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81ykn7%2B2r3L._AC_UL200_SR200,200_.jpg",
        title: "While We Can't Hug (A Hedgehog and Tortoise Story)",
        author: "Eoin McLaughlin"
    },
    {   
        id: 2,
        img: "https://images-eu.ssl-images-amazon.com/images/I/71opRtEE0iL._AC_UL200_SR200,200_.jpg",
        title: "The Smeds and the Smoos",
        author: "Julia Donaldson"
    },
    {   
        id: 3,
        img: "https://images-eu.ssl-images-amazon.com/images/I/61dSrnSRMCL._AC_UL200_SR200,200_.jpg",
        title: "Conker the Chameleon",
        author: "Hannah Peckham"
    }
]
// Example of maping names to h1
// const names = ['John', 'peter', 'susan'];
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>
// });
// console.log(newNames)

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return (
                      <Book key={book.id} {...book}></Book>
                    )
            })}
        </section>
    )
}

const Book = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert("Hello world");
    };
    return (
        <article className="book">
            <img src= {img} alt=""/> 
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference example</button>
        </article>
    )
    
}


ReactDom.render(<BookList/>, document.getElementById("root"));
