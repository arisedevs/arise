import { sectionHeader } from "../constants/mainContent";
import ProjectList from "../components/ProjectList";

function Projects() {
  

  return (
    <section className="mb-20 space-y-5">
      <h1
        id={sectionHeader.projects.toLowerCase()}
        className="mb-6 section text-2xl text-secondary-light font-medium"
      >
        {sectionHeader.projects}
      </h1>

      <ProjectList />
    </section>
  );
}

export default Projects;
