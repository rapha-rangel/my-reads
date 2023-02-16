import BookshelfChanger from "./BookshelfChanger";
import PropTypes from 'prop-types';

const Book = ({book, shelf, moveShelf})=>{
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                          `url(${book.imageLinks &&
                            book.imageLinks.thumbnail})`,
                        }}/>
                    <BookshelfChanger book={book} shelf={shelf} moveShelf={moveShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors && book.authors.join(", ")}
                </div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    shelf: PropTypes.string,
    moveShelf: PropTypes.func,
  };

export default Book;