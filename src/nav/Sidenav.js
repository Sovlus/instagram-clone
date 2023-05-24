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
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Home</span>
        </button>

        <button classname='kafelek'>
          <span>Home</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
