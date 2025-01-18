import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import siim from "../../Assets/Projects/siim.png";
import hydpg from "../../Assets/Projects/hydpg.png";
import sonicpholeo from "../../Assets/Projects/sonicport.png";
import flimflix from "../../Assets/Projects/flimflix.png";
import sonicsupport from "../../Assets/Projects/sonicsupport.png";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(
        "https://sonicadminbackend.vercel.app/api/getproject"
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" }; // E.g., January 18, 2025
    return new Date(isoDate).toLocaleDateString(undefined, options);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.length > 0 ? (
            projects
              .filter((project) => project.category === "ankitkumarpanda")
              .map((project, index) => (
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={project.imageUrl}
                    isBlog={false}
                    title={project.name}
                    description={project.desc}
                    demoLink={project.demo}
                  />
                </Col>
              ))
          ) : (
            <p>No projects available</p>
          )}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sonicsupport}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A website for students offering notes and a unique feature: asking questions and receiving answers using voice commands, enhancing learning and accessibility."
              demoLink="https://sonicsupport.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hydpg}
              isBlog={false}
              title="HYDPG"
              description="Crafted a user-friendly React platform for PG search in Hyderabad, integrating dynamic components and efficient data management for seamless browsing and quick information retrieval."
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flimflix}
              isBlog={false}
              title="FlimFlix"
              description="Launched FilmFlix, a dynamic website with Bollywood, Hollywood, and Tollywood movies. User-friendly design ensures seamless browsing, accessibility, and updated movie selections."
              demoLink="https://ankit-1k.github.io/movie-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siim}
              isBlog={false}
              title="SIIM"
              description="I've created a responsive college website template using HTML, CSS, and JavaScript. It features a clean design, adapts to various devices, and includes interactive elements for a user-friendly experience. "
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            demoLink="https://ankit-1k.github.io/SIIM/"  
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
