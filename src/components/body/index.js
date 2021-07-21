import React from 'react';
import About from './about';
import "./body.css"
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';
import Work from './work';

function Body() {
    return (
        <div className="body">
         <section id="about" >
           <About />
         </section>
         <section id="projects" >
           <Projects />
         </section>
         <section id="skills" >
           <Skills />
         </section>
         <section id="work" >
           <Work />
         </section>
         <section id="contact" >
           <Contact />
         </section>
        </div>
    )
}

export default Body;
