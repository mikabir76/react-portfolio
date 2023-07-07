import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import Portfolio from "./Components/Portfolio/Portfolio"
import SocialLinks from "./Components/SocialLinks/SocialLinks"





function App() {


  return (
    <div className="bg-gradient-to-l from-gray-800 via-black to-black">
    <div className="max-w-7xl mx-auto">
    <NavBar></NavBar>
    </div>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>
    <SocialLinks></SocialLinks>
    </div>
  )
}

export default App
