import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Satwik Neelam </span>
            from <span className="purple"> Guntur, Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing Bachelor of Technology in Computer Science & Engineering at VVIT Guntur.
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
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The mark of true progress is not in what we create, but in how it changes lives"{" "}
          </p>
          <footer className="blockquote-footer">Satwik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
