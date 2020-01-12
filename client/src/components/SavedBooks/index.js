import React from "react";
import "./style.css";

function SavedCard(props) {
  return (

<div className="card mb-3">
<div className="row no-gutters">
    <div className="col-md-3">
        <img src={props.image} alt={props.title} />
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">View</a>

        <button className="btn btn-outline-secondary RemoveSaved SavedOption" id={props.id} onClick={(event) => { props.deleteBook(event.target.id) }}>
          Remove Book
        </button>
                   
        </div>
    <div className="col-md-9">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Author: {props.author}</p>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
</div>
</div>
  );
};

function SavedBooks(props) {
  return (props.saved.length === 0) ? (
    <div id="SavedBooks">
      <h3> 0 Saved Results </h3>
    </div>
  ) : (
      <div id="SavedBooks">
        <h3> Saved Books </h3>
        {props.saved.map((book) => {
          return (
            <SavedCard
              key={book._id}
              id={book._id}
              image={book.image}
              title={book.title}
              author={book.authors}
              description={book.description}
              link={book.link}
              deleteBook={props.removeBook}
            />
          );
        })}
      </div>
    );
};

export default SavedBooks;