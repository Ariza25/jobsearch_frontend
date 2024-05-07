import { useState, useEffect } from "react";

const LastAndIndicateJobs = () => {
  const [trabalhosRecentes, setTrabalhosRecentes] = useState([
    {
      id: 1,
      cargo: "Desenvolvedor Web Full Stack",
      empresa: "Empresa A",
      status: "Aguardando resposta",
    },
    {
      id: 2,
      cargo: "Analista de Marketing Digital",
      empresa: "Empresa B",
      status: "Entrevista agendada",
    },
    {
      id: 3,
      cargo: "Engenheiro de Software Senior",
      empresa: "Empresa C",
      status: "Não selecionado",
    },
  ]);

  const [possiveisVagas, setPossiveisVagas] = useState([
    {
      id: 1,
      cargo: "Engenheiro de Software",
      empresa: "Empresa C",
      localizacao: "São Paulo, SP",
    },
    {
      id: 2,
      cargo: "Analista de Dados",
      empresa: "Empresa D",
      localizacao: "Rio de Janeiro, RJ",
    },
    {
      id: 3,
      cargo: "Auxiliar Administrativo",
      empresa: "Empresa E",
      localizacao: "Salvador, BA",
    },
  ]);

  useEffect(() => {
    console.log(setPossiveisVagas)
    console.log(setTrabalhosRecentes)
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl justify-center flex font-semibold text-gray-900 p-4 pt-10">
        Últimas Candidaturas
      </h2>
      <div className="mb-8">
        <ul className="divide-y divide-gray-200">
          <div className="flex justify-center gap-6">
            {trabalhosRecentes.map((trabalho) => (
              <li key={trabalho.id} className="py-4">
                <div className="bg-gray-100 p-3 rounded-lg py-5">
                  <h4 className="text-lg font-semibold">{trabalho.cargo}</h4>
                  <p className="text-gray-600">{trabalho.empresa}</p>
                  <p className="text-gray-600">{trabalho.status}</p>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl justify-center flex font-semibold text-gray-900 p-4 pt-4">
          Possíveis vagas
        </h2>
        <ul className="divide-y divide-gray-200">
          <div className="flex justify-center gap-6">
            {possiveisVagas.map((vaga) => (
              <li key={vaga.id} className="py-4">
                <div className="bg-gray-100 p-3 rounded-lg py-5 w-[250px]">
                  <h4 className="text-lg font-semibold">{vaga.cargo}</h4>
                  <p className="text-gray-600">{vaga.empresa}</p>
                  <p className="text-gray-600">{vaga.localizacao}</p>
                  <button className="mt-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-md">
                    Candidatar-se
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LastAndIndicateJobs;
