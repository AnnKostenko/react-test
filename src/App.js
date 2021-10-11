import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";


function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/?q=pushkin")
      .then(res => {
        setBooks(res.data['items']);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  return (
      <Book books={books} />
  )
}

export default BooksList;
