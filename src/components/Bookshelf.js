import Book from "./Book";
import PropTypes from 'prop-types';

const Bookshelf =({shelf, books, moveShelf})=>{
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book=> book.shelf === shelf.key).map(book=>(
                        <Book book={book} key={book.id} shelf={shelf.key} moveShelf={moveShelf}/>
                    ))
                    }
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array,
    shelf: PropTypes.object,
    moveShelf: PropTypes.func,
  };

export default Bookshelf;