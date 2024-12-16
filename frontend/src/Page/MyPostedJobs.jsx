import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/my-posted-jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  const tableAnimation = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  const rowAnimation = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02, backgroundColor: "#f7f7f7" },
  };

  const cellAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        My Posted Jobs
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={tableAnimation}
        className="overflow-hidden rounded-lg"
      >
        <motion.table
          className="table-auto w-full border-collapse border border-gray-200"
          variants={tableAnimation}
        >
          <thead>
            <motion.tr
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-100"
            >
              <motion.th
                className="border border-gray-200 px-4 py-2 text-left"
                variants={cellAnimation}
              >
                Position
              </motion.th>
              <motion.th
                className="border border-gray-200 px-4 py-2 text-left"
                variants={cellAnimation}
              >
                Location
              </motion.th>
              <motion.th
                className="border border-gray-200 px-4 py-2 text-left"
                variants={cellAnimation}
              >
                View Applications
              </motion.th>
              <motion.th
                className="border border-gray-200 px-4 py-2 text-left"
                variants={cellAnimation}
              >
                Applications
              </motion.th>
            </motion.tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <motion.tr
                key={job._id}
                variants={rowAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer"
              >
                <motion.td
                  className="border border-gray-200 px-4 py-2"
                  variants={cellAnimation}
                >
                  {job.title}
                </motion.td>
                <motion.td
                  className="border border-gray-200 px-4 py-2"
                  variants={cellAnimation}
                >
                  {job.location}
                </motion.td>
                <motion.td
                  className="border border-gray-200 px-4 py-2"
                  variants={cellAnimation}
                >
                  <Link to={`/total-applications/${job._id}`}>
                    <button className="btn btn-sm btn-primary">
                      View Applications
                    </button>
                  </Link>
                </motion.td>
                <motion.td
                  className="border border-gray-200 px-4 py-2"
                  variants={cellAnimation}
                >
                  {job.applicationCount || 0}
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

export default MyPostedJobs;
