import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/getbooks")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      setBooks([...books, ...data]);
      console.log(books);
    });
  }, []);

    return (
      <div className="App">
        <h3>
        <Link to='/'>Students List</Link>
        </h3>
        <h1>Books List</h1>
        <table border="1" cellPadding={10} cellSpacing={10} className="center">
          <tr>
            <th><h2> Book Name </h2></th>
            <th><h2> Author </h2></th>
            <th><h2> Borrowed by </h2></th>
            <th><h2> Date Of Borrow </h2></th>
            <th><h2> Expected Date Of Return </h2></th>
          </tr>
          {books.map((book) => (
            <tr>
            <th><h2> {book.book_name} </h2></th>
            <th><h2> {book.author} </h2></th>
            <th><h2> {book.borrowed_by} </h2></th>
            <th><h2> {book.borow_date} </h2></th>
            <th><h2> {book.return_date} </h2></th>
            </tr>
      ))}
        </table>
      </div>
    );
  }
  
  export default BooksList;
  