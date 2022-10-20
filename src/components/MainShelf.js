import React from "react";
import BookShelf from "./BookShelf";

function MainShelf({ books, changeShelf }) {
  //CURRENTLY READ
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  //console.log(currentlyReading);
  //WANT TO READ
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");

  //READ
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <BookShelf
        shelfName="Currently Reading"
        books={currentlyReading}
        changeShelf={changeShelf}
        //books={books}
      />
      <BookShelf
        shelfName="Want To Read"
        books={wantToRead}
        changeShelf={changeShelf}
        //books={books}
      />

      <BookShelf shelfName="Read" books={read} changeShelf={changeShelf} />
    </div>
  );
}

export default MainShelf;
