import { sectionHeader } from "../constants/mainContent";
import WebStacks from "../components/WebStacks";
import stacksIconObj from "../constants/technologiesIcons";

function Technologies() {
  return (
    <section className="mb-20">
      <h1
        id={sectionHeader.technologies.toLowerCase()}
        className="mb-6 section text-2xl text-secondary-light font-medium"
      >
        {sectionHeader.technologies}
      </h1>
      <ul className="flex flex-wrap justify-start items-center">
        {Object.entries(stacksIconObj).map(([stack, icon]) => (
          <WebStacks key={stack} iconComponent={icon} stack={stack} padding="px-4 py-3" />
        ))}
      </ul>
    </section>
  );
}

export default Technologies;
