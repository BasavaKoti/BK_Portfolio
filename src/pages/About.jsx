import React from "react";
import { skills } from "../constants/techstack";
import { tools } from "../constants/ToolsandTechnologies";
import { platforms } from "../constants/platforms";
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Basavakiran J Koti
        </span>
      </h1>

      <div>
        <p className="mt-3 flex flex-col gap-3 text-slate-500">
          Software Engineer based in India. Front-end Developer specializing in
          technical education through hands-on learning in designing, developing
          and maintaining front-end web applications. <br />
          <br /> I'm passionate about creating truly beautiful, efficient
          digital products that people can interact with and use. Currently
          looking for Internship/Full time opportunity in Front-end Development.
        </p>
      </div>
      {/* MY SKILLS */}
      <div className="py-8 flex flex-col">
        <h4 className="text-3xl font-semibold">Tech Stack</h4>
        <br />
        <h4 className="text-2xl ml-5">Languages</h4>

        <div className="mt-10 ml-5 flex flex-wrap gap-7">
          {skills.map((skill) => (
            <div className="block-container w-14 h-14" key={skill.name}>
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-9 ml-5">
        {skills.map((skill) => (
          <h4>{skill.name}</h4>
        ))}
      </div>

      {/* tools and technologies */}
      <div className="py-10 flex flex-col">
        <h3 className="text-2xl ml-5">Tools and Technologies</h3>
        <div className="mt-10 ml-5 flex flex-wrap gap-8">
          {tools.map((tool) => (
            <div className="block-container w-14 h-14" key={tool.name}>
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-12 ml-5">
        {tools.map((tool) => (
          <h4>{tool.name}</h4>
        ))}
      </div>
      {/* Platforms */}
      <div className="py-10 flex flex-col">
        <h3 className="text-2xl ml-5">Platforms</h3>
        <div className="mt-10 ml-5 flex flex-wrap gap-7">
          {platforms.map((platform) => (
            <div className="block-container w-14 h-14" key={platform.name}>
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={platform.imageUrl}
                    alt={platform.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-9 ml-6">
        {platforms.map((platform) => (
          <h4>{platform.name}</h4>
        ))}
      </div>

      <CTA />
    </section>
  );
};

export default About;
