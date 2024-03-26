import React from 'react';
import './Search.css';

const Searchbar = () => {
  return (
    <div>

      <input type="search" placeholder="search"></input>
      <button type="submit" className="btn btn-outline-primary">Search</button>
      
    </div>
  );
}

export default Searchbar;
