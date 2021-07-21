import React from 'react';
import "./web.css"

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects" alt="projects" title="Project"><i class="fi-rr-edit-alt option-icon"></i>Projects</a>
            </div>
            <div className="web-option">
                <a href="#skills" alt="skills" title="skill" ><i class="fi-rr-laptop option-icon"></i>Skills</a>
            </div>
            <div className="web-option">
                <a href="#work" alt="work" title="work" ><i class="fi-rr-briefcase option-icon"></i>Work</a>
            </div>
            <div className="web-option">
                <a href="#contact" alt="contact" title="contact" ><i class="fi-rr-user option-icon"></i>Contact</a>
            </div>
        </div>
    )
}

export default Web;
