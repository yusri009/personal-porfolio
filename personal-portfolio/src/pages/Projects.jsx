import React from 'react'

const projectsData = [
  {
    id: 1,
    title: "🐍 Snake Game - Java",
    video: "/videos/Snake Game Record.mkv", // public folder → use absolute path
    description: (
      <>
        I recreated the classic Snake Game using Java by following a{" "}
        <a
          href="https://youtu.be/bI6e6qjJ8JQ"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          tutorial
        </a>{" "}
        from Bro Code on YouTube, and then customized it to resemble the nostalgic
        style of old Nokia keypad phone games. While building the game, I focused on
        applying Object-Oriented Programming (OOP) principles—such as encapsulation,
        inheritance, and modular class design—to structure the code cleanly and
        maintainably. I modified the graphics and controls to give it a retro mobile
        feel, enhancing both the user experience and the technical depth of the
        project. This experience not only strengthened my Java fundamentals but also
        helped me gain hands-on practice in organizing game logic, managing
        real-time user input, and creating a responsive GUI.
        <br />
        <a
          href="https://github.com/yusri009/SnakeGameJava"
          target="_blank"
          className="aTag"
          rel="noreferrer"
        >
          Click Here!
        </a>{" "}
        to see the GitHub repo
      </>
    ),
  },
  {
    id: 2,
    title: "🛒 E-Commerce Web Application",
    video: "/videos/ECommerceWebsite.webm", // public folder → use absolute path
    description: (
      <>
        
        I developed a full-stack e-commerce web application using Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, featuring secure user authentication, product browsing with category filtering and search, and dynamic cart management. The system integrates MongoDB references to connect users’ selected products with the product collection, enabling seamless add, remove, and fetch operations with detailed product information.
        <br />
        <a
          href="https://github.com/yusri009/IPM-Stores-E-Commerce-Website-"
          target="_blank"
          className="aTag"
          rel="noreferrer"
        >
          Click Here!
        </a>{" "}
        to see the GitHub repo
      </>
    ),
  },

  // 🔹 Add more projects here...
]

const Projects = () => {
  return (
    <section className="grid ">
        <div className="mt-10">
          <h1 className="font-bold underline text-5xl text-center font-headFont">
            Projects
          </h1>
        </div>

        <div className="">
          {projectsData.map((project) => (
            <React.Fragment key={project.id}>
              <div className='grid lg:grid-cols-2 border-4 border-secondaryColor m-10 rounded-2xl'>
                <div className="m-9">
                <h1 className="font-headFont text-2xl text-secondaryColor">
                  {project.id}. {project.title}
                </h1>
                <div className="m-10">
                  <video src={project.video} controls className="rounded-lg shadow-lg" />
                </div>
              </div>

              <div className="text-wrap p-10 pt-0 text-center text-lg">
                <p className="font-subFont lg:pt-30">{project.description}</p>
              </div>
              </div>
              
            </React.Fragment>
          ))}
        </div>
      
    </section>
  )
}

export default Projects
