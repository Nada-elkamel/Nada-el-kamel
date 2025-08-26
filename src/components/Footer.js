import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import { LanguageContext } from "../LanguageContext";
import translations from "./translations.json";

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/nada-el-kamel-82919a221/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} color="#333" />
            </a>
            <a href="https://github.com/Nada-elkamel" target="_blank" rel="noopener noreferrer">
              <Github size={22} color="#333" />
            </a>
            <a href="https://www.facebook.com/nada.elkamel.79" target="_blank" rel="noopener noreferrer">
              <Facebook size={22} color="#333" />
            </a>
            <a href="https://www.instagram.com/elkamelnada/" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} color="#333" />
            </a>
          </div>
          <Col size={12} className="text-center">
            <p>{t.footerCopyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
