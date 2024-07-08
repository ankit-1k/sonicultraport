import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [readmore,setReadmore]=useState('more')
  const [moretxt,setMoretxt]=useState('')
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Kumar Panda </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Skill Technologies.
            <br />
            I specialize in building responsive web designs using HTML, CSS, Bootstrap,
            and JavaScript. Proficient in React, Node.js, and Firebase, I focus on creating
            user-friendly interfaces for clients. My expertise extends to React external libraries
            like <span className="purple">react-speech-recognition</span>,<span className="purple">plotly.js</span> ,<span className="purple">recharts</span>, <span className="purple">useTts</span>, and <span className="purple"> typed.js</span>, as well as Node.js
            tools such as <span className="purple">nodemailer</span>  and <span className="purple"> Google Generative AI integration</span>. In CSS, I am skilled with
            &nbsp; <span className="purple">SCSS</span> and <span className="purple">Tailwind CSS</span> . I am also adept at <span className="purple">API integration</span> , utilizing tools like
            &nbsp; <span className="purple">Postman</span> and <span className="purple">Thunder Client</span>  to streamline development processes.<br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning code into captivating digital experiences."{" "}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
