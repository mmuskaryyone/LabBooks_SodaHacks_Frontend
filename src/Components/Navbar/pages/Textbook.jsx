import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Textbook.css";

const courseContent = {
  1: {
    title: "PyBooks – Jupyter Notebooks",
    dueDate: "Feb 8th, 2025",
    sections: [
      {
        id: 1,
        title: "Blank",
        description: "Blank",
        completed: true,
        imageUrl: "https://via.placeholder.com/600x338?text=Intro+to+CS"
      }
    ]
  }
};

const Textbook = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId] || { title: "No content available", sections: [] };
  const totalSections = course.sections.length;
  const completedSections = course.sections.filter((section) => section.completed).length;
  const progressPercentage = ((completedSections / totalSections) * 100).toFixed(0);

  return (
    <div className="textbook-page">
      <aside className="textbook-sidebar">
        <h2 className="sidebar-title">{course.title}</h2>
        <div className="sidebar-info">
          <label>Expires:</label>
          <span>{course.dueDate}</span>
        </div>
        <div className="sidebar-info">
          <label>Progress:</label>
          <span>{progressPercentage}% Complete</span>
        </div>
      </aside>

      <div className="textbook-container">
        <h1 className="section-header">{course.title}</h1>
        {course.sections.length ? (
          course.sections.map((section) => (
            <div key={section.id} className="textbook-section">
              <div className="section-content">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
                <div className="completion-status">
                  {section.completed ? "Completed" : "Not Completed"}
                </div>
                <Link to={`/module/${section.id}`} className="view-module-button">
                  View Module
                </Link>
              </div>
              <img src={section.imageUrl} alt={section.title} className="textbook-image" />
            </div>
          ))
        ) : (
          <p>No content available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default Textbook;
