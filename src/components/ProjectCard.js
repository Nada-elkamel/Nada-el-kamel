// ProjectCard.js
import { Col } from "react-bootstrap";
            import { Github } from "lucide-react";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {githubUrl && (

<div>
  <a
    href={githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white text-sm hover:underline"
  >
    <Github size={16} />
    Voir sur GitHub
  </a>
</div>

          )}
        </div>
      </div>
    </Col>
  )
}