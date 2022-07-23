import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentsList() {
  const [stu, setStu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/getstudents")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      setStu([...stu, ...data]);
      console.log(stu);
    });
  }, []);

    return (
      <div className="App">
        <h3>
        <Link to='/booklist'>Books List</Link>
        </h3>
        <h1>Students List</h1>
        <table border="1" cellPadding={10} cellSpacing={10} className="center">
          <tr>
            <th><h2> Serial No. </h2></th>
            <th><h2> First Name </h2></th>
            <th><h2> Last Name </h2></th>
          </tr>
          {stu.map((st) => (
            <tr>
              <td><h3> {st.id} </h3></td>
              <td><h3> {st.first_name} </h3></td>
              <td><h3> {st.last_name} </h3></td>
            </tr>
      ))}
        </table>
      </div>
    );
  }
  
  export default StudentsList;
  