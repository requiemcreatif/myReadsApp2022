import React from "react";
import BookShelf from "./BookShelf";
//import Book from "./Book";

function MainShelf({ books, changeShelf }) {

  const MainShelf = (shelf) => {
    const newShelf = books.filter((book) => book.shelf === shelf);
    return newShelf;
  };

  return (
    <>
      <BookShelf
        books={MainShelf("currentlyReading")}
        title={"Currently Reading"}
        changeShelf={changeShelf}

      />
      <BookShelf
        books={MainShelf("wantToRead")}
        title={"Want To Read"}
        changeShelf={changeShelf}

      />

      <BookShelf
        books={MainShelf("read")}
        title={"Read"}
        changeShelf={changeShelf}
      />
    </>
  );
}

export default MainShelf;
