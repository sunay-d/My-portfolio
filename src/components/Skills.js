import React from "react";
import { skills } from "../data";
import '../animate.js'

export default function Skills(){
    return (
        <section id="skills" className="reveal bg-primary">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="splash sm:text-4xl text-3xl font-medium title-font text-white">
                Tech Stack
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 w-1/2 sm:w-1/3 w-full">
                  <div className="bg-secondary rounded flex p-4 h-full items-center">
                    <img src={skill.icon} className="w-8 mr-3"/>
                    <span className="title-font font-medium text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}