import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import translations from "./translations.json";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Router>
      <Navbar expand="md">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">{t.home}</Nav.Link>
              <Nav.Link href="#education">{t.education}</Nav.Link>
              <Nav.Link href="#skills">{t.skills}</Nav.Link>
              <Nav.Link href="#languages">{t.languages}</Nav.Link>
              <Nav.Link href="#projects">{t.projects}</Nav.Link>
              <Nav.Link href="#recommendations">{t.recommendations}</Nav.Link>
              <Nav.Link href="#connect">{t.letsConnect}</Nav.Link>
            </Nav>

            <Dropdown className="ms-3">
              <Dropdown.Toggle variant="link">
                {language === "En" ? "🇺🇸" : "🇫🇷"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("En")}>🇺🇸 English</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("Fr")}>🇫🇷 Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
