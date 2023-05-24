import React from "react";
import "./Homepage.css";
import Sidenav from "./nav/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className='wrapper'>
      <div className='nav'>
        <div className='timeline'></div>
      </div>
    </div>
  );
}

export default Homepage;
