import { Container } from "lucide-react"

const Navbar = () => {
  return (
   <nav className="fixed  top-0 left-0 w-full bg-base-100 shadow z-50  ">
    <div className="flex justify-center md:justify-between items-center p-4 ">
        <div className="flex items-center font-bold text-3xl md:text-2xl">
          <Container className="mr-2"/>
          JT 
          <span className="text-accent">DEV</span>
        </div>

        <ul className="hidden md:flex space-x-4 ">
            <li>
            <a href="#home" className="btn btn-sm btn-ghost ">ACCUEIL</a>
            </li>

            <li>
            <a href="#About" className="btn btn-sm btn-ghost">A PROPOS</a>
            </li>

            <li>
            <a href="#Experiences" className="btn btn-sm btn-ghost"> EXPERIENCES</a>
            </li>

            <li>
            <a href="#Projects" className="btn btn-sm btn-ghost"> PROJETS</a>
            </li>
        </ul>
    </div>
    </nav>
    
  )
}

export default Navbar