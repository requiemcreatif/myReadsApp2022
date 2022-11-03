import "./App.css";
import { useState, useEffect } from "react";
import TitleApp from "./components/TitleApp";
import MainShelf from "./components/MainShelf";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  //Get all books
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
    return () => {
      setBooks([]);
    };
  }, []);

  //Change shelf
  async function changeShelf(book, shelf) { 
    await BooksAPI.update(book, shelf);
    const getBook = Object.assign(book, {shelf: shelf});
    setBooks((books) =>{
      const getNewBooks = books.filter((item) => item.id !== book.id);
      getNewBooks.push(getBook);
      return getNewBooks;
    });
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          changeShelf={changeShelf}
          books={books}
        />
      ) : (
        <div className="list-books">
          <TitleApp />
          <div className="list-books-content">
            <MainShelf
              books={books}
              changeShelf={changeShelf}
            />
          </div>

          <div className="open-search">
            <button onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
