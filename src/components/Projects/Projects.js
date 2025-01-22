import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import Loader from "../../Assets/loader/Loader";

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
            <p className="mt-5 mb-5">
              <Loader />
            </p>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
