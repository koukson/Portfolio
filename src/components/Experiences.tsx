import Title from "./Title"

import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/js.png"
import imgREACT from "../assets/techno/react.png"
import imgNODE from "../assets/techno/node-js.png"
import imgFLUTTER from "../assets/techno/flutter.png"
import imgNEXT from "../assets/techno/next-js.webp"
import imgpf from "../assets/projects/pf.png"
import imgeco from "../assets/projects/e-co.png"






const information =[
 {
  id:"1",
  title:"Realisation de mon portfolio",
  period:"2025-2026",
  description:[
    "Maîtrise des composants React (fonctionnels).",
     "Création d’une interface responsive.",
      "Intégration de CSS / Tailwind CSS."],
  imge: imgpf
 },
 {
  id:"2",
  title:"Creation d'un E-commerce",
  period:"2025-2026",
  description:[
    "Création d’interfaces dynamiques avec React.",
     "Création d’API avec Node.js et Express.",
     "Communication frontend-backend via API REST."],
  imge:imgeco
 },
 
];











const skills =[
  { id:1, name:"HTML", image: imgHTML },
  { id:2, name:"CSS", image: imgCSS },
  { id:3, name:"JavaScript", image: imgJS },
  { id:4, name:"React.js", image: imgREACT },
  { id:5, name:"Node.js", image: imgNODE },
  { id:6, name:"FLUTTER", image: imgFLUTTER },
  { id:7, name:"Next.js", image: imgNEXT },
  
];

const Experiences = () => {
  return (
    <div  className="min-h-screen  justify justify-center "    id="Experiences" >
      <div className="translate-y-20">
        <Title title={"EXPERIENCES"}/>
      </div>


      <div className="translate-y-30">


      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/4 mt-4 md:mt-0">
          { skills.map((skill) =>(
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img src={skill.image}alt={skill.name} className="object-cover rounded-full h-full w-full"/>
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))

          }
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {information.map((information) =>(
            <div key={information.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">             
              <div className="flex items-center">
                <img src={information.imge} className="object-cover h-10 w-10"/>
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {information.title}
                  </h1>
                <span className="text-sm">{information.period}</span>
              </div>
              </div>
              <ul  className="list-disc ml-16 mt-2">
                {information.description.map((desc , index) =>(
                  <li key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default Experiences