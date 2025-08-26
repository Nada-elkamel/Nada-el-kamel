import { useContext } from "react";
import "./Recommendations.css";
import wadiePhoto from "../assets/img/wadie.png";
import ilyesPhoto from "../assets/img/ilyes.png";
import firasPhoto from "../assets/img/firas.png";
import { LanguageContext } from "../LanguageContext";
import translations from "./translations.json";

export const Recommendations = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.recommendationsSection || {};

  const recommendationsData = [
    {
      name: "Wadie Chaouachi",
      position: "MSc Computer Science | AI & Machine Learning Enthusiast",
      description:
        "I highly recommend Nada! We studied together in the first year of our Master's program, and I have always been impressed by her versatility and fast learning, especially in the field of data. She is motivated, curious, and able to adapt quickly to different projects and challenges. Working with Nada is a real asset to any team.",
      image: wadiePhoto,
    },
    {
      name: "Ilyes El Ouni",
      position: "NodeJS consultant | MERN Stack Developer at Cynoia",
      description:
        "I had the opportunity to work with Nada on a web development project where we used a range of technologies including NestJS, Mongoose, and Angular. Nada demonstrated impressive adaptability by quickly learning and applying these diverse tools effectively. Their ability to grasp new concepts and integrate them into our project made a significant difference.",
      image: ilyesPhoto,
    },
    {
      name: "Firas Ben Hariz",
      position:
        "SEO Specialist | Digital Marketer | Helping Businesses Rank #1 on Google | Certified in Semrush & HubSpot",
      description:
        "I had the pleasure of studying with Nada, and I highly recommend her skills and professionalism. Nada consistently demonstrated exceptional intelligence, sharp critical thinking, and an outstanding ability to solve problems. She not only excelled academically but also maintained a positive and collaborative attitude that inspired those around her.",
      image: firasPhoto,
    },
  ];

  return (
    <section className="recommendations" id="recommendations">
      <div className="container">
        <div className="section-header">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>
        <div className="recommendations-container">
          <div className="recommendations-scroll">
            {recommendationsData.map((rec, index) => (
              <div className="recommendation-card" key={index}>
                <div className="recommendation-content">
                  <p className="recommendation-text">"{rec.description}"</p>
                </div>
                <div className="recommendation-author">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{rec.name}</h4>
                    <p className="author-position">{rec.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
