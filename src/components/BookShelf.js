import React from "react";
import Book from "./Book";


function BookShelf({ books, title, changeShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((item) => (
              <li key={item.id}>
                <Book book={item} changeShelf={changeShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}



export default BookShelf;
