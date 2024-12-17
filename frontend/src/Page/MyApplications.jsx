import { useEffect, useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion";
// import axios from "axios";

const MyApplications = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/total-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
    // axios
    //   .get(
    //     `${import.meta.env.VITE_url}/total-application?email=${user.email}`,
    //     { withCredentials: true }
    //   )
    //   .then((res) => setJobs(res.data));
  }, [user.email]);

  const handleDelete = (id) => {
    console.log("Delete job with ID:", id);
  };

  const handleUpdate = (id) => {
    console.log("Update job with ID:", id);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        My Job Applications
      </h1>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="table-auto w-full bg-white shadow-md rounded-lg border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Company Logo</th>
              <th className="px-6 py-3 text-left">Company</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <motion.tr
                key={job._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4">{job.company}</td>
                <td className="px-6 py-4">{job.title}</td>
                <td className="px-6 py-4">{job.location}</td>
                <td className="px-6 py-4 flex justify-center gap-4">
                  <FaEdit
                    className="text-blue-500 cursor-pointer hover:text-blue-700"
                    onClick={() => handleUpdate(job._id)}
                  />
                  <FaTimes
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => handleDelete(job._id)}
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MyApplications;
