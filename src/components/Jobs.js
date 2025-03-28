import React, { useState } from 'react';

function Jobs() {
  const [isPosting, setIsPosting] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    salary: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    console.log('Job posted:', jobData);
    setIsPosting(false);
  };

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = (jobId) => {
    // Here you would typically make an API call to apply for the job
    console.log('Applied for job:', jobId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Jobs</h2>
        <button
          onClick={() => setIsPosting(true)}
          className="btn-primary"
        >
          Post a Job
        </button>
      </div>

      {isPosting ? (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Post a New Job</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="input-field mt-1"
                value={jobData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                required
                className="input-field mt-1"
                value={jobData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                required
                className="input-field mt-1"
                value={jobData.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                required
                rows="4"
                className="input-field mt-1"
                value={jobData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                name="requirements"
                required
                rows="4"
                className="input-field mt-1"
                value={jobData.requirements}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary Range
              </label>
              <input
                type="text"
                name="salary"
                required
                className="input-field mt-1"
                placeholder="e.g., $80k - $120k"
                value={jobData.salary}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsPosting(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Post Job
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Job Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900">Senior UI Designer</h3>
          <p className="text-sm text-gray-600 mt-1">TechCorp Inc.</p>
          <p className="text-sm text-gray-500 mt-1">San Francisco, CA</p>
          <p className="text-sm text-accent mt-1">$80k - $120k</p>
          <p className="text-sm text-gray-600 mt-4">
            Looking for an experienced UI designer to join our team...
          </p>
          <button
            onClick={() => handleApply(1)}
            className="btn-secondary w-full mt-4"
          >
            Apply Now
          </button>
        </div>

        {/* Add more job cards here */}
      </div>
    </div>
  );
}

export default Jobs; 