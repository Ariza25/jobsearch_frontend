import { useState, useEffect } from 'react';

const mockUsers = [
  {
    id: "001",
    name: "Alice Silva",
    email: "alice.silva@example.com",
    cpf: "123.456.789-10",
    job: "Desenvolvedor FrontEnd",
    skills: ["JavaScript", "React", "CSS"],
    experience: "5",
    location: "São Paulo"
  },
  {
    id: "002",
    name: "Bruno Costa",
    email: "bruno.costa@example.com",
    cpf: "234.567.890-11",
    job: "Assistente Administrativo",
    skills: ["Excel", "Office Management", "Customer Service"],
    experience: "3",
    location: "Rio de Janeiro"
  },
  {
    id: "003",
    name: "Carla Santos",
    email: "carla.santos@example.com",
    cpf: "345.678.901-12",
    job: "Analista de Dados",
    skills: ["Python", "SQL", "Data Analysis"],
    experience: "5",
    location: "Curitiba"
  },
  {
    id: "004",
    name: "Daniel Oliveira",
    email: "daniel.oliveira@example.com",
    cpf: "456.789.012-13",
    job: "Engenheiro de Software",
    skills: ["Java", "Spring", "AWS"],
    experience: "8",
    location: "Porto Alegre"
  },
];

const Candidates = () => {
  // Filtering state variables
  const [filterSkills, setFilterSkills] = useState('');
  const [filterExperience, setFilterExperience] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(mockUsers);

  // Filter function called when filter inputs change
  useEffect(() => {
    setFilteredCandidates(
      mockUsers.filter((candidate) => {
        const skillsMatch = filterSkills
          ? candidate.skills.some((skill) => skill.toLowerCase().includes(filterSkills.toLowerCase()))
          : true;
        const experienceMatch = filterExperience
          ? candidate.experience.toLowerCase().includes(filterExperience.toLowerCase())
          : true;
        const locationMatch = filterLocation
          ? candidate.location.toLowerCase().includes(filterLocation.toLowerCase())
          : true;
        return skillsMatch && experienceMatch && locationMatch;
      })
    );
  }, [filterSkills, filterExperience, filterLocation]);

  return (
    <div className="container mx-auto px-4 py-8 text-slate-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Candidatos das vagas publicadas pela empresa</h1>

      {/* Filter Inputs */}
      <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <input
          type="text"
          className="p-2 rounded-md bg-slate-200 text-slate-900"
          placeholder="Filtrar por Habilidades"
          value={filterSkills}
          onChange={(e) => setFilterSkills(e.target.value)}
        />
        <input
          type="text"
          className="p-2 rounded-md bg-slate-200 text-slate-900"
          placeholder="Filtrar por Experiência"
          value={filterExperience}
          onChange={(e) => setFilterExperience(e.target.value)}
        />
        <input
          type="text"
          className="p-2 rounded-md bg-slate-200 text-slate-900"
          placeholder="Filtrar por Localização"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
      </div>

      {/* Candidates List */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <li
              key={candidate.id}
              className="bg-slate-50 shadow-lg rounded-lg p-6 space-y-2 text-slate-800 border border-gray-200"
            >
              <p>
                <strong>Nome:</strong> {candidate.name}
              </p>
              <p>
                <strong>Email:</strong> {candidate.email}
              </p>
              <p>
                <strong>CPF:</strong> {candidate.cpf}
              </p>
              <p>
                <strong>Cargo:</strong> {candidate.job}
              </p>
              <p>
                <strong>Habilidades:</strong> {candidate.skills.join(', ')}
              </p>
              <p>
                <strong>Experiência:</strong> {candidate.experience} anos
              </p>
              <p>
                <strong>Localização:</strong> {candidate.location}
              </p>
            </li>
          ))
        ) : (
          <p className=" mt-10 text-center text-red-500">Nenhum candidato encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default Candidates;
