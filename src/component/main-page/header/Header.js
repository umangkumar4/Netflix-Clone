import React from 'react';
import './header.css'
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Header() {
  return (
    <>
    <header style={{backgroundImage:"url('https://www.iconvsicon.com/wp-content/uploads/2021/06/DontBreathe2-2021.jpg')"}}>
      <div className="class_content"> 
        <div className="header_billboard">
        <img className="billboard" alt="Don't breathe 2 icon" src="https://occ-0-3011-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUSIHOYZ_IfzuwLgceNHDeXwblIKM1xa1C3lGd4Rv4IssLpRFUkAc5OTBOEvpTajIl0c8iVoFfLmpF3QKa78r13PWlQpxTFglmrQeys2M4XQ.png?r=e02" />
        </div>

        <h4 className="header_description">
        Don't Breathe 2 is a 2021 American horror thriller film directed by Rodo Sayagues in his directorial debut, from a screenplay he co-wrote with Fede Álvarez. The sequel to 2016's Don't Breathe, it was produced by Álvarez, Sam Raimi and Robert Tapert. The film stars Stephen Lang, reprising his role as Norman Nordstrom / "The Blind Man", with Brendan Sexton III and Madelyn Grace in supporting roles.
        </h4>

        <div className="header_buttons">
            <button className="play_button button"><FaPlay />  Play</button>
            <button className=" more_info_button button"><AiOutlineInfoCircle />  More Info</button>
        </div>


      
      </div>
    </header>
    </>
  )
}

export default Header
