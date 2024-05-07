import { Link } from 'react-router-dom';
import jobs from '../../db/jobs/jobs';
import FastSearch from '../../components/FastSearch';

const AllVacancies = () => {
  return (
    <>
    <FastSearch/>

    <div className="container mx-auto p-4 bg-slate-900">
      <h1 className="text-4xl font-bold mb-6 text-slate-50 text-center">Conheça também:</h1>
      <ul className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-2xl text-slate-800 hover:text-slate-900 cursor-pointer font-semibold mb-2">
                <Link to={`/jobs/${job.id}`}>{job.cargo}</Link>
              </h2>
              <div className="space-y-1">
                <p>
                  <strong>Descrição:</strong> {job.descricao}
                </p>
                <p>
                  <strong>Requisitos:</strong> {job.requisitos}
                </p>
                <p>
                  <strong>Localização:</strong> {job.localizacao}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">
            No vacancies available.
          </li>
        )}
      </ul>
    </div>
    </>
  );
};

export default AllVacancies;
