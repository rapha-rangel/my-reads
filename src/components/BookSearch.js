import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const BookSearch =({books, searchBooks, searchBookList, resetSearchBookList, moveShelf}) =>{
   
    return(
        <div className="search-books">
            <SearchBar searchBookList={searchBookList} resetSearchBookList={resetSearchBookList}/>
            <SearchResults books={books} searchBooks={searchBooks} moveShelf={moveShelf}/>
        </div>
    )
}

export default BookSearch;
