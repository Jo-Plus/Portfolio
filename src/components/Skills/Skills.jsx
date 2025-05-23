import React from 'react'
import "./Skills.css";
import Show from "../../components/Show/Show.jsx";

export default function Skills() {
  return (
    <section className='skills' id='skills'>
      <h1 className='headSection hidden skil'>My <span>Skills</span></h1>
      <Show/>
      <div className="flex skills-wrapper">

        <div className="skill flex hiddens"><span className="icon-cplusplus"></span><p>C++</p></div>
        <div className="skill flex hiddens"><span className="icon-product-hunt"></span><p>OOP</p></div>
        <div className="skill flex hiddens"><span className="icon-html-five"></span><p>HTML5</p></div>
        <div className="skill flex hiddens"><span className="icon-css3"></span><p>CSS3</p></div>
        <div className="skill flex hiddens"><span className="icon-bootstrap"></span><p>Bootstrap</p></div>

        <div className="skill flex hiddens mobile-hidden"><span className="icon-javascript"></span><p>Javascript</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-tailwindcss"></span><p>Tailwind</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-react"></span><p>React</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-typescript"></span><p>Typescript</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-sass"></span><p>Sass</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-next-dot-js"></span><p>Next.js</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-redux"></span><p>Redux</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-git"></span><p>git</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-github"></span><p>github</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-postman"></span><p>postman</p></div>
        <div className="skill flex hiddens mobile-hidden"><span className="icon-figma"></span><p>Figma</p></div>

        <a href="https://github.com/Jo-Plus/" target='_blank' className="more-link">
          <div className='skill flex more-button'>
            <p className='p44'>More</p>
            <span className="icon-arrow-circle-right p44"></span>
          </div>
        </a>
      </div>
    </section>
  )
}