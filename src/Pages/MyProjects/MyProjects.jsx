import Title from "../../Components/Title/Title";
import ProjectSection from "./ProjectSection";
import './Projects.css'
import { useEffect, useState } from "react";


const MyProjects = () => {
    const [projects, setProject] = useState(null)

    useEffect(() => {

        fetch('Projects.json')
            .then(res => res.json())
            .then(data => {
                setProject(data)
            })

    }, [])

    if (!projects) {
        return <>
            <section className="projects py-10 h-screen text-center lg:me-96 p-6"></section>
        </>
    }

    console.log(projects)
    return (
        <section className="projects py-10 text-center lg:me-96 p-6 ">
            <Title title={'MY PROJECTS'}></Title>

            <div className="p-6 my-10 w-full">
                {projects.map((project) => <ProjectSection key={project.id} project={project}></ProjectSection>)}
            </div>
        </section>
    );
};

export default MyProjects;