import React, { useState, useEffect } from "react";
import MCQBlock from "./MCQ";
import TextBlock from "./Text";
import './Module.css'; // Import the CSS for styling


const Module = () => {
  const mcqQuestion = "What is the capital of France?";
  const mcqOptions = ["Paris", "London", "Berlin", "Madrid"];
  const mcqCorrectAnswer = "Paris";

  const [userAnswer, setUserAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const handleMCQSelect = (selectedOption) => {
    setUserAnswer(selectedOption);
    setShowCorrectAnswer(true);
  };

  const runPythonCode = (code) => {
    setOutput(""); // Clear previous output
    if (pyodide) {
      pyodide.runPythonAsync(code).then(() => {
        // No need to capture the result since output is managed via stdout
      }).catch((error) => {
        setOutput((prev) => prev + `Error: ${error}\n`);
      });
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  useEffect(() => {
    const loadPyodide = async () => {
      console.log("Attempting to load Pyodide...");

      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.3/full/pyodide.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        console.log("Pyodide script loaded.");
        try {
          const pyodideInstance = await window.loadPyodide({
            indexUrl: "https://cdn.jsdelivr.net/pyodide/v0.23.3/full/",
            stdout: (s) => {
              console.log("Output:", s); // Debugging output
              setOutput((prev) => `${prev}>> ${s}\n`); // Capture stdout output
            },
            stderr: (s) => {
              console.log("Error Output:", s); // Debugging error output
              setOutput((prev) => `${prev}Error: ${s}\n`); // Capture stderr output
            },
          });
          console.log("Pyodide loaded successfully:", pyodideInstance);
          setPyodide(pyodideInstance);
          setLoading(false); // Set loading to false after Pyodide is ready
        } catch (error) {
          console.error("Error loading Pyodide:", error);
        }
      };

      script.onerror = () => {
        console.error("Error loading Pyodide script.");
      };
    };

    loadPyodide();
  }, []);

  // Show loading message if Pyodide is not loaded yet
  if (loading) {
    return <div>Loading Pyodide...</div>;
  }

  return (
    <div className="module-page" style={{ backgroundColor: "#F7ECE1" }}>
      <h1>Module 0.0: Blank</h1>

      {/* MCQ Block */}
      <MCQBlock 
        question={mcqQuestion} 
        options={mcqOptions} 
        correctAnswer={mcqCorrectAnswer} 
        onSelect={handleMCQSelect} 
        userAnswer={userAnswer}
        showCorrectAnswer={showCorrectAnswer}
      />

      {/* Text Block */}
      <TextBlock />

      {/* Python Code Execution */}
      <div className="python-execution">
        <textarea id="python-source" rows="4" placeholder="Enter Python code here..."></textarea>
        <div id="output-log" className="output-log" style={{ height: "150px", overflowY: "scroll", background: "#f0f0f0", padding: "10px", border: "1px solid #ccc" }}>
          {output}
        </div>
        <div className="buttons">
          <button id="run-btn" onClick={() => runPythonCode(document.getElementById("python-source").value)}>Run</button>
          <button id="clear-btn" onClick={clearOutput}>Clear</button>
        </div>
      </div>

      {/* Navigation button back to textbook */}
      <a href="/textbook" className="module-button">Back to Textbook</a>
    </div>
  );
};

export default Module;
