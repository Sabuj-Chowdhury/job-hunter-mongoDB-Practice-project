import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ApplyJob = () => {
  // getting the application id
  const id = useParams();
  const { user } = useAuth();
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const coverLetter = form.coverLetter.value;

    const ApplicantData = {
      job_id: id,
      applicant_email: user.email,
      name,
      github,
      linkedin,
      coverLetter,
    };
    console.log(ApplicantData);
    fetch(`${import.meta.env.VITE_url}/applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ApplicantData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert("Data submitted sucessfully ");
        }
        form.reset();
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Application Form
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* GitHub Profile Link */}
        <div className="mb-4">
          <label
            htmlFor="github"
            className="block text-sm font-medium text-gray-600"
          >
            GitHub Profile
          </label>
          <input
            type="url"
            id="github"
            name="github"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your GitHub profile link"
          />
        </div>

        {/* LinkedIn Profile Link */}
        <div className="mb-4">
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-600"
          >
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your LinkedIn profile link"
          />
        </div>

        {/* Cover Letter Field */}
        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-600"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your cover letter"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
