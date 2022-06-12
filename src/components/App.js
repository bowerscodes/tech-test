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
      {/* <SearchResults searchResults={searchResults}/> */}
      <SearchResults searchResults={[
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      ]} />
    </div>
  );
}

export default App;
