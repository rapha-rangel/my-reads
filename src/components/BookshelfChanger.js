import { useState } from "react";

const BookshelfChanger=({shelf, book, moveShelf})=>{
    const [newShelf, setNewShelf] = useState(shelf)
    const handleMoveShelf =(event)=>{
        setNewShelf(event.target.value)
        moveShelf(book, event.target.value)
    }
    return(
        <div className="book-shelf-changer">
            <select value={newShelf} onChange={handleMoveShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookshelfChanger;