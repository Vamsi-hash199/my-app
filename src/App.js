import React from 'react';
import './App.css';

function App() {
  const imageUrl = 'https://www.svgrepo.com/show/323027/polar-star.svg';

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} className="App-logo" alt="my image" />
        <p>
          Hello, this is my first React App - Vamsi
        </p>
      </header>
    </div>
  );
}

export default App;
