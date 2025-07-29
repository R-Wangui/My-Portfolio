// import { useState } from 'react';
import '../components/styles/HeroStyles.css'
import Resume from '../assets/Wangui Resume with Portfolio.pdf';


function Hero() {

  // const [loading, setLoading] = useState();

  // Click event for the resume button, you download the resume
  const downloadResume = () => {
    window.open(Resume, '_blank')
    // const link = document.createElement('a');
    // link.href = Resume;
    // link.download = 'myresume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // alert("Do you want to dowload this resume?")
  }
  // document.getElementById('heroButton').onclick = downloadResume(pdfUrl)
  return (
    <>
      <div id="hero">
        <div className="tagline">
          <h1>
            Hi I&apos;m <span className="text-fuchsia-500">Wangui</span>,
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69.24294"
            height="15.80886"
            viewBox="0 0 69.24294 15.80886"
            // creator="Katerina Limpitsouni"
            className="underline"
          >
            <path
              d="M.72389,3.45029c17.61435-.50658,35.2287-1.01317,52.84305-1.51975,4.98519-.14337,9.97039-.28675,14.95558-.43012V.00042c-8.83186,1.05581-17.60382,2.57091-26.27205,4.56741-2.14332,.49366-4.28,1.01594-6.40953,1.56607-1.05269,.27195-2.3153,.4399-3.31391,.88073-.47489,.20964-.80211,.47908-.87434,1.02-.22804,1.70781,2.20153,1.4773,3.2296,1.62674,2.13816,.31081,4.23336,.83088,6.28557,1.50243v-1.44642c-.84494,.27522-1.68989,.55043-2.53483,.82565-.7163,.23331-1.57267,.40129-2.17822,.87126-.8292,.64353-1.1137,1.77347-.7637,2.75392,.48969,1.37179,1.74578,1.58515,3.03827,1.63982,.96521,.04083,.96329-1.45925,0-1.5-.75909-.03211-2.2427-.31661-1.57179-1.47157,.2364-.40695,.83243-.50768,1.24556-.64225,1.05449-.34347,2.10898-.68694,3.16347-1.03041,.71208-.23194,.71158-1.21357,0-1.44642-1.76105-.57628-3.55254-1.04253-5.37931-1.35788-.74353-.12835-1.49145-.23301-2.24113-.31823-.22714-.02681-.45459-.05069-.68236-.07164-.00609,.352,.11775,.45162,.37153,.29887,.31074,.05651,.85683-.23004,1.18326-.31646,3.6997-.97938,7.42191-1.87372,11.16291-2.68113,7.45025-1.60796,14.97319-2.8658,22.541-3.77049,.93069-.11126,.98999-1.52847,0-1.5C50.90816,.50701,33.29381,1.01359,15.67947,1.52018c-4.98519,.14337-9.97039,.28675-14.95558,.43012-.96319,.0277-.96718,1.52782,0,1.5H.72389Z"
              fill="#797676"
              origin="undraw"
            />
          </svg>
          <h4>I design and develop web applications</h4>
          <button
            id="heroButton"
            className="border rounded-lg px-4 py-1"
            onClick={() => downloadResume()}
          >
            Get Resume
          </button>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61.6228"
            height="37.3723"
            viewBox="0 0 61.6228 37.3723"
            // creator="Katerina Limpitsouni"
            className="curledArrow"
          >
            <path
              d="M9.30609,2.30615c-2.03177,14.02367,6.02463,28.17831,19.38961,33.11865,6.6521,2.45894,14.23146,2.64007,20.93168,.25374,6.43345-2.29132,13.16825-7.80647,11.82203-15.44111-.64931-3.68233-3.50413-6.4619-6.8516-7.87359-4.29054-1.8094-9.08658-1.24379-13.50694-.26793-.9422,.20801-.54347,1.65443,.39876,1.44642,3.80776-.84063,7.88512-1.38601,11.66804-.12671,2.96118,.98575,5.72224,3.16694,6.62105,6.25383,2.15311,7.39476-5.18818,12.83874-11.28488,14.81239-12.26942,3.97191-26.32972-.81963-33.2971-11.7252-3.77016-5.90117-5.45097-13.10306-4.44423-20.05175,.1368-.94423-1.30832-1.35196-1.44642-.39876h0Z"
              fill="#ffffff"
              origin="undraw"
            />
            <path
              d="M1.42197,15.29568C4.55526,10.57094,7.68855,5.8462,10.82185,1.12147l-1.17793,.15179c4.05423,3.68551,8.10846,7.37101,12.16269,11.05652,.71295,.64811,1.77681-.40964,1.06066-1.06066C18.81303,7.58361,14.7588,3.8981,10.70457,.2126c-.37148-.3377-.90297-.26283-1.17793,.15179C6.39335,5.08912,3.26006,9.81386,.12677,14.5386c-.53503,.80679,.76352,1.55882,1.29521,.75708h0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="heroImages">
          <img
            src="/Images/Hero-image.png"
            alt="My profile"
            className="profileImage"
          />
          <img src="/Circles.png" alt="circles" className="circles" />
          {/* I removed a div that had all these icons */}
          <div id="heroIcons">
            <a href="https://www.behance.net/wanguinjoroge" target="_blank">
              <img
                src="/Behance icon (1).png"
                alt="behance"
                className="behance"
              />
            </a>
            <a href="https://dribbble.com/Wangoi" target="_blank">
              <img
                src="/Dribble icon (1).png"
                alt="dribble"
                className="dribble"
              />
            </a>
            <a href="https://github.com/R-Wangui" target="_blank">
              <img src="/Github icon (1).png" alt="github" className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/wangui-njoroge-639378181/"
              target="_blank"
            >
              <img
                src="/Linkedin icon (1).png"
                alt="linkedin"
                className="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;