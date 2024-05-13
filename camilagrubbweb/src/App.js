import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
