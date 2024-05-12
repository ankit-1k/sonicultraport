import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWebstorm ,
  SiEclipseide
} from "react-icons/si";
import { DiIntellij } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm  />
      </Col>
    </Row>
  );
}

export default Toolstack;
