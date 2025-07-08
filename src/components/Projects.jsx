// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import NavBar from '../components/layout/NavBar';
// import Footer from '../components/layout/Footer';
// import '../components/styles/Projects.css'

import { Link } from "react-router-dom";

// function Projects() {
//   return (
//     <>
//         <NavBar />
//         <div id='projectsSection'>
//             <h2>Projects I have Done</h2>
//             <div id='projects'>
//                 <Card
//                 // style={{ width: '24rem' }}
//                 className='project1'>
//                     <Card.Img variant="top" src="/Images/8.jpg" />
//                     <Card.Body>
//                         <Card.Title>Local Dish Corner</Card.Title>
//                         <Card.Text>
//                             Providing a marketing solution to increase visibility for local food vendors to their customers.
//                         </Card.Text>
//                         <Button variant="primary">Visit</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                 // style={{ width: '24rem' }}
//                 className='project1'>
//                     <Card.Img variant="top" src="/Images/8.jpg" />
//                     <Card.Body>
//                         <Card.Title>KeepTabs</Card.Title>
//                         <Card.Text>
//                             An application that helps users track their time efficiently and improve their productivity.
//                         </Card.Text>
//                         <Button variant="primary">Visit</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                 // style={{ width: '24rem' }}
//                 className='project1'>
//                     <Card.Img variant="top" src="/Images/8.jpg" />
//                     <Card.Body>
//                         <Card.Title>Gen-Z Dictionary</Card.Title>
//                         <Card.Text>
//                             An application with the latest slang and words used by the Gen-Z.
//                         </Card.Text>
//                         <Button variant="primary">Visit</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </div>
//         <Footer />
//     </>
//   );
// }

// export default Projects;

// import React from 'react'

function Projects() {
  return (
    <>
      <div className=" my-12">
        {/* <img src="/Aboutme.png" alt="" className="z-10" /> */}
        <h2 className="text-gray-300 text-3xl text-center">
          Projects I&apos;ve done
        </h2>
        <div className="my-4 mx-4 grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 text-gray-300">
          {pastProjects.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 cursor-pointer">
              <img src={item.image} alt="Project image" />
              <h5 className="my-6 text-xl">{item.project}</h5>
              <p>{item.description}</p>
              <p className=" mt-6 font-light">{item.tools}</p>
              <Link>{item.link}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects

const pastProjects = [
  {
    image: "/Images/8.jpg",
    role: "Software Development",
    project: "Local Dish Corner",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "Nextjs, typescript, and tailwind css",
    link: "",
  },
  {
    image: "/Images/8.jpg",
    role: "Software Development",
    project: "I-Sentry",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "Nextjs, typescript, and tailwind css",
    link: "",
  },
  {
    image: "/Images/8.jpg",
    role: "Software Development",
    project: "Local Dish Corner",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "Nextjs, typescript, and tailwind css",
    link: "",
  },
  {
    image: "/Images/8.jpg",
    role: "Design",
    project: "I-Sentry",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "Figma",
    link: "",
  },
];