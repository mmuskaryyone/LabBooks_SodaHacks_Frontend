import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Textbook.css";

// Updated course content with placeholder images
const courseContent = {
  1: {
    title: "CSE110 – Principles of Programming",
    dueDate: "Feb 8th, 2025",
    sections: [
      {
        id: 1,
        title: "Intro to Computer Science",
        description: "An introduction to fundamental concepts of computer science.",
        completed: true,
        imageUrl: "https://via.placeholder.com/600x338?text=Intro+to+CS"
      },
      {
        id: 2,
        title: "Data Types, Expressions & Variables (Part 1)",
        description: "Learn about data types, variables, and expressions in programming.",
        completed: true,
        imageUrl: "https://via.placeholder.com/600x338?text=Data+Types+and+Variables"
      },
      {
        id: 3,
        title: "Methods (Part 1)",
        description: "Introduction to methods in programming.",
        completed: false,
        imageUrl: "https://via.placeholder.com/600x338?text=Methods+Part+1"
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
      {/* Sidebar */}
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

      {/* Main Content */}
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
                {/* Button to view detailed module content */}
                <Link to={`/module/${section.id}`} className="view-module-button">
                  View Module
                </Link>
              </div>
              <img
                src={section.imageUrl}
                alt={section.title}
                className="textbook-image"
              />
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
class