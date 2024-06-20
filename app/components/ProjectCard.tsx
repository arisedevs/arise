import { FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import WebStacks from "../components/WebStacks";
import Image from "next/image";

type ProjectCardProps = {
    projectTitle: React.ReactNode,
    projectDescription: React.ReactNode,
    imgPath: string,
    projectGithubLink: string
    projectLink: string,
    projectStacks: string[],
}


function ProjectCard(props: ProjectCardProps) {

    const { projectTitle, projectDescription, imgPath, projectGithubLink, projectLink, projectStacks } = props;

    return (
        <div className="p-4 border rounded-xl border-secondary space-y-4 bg-main-light group">

                <div className="flex flex-row space-x-5">

                    <div className="space-y-4 basis-1/2">
                        <Image src={imgPath} className="rounded-md" alt="stack" width={260} height={260} priority/>

                        <ul>
                            {projectStacks.map((stack, index) => (
                                <WebStacks key={index} stack={stack} paddingY={1} textColor="text-ivory" fontSize="text-xs" />
                            ))}
                            

                        </ul>

                    </div>

                    <div className="flex flex-col space-y-3 basis-1/2">
                        <h1 className="text-ivory text-xl font-medium group-hover:text-secondary-light transition-all duration-300">{projectTitle}</h1>
                        <div className="space-x-3">
                            <a href={projectGithubLink} target="_blank" className="inline-flex items-center space-x-1 transition-all duration-300 text-sm group-hover:text-ivory">
                                Github
                                <FaGithub className="group-hover:fill-ivory transition-all duration-300 ml-1" />
                            </a>
                            <a href={projectLink} target="_blank" className="inline-flex items-center space-x-1 transition-all duration-300 text-sm group-hover:text-ivory">
                                Link
                                <GoLink className="group-hover:fill-ivory transition-all duration-300 ml-1" />
                            </a>
                        </div>
                        <p className="text-sm">{projectDescription}</p>
                    </div>

                </div>

            </div>
    )
}

export default ProjectCard
