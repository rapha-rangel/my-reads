import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom"
const BookList = ({bookshelves, books, moveShelf}) =>{
    console.log(books);
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
        <div className="open-search a">
            <Link to="/search">
                <button>Add a Book</button>
            </Link>
        </div>
        </div>
    )
}

export default BookList;