// src/pages/EditVacancy.tsx
import { useParams } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import {toast, ToastContainer} from "react-toastify"

const vacancies = [
  {
    id: 1,
    title: "Desenvolvedor Web Full Stack",
    description:
      "Desenvolver e manter aplicativos web usando tecnologias front-end e back-end.",
    location: "São Paulo, SP",
    type: "Tempo integral",
    salary: "A negociar",
  },
  {
    id: 2,
    title: "Engenheiro de Software Sênior (Remoto)",
    description:
      "Projetar e desenvolver software de alta qualidade, participar de revisões de código e colaborar com equipes interfuncionais.",
    location: "Remoto",
    type: "Tempo integral",
    salary: "R$ 20.000,00 mensais",
  },
  {
    id: 3,
    title: "Analista Financeiro",
    description:
      "Analisar dados financeiros, preparar relatórios, fornecer insights para tomada de decisão e garantir conformidade com regulamentos.",
    location: "Porto Alegre, RS",
    type: "Tempo integral",
    salary: "A negociar",
  },
];

const EditVacancy = () => {
  const { id } = useParams<{ id: string }>();
  const vacancyId = parseInt(id as string, 10);

  function editVacancySuccess() {
    toast.success("Vaga editada com sucesso!");
  }

  const vacancy = vacancies.find((v) => v.id === vacancyId);

  const [formData, setFormData] = useState(
    vacancy || {
      id: vacancyId,
      title: "",
      description: "",
      location: "",
      type: "",
      salary: "",
    }
  );

  if (!vacancy) {
    return <div>Vaga não encontrada</div>;
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Saved data:", formData);
    editVacancySuccess();
  };

  return (
    <>
    <ToastContainer/>
    <div className="container mx-auto mt-10 px-20">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Editar Vaga</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Título:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Descrição:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Localização:
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Tipo de Emprego:
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Salário:
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditVacancy;
