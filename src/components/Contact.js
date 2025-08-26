import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12} md={8} lg={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p><strong>Email:</strong> nada.elkamel@ensi-uma.tn</p>
                  <p><strong>Phone:</strong> +216 26 155 654</p>
                  <p><strong>Address:</strong> Gombalia 8030, Nabeul, Tunisia</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
