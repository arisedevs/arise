import { sectionHeader } from "../constants/mainContent";
import Experiences from "../components/Experiences";
import experienceList from "../constants/experienceList";
import { PiArrowRightFill } from "react-icons/pi";
import OpenResumeButton from "../components/OpenResumeButton";

function Experience() {

  return (
    <section className="mb-20 space-y-5">
      <h1 id={sectionHeader.experience.toLowerCase()} className="mb-6 section text-2xl text-secondary-light font-medium">{sectionHeader.experience}</h1>

      {experienceList.map((exp, index) => (
        <Experiences key={index} position={exp.position} company={exp.company} location={exp.location} duration={exp.duration}
          jobDescription={exp.jobDescription} />
      ))}

      <div className="group inline-flex items-center cursor-pointer">
        <div className="p-1">
          <OpenResumeButton />
          <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-secondary" />
        </div>
        <PiArrowRightFill fill="#FFFFF0" className="ml-1 transition-all duration-300 ease-in-out group-hover:ml-4"/>
      </div>

    </section>
  );
}

export default Experience;
