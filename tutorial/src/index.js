import React from 'react';
import ReactDom from "react-dom";

// Import CSS
import './index.css';

import { data } from './books'
import SpecificBook from './Book'
import { greeting } from './testing/testing'

// Example of maping names to h1
// const names = ['John', 'peter', 'susan'];
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>
// });
// console.log(newNames)

function BookList() {
    console.log(greeting);
    return (
        <section className="booklist">
            {data.map((book) => {
                return (
                      <SpecificBook key={book.id} {...book}></SpecificBook>
                    )
            })}
        </section>
    )
}



ReactDom.render(<BookList/>, document.getElementById("root"));
