import React from "react";

const Book = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert("Hello world");
    };
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className="book" onMouseOver={() => { console.log(title) }}>
            <img src= {img} alt=""/> 
            <h1 onClick={() => { console.log(title)}}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference example</button>
            <button type="button" onClick={() => { complexExample(author)} }>More complex example</button>
        </article>
    )
    
}

export default Book