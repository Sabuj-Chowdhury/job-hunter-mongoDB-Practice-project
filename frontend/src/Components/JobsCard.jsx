import { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";

const JobsCard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  console.log(jobs);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <SingleJobCard key={job._id} job={job}></SingleJobCard>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
