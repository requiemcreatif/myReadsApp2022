import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "./BookShelf";

function Search({ changeShelf, setShowSearchpage, showSearchPage, books }) {
  const [search, setSearch] = useState("");
  const newChange = (e) => {
    research(e.target.value);
  };

  const research = async (type) => {
    const data = await BooksAPI.search(type);
    if (data && !data.error) {
      setSearch(
        data.map((book) => {
          const findBook = books.find((newbook) => newbook.id === book.id);
          if (findBook) {
            const newBookFound =  Object.assign(book, {shelf: findBook.shelf});
            return newBookFound;
          }
            return Object.assign(book, {shelf: "none"});
        })
      );
    } else {
      setSearch([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => {
            setShowSearchpage(!showSearchPage);
            research("");
          }}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            //value={search}
            onChange={(event) => newChange(event)}
          />
          {/* {console.log(search)} */}
        </div>
      </div>
      <div className="search-books-results">
        <BookShelf books={search} changeShelf={changeShelf} />
      </div>
    </div>
  );
}

export default Search;
