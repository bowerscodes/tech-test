import React, { useState } from 'react';
import '../styles/app.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

const App = () => {
const [searchResults, setSearchResults] = useState([]);
console.log(searchResults)
  return (
    <div className="app">
      <img
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      className="app-logo"
      alt="nasaLogo" />
      <Search 
        setSearchResults={setSearchResults}
      />
      <SearchResults searchResults={searchResults}/>
    </div>
  );
}

export default App;
