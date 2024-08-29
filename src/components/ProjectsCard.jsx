import IconComponent from './IconComponent.jsx';

const ProjectsCard = ({ title, description, image, bgColor, technologies }) => {
    return ( 
        <div className="cursor-pointer w-full relative overflow-hidden h-[250px] rounded-md group" style={{ backgroundColor: bgColor }}>
            <div className="z-10 absolute inset-0 flex items-center p-5 lg:group-hover:pl-0 lg:group-hover:opacity-0 transition-all duration-300 ease-out">
                <div className="flex flex-col gap-y-2">
                    <span className="text-2xl font-bold max-w-[13ch]">{title}</span>
                    <p className=" mb-2 w-[30ch]">{description}</p>
                    <div className="flex gap-x-2">
                        <ul className="flex flex-row mb-2 gap-x-2">
                            {technologies.map((tag) => (
                                <li>
                                    <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} p-1`}
                                    >
                                        <IconComponent icon={tag.icon} className="size-4 xs:size-5" />                                        
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <img className="right-5 top-5 absolute w-[250px] lg:group-hover:w-[500px]  lg:group-hover:h-auto transition-all duration-700 ease-out" src={image} alt="Photo"/>
            <div className="h-full aspect-square right-10 absolute lg:group-hover:right-[500px] transition-all duration-700 ease-out" style={{ backgroundImage: `linear-gradient(to right, ${bgColor}, transparent)` }}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-5 right-5 z-10 scale-0 lg:group-hover:scale-100 transition-all duration-500">
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
            </svg>
        </div>  
    );
};

export default ProjectsCard;