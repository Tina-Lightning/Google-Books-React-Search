import React from "react";
import "./style.css";

function ResultsCard(props) {
    return (
        <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-3">
                <img src={props.image} alt={props.title} />
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">View</a>

                <button  type="button" className="btn btn-outline-secondary SaveResult ResultOption" id={props.id} onClick={(event) => props.saveBook(event)}>
                    Save Book
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

function ResultsWrapper(props) {

    return (
        <div className="list">
            {
                props.results.map((book) => {
                    return (
                        <ResultsCard
                            key={book.id}
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            author={book.authors}
                            description={book.description}
                            link={book.link}
                            saveBook={props.saveBook}
                        />
                    );
                })
            }
        </div>
    )

};

export default ResultsWrapper;