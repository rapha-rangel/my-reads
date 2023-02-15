import { Link } from "react-router-dom";
import { React, useState } from "react";
const SearchBar = ({resetSearchBookList, searchBookList})=>{
    const [inputValue, setInputValue] = useState("");

    const handleInputChange=(event)=>{
        const valEvent = event.target.value;
        console.log(valEvent);
        setInputValue(valEvent)
        const changeInput=()=>{
            searchBookList(valEvent)
        }
        changeInput();
    }

    return (
        <div className="search-books-bar">
            <Link to="/">
                <button 
                    onClick={resetSearchBookList} 
                    className="close-search">
                        Close
                </button>
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    value={inputValue} 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={handleInputChange} />
            </div>
        </div>
    )
}

export default SearchBar;