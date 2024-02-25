import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhi Sonare </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            Designer, developer, and behaviorial researcher fascinated by the social product space.
            <br />
            I have completed BE ( Bachelor of Engineering) in Civil Engineering at RMD sinhgad school of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "When you believe in what you’re doing and use your imagination and initiative, you can make a difference." {" "}
          </p>
          <footer className="blockquote-footer">Siddhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
