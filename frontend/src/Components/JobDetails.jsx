import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const JobDetails = () => {
  const jobData = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    hr_email,
    hr_name,
  } = jobData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <motion.img
          src={company_logo}
          alt={`${company} logo`}
          className="w-20 h-20 rounded-full object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-500">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
          <ul className="mt-4 text-gray-600">
            <li>
              <span className="font-medium">Location:</span> {location}
            </li>
            <li>
              <span className="font-medium">Job Type:</span> {jobType}
            </li>
            <li>
              <span className="font-medium">Category:</span> {category}
            </li>
            <li>
              <span className="font-medium">Application Deadline:</span>{" "}
              {applicationDeadline}
            </li>
            <li>
              <span className="font-medium">Salary:</span> {salaryRange.min} -{" "}
              {salaryRange.max} {salaryRange.currency}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
          <ul className="mt-4 text-gray-600">
            <li>
              <span className="font-medium">HR Name:</span> {hr_name}
            </li>
            <li>
              <span className="font-medium">HR Email:</span>{" "}
              <a
                href={`mailto:${hr_email}`}
                className="text-blue-600 hover:underline"
              >
                {hr_email}
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-800">Description</h2>
        <p className="mt-4 text-gray-600">{description}</p>
      </motion.div>

      {/* Responsibilities */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Responsibilities
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-600">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </motion.div>

      {/* Requirements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-800">Requirements</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-600">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </motion.div>

      {/* Apply Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
        className="flex justify-center"
      >
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default JobDetails;
