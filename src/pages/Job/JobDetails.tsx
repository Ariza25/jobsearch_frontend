// src/pages/JobDetails.js
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jobs from "../../db/jobs/jobs";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs[parseInt(id as string, 10)];

  const handleApply = () => {
    toast.success("Currículo enviado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <ToastContainer />
      <div className="my-10 max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
        <h3 className="text-3xl text-slate-50 font-semibold mb-1">
          {job.cargo}
        </h3>
        <p className="mb-6 text-slate-50 font-bold dark:text-gray-400">
          {job.descricao}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Requisitos:</strong> {job.requisitos}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Localização:</strong> {job.localizacao}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Tipo de Emprego:</strong> {job.tipo_emprego}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Benefícios:</strong> {job.beneficios.join(", ")}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Salário:</strong> {job.salario}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Empresa:</strong> {job.empresa}
        </p>
        <p className="text-slate-200 pb-2">
          <strong>- Processo de Candidatura:</strong> {job.processo_candidatura}
        </p>

        {/* Button to submit the resume */}
        <button
          onClick={handleApply}
          className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
        >
          Enviar Currículo
        </button>
      </div>
    </>
  );
};

export default JobDetails;
