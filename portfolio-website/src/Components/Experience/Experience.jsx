import React from "react";

export default function Experience() {
    return (
        <>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Data Science Intern</h3>
                            <div className="subheading mb-3">CodSoft</div>
                            <p>Enabled me to learn and take my first step in Data Science. Using Jupyter, activity of performing data analysis on given dataset, EDA, preprocessing data and building model while predicting data and testing the accuracy was carried out on multiple fields and topics such as IMDB Bollywood movie ratings, survival on Titanic as well as classification of Iris flower.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Nov 2023</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Industrial Training</h3>
                            <div className="subheading mb-3">Passion Software Solutions</div>
                            <p>Industrial training in Web Developement at Passion Software Solutions. Thrived in an on-site environment, tackling tasks with unwavering enthusiasm and a practical approach. Developed web skills in Django, Python, HTML, CSS, jQuery, and Bootstrap, igniting my passion for web development.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Jul 2022 - Sep 2022</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    );
}