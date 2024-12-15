const PostJob = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="example:Software Engineer"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="example:Halishohor, Chittagong"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium">Job Type</label>
          <select
            name="jobType"
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select a job type
            </option>
            <option>Hybrid</option>
            <option>Remote</option>
            <option>On-site</option>
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium">Employment Type</label>
          <select
            name="employmentType"
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select employment type
            </option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="employmentType"
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select Job Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Min Salary</label>
            <input
              type="number"
              name="salaryMin"
              placeholder="40000"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Max Salary</label>
            <input
              type="number"
              name="salaryMax"
              placeholder="100000"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Currency</label>
            <select
              name="currency"
              className="select select-bordered w-full"
              required
            >
              <option>BDT</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium">Job Description</label>
          <textarea
            name="description"
            placeholder="Write a brief job description..."
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            type="text"
            name="company"
            placeholder="company name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium">
            Requirements (comma-separated)
          </label>
          <textarea
            name="requirements"
            required
            placeholder="example:JavaScript, React, Node.js, MongoDB"
            className="textarea textarea-bordered w-full"
            rows="2"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-sm font-medium">
            Responsibilities (comma-separated)
          </label>
          <textarea
            name="responsibilities"
            required
            placeholder="example:Develop software, Collaborate with team, Participate in code reviews"
            className="textarea textarea-bordered w-full"
            rows="2"
          ></textarea>
        </div>

        {/* HR Details */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">HR Email</label>
            <input
              type="email"
              name="hr_email"
              placeholder="example:hr@techsolutions.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">HR Name</label>
            <input
              type="text"
              name="hr_name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Company Logo */}
        <div>
          <label className="block text-sm font-medium">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            required
            placeholder="example:https://i.ibb.co/mXD5MNf/facebook.png"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;