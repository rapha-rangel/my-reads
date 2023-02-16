import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

const BookList = ({bookshelves, books, moveShelf}) =>{
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
            <div>
                {bookshelves.map(shelf=>(
                    <Bookshelf shelf={shelf} key={shelf.key} books={books} moveShelf={moveShelf}/>
                ))}
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">
                <button>Add a Book</button>
            </Link>
        </div>
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.array,
    bookshelves: PropTypes.array,
    moveShelf: PropTypes.func,
  };

export default BookList;