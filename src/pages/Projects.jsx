import React from "react";
import { projects, skills } from "../constants/projects";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";



const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        {/* My{" "} */}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      {/* <div>
        <p className="mt-3 flex flex-col gap-3 text-slate-500">
          Software Engineer based in India. Front-end Developer specializing in
          technical education through hands-on learning in designing, developing
          and maintaining front-end web applications. <br />
          <br /> I'm passionate about creating truly beautiful, efficient
          digital products that people can interact with and use. Currently
          looking for Internship/Full time opportunity in Front-end Development.
        </p>
      </div> */}

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-black rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="project icon"
                  className="w-20/20 h-20/20 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col ">
              {" "}
              {/*//project content */}
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500"
                >Live Link</Link>
             <img src={arrow} alt="arrow" className="w-3 h-3 object-contain" />
             <br />
             
             <Link
                  to={project.link}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500"
                >Github Link</Link>
             <img src={arrow} alt="arrow" className="w-3 h-3 object-contain" />


              </div>
             
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default Projects;
