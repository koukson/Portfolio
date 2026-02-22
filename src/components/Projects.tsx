import Title from "./Title"

import img1 from'../assets/projects/1.png'


import { Github, Video } from "lucide-react";




const projects =[
    {
        id:1,
        title:'Plateforme E-commerce',
        description:"Cette plateforme a été créer dans le but de faciliter l'accès a certains produits d'un coût vraiment raisonnable.",
        technologies:['React','Node.js'],
        demoLink:'#',
        repoLink:'#',
        image: img1,
    },
];




const Projects = () => {
  return (
    <div   className="min-h-screen justify  justify-center"    id="Projects">
        <div className="translate-y-40">
        <Title title={'MES PROJETS'}/>
        </div>
        <div className="translate-y-50">
        <div className="grid md:grid-cols-3 gap-4">
            { projects.map((project) =>(
                <div key= {project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                    <img
                    src={project.image} 
                    alt={project.title}  className="w-full rounded-xl h-56 object-cover"/>
                    <div>
                        <h1 className="my-2 font-bold">
                            {project.title}
                        </h1>
                        <p className="text-sm"> 
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                       {project.technologies.map((tech) =>(
                         <span className="badge badge-accent badge-sm">
                            {tech}
                         </span>
                       ))} 
                    </div>
                    <div className="flex">
                        <a className="btn btn-accent w-2/3" href={project.demoLink}>Demo <Video className="w-4"/> </a>
                         <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}> <Github className="w-4"/> </a>
                    </div>
                </div> 
         )) }
        </div>
        </div>
    </div>
  )
}

export default Projects