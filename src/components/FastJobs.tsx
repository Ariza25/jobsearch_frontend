// src/components/FastJobs.js
import { Link } from "react-router-dom";
import jobs from "../db/jobs/jobs";

const FastJobs = () => {
  const firstThreeJobs = jobs.slice(0, 3);

  return (
    <>
      <div>
        <h3 className="text-gray-900 text-3xl font-semibold flex justify-center pt-10 pb-2 border-b-2">
          Candidate-se às melhores vagas
        </h3>
      </div>

      <div className="flex justify-center gap-4">
        {firstThreeJobs.map((job, index) => (
          <div
            key={index}
            className="mt-10 mb-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/jobs/${index}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.cargo}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {job.descricao}
            </p>
            <Link
              to={`/jobs/${index}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Saiba mais
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FastJobs;
