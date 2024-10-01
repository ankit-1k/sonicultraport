import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  let date = new Date();
  const navigate=useNavigate()
  let year = date.getFullYear();
  return (
    <div className="main-footer pt-4 pb-4">
      <Container fluid className="footer container">
        <Row>
          <Col md="3" className="footer-copywright">
            <h3>Present Address:</h3>
            <p>
              Hitech City, Hydrabad, TS, India
            </p>
            <h3>Permanent Address:</h3>
            <p>
              Bhawanipatna, Kalahandi, Odisha, India
            </p>
          </Col>
          <Col md="3" className="footer-copywright">
            {/* <h3>Copyright © {year} Ankit</h3> */}
            <div className="d-flex justify-content-center">
              <div>
                <h3>Brows Projects</h3>
                <ul className="list-unstyled">
                  <li onClick={()=>window.open('https://sonicsupportfrontend.vercel.app/')}>SonicSupport</li>
                  <li onClick={()=>window.open('https://ankit5116k.netlify.app/')}>SonicPort</li>
                  <li onClick={()=>window.open('https://hydpg.netlify.app/')}>HydPG</li>
                  <li onClick={()=>window.open('https://ankit-1k.github.io/SIIM/')}>SIIM</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md="3" className="footer-copywright">
            <h3>Links:</h3>
            <ul className="list-unstyled">
              <li onClick={()=>navigate('/blog')}>Blog</li>
              <li onClick={()=>navigate('/contact')}>Contact Us</li>
            </ul>
          </Col>
          <Col md="3" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/ankit-1k"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ankit5116k"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-panda-b67997218/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ankit_kumar_panda_/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
