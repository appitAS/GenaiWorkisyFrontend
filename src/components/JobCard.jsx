import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Briefcase, MapPin, Clock, Star } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="card mb-4 border-light shadow-sm rounded-4 p-3">
      <div className="row g-3 align-items-center">
        <div className="col-md-9">
          <p className="text-uppercase fw-semibold mb-1 text-secondary" style={{ fontSize: '0.75rem' }}>
            {job.Company || "Company Name"}
          </p>
          <h5 className="fw-bold mb-2">{job.title}</h5>

          <div className="mb-2 d-flex flex-wrap align-items-center gap-3">
            <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
              <Star size={14} className="me-1 text-warning" /> Featured Role
            </span>
            <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
              <Clock size={14} className="me-1" /> {job.recruit_work_exp_ai}
            </span>
            <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
              {job.recruit_salary_ai}
            </span>
            <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
              <MapPin size={14} className="me-1" /> {job.recruit_locations_ai}
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2 mt-2">
            {typeof job.recruit_skills_ai === 'string' &&
              job.recruit_skills_ai.split(' ').map((skill, idx) => (
                <span key={idx} className="badge bg-warning text-dark rounded-pill px-2 py-1" style={{ fontSize: '0.75rem' }}>
                  {skill}
                </span>
              ))}
          </div>

          <div className="mt-3 text-muted" style={{ fontSize: '0.75rem' }}>
            Posted {job['Post Date'] || 1} days ago
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-end">
          <button style={{ border: "1px solid black" }} className="btn btn-primary rounded-pill px-4 py-2 fw-semibold mt-2">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
