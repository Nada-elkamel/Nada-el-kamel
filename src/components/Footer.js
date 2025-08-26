import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} className="text-center">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}