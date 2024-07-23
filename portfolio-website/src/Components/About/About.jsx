import React from "react";

export default function About() {
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Kaustubh&nbsp;
                        <span className="text-purple">Salunkhe</span>
                    </h1>
                    <div className="subheading mb-5">
                        <a className="text-purple" href="mailto:name@email.com">kaustubhdsalunkhe@email.com</a>
                    </div>
                    <p className="lead mb-5">
                        Hello there! I'm Kaustubh Salunkhe, Diploma graduate and Computer Engineering student! 
                        I have a solid foundation in web development and design, 
                        with proficiency in programming languages such as HTML, CSS, JavaScript, Java, Python and PHP. 
                        Additionally, I work with database connectivity through the Django Framework. 
                        Always eager to explore various new opportunities!
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}