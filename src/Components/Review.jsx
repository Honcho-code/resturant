import React from 'react'
import ReviewCard from './ReviewCard';

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Review = () => {
  useGSAP(()=>{
    gsap.to('.scrub-slide', {
      scrollTrigger:{
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  })
    const reviews = [
        {
          content: 'The food here is absolutely incredible! The flavors are bold and fresh, and the ambiance makes it the perfect spot for both casual meals and special occasions. The staff is friendly, and the service is top-notch. Highly recommend the grilled salmon!',
          name: 'John D',
          imgSrc: '/images/people-1.jpg',
          company: 'PixelForge'
        },
        {
          content: 'I’ve been to New Image Kitchen multiple times, and every experience has been perfect! The menu is diverse, catering to all tastes, and the dishes are always beautifully presented. Can`t wait to come back for more',
          name: 'Sarah L',
          imgSrc: '/images/people-2.jpg',
          company: 'NexaWave'
        },
        {
          content: 'Fantastic experience! The food was delicious, and the restaurant had such a warm and welcoming atmosphere. Plus, they offer amazing vegan options that taste amazing. A must-visit for any foodie!',
          name: 'Marcus H',
          imgSrc: '/images/people-3.jpg',
          company: 'CodeCraft'
        },
        {
          content: 'Our family had an unforgettable dinner here to celebrate a special occasion. From the appetizers to the dessert, everything was perfection. The staff made us feel so welcome and were attentive to every need. Truly a hidden gem!',
          name: 'Emily W',
          imgSrc: '/images/people-4.jpg',
          company: 'BrightWeb'
        },
        {
          content: 'I had the best steak of my life at New Image Kitchen! Every bite was full of flavor, and the side dishes complemented it perfectly. Great food, great service, and a great atmosphere. I’ll definitely be back!',
          name: 'Ava Thompson',
          imgSrc: '/images/people-5.jpg',
          company: 'TechMosaic'
        }
      ];
  return (
    <section className="section overflow-hidden" id='reviews'>
        <div className="container">
            <h2 className="headline-2 mb-3 ">
                What my clients say
            </h2>
            <p className="mb-5 text-gray-400">At New Image Kitchen, we believe in creating memorable dining experiences for every guest. But don't just take our word for it—here’s what some of our wonderful customers have to say!</p>
            <div className="scrub-slide flex items-center gap-3 w-fit">
                {reviews.map(({ content, name, imgSrc, company },key)=>(
                    <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company}  />
                ))}
            </div>
        </div>
    </section>

  )
}

export default Review