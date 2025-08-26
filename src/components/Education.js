import React from "react";
import "./Education.css"; // We'll create this CSS file

export const Education = () => {
  const educationData = [
    {
      year: "2024 - 2026",
      degree: "Research master's in Smart systems- Advanced intelligent systems",
      school: "National School of Computer Science of Mannouba ",
      description: "Focused on data analysis, machine learning, and deep learning   ."
    },
    {
      year: "2021 - 2024",
      degree: "Bachelor's in Computer Science - Development of information systems",
      school: "Higher Institute of technological studies of Nabeul",
      description: "Studied programming, databases, and software engineering principles."
    },
    {
      year: "2021",
      degree: "National Baccalaureate Diploma",
      school: "Grombalia Secondary School",
      description: "Science specialization."
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p>Here is a timeline of my academic journey.</p>
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
