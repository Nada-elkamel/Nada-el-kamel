import { useContext } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { LanguageContext } from "../LanguageContext";
import translations from "./translations.json";

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
  const { language } = useContext(LanguageContext);
const t = translations[language].projectsSection;

  // Associer projets traduits aux images
  const dataScienceProjects = t.dataScienceProjects.map((p, i) => ({
    ...p,
    imgUrl: [data3, data1, data2, data4][i],
  }));

  const devProjects = t.devProjects.map((p, i) => ({
    ...p,
    imgUrl: [dev3, dev2][i],
  }));

  const contentcreationProjects = t.contentcreationProjects.map((p, i) => ({
    ...p,
    imgUrl: [content1, content2, content3, content4][i],
  }));

  const graphicDesignProjects = t.graphicDesignProjects.map((p, i) => ({
    ...p,
    imgUrl: [grap1, grap2, grap3, grap4, grap5][i],
  }));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t.title}</h2>
                  <p>{t.description}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">{t.tabs.data}</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">{t.tabs.dev}</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">{t.tabs.content}</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="fourth">{t.tabs.design}</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first"><Row>{dataScienceProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                      <Tab.Pane eventKey="second"><Row>{devProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                      <Tab.Pane eventKey="third"><Row>{contentcreationProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                      <Tab.Pane eventKey="fourth"><Row>{graphicDesignProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
