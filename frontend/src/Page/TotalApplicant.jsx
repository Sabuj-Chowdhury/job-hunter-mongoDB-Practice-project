import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const TotalApplicant = () => {
  const [applicants, setApplicants] = useState([]);
  const id = useParams();
  // console.log(id.job_id);

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_url}/total-application/jobs/${id.job_id}`
    ).then((res) => setApplicants(res.data));
  }, [id.job_id]);
  // console.log(applicants);

  const handleAction = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    fetch(`${import.meta.env.VITE_url}/application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire("successfully updated!");
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto my-12 p-6 bg-gray-100 shadow-lg rounded-lg"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-6 text-gray-800"
      >
        Total Applicants : {applicants.length}
      </motion.h1>
      {applicants.length > 0 ? (
        <motion.table
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="table-auto w-full border-collapse border border-gray-300"
        >
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Serial No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">GitHub</th>
              <th className="px-4 py-2">LinkedIn</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <motion.tr
                key={applicant._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-gray-200`}
              >
                {/* Serial No. */}
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                {/* Name */}
                <td className="border px-4 py-2">{applicant.name}</td>
                {/* Email */}
                <td className="border px-4 py-2">
                  {applicant.applicant_email}
                </td>
                {/* GitHub */}
                <td className="border px-4 py-2 text-blue-500 underline">
                  <a
                    href={applicant.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </td>
                {/* LinkedIn */}
                <td className="border px-4 py-2 text-blue-500 underline">
                  <a
                    href={applicant.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </td>
                {/* Actions */}
                <td className="border px-4 py-2">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <select
                      onChange={(e) => {
                        handleAction(e, applicant._id);
                      }}
                      defaultValue={applicant.status || "Select Action"}
                      className="select select-bordered"
                    >
                      <option disabled>Select Action</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                      <option>Under Review</option>
                    </select>
                  </motion.div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-gray-600 mt-12"
        >
          No applicants found.
        </motion.div>
      )}
    </motion.div>
  );
};

export default TotalApplicant;
