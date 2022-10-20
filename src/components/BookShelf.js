import React from "react";
import Book from "./Book";

function BookShelf({ books, shelfName, changeShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                shelfName="Currently Reading"
                changeShelf={changeShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
