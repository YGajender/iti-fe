import { useState } from "react"
import About from "./components/ABout/About"
import Campus from "./components/Campus/Campus"
import Certifecate from "./components/Certificate/Certifecate"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import Videoplayer from "./components/VideoPlayer/Videoplayer"
//Certifecate

const App = () => {
  const [playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
    <Title subTitle ='Our Programs' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle ='Certifecate' title='Certifecate Photo'/>
      <Certifecate/>
      <Title subTitle ='Gallery' title='Campus Photos'/>
      <Campus/>
      {/* <Title subTitle ='Testimonials' title='What Students Say'/>
      <Testimonials/> */}
      <Title subTitle ='Contact US' title='Get in touch'/>
      <Contact/>

      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App