import React from 'react';
import ReactDom from "react-dom";

// Import CSS
import './index.css';

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

// setup vars
const author = "Eoin McLaughlin";
const title = "While We Can't Hug (A Hedgehog and Tortoise Story)";
const img = "https://images-eu.ssl-images-amazon.com/images/I/81ykn7%2B2r3L._AC_UL200_SR200,200_.jpg";

const Book = () => {
    return (
        <article className="book">
            <img src= {img} alt=""/> 
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
    
}

// const Image = () => ( 
//     <img 
//         src="https://images-eu.ssl-images-amazon.com/images/I/81ykn7%2B2r3L._AC_UL200_SR200,200_.jpg" 
//         alt=""
//     /> 
// );

// const Title = () => <h1>While We Can't Hug (A Hedgehog and Tortoise Story)</h1>

// const Author = () => <h4 style={{color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem"}}>Eoin McLaughlin</h4>


ReactDom.render(<BookList/>, document.getElementById("root"));
