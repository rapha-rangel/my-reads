import Book from "./Book";
import PropTypes from 'prop-types';

const SearchResults = ({books, searchBooks, moveShelf})=>{
    const updateBooks = searchBooks.filter(searchedBooks=>{
        books.filter(b=>{
            if (b.id === searchedBooks.id) {
                searchedBooks.shelf = b.shelf;
            }
            return b;
        });
        return searchedBooks;
        });

    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {updateBooks.map(book =>(
                    <Book 
                        book={book}     
                        key={book.id} 
                        shelf={book.shelf ? book.shelf: "none"}
                        moveShelf={moveShelf}/>
                ))}
            </ol>
        </div>
    )
}

SearchResults.propTypes = {
    books: PropTypes.array,
    searchedBooks: PropTypes.array,
    moveShelf: PropTypes.func,
  };

export default SearchResults;