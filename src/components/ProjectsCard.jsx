import { useState } from 'react';
import { FaReact, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiAstro, SiSpring } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const TAGS = {
    REACT: {
      name: "Reactjs",
      class: "bg-black text-[#00D8FF]",
      icon: FaReact,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#2298BD] text-white",
      icon: RiTailwindCssFill,
    },
    CHAKRA: {
      name: "ChakraUI",
      class: "text-[#7BCBD4] bg-white",
      icon: SiChakraui,
    },
    ASTRO: {
      name: "Astro",
      class: "bg-[#FF5D01] text-white",
      icon: SiAstro,
    },
    JAVA: {
      name: "Java",
      class: "bg-white text-[#5382A1]",
      icon: FaJava,
    },
    SPRING: {
      name: "Spring",
      class: "bg-[#68bd45] text-white",
      icon: SiSpring,
    },
}

const ProjectsCard = ({ project }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        console.log("Opening modal for project: ", project);
        setSelectedProject(project);        
        setModalOpen(true);        
    };   

    const closeModal = () => {
        console.log("Closing modal");
        setModalOpen(false);
        setSelectedProject(null);        
    };  

    return ( 
        <>
            <div className="cursor-pointer w-full relative overflow-hidden h-[250px] rounded-md group text-gray-200" style={{ backgroundColor: project.bgColor }} onClick={() => openModal(project)}
            >
                <div className="z-10 absolute inset-0 flex items-center p-5 lg:group-hover:pl-0 lg:group-hover:opacity-0 transition-all duration-300 ease-out">
                    <div className="flex flex-col gap-y-2">
                        <span className="text-2xl font-bold max-w-[13ch]">{project.title}</span>
                        <p className=" mb-2 w-[30ch]">{project.description}</p>
                        <div className="flex gap-x-2">
                            <ul className="flex flex-row mb-2 gap-x-2">
                                {project.technologies.map((tech, index) => {
                                    const tag = TAGS[tech];
                                    if (!tag) return null;
                                    const Icon = tag.icon;
                                    return (
                                        <li key={index}>
                                            <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} p-1`}
                                            >
                                                <Icon className="size-4 xs:size-5"/>                                                                                  
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <img className="right-2 scale-125 top-5 absolute w-[250px] lg:right-[-20px] lg:top-11 lg:group-hover:w-[500px]  lg:group-hover:h-auto transition-all duration-700 ease-out" src={project.image} alt={`${project.title} imagen`}/>
                <div className="h-full aspect-square right-10 absolute lg:group-hover:right-[500px] transition-all duration-700 ease-out" style={{ backgroundImage: `linear-gradient(to right, ${project.bgColor}, transparent)` }}></div>                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-5 right-5 z-10 scale-0 lg:group-hover:scale-100 transition-all duration-500">
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
            </div>            
            {isModalOpen && (                
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-gray-200">
                    <div className="fixed inset-0 bg-gray-400 dark:bg-black bg-opacity-80" onClick={closeModal}></div>
                    <div class="relative mx-auto border-gray-600 bg-gray-600 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[90vh] sm:h-[85vh] max-w-[600px]">
                        <div class="h-[32px] w-[3px] bg-gray-600 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-600 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-600 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div class="h-[64px] w-[3px] bg-gray-600 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div class="rounded-[2rem] h-[80vh] sm:h-[80vh] bg-gray-600 dark:bg-gray-800 mt-5">  
                            <button onClick={closeModal} className="absolute top-1 right-1 sm:right-3 text-neutrals600"><IoClose className='size-6'/></button>
                                    <h2 className="text-2xl text-center text-pretty font-semibold mb-4">{selectedProject.title}</h2>               
                                    <div className='flex flex-col gap-2 h-5/6 overflow-y-auto scrollbar-style p-2'>
                                        <img src={selectedProject.image2} className='rounded-xl mb-2'/>
                                        <ul className="flex flex-row mb-2 gap-4 flex-wrap">
                                            {selectedProject.technologies.map((tech, index) => {
                                                const tag = TAGS[tech];
                                                if (!tag) return null;
                                                const Icon = tag.icon;
                                                return (
                                                    <li key={index}>
                                                        <span className={`flex gap-2 rounded-full text-sm ${tag.class} py-1 px-2 items-center justify-center`}>
                                                            <Icon className="size-4 xs:size-5" />
                                                            {tag.name}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        {selectedProject.descriptionFull.map((text, index) => (
                                            <p key={index} className='mb-4 text-pretty'>{text}</p>
                                        ))}
                                        <div className='flex gap-6 items-center justify-center'>
                                            {selectedProject.github && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={selectedProject.github}
                                                    role="link"
                                                    className="inline-flex items-center justify-center gap-2 px-6 py-1 space-x-2 font-semibold transition text-gray-800 bg-gray-300 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-700 hover:border-gray-700 rounded-3xl hover:text-gray-300"
                                                >
                                                    Code
                                                </a>
                                            )}
                                            {selectedProject.link && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={selectedProject.link}
                                                    role="link"
                                                    className="inline-flex items-center justify-center gap-2 px-6 py-1 space-x-2 font-semibold transition text-gray-800 bg-gray-300 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-700 hover:border-gray-700 rounded-3xl hover:text-gray-300"
                                                >
                                                    Link
                                                </a>
                                            )}
                                        </div>
                                    </div> 
                        </div>
                    </div>  
                </div>           
            )}
        </> 
    );
};

export default ProjectsCard;