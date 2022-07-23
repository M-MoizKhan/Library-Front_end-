// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsList from "./StudentsList";
import BooksList from "./BooksList";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/booklist" element={<BooksList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
