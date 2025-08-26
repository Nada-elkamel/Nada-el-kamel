import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const HardSkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Hard Skills</h2>
              <p>Here are my core hard skills, combining technical expertise and creative flair.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <h5>Power BI / Excel</h5>
                </div>
                <div className="item">
                  <h5>SQL / NoSQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
