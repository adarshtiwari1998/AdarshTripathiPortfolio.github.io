import React from 'react';
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
    //destructing is the es6 features it is more readable as well
    return (
        <div className="mobile">
            {/* when we click here sidebar are disappear on mobile device  */}
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project" alt="projects" title="Project"><i class="fi-rr-edit-alt option-icon"></i>Projects</a>
                </div>
                <div className="mobile-option">
                    <a href="#skill" alt="skills" title="skill" ><i class="fi-rr-laptop option-icon"></i>Skills</a>
                </div>
                <div className="mobile-option">
                    <a href="#work" alt="work" title="work" ><i class="fi-rr-briefcase option-icon"></i>Work</a>
                </div>
                <div className="mobile-option">
                    <a href="#contact" alt="contact" title="contact" ><i class="fi-rr-user option-icon"></i>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
