import React from "react";
import './CustomPCPage.scss'

const ProjectCard = ({ imageUrl, altText }) => {
    return (
        <div className="custom-project-card">
            <img src={imageUrl} alt={altText} className="custom-project-card-image" />
        </div>
    );
};

const Projects = () => {
    return (
        <div className="custom-project-container">
            <div className="custom-project-center">
                <h2 className="custom-project-title">Our Past Projects</h2>
            </div>
            <div className="custom-project-flex">
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 1" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 2" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
                <ProjectCard imageUrl="https://placehold.co/300x200" altText="Project 3" />
            </div>
        </div>
    );
};

export default Projects;
