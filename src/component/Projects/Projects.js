import './Projects.css';
import projects from "./projectsData";
import React from "react";

const Projects = () => {
    return (
        <section id="section-3" className="section-3">   <div>
                <div className="projects-page">
                    <h2 className="projects-header">Mobil Projelerim</h2>
                </div>
                <div className="projects-page">
                    {projects.map((project) => (
                        <div className="projects" key={project.id}>
                            <h3 className="projects-name">{project.title}</h3>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" ><img className="resim" src={project.image} alt={project.title} /></a>
                            <p className="description">{project.description}</p>
                            <a href={project.githubLink}>Projeyi incele</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects