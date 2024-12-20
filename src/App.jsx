import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from './Components/Work'
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {

  useGSAP(()=>{
    const elemets = gsap.utils.toArray('.reveal-up')
    elemets.forEach((element)=>{
      gsap.to(element, {
        ScrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Review/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  );
}

export default App;
