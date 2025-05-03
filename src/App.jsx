import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; // Corrected import
import JobList from './components/JobList'; // Corrected import
import './App.css';

function App() {
  const [searchDone, setSearchDone] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // Add state for search results
  console.log("search results",searchResults)
  const handleSearchClick = (results) => { // Receive results from SearchBar
    setSearchResults(results); // Store the results
    setStartTransition(true);
    setTimeout(() => setSearchDone(true), 1000);
  };

  return (
    <div className="app-container">
      <div className={`search-wrapper ${startTransition ? 'move-to-top' : ''}`}>
        <SearchBar onSearch={handleSearchClick} />
      </div>

      {searchDone && (
        <div className="results-wrapper fade-in">
          <JobList jobs={searchResults} /> {/* Pass searchResults to JobList */}
        </div>
      )}
    </div>
  );
}

export default App;
