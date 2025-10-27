import CardSwap, { Card } from "./layout/Cards";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="my-4">
        <h2 className="text-gray-300 text-3xl text-center">
          Projects I&apos;ve done
        </h2>
        <div
          className="relative h-240 left-0"
          // style={{ height: "600px", position: "relative" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {pastProjects.map((item, i) => (
              <Card
                key={i}
                className="border rounded-xl p-4 cursor-pointer text-gray-300"
              >
                <img src={item.image} />
                <h3 className="my-6 text-xl">{item.project}</h3>
                <p>{item.description}</p>
                <p className=" mt-6 mb-4 font-light">{item.tools}</p>
                <a
                  href={item.link}
                  target="_blank"
                  className="border rounded-sm px-4 py-1"
                >
                  View Project
                </a>
              </Card>
            ))}
          </CardSwap>
          {/* <Link
            to={`/frontend`}
            className="border rounded-full border-gray-700 px-4 py-1 text-gray-300"
          >
            Go to Projects
          </Link> */}
        </div>
        <Link
          to={`/frontend`}
          className="border rounded-full border-gray-700 px-4 py-1 text-gray-300"
        >
          Go to Projects
        </Link>
        {/* <div className="my-4 mx-8 grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 text-gray-300">
          {pastProjects.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 cursor-pointer">
              <img src={item.image} alt="Project image" className="" />
              <h5 className="my-6 text-xl">{item.project}</h5>
              <p>{item.description}</p>
              <p className=" mt-6 mb-4 font-light">{item.tools}</p>
              <a
                href={item.link}
                target="_blank"
                className="border rounded-sm px-4 py-1"
              >
                View Project
              </a>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Projects


// List rendering
const pastProjects = [
  {
    image: "/Images/Goldies.png",
    role: "Software Development",
    project: "Goldies Confectionaries",
    description:
      "A fully responsive e-commerce platform designed to showcase and sell products online.",
    tools: "Nextjs, typescript, and tailwind css",
    link: "https://goldies-frontend-v3.vercel.app",
  },
  {
    image: "/Images/8.jpg",
    role: "Software Development",
    project: "I-Sentry",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "ReactJs, JavaScript, and Bootstrap",
    link: "https://localdishcorner.netlify.app/",
  },
  {
    image: "/Images/8.jpg",
    role: "Software Development",
    project: "Local Dish Corner",
    description:
      "A product that provides a marketing solution to increase visibility for local food vendors to their customers.",
    tools: "React, typescript, and tailwind css",
    link: "https://localdishcorner.netlify.app/",
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