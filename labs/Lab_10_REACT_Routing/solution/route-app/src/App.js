import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './task3/Users'
import About from './About';
import UserInfo from './task3/UsersInformation';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className = "navigation">
          <Link id = "main" to = "/main">Главная</Link>
          <Link id = "about" to = "/about">О сайте</Link>
        </nav>
        <Routes>
          <Route path = "/main" element = {<Main/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/information/:id" element = {<UserInfo/>}/>
          <Route path = "/info/:id" element = {<UserInfo/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;