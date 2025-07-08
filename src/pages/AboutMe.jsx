// import React from 'react'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import '../components/styles/AboutMe.css'

function AboutMe() {
  return (
    <>
      <NavBar />
      {/* <img src="/aboutme-image.png" alt="" /> */}
      <div id="aboutme">
        <img src="/Aboutme.png" alt="" className="aboutImage" />
        <div className="aboutmeText">
          <h2>Hi there, I&apos;m Wangui</h2>
          <h5>
            A product designer and frontend developer My background in product
            design has given me a keen eye for detail and a strong understanding
            of user experience, which I now apply to create seamless and
            visually appealing web interfaces. I am proficient in HTML, CSS,
            JavaScript, and React, and have experience working with various
            front-end frameworks and libraries. I&apos;m currently seeking an
            internship or an entry-level front-end development position where I
            can continue to grow and learn on the job. I&apos;m excited to bring
            my unique blend of design and development skills to a dynamic team
            and contribute to creating amazing digital experiences
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe