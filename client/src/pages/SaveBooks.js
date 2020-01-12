import React, { Component } from "react";
import API from "../utils/API";

import SavedBooks from "../components/SavedBooks";

class SaveBooks extends Component {
  state = {
    results: []
  };

  getBooks = () => {
    API.getBooks()
      .then((data) => {
        return this.setState({ results: data.data });
      })
      .catch(err => console.log(err));
  };

  removeBook = (id) => {
    API.deleteBook(id)
      .then(() => { this.getBooks() })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBooks();
  };

  render() {
    return (

          <SavedBooks saved={this.state.results} removeBook={this.removeBook} />

    );
  };
};

export default SaveBooks;