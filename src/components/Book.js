import React from "react";
import { useState, useEffect } from "react";
import Select from "./Select";

function Book({ book, changeShelf }) {
  const { title, authors, imageLinks } = book;
  const { thumbnail } = imageLinks;
  const [shelf, setShelf] = useState(book.shelf);


  const moveToShelf = (event) => {
    setShelf(event);
    changeShelf(book, event);
  };

  useEffect(() => {
    setShelf(book.shelf); 
    book.shelf !== shelf && changeShelf(book, shelf);
  }, [book, shelf, changeShelf]);



  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
        <Select moveToShelf={moveToShelf} shelf={shelf}/>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

export default Book;
