import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from the react-scroll library

import PurpleBenzi from "../images/purple-benzi.png";
import OrangeBenzi from "../images/orange-benzi.png";
import Scroll from "./Scroll.js";

function Header() {
  return (
    <div className="header">
      <div className="laurels developer">
        <div className="hh1">Developer</div>
      </div>
      <img
        className="purple-benzi"
        src={PurpleBenzi}
        alt="girl with big smile, long hair, sunglasses on with reflections of lines of code running in them, in a long sleeve dress and big yellow over the ear headphones on - whole thing is tinted purple"
      />
      <img
        className="orange-benzi"
        src={OrangeBenzi}
        alt="girl with big smile, long hair, sunglasses on with reflections of lines of code running in them, in a long sleeve dress and big yellow over the ear headphones on - whole thing is tinted orange"
      />
      <div className="polygon-2"></div>
      <div className="laurels artist">
        <div className="hh1">Artist</div>
      </div>

      <div className="polygon-1"></div>
      <div className="hh2 tagline">
        Translating Your Vision into a Digital Reality
      </div>
      <div className="contact-button">
        {/* Use ScrollLink for scrolling functionality */}
        <ScrollLink
          to="contact" // Target the contact section using the id
          smooth={true} // Enable smooth scrolling
          duration={500} // Set the scrolling duration
        >
          <button className="button-text">Contact Benzi</button>
        </ScrollLink>
      </div>
      <Scroll />
    </div>
  );
}

export default Header;
