import Title from "./Title"
import img from'../assets/img.png'
import { CalendarSync, LetterText, GlobeLock} from "lucide-react"

const aboutSections =[
  {
    id: 1,
    title:"Développeur Frontend",
    description:"Je suis un développeur frontend avec une bonne experience.",
    icon: <LetterText className="text-accent scale-150"/>,
  },
   {
    id: 2,
    title:"Développeur Backend",
    description:"j'ai une connaissance sur les bases du developpment backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150"/>,
  },
   {
    id: 3,
    title:"Passionné par la cybersécurité",
    description:"Enthousiaste et motivé, je m'intéresse activement à la cybersécurité et je cherche à développer mes compétences dans ce domaine.",
    icon: <GlobeLock className="text-accent scale-150"/>,
  },
];


const About = () => {
  return (
    <div   className=" justify justify-center"  id="About">
        <div className="bg-base-300 p-10 mb-10 md:mb-32">
          <div className="translate-y-[5%] sm:translate-y-[10%] md:translate-y-10">
          <Title  title={"A PROPOS"}/>
          </div>
              <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                  <img src={img} alt="" className="w-96 object-cover rounded-xl"/>
                </div>
                <div className="md:ml-4 space-y-4">
                    { aboutSections.map((section)=>(
                        <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
                          <div className="mb-2 md:mb-0">{section.icon}</div>

                          <div className="md:ml-4 text-center md:text-left">
                            <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                            <p className="text-sm">{section.description}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
              </div>
        </div>
    </div>
  )
}

export default About