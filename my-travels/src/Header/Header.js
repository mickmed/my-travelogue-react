import React from 'react';
import "./Header.css"
// import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <header>
        <nav>
          <a href = "">My Travels</a>
          <span>pin your memories to the map</span>
          
          <div>
          ⭐️
          📖
          🕛
          </div>
          {/* <Link to={'/'}>Home </Link> */}
          {/* <Link className="navbar-item" to={'/createmovie'}>Add Location </Link> */}
          
        </nav>
      </header>
      
    )
}

export default Header;