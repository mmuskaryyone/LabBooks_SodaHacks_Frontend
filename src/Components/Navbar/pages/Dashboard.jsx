// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Welcome from "./Welcome"; // Import the Welcome component
import jupyterImg from '/src/assets/jupyter.png';

// Sample course data
const courses = [
  { id: 1, name: "PyBooks", description: "Jupyter Notebooks", image: jupyterImg } // Use the imported image
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Welcome /> {/* Add the Welcome component here */}
      <h1 className="dashboard-title">Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <Link key={course.id} to={`/textbook/${course.id}`} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-content">
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="view-all-button">View All Courses</button>
    </div>
  );
};

export default Dashboard;
