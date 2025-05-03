const jobs = [
  {
    title: "AI Research Scientist",
    company: "Appit Software Solutions",
    location: "Bangalore (Karnataka)",
    experience: "7+ Years",
    salary: "Not Disclosed",
    jobType: "Full-time",
    mode: "Remote",
    postedDaysAgo: 3,
    skills: ["AI/ML", "Data Visualization", "Machine Learning", "Python Development", "Statistical Programming"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Frontend Developer",
    company: "ABC Pvt Ltd",
    location: "Hyderabad",
    experience: "2",
    salary: "3 Lakh – 5 Lakh P.A",
    jobType: "Full-time",
    mode: "Remote",
    postedDaysAgo: 120,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  
];

// JobList.jsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Briefcase, MapPin, Clock, Star } from 'lucide-react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => { // Receive 'jobs' as a prop
  console.log("joblists",jobs)
  return (
    <div className="container py-4">
      <div className="row">
        {jobs && jobs.map((job, index) => ( // Use the 'jobs' prop
          <div className="col-md-6" key={index}>
            <JobCard job={job} />
          </div>
        ))}
        {!jobs || jobs.length === 0 && <p>No matching jobs found.</p>}
      </div>
    </div>
  );
};

export default JobList;
