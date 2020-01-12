import axios from "axios";
const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {

  getGoogleBookSearch: function (query) {
    return axios.get(SEARCH_URL + query);
  },
  // Saves a book to the database
  saveBook: function (bookSaveChoice) {
    return axios.post("/api/books", bookSaveChoice);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }

};