import React, { useContext } from "react";
import "./Education.css";
import translations from "./translations.json";
import { LanguageContext } from "../LanguageContext";

export const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const educationData = t.educationData;

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2>{t.education}</h2>
          <p>{t.educationDescription}</p>
        </div>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{edu.year}</span>
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
