
function Projects() {
  return (
    <>
      <div className=" my-12">
        <h2 className="text-gray-300 text-3xl text-center">
          Projects I&apos;ve done
        </h2>
        <div className="my-4 mx-8 grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 text-gray-300">
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
              {/* <button> Visit</button> */}
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