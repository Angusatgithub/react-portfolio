import React from "react";
import { getCssVariable } from "../utils/getCssVariable";

interface ProjectProps {
  image: string;
  title: string;
  job: string;
  details: string[];
  link: string;
  linkText: string;
  accentcolor?: "purple" | "green" | "blue" | "orange";
}

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  job,
  details,
  link,
  linkText,
  accentcolor = "purple",
}) => {
  const getAccentColor = () => {
    switch (accentcolor) {
      case "green":
        return getCssVariable("--accent-color-green");
      case "blue":
        return getCssVariable("--accent-color-blue");
      case "orange":
        return getCssVariable("--accent-color-orange");
      default:
        return getCssVariable("--color-primary");
    }
  };

  return (
    <section className="project">
      <div
        className="project-image"
        style={{ border: `2px solid ${getAccentColor()}` }}
      >
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <div className="project-right">
          <h2>{title}</h2>
        </div>
        <div className="project-left">
          <div className="project-left-top">
            <h4>{job}</h4>
            <div className="project-link">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
              <img
                src="./short_right.svg"
                alt="right arrow icon"
                height={32}
                width={32}
              />
            </div>
          </div>
          {details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
