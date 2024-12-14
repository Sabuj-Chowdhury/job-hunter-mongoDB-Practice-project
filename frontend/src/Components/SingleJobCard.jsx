import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
const SingleJobCard = ({ job }) => {
  //   console.log(job);

  const {
    _id,
    title,
    location,

    salaryRange,
    description,
    company,
    requirements,

    company_logo,
  } = job || {};

  return (
    <div className="card bg-base-100  shadow-xl mt-5">
      <div className="flex gap-2 m-4">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-2">
            <TfiLocationPin /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, idx) => (
            <p key={idx} className="border rounded-md text-center px-2 ">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
          <p>
            Salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/job-details/${_id}`}>
            <button className="btn btn-warning ">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleJobCard;
