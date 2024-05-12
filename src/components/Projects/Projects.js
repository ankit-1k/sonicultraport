import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import siim from "../../Assets/Projects/siim.png";
import hydpg from "../../Assets/Projects/hydpg.png";
import sonicpholeo from "../../Assets/Projects/sonicport.png";
import flimflix from "../../Assets/Projects/flimflix.png";
import sonicsupport from "../../Assets/Projects/sonicsupport.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sonicpholeo}
              isBlog={false}
              title="Sonicpholleo"
              description="Sonicpholleo is a voice-controlled website, allowing users to interact hands-free, navigate effortlessly, and experience a new level of accessibility and convenience in browsing."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://ankit5116k.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sonicsupport}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A website for students offering notes and a unique feature: asking questions and receiving answers using voice commands, enhancing learning and accessibility."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://sonicsupport.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hydpg}
              isBlog={false}
              title="HYDPG"
              description="Crafted a user-friendly React platform for PG search in Hyderabad, integrating dynamic components and efficient data management for seamless browsing and quick information retrieval."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flimflix}
              isBlog={false}
              title="FlimFlix"
              description="Launched FilmFlix, a dynamic website with Bollywood, Hollywood, and Tollywood movies. User-friendly design ensures seamless browsing, accessibility, and updated movie selections."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
