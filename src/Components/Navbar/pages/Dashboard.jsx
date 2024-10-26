// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

// Sample course data
const courses = [
  { id: 1, name: "PyBooks", description: "Jupyter Notebooks"},
 
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <Link key={course.id} to={`/textbook/${course.id}`} className="course-card">
            <div className="course-content">
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
