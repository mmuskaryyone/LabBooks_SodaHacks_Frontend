// src/pages/ModulePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./Textbook.css";

// Assuming courseContent is accessible here or imported from a separate file
const courseContent = {
  1: {
    sections: [
      {
        id: 1,
        title: "Intro to Computer Science",
        description: "An in-depth look at computer science basics...",
        content: "Detailed content for Intro to Computer Science goes here.",
        imageUrl: "https://via.placeholder.com/600x338?text=Intro+to+CS"
      },
      {
        id: 2,
        title: "Data Types, Expressions & Variables (Part 1)",
        description: "Detailed concepts on data types and variables.",
        content: "Detailed content for Data Types, Expressions & Variables goes here.",
        imageUrl: "https://via.placeholder.com/600x338?text=Data+Types+and+Variables"
      }
    ]
  }
};

const ModulePage = () => {
  const { sectionId } = useParams();
  const module = courseContent[1].sections.find((section) => section.id === parseInt(sectionId));

  return (
    <div className="module-page">
      {module ? (
        <>
          <h1>{module.title}</h1>
          <img src={module.imageUrl} alt={module.title} className="module-image" />
          <p>{module.description}</p>
          <div className="module-content">
            <p>{module.content}</p>
          </div>
        </>
      ) : (
        <p>Module not found.</p>
      )}
    </div>
  );
};

export default ModulePage;
