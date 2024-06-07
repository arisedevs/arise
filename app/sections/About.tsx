import mainContent, { sectionHeader } from "../constants/mainContent";
import Image from "next/image";

function About() {

  return (
    <section className="mb-20">
      <h1 id={sectionHeader.about.toLowerCase()} className="mb-6 section text-2xl text-secondary-light font-medium">{sectionHeader.about}</h1>
      <div className="flex justify-center items-center flex-col xl:flex-row xl:gap-4">
        {/* <div className="xl:order-last w-60 mb-5 xl:mb-0 flex justify-center xl:justify-end">
        <Image src="images/about-img.svg" alt="profile" width={200} height={200} priority/>
        </div> */}
        <Image src="images/about-img.svg" className="xl:order-last w-52 mb-5 xl:mb-0" alt="profile" priority width={208} height={208}/>
        <p className="leading-7 xl:flex-1">{mainContent.about}</p>
      </div>
    </section>
  );
}

export default About;
