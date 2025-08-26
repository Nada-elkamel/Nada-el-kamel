import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import nada from "../assets/img/nada1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { LanguageContext } from "../LanguageContext"; // Ajuste le chemin selon ton dossier
import translations from "./translations.json";

export const Banner = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = t.rotatingTitles; 
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); }
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{t.welcome}</span>
                  <h1>{t.hi} <span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
                    <span className="wrap">{text}</span>
                  </span></h1>
                  <p>{t.description}</p>
                  <button onClick={() => window.open(process.env.PUBLIC_URL + "/cv.html", "_blank")}>
                    {t.viewResume} <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-image-container">
              <img src={nada} alt="Nada EL KAMEL" className="banner-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
