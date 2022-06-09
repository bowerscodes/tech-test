import React, { useState } from 'react';
import '../styles/app.css';
import Search from '../components/Search';

const App = () => {

  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" className="app-logo" alt="nasaLogo" />
      <Search />
    </div>
  );
}

export default App;
