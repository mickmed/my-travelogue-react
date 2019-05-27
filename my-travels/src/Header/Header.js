import React from 'react';
import "./Header.css"
// import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'



const Header = (props) => {
  return (
    <header>
      <nav>
        <a href="./">My Travels</a>
        {/* <span>pin your memories to the map</span> */}

        <div className='icons'>

          <span className="list-all" value="all" onClick={props.renderList} data-tip="list order">🌎</span>
          <span className="favs-icon" value="favs" onClick={props.renderList}
          data-tip="favorites">⭐️</span>
          
          <span className="date-order" value="date" onClick={props.renderList}data-tip="date order">🕛</span>
          <span className="diary" data-tip="diary">📖</span>

          <ReactTooltip/>
        </div>


      </nav>
    </header>

  )
}

export default Header;