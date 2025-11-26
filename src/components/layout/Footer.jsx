// import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <div className="mt-22">
        <h3 className="text-gray-300 text-center text-2xl">
          Let&apos;s Connect and Talk
        </h3>
        <div className="mt-8 flex justify-center gap-4">
          {/* <div>
            <h5>Reach me on my socials</h5>
            </div> */}
          <a href="https://www.behance.net/wanguinjoroge" target="_blank">
            <img src="/Behance icon.png" alt="behance" className="footerIcon" />
          </a>
          <a href="https://dribbble.com/Wangoi" target="_blank">
            <img src="/Dribble icon.png" alt="dribble" className="footerIcon" />
          </a>
          <a href="https://github.com/R-Wangui" target="_blank">
            <img src="/Github icon.png" alt="github" className="footerIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
            target="_blank"
          >
            <img
              src="/Linkedin icon.png"
              alt="linkedin"
              className="footerIcon"
            />
          </a>
        </div>
        <hr className="text-gray-500 mt-8 py-8" />
      </div>
    </>
  );
}

export default Footer