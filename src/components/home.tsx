import { Download, Mail } from "lucide-react"
import img from "../assets/img.png"

const home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center"    id="home">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" >
        <div className="flex flex-col ">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour , <br/> je suis {""}<span className="text-accent">JIE TRAORE</span></h1>
            <p className="my-4 text-md text-center md:text-left"> Je suis un développeur fullstack <br/> début mon expérience en utilisant react  <br/> et node.js, aussi flutter pour le mobile.<br/> Contactez-moi si vous avez besoin de mes services.</p>
            <div className="flex items-center space-x-4">
              <a href="*"   target="_blank" rel="noopener noreferrer" className=" btn btn-base-content md:w-fit "> < Download/> Télécharger CV </a>  
              <a href="mailto:traorejie4@gmail.com"  className=" btn btn-accent md:w-fit "> <Mail className="w-5 h-5"/> Contactez-moi </a>
            </div>  



        </div>



        <div className="md:ml-60">
          <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"  style={{ borderRadius: '30% 70% 70% 30% / 67% 62% 38% 33%' }}/>
        </div>
      </div>
    </div>
  )
}

export default home