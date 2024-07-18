import React from 'react';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Photo Gallery</h1>
      </header>
      <main>
        <PhotoGallery/>
      </main>
    </div>
  );
}

export default App;
