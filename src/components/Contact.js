import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { LanguageContext } from "../LanguageContext";
import translations from "./translations.json";

export const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12} md={8} lg={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t.letsConnect}</h2>
                  <p><strong>{t.contact.emailLabel}</strong> {t.contact.email}</p>
                  <p><strong>{t.contact.phoneLabel}</strong> {t.contact.phone}</p>
                  <p><strong>{t.contact.addressLabel}</strong> {t.contact.address}</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
