import Book from "./Book";
const SearchResults = ({books, searchBooks, moveShelf})=>{
    const updateBooks = searchBooks.map(searchedBooks=>{
        books.map(b=>{
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

export default SearchResults;