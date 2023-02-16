import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from 'prop-types';

const BookSearch =({books, searchBooks, searchBookList, resetSearchBookList, moveShelf}) =>{
   
    return(
        <div className="search-books">
            <SearchBar searchBookList={searchBookList} resetSearchBookList={resetSearchBookList}/>
            <SearchResults books={books} searchBooks={searchBooks} moveShelf={moveShelf}/>
        </div>
    )
}

BookSearch.propTypes = {
    books: PropTypes.array,
    searchBooks: PropTypes.array,
    searchBookList: PropTypes.func,
    resetSearchBookList: PropTypes.func,
    moveShelf: PropTypes.func,
  };

export default BookSearch;
