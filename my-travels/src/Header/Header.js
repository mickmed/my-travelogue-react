import React from 'react';
import "./Header.css"
// import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header>
      <nav>
        <a href="./">My Travels</a>
        {/* <span>pin your memories to the map</span> */}

        <div className='icons'>

          <span className="list-all" value="all" onClick={props.renderList}>🌎</span>
          <span className="favs-icon" value="favs" onClick={props.renderList}>⭐️</span>
          
          <span className="date-order">🕛</span>
          <span className="diary">📖</span>
        </div>


      </nav>
    </header>

  )
}

export default Header;