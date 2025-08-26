import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import data1 from "../assets/img/data1.png";
import data2 from "../assets/img/data2.png";
import data3 from "../assets/img/data3.png";
import data4 from "../assets/img/data4.png";
import dev2 from "../assets/img/dev2.png";
import dev3 from "../assets/img/data4 - Copie.png";

import content1 from "../assets/img/content1.png";
import content2 from "../assets/img/content2.png";
import content3 from "../assets/img/content3.png";
import content4 from "../assets/img/content4.png";


import grap1 from "../assets/img/cintella.png";
import grap2 from "../assets/img/drift.png";
import grap3 from "../assets/img/ISTANBUL.png";
import grap4 from "../assets/img/podcast jci.png";
import grap5 from "../assets/img/republique.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const devProjects = [
    {
      title: "Diabetes prediction",
      description: "Full Stack development{Flask}",
      imgUrl: dev3,
    },
    // {
    //   title: "Portfolio Website",
    //   description: "React ",
    //   imgUrl: dev1,
    // },
    {
      title: "Conference system managment",
      description: "Full Stack django",
      imgUrl: dev2,
    },
  ];

  const graphicDesignProjects = [
    {
      title: "Cintella poster",
      description: "Canva",
      imgUrl: grap1,
    },
    {
      title: "Drift event poster",
      description: "Canva",
      imgUrl: grap2,
    },
    {
      title: "Travel agency poster",
      description: "Canva",
      imgUrl: grap3,
    },
    {
      title: "Podcast JCI poster",
      description: "Canva",
      imgUrl: grap4,
    },
    {
      title: "Republic day poster",
      description: "Canva",
      imgUrl: grap5,
    },
  ];

  const dataScienceProjects = [
    {
      title: "Gym analysis",
      description: "Power BI",
      imgUrl: data3,
    },
    {
      title: "Apple product analysis",
      description: "Power BI",
      imgUrl: data1,
    },
    {
      title: "IBM_HR employee analysis",
      description: "Pandas, Power BI",
      imgUrl: data2,
    },
    {
      title: "Diabetes prediction",
      description: "Flask, Decision Tree",
      imgUrl: data4,
    },
  ];
const contentcreationProjects = [
    {
      title: "Bigou Brigitte",
      description: "Adobe premiere pro",
      imgUrl: content1,
    },
    {
      title: "Clarenia ClareSUN ",
      description: "CapCut",
      imgUrl: content2,
    },
    {
      title: "Clarenia SkinCare Pouch",
      description: "Adobe premiere pro",
      imgUrl: content3,
    },
    {
      title: "JCI Grombalia EDISON-APCT",
      description: "Adobe premiere pro",
      imgUrl: content4,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section, you’ll find a variety of projects organized by category — each tab showcases a different type of work, from data analysis to backend development and creative digital content.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Science/Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Content creation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Graphic design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          dataScienceProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          devProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          contentcreationProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                     <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          graphicDesignProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
