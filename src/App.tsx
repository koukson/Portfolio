
import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <div className="p-5 md:px-[15%]">
       <Experiences/>
       <Projects/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
