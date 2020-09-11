import React from 'react';
import '../App.css'
import config from '../config/config.json'
import SearchBar from '../theme/SearchBar'

function Header() {

   return (
      <>
         <div className="header" style={config.header.bgColor}>
            <div className="row">
               <div className="column side">
                  <span><img style={config.header.logoCss} src={config.header.logo} /></span>
                  <span className="organisation_Name"><strong> Online Grocery</strong></span>
               </div>
               <div className="column middle">
                  <SearchBar search={"Search"} />
               </div>
               <div className="column side right" style={config.header.userDetailsCss}>
                  <span><img style={config.header.user.style} src={config.header.user.avtar} /></span>
                  <span className="userName"> {config.header.userDetails} </span>
               </div>
            </div>
         </div>

      </>
   );
}

export default Header;
