import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Facebook, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Hard skills</Nav.Link>
              <Nav.Link href="#softskills" className={activeLink === 'softskills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('softskills')}>Soft skills</Nav.Link>
              <Nav.Link href="#languages" className={activeLink === 'languages' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('languages')}>Languages</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#recommendations" className={activeLink === 'recommendations' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('recommendations')}>Recommendations</Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}