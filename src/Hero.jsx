import React from 'react'

function Hero() {
  return (
    <>
        <div id='hero'>
          <div className='tagline'>
            <h1>Hi I'm Wangui,</h1>
            <h2>I design and develop web applications</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="61.6228" height="37.3723" viewBox="0 0 61.6228 37.3723" creator="Katerina Limpitsouni">
              <path d="M9.30609,2.30615c-2.03177,14.02367,6.02463,28.17831,19.38961,33.11865,6.6521,2.45894,14.23146,2.64007,20.93168,.25374,6.43345-2.29132,13.16825-7.80647,11.82203-15.44111-.64931-3.68233-3.50413-6.4619-6.8516-7.87359-4.29054-1.8094-9.08658-1.24379-13.50694-.26793-.9422,.20801-.54347,1.65443,.39876,1.44642,3.80776-.84063,7.88512-1.38601,11.66804-.12671,2.96118,.98575,5.72224,3.16694,6.62105,6.25383,2.15311,7.39476-5.18818,12.83874-11.28488,14.81239-12.26942,3.97191-26.32972-.81963-33.2971-11.7252-3.77016-5.90117-5.45097-13.10306-4.44423-20.05175,.1368-.94423-1.30832-1.35196-1.44642-.39876h0Z" fill="#ffffff" origin="undraw"/>
              <path d="M1.42197,15.29568C4.55526,10.57094,7.68855,5.8462,10.82185,1.12147l-1.17793,.15179c4.05423,3.68551,8.10846,7.37101,12.16269,11.05652,.71295,.64811,1.77681-.40964,1.06066-1.06066C18.81303,7.58361,14.7588,3.8981,10.70457,.2126c-.37148-.3377-.90297-.26283-1.17793,.15179C6.39335,5.08912,3.26006,9.81386,.12677,14.5386c-.53503,.80679,.76352,1.55882,1.29521,.75708h0Z" fill="#ffffff"/>
            </svg>
          </div>
          <img src="/Images/Biggerprofile-copy.png" alt="My profile" />
          <div className='circle'></div>
          <div className='circle1'></div>
        </div>
        <div className='icons'>
          <img src="/Dribble icon.png" alt="dribble" className='dribble' />
          <img src="/Behance icon.png" alt="behance" className='behance' />
          <img src="/Github icon.png" alt="github" className='github' />
          <img src="/Linkedin icon.png" alt="linkedin" className='linkedin' />
          {/* <div className='icon'>
            <img src="/mdi_gmail.png" alt="gmail" />
          </div> */}
        </div>
    </>
  )
}

export default Hero