import React from "react";
import "./Sidenav.css";

function Sidenav() {
  return (
    <div className='sidenav'>
      <img
        className='sidenav__logo'
        src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png'
        alt='Instagram Logo'
      />

      <div className='kafelki'>
        <button classname='kafelek'>
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Search</span>
        </button>

        <button classname='kafelek'>
          <span>Explore</span>
        </button>

        <button classname='kafelek'>
          <span>Reels</span>
        </button>

        <button classname='kafelek'>
          <span>Messages</span>
        </button>

        <button classname='kafelek'>
          <span>Notifications</span>
        </button>

        <button classname='kafelek'>
          <span>Create</span>
        </button>

        <button classname='kafelek'></button>
      </div>
    </div>
  );
}

export default Sidenav;
