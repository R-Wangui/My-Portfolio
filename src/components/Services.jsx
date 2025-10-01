

function Services() {
  return (
    <>
      <div className=" my-16">
        <h2 className="text-gray-300 text-3xl text-center">What I do</h2>
        <div className="my-8 mx-8 grid grid-cols-1 lg:grid lg:grid-cols-2 gap-8 font-light text-gray-300 text-center items-center ">
          {skills.map((service, i) => (
            <div key={i} className="border rounded-xl p-4 flex flex-col items-center">
              <img
                className="filter invert brightness-75 mb-5"
                src={service.icon}
                alt="Code or design icon"
              />
              <h5 className="mb-4 font-semibold text-xl">{service.role}</h5>
              <ul className=" text-center list-disc list-inside">
                {service.skill.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services

const skills = [
  {
    icon: "/undraw_code.svg",
    role: "Software Development",
    skill: ["JavaScript", "Tailwind CSS", "React", "NextJS"],
  },
  {
    icon: "/undraw_command-button.svg",
    role: "UI/UX Design",
    skill: ["User Interface (UI)", "User Experience (UX)", "Wireframing and Prototyping", "Design thinking"],
  }
];