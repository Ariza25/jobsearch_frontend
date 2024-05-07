// src/pages/ManageVacancies.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialVacancies = [
  {
    id: "001",
    title: "Desenvolvedor Web Full Stack",
    description: "Desenvolver e manter aplicativos web usando tecnologias front-end e back-end.",
    location: "São Paulo, SP",
    type: "Tempo integral",
    salary: "A negociar"
  },
  {
    id: "002",
    title: "Engenheiro de Software Sênior (Remoto)",
    description: "Projetar e desenvolver software de alta qualidade, participar de revisões de código e colaborar com equipes interfuncionais.",
    location: "Remoto",
    type: "Tempo integral",
    salary: "R$ 20.000,00 mensais"
  },
  {
    id: "003",
    title: "Analista Financeiro",
    description: "Analisar dados financeiros, preparar relatórios, fornecer insights para tomada de decisão e garantir conformidade com regulamentos.",
    location: "Porto Alegre, RS",
    type: "Tempo integral",
    salary: "A negociar"
  },
];

const ManageVacancies = () => {
  const [vacancies, setVacancies] = useState(initialVacancies);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    salary: ""
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function criarVagaSuccess() {
    toast.success("Vaga criada com sucesso!");
  }

  function criarVagaError() {
    toast.error("Erro ao criar a vaga");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formValues).every((value) => value.trim() !== "");
    if (allFieldsFilled) {
      // Create a unique ID for the new vacancy
      const newId = (parseInt(vacancies[vacancies.length - 1]?.id || "0", 10) + 1).toString().padStart(3, "0");
      const newVacancy = { id: newId, ...formValues };

      // Add new vacancy to the list
      setVacancies((prevVacancies) => [...prevVacancies, newVacancy]);

      // Reset form values
      setFormValues({
        title: "",
        description: "",
        location: "",
        type: "",
        salary: ""
      });

      criarVagaSuccess();
    } else {
      criarVagaError();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto mt-10 px-4">
        {/* Section to Create New Vacancy */}
        <div className="p-4">
          <h2 className="text-3xl flex justify-center py-6 font-semibold mb-2 text-gray-900 border-b-2">
            Criar Nova Vaga
          </h2>
        </div>
        <div className="w-[100%] flex justify-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-[700px] shadow-lg p-20">
            <h5 className="text-lg font-semibold text-gray-800 flex justify-center mb-4">
              Preencha os detalhes da vaga:
            </h5>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChangeInput}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChangeInput}
                rows={4}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Localização
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formValues.location}
                onChange={handleChangeInput}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Tipo de Emprego
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formValues.type}
                onChange={handleChangeInput}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salário
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formValues.salary}
                onChange={handleChangeInput}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Criar Vaga
            </button>
          </form>
        </div>

        {/* Section to List Vacancies */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vagas Postadas</h1>
          {vacancies.length === 0 ? (
            <p className="text-gray-600">Nenhuma vaga postada.</p>
          ) : (
            vacancies.map((vacancy) => (
              <div key={vacancy.id} className="mb-6 p-4 border-b border-gray-200 hover:bg-gray-50 rounded-md">
                <h3 className="text-xl font-semibold text-gray-800">{vacancy.title}</h3>
                <p className="text-gray-600">{vacancy.description}</p>
                <p className="text-gray-600"><strong>Localização:</strong> {vacancy.location}</p>
                <p className="text-gray-600"><strong>Tipo de Emprego:</strong> {vacancy.type}</p>
                <p className="text-gray-600"><strong>Salário:</strong> {vacancy.salary}</p>
                <Link to={`/editvacancy/${vacancy.id}`} className="text-blue-500 hover:underline">
                  Editar
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ManageVacancies;
