import "./App.css";
import useState from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import Header from './Components/Header'
import Hero from "./Components/Hero";
import Work from "./Components/Work";


gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {

  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <Work/>
      </main>
    </ReactLenis>
  );
}

export default App;
