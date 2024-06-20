"use client"

import { useState } from "react";
import { PiArrowUpFill } from "react-icons/pi";
import { PiArrowDownFill } from "react-icons/pi";
import projectList from "../constants/projectList";
import ProjectCard from "./ProjectCard";

function ProjectList() {

  const [projectDisplay, setProjectDisplay] = useState(3);

  // const showLessProjects = () => {
  //   setProjectDisplay(3);
  // };

  // const showMoreProjects = () => {
  //   setProjectDisplay((prevCount) => prevCount + 3);
  // };

  return (
    <>
      {projectList.slice(0, projectDisplay).map((proj, index) => (
        <ProjectCard
          key={index}
          projectTitle={proj.projectTitle}
          projectDescription={proj.projectDescription}
          imgPath={proj.imgPath}
          projectGithubLink={proj.projectGithubLink}
          projectLink={proj.projectLink}
          projectStacks={proj.projectStacks}
        />
      ))}

      {/* <div className="group inline-flex items-center cursor-pointer">
        {projectDisplay > 3 ? (
          <>
            <div className="p-1">
              <button onClick={showLessProjects} className="text-ivory text-lg">
                Show less
              </button>
              <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-secondary" />
            </div>
            <PiArrowUpFill
              fill="#FFFFF0"
              className="ml-1 transition-all duration-300 ease-in-out group-hover:mb-2 self-center"
            />
          </>
        ) : (
          <>
            <div className="p-1">
              <button onClick={showMoreProjects} className="text-ivory text-lg">
                Show more
              </button>
              <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-secondary" />
            </div>
            <PiArrowDownFill
              fill="#FFFFF0"
              className="ml-1 mb-1 transition-all duration-300 ease-in-out group-hover:mt-2 self-center"
            />
          </>
        )}
      </div> */}
    </>
  );
}

export default ProjectList;
