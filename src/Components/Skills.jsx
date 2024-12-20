import React from 'react'
import Skillcard from './Skillcard'

const Skills = () => {
    const skillItem = [
        {
            imgSrc: './images/figma.svg',
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: './images/css3.svg',
            label: 'CSS',
            desc: 'User interface'
        },
        {
            imgSrc: './images/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: './images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: './images/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: './images/mongodb.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: './images/expressjs.svg',
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: './images/nodejs.svg',
            label: 'NodeJS',
            desc: 'Web Server'
        },
    ]
  return (
    <section className='section'>
        <div className="container">
            <h2 className='headline-2 reveal-up'>
                Essential Tools I Use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies i use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItem.map(({ imgSrc, label, desc }, key)=>(
                    <Skillcard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills