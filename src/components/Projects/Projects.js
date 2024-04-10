import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              title="Symptom to Disease Prediction"
              description="The 'Symptom to Disease Prediction' project utilizes the Random Forest algorithm to predict diseases from user-input symptoms, providing detailed descriptions and suggested home remedies. Developed in Python with Scikit-learn, its goal is to improve early disease detection and provide actionable health insights. Future enhancements may involve database expansion and UI refinements for better user experience."
              ghLink="https://github.com/satwik5956U/symptom-disease"
              demoLink="https://symptom-disease-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Enhanced AI Bot with Facial Emotion Detection"
              description="This project is designed to integrate chatbot technology with human emotion recognition, offering a versatile application experience. Users authenticate via login credentials stored in a PostgreSQL database, engaging with the chatbot through text or speech inputs. The system analyzes user emotions to tailor responses accordingly, with options for speech or AI-generated text responses. Supporting six languages, including Telugu, Hindi, English, Marathi, Kannada, and Tamil, the application aims to enhance accessibility and user interaction."
              ghLink="https://github.com/satwik5956U/enhanced-ai-bot-with-facial-emotion-detection"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Transaction Manager"
              description="The 'Transaction Manager' project enables users to sign up with their name, account number, and password, accessing a starting account balance of 0 upon login. Utilizing a PostgreSQL database, users can log daily transactions, including the option to transfer funds between accounts. This system provides a seamless platform for managing financial activities securely and efficiently."
              ghLink="https://github.com/satwik5956U/TransactionManager"
              demoLink="https://transactionmanager.onrender.com/home"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Language Translator"
              description="The 'Language Translator' project facilitates users to input text in any language and translate it into their desired language by selecting from a dropdown menu. This versatile system accommodates both text and speech inputs, ensuring user convenience. Upon translation, the converted text is available in both written and spoken formats, providing seamless communication across languages. This project offers a comprehensive solution for multilingual communication needs, enhancing accessibility and user experience."
              ghLink="https://github.com/satwik5956U/languagetranslator"
              demoLink="https://languagetranslator-6ehb.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Detection"
              description="Developed a CNN classifier using 'FER-2013 dataset' employing Keras and tensorflow backend. It effectively recognized diverse human emotions. The model achieved its highest accuracy at 65.1%. Utilized OpenCV to identify faces in images and subsequently applied the classifier to predict individuals' emotions."
              ghLink="https://github.com/satwik5956U/Facial-Emotion-Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
