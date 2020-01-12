import React from 'react';
import "./style.css"

const Search = (props) => {
    return (
        <div className="row search-area">
            <div className="col-sm text-center">
                <form onSubmit={props.searchBooks} action="">
                    <input placeholder="Search for a book" onClick={(event) => props.searchBooks(event)} type="text" id="searchbar" />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;