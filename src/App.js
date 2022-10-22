import "./App.css";
import { useState, useEffect } from "react";
import TitleApp from "./components/TitleApp";
//import BookShelf from "./components/BookShelf";
import MainShelf from "./components/MainShelf";
import * as BooksAPI from "./BooksAPI";
import Book from "./components/Book";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [oneBook, setOneBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [bookFound, setBookFound] = useState([]);
  const [updatedFromSearch, setUpdatedFromSearch] = useState([]);

  //Get all books
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      //console.log(data);
      setOneBooks(data);
    });
  }, []);

  //UseEffect for search
  useEffect(() => {
    let on = true;
    if (search) {
      BooksAPI.search(search).then((data) => {
        if (data.error) {
          setBookFound([]);
        } else {
          if (on) {
            console.log(data);
            setBookFound(data);
          }
        }
      });
    }
    return () => {
      on = false;
      setBookFound([]);
    };
  }, [search]);

  //use STATE FOR CHANGING FROM A BOOK SHELF TO ANOTHER
  function changeShelf(currentBook, newShelf) {
    const updatedShelf = oneBook.map((book) => {
      return book.id === currentBook.id && (currentBook.shelf = newShelf)
        ? currentBook
        : book;
      // if (book.id === currentBook.id) {
      //   currentBook.shelf = newShelf;
      //   return currentBook;
      // }
      // return book;
    });
    setOneBooks(updatedShelf);
    BooksAPI.update(currentBook, newShelf).then((data) => {
      console.log(data);
      return data;
    });
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {/* {console.log(search)} */}
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {bookFound.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={changeShelf}
                    shelfName="Currently Reading"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <TitleApp />
          <div className="list-books-content">
            <MainShelf books={oneBook} changeShelf={changeShelf} />
          </div>

          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
