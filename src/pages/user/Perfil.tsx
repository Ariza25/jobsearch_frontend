
import person from "../../images/person.jpeg";

const Perfil = () => {
  const profile = {
    name: "João",
    email: "joão@example.com",
    bio: "Desenvolvedor e entusiasmado por tecnologia. Apaixonado em construir soluções de software para os mais diversos contextos.",
    address: "Rua Principal, 123, Bairro Central, São Paulo, SP",
    education: [
      {
        degree: "Bacharel em Ciência da Computação",
        institution: "Universidade Federal de Tecnologia",
        year: 2022
      },
      {
        degree: "Mestre em Inteligência Artificial",
        institution: "Instituto de Tecnologia Avançada",
        year: 2024
      }
    ],
    services: [
      {
        title: "Desenvolvimento de Sistema de Gestão",
        company: "Tech Solutions",
        year: 2023
      },
      {
        title: "Consultoria em Segurança da Informação",
        company: "SecurePlus",
        year: 2023
      }
    ]
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8">
        <img src={person} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-300"/>
        <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
        <p className="text-sm text-gray-500">{profile.email}</p>
        <p className="text-sm text-gray-600 mt-1">{profile.address}</p>
        <p className="text-md text-gray-700 mt-4 text-center px-3">{profile.bio}</p>
        <div className="w-full mt-6 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formação Acadêmica:</h2>
          {profile.education.map((edu, index) => (
            <div key={index} className="p-2 hover:bg-gray-50 rounded-md">
              <h3 className="text-md font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} - {edu.year}</p>
            </div>
          ))}
          <h2 className="pt-6 text-2xl font-semibold text-gray-800 mb-4">Últimos Serviços:</h2>
          {profile.services.map((service, index) => (
            <div key={index} className="p-2 hover:bg-gray-50 rounded-md">
              <h3 className="text-md font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.company} - {service.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
