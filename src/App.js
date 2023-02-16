import "./App.css";
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import * as BooksApi from "./BooksAPI"
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";

function App() {
  const [books, setBooks] = useState([]);
  const [erro, setErro] = useState(false);
  const [searchBooks, setSearchBooks] = useState([]);


  const bookshelves =[
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];
  
  useEffect(()=>{
    BooksApi.getAll()
    .then(booksFromApi=>{setBooks(booksFromApi)})
    .catch(err =>{
      console.log("erro")
      setErro(true)})
  },[]);

  const changeShelf = (book, shelf)=>{
      BooksApi.update(book, shelf);

      let updatedBooks = [];
      updatedBooks = books.filter(b => b.id !== book.id)

        if (shelf !== "none") {
          book.shelf = shelf;
          updatedBooks = updatedBooks.concat(book);
        }

      setBooks(updatedBooks)
      console.log(books)
  };

  const searchBookList = (query) => {
      if(query.length > 0){
        BooksApi.search(query).then(books=>{
          console.log(books);
          if(books.error){
            setSearchBooks([])
          }else {
            setSearchBooks(books)
          }
        })
      } else{
        setSearchBooks([])
      }
    };
  
  const resetSearchBookList =()=>{
      setSearchBooks([])
    }

  

 
    if(erro) { 
      return(
        <div>Network error. Please try again.</div>)}
      else{
        return(
        <div className="app">
          <Routes>
            <Route
              exact path="/" 
              element={
                <BookList  
                  bookshelves={bookshelves} 
                  books={books}
                  moveShelf={changeShelf}/>
              }
            />
            <Route
              path="/search" 
              element={
                <BookSearch 
                  searchBooks={searchBooks}
                  books={books}
                  moveShelf={changeShelf}
                  searchBookList={searchBookList}
                  resetSearchBookList={resetSearchBookList}/>
                }
            />
          </Routes>
        </div>
      );
    };
}

export default App;
