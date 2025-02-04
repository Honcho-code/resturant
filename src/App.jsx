import "./App.css";
import useState from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import Header from './Components/Header'
import RandomMeals from "./Components/RandomMeals";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Review from "./Components/Review";

// import Work from "./Components/Work";


gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {

  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        {/* <Work/> */}
        <RandomMeals/>
        <About/>
        <Review/>
      </main>
    </ReactLenis>
  );
}

export default App;
