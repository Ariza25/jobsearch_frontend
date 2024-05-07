const PerfilEmpresarial = () => {
  const company = {
    name: "Tech Solutions",
    address: "Av. Empresarial, 987, Centro de Negócios, São Paulo, SP",
    description: "Uma empresa inovadora que desenvolve soluções de tecnologia para clientes em todo o mundo, focando na excelência técnica e na satisfação do cliente.",
    establishedYear: 2015,
    services: [
      {
        title: "Desenvolvimento de Sistemas Personalizados",
        description: "Soluções sob medida para atender às necessidades específicas de cada cliente.",
        year: 2023
      },
      {
        title: "Consultoria em Segurança da Informação",
        description: "Orientação especializada para proteger os dados e a infraestrutura das empresas.",
        year: 2023
      },
      {
        title: "Integração de Sistemas",
        description: "Conectar diferentes sistemas para otimizar os processos de negócios.",
        year: 2023
      }
    ]
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8">
        <img
          src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Company Logo"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-300"
        />
        <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
        <p className="text-sm text-gray-600">{company.address}</p>
        <p className="text-md text-gray-700 mt-4 text-center px-3">{company.description}</p>
        <div className="w-full mt-6 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Estabelecida Desde:</h2>
          <p className="text-gray-600">{company.establishedYear}</p>

          <h2 className="pt-6 text-2xl font-semibold text-gray-800 mb-4">Principais Serviços:</h2>
          {company.services.map((service, index) => (
            <div key={index} className="p-2 hover:bg-gray-50 rounded-md">
              <h3 className="text-md font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description} - {service.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfilEmpresarial;
