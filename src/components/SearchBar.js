import { Link } from "react-router-dom";
import { React, useState } from "react";
import PropTypes from 'prop-types';

const SearchBar = ({resetSearchBookList, searchBookList})=>{
    const [inputValue, setInputValue] = useState("");

    const handleInputChange=(event)=>{
        const valEvent = event.target.value;
        console.log(valEvent);
        setInputValue(valEvent)
        searchBookList(valEvent)
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

SearchBar.propTypes = {
    searchBookList: PropTypes.func,
    resetSearchBookList: PropTypes.func,
  };

export default SearchBar;