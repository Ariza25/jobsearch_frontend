// src/components/FastSearch.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../db/jobs/jobs";

interface JobListing {
  cargo: string;
  descricao: string;
  requisitos: string;
  localizacao: string;
  tipo_emprego: string;
  beneficios: string[];
  salario: string;
  empresa: string;
  processo_candidatura: string;
}

const FastSearch = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    if (query) {
      const results = db.filter(job =>
        job.cargo.toLowerCase().includes(query.toLowerCase()) ||
        job.localizacao.toLowerCase().includes(query.toLowerCase())
      );
      setJobs(results);
    } else {
      setJobs([]);
    }
  }, [query]);

  return (
    <>
      <div>
        <h3 className="text-gray-900 text-3xl font-semibold flex justify-center pt-10 pb-2 border-b-2">
          Qual seu emprego dos sonhos?
        </h3>
      </div>

      <form className="max-w-2xl mx-auto py-10" onSubmit={e => e.preventDefault()}>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Pesquise por cargo ou cidade"
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
        />
      </form>

      {jobs.length > 0 && (
        <div className="mb-10 dropdown results max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg">
          {jobs.map((job, index) => (
            <Link key={index} to={`/jobs/${index}`}>
              <div className="p-4 hover:bg-gray-100 cursor-pointer">
                <h4 className="font-bold text-gray-800">{job.cargo}</h4>
                <p>{job.descricao}</p>
                <p><strong>Localização:</strong> {job.localizacao}</p>
                <p><strong>Salário:</strong> {job.salario}</p>
              </div>
              <hr />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default FastSearch;
