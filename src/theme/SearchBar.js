import React from 'react';
import '../App.css'

function SearchBar(props) {
  return (
     <>
       <div className="headerTheme">
          <input type="text" placeholder={props.search}/>
       </div>
     </>
  );
}

export default SearchBar;
