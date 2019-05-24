import React from 'react';
import Gallery from "../src/Gallery";
import './App.css';

function App() {
  return (
    <div>
    <Gallery api="https://jsonplaceholder.typicode.com/" />
    </div>
  );
}

export default App;
