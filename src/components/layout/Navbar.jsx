// import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between mx-12 gap-8 py-8 text-gray-400 bg-transparent">
        <div className="font-mono">
          <Link to={`/`}>
            <img
              src="Images/Biggerprofile-copy.png"
              alt=""
              className="w-12 h-12 rounded-full bg-black"
            />
          </Link>
        </div>
        <div className="flex gap-8 justify-between">
          <Link to={`/productdesign`}>UI/UX Design</Link>
          <Link to={`/frontend`}>Frontend Development</Link>
        </div>
      </div>
      {/* <div>
        <a href="https://www.behance.net/wanguinjoroge" target="_blank">
          <img
            src="/Behance icon (1).png"
            alt="behance"
            // className="behance"
          />
        </a>
        <a href="https://dribbble.com/Wangoi" target="_blank">
          <img
            src="/Dribble icon (1).png"
            alt="dribble"
            // className="dribble"
          />
        </a>
        <a href="https://github.com/R-Wangui" target="_blank">
          <img
            src="/Github icon (1).png"
            alt="github"
            // className="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
          target="_blank"
        >
          <img
            src="/Linkedin icon (1).png"
            alt="linkedin"
            // className="linkedin"
          />
        </a>
      </div> */}
    </>
  );
}

export default Navbar