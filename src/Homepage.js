import React from "react";
import "./Homepage.css";
import Sidenav from "./nav/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className='wrapper'>
      <div className='nav'>
        <Sidenav />
        <div className='timeline'>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
