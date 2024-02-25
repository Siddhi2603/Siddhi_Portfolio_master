import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Credit Card System Management"
              description="
              A credit card management system efficiently tracks and organizes users' credit card transactions, balances, and payment history. It provides real-time insights, alerts for due payments, and secure access to empower users in managing their financial activities seamlessly. This system enhances financial control and promotes responsible credit card usage"
              ghLink="https://github.com/Siddhi2603/CreditCardSystemManagement"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coffee Website"
              description="Welcome to our blockchain landing page, where innovation meets security. Explore our insightful blog for the latest trends, contact us for personalized solutions, and learn about our mission on the about page. Join us in shaping the future of decentralized technology. "
              ghLink="https://github.com/CHAINX-IND"
             
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="School_websit"
            description="Welcome to our blockchain landing page, where innovation meets security. Explore our insightful blog for the latest trends, contact us for personalized solutions, and learn about our mission on the about page. Join us in shaping the future of decentralized technology. "
            ghLink="https://github.com/School_website"
           
          />
        </Col>
         
        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={bitsOfCode}
          isBlog={false}
          title="Jewellery website"
          description="Welcome to our blockchain landing page, where innovation meets security. Explore our insightful blog for the latest trends, contact us for personalized solutions, and learn about our mission on the about page. Join us in shaping the future of decentralized technology. "
          ghLink="https://github.com/Jewellery website"
         
        />
      </Col>
       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
