import React from 'react';
import ReactDom from "react-dom";

// Import CSS
import './index.css';

// setup vars
const firstBook = {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81ykn7%2B2r3L._AC_UL200_SR200,200_.jpg",
    title: "While We Can't Hug (A Hedgehog and Tortoise Story)",
    author: "Eoin McLaughlin"
}
const secondBook = {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71opRtEE0iL._AC_UL200_SR200,200_.jpg",
    title: "The Smeds and the Smoos",
    author: "Julia Donaldson"
}


function BookList() {
    return (
        <section className="booklist">
            <Book 
                img={firstBook.img} 
                title={firstBook.title}
                author={firstBook.author}
            >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga porro vel dolor repudiandae dicta eos ex, atque dolorum nemo nulla.</p>
            </Book>
            <Book 
                img={secondBook.img} 
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    )
}

// Example of JS Destructuring as props.
// const Book = ({ img, title, author, children }) => {
const Book = (props) => {
    // Example of JS Destructuring syntax.
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className="book">
            <img src= {img} alt=""/> 
            <h1>{title}</h1>
            <h4>{author}</h4>
            {/* Paragraph tag between <Book> <p>Text Here</p> </Book> */}
            {props.children}

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
