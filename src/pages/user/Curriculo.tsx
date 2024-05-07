import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Curriculo = () => {
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    formacaoAcademica: "",
    experienciaProfissional: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function createCurriculoSuccess() {
    toast.success("Currículo criado com sucesso!");
  }

  function createCurriculoError() {
    toast.error("Erro ao criar o currículo");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    e.preventDefault();
    if (allFieldsFilled) {
      createCurriculoSuccess(); 
    } else {
      createCurriculoError(); 
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-4">
        <h2 className="text-3xl flex justify-center py-6 font-semibold mb-2 text-gray-900 border-b-2">
          Cadastro de Currículo
        </h2>
      </div>

      <div className="w-[100%] flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[700px] shadow-lg p-20"
        >
          <h5 className="text-lg font-semibold text-gray-800 flex justify-center mb-4">
            Digite suas informações:
          </h5>
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formValues.nome}
              onChange={handleChangeInput}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChangeInput}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formValues.telefone}
              onChange={handleChangeInput}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="endereco"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formValues.endereco}
              onChange={handleChangeInput}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="formacaoAcademica"
              className="block text-sm font-medium text-gray-700"
            >
              Formação Acadêmica
            </label>
            <textarea
              id="formacaoAcademica"
              name="formacaoAcademica"
              value={formValues.formacaoAcademica}
              onChange={handleChangeTextarea}
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="experienciaProfissional"
              className="block text-sm font-medium text-gray-700"
            >
              Experiência Profissional
            </label>
            <textarea
              id="experienciaProfissional"
              name="experienciaProfissional"
              value={formValues.experienciaProfissional}
              onChange={handleChangeTextarea}
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Currículo
          </button>
        </form>
      </div>
    </>
  );
};

export default Curriculo;
