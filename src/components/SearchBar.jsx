import React, { useState, useRef } from "react";
import { VscArrowUp } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Add this line
  const [error, setError] = useState(null);     // You might already have this
  const [searchResults, setSearchResults] = useState(null); // You might already have this
  const fileInputRef = useRef(null);

  const handleSend = async () => {
    if (message.trim()) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://genai-api.workisy.com/api/search_jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: message }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data);
        onSearch(data);
        setMessage("");
        setSubmitted(true);
      } catch (error) {
        setError(error);
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileAttach = async (e) => { // Make this async to use await
    const file = e.target.files[0];
    if (file) {
      console.log("file", file)
      setLoading(true); // Set loading to true when uploading starts
      setError(null);
      try {
        const formData = new FormData();
        formData.append('resume', file); // 'resume' is the field name your Flask API expects

        const response = await fetch('https://genai-api.workisy.com/api/upload_resume', {
          method: 'POST',
          body: formData, // Send the FormData object
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Resume upload response:", data); // Log the response from the server

        //  You might want to do something with the response, like:
        if (data.job_title) {
          setMessage(data.job_title); // set the message in the search bar
          //  onSearch(data.job_title);  //  Call onSearch,  pass the job title.  You might want a new onSearch prop for resume uploads
          // setSubmitted(true); // set submitted
        }
        onSearch(data); // Pass data to parent
        setSubmitted(true);
      } catch (error) {
        setError(error);
        console.error("Error uploading resume:", error);
      } finally {
        setLoading(false); // Set loading to false when upload finishes
      }
    }
  };

  return (
    <div className="modern-wrapper">
      {!submitted && (
        <>
          <h1 className="modern-title">Introducing AI-Powered Job Search Engine</h1>
          <p className="modern-subtitle">Upload your resume to get matched with the best jobs instantly</p>
        </>
      )}

      <div className="modern-searchbar-container">
        <textarea
          className="modern-textarea"
          placeholder="Search jobs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
        />

        <div className="modern-controls">
          <button
            className="icon-btn"
            onClick={() => fileInputRef.current.click()}
            title="Attach Resume"
          >
            <FiPaperclip size={18} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileAttach}
          />

          <button className="icon-btn send-btn" onClick={handleSend} title="Send Search">
            <VscArrowUp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
