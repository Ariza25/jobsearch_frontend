const JobResume = () => {
    return (
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Vaga de Estagiário/ Desenvolvedor(a) Júnior</h2>
          <p className="text-sm">2 vagas: | Atualizada em 25/04</p>
          
          <div className="flex items-center mt-4">
            <p className="mr-4"><span role="img" aria-label="dinheiro">💰</span> A Combinar</p>
            <p className="mr-4"><span role="img" aria-label="localização">📍</span> Caxias do Sul - RS (2)</p>
            <p><span role="img" aria-label="empresa">🏢</span> DEVELCODE TECNOLOGIA EM SISTEMAS</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Sobre a empresa</h3>
            <p className="mt-2">A Develcode é uma empresa especializada no desenvolvimento de software, reconhecida pelo GPTW e por sua excelência. Os profissionais que a compõem possuem uma sólida experiência no mercado de TI. Há mais de 9 anos no mercado, atua com projetos diversificados, proporcionando soluções de valor para atender as necessidades do cliente e seu negócio. Nossa matriz se encontra em Caxias do Sul - RS, mas nossa equipe composta por mais de 100 colaboradores está por todo o território brasileiro. Possuímos grandes clientes que atuam no Brasil e no mundo trabalhando com desenvolvimento ágil através de SQUADs. Sempre buscamos desenvolver e encontrar novos talentos, e você pode ser um deles!</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Sobre a Vaga</h3>
            <p className="mt-2">Buscamos profissionais para atuar na área de inovação e inteligência artificial ou em nosso Programa de Desenvolvimento de Talentos.</p>
            <h4 className="mt-2 font-semibold">Requisitos</h4>
            <ul className="list-disc ml-4 mt-2">
              <li>Conhecimento/ Interesse em Java, React e/ou testes;</li>
              <li>Estar cursando graduação na área.</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Dados da Empresa</h3>
            <p className="mt-2 flex items-center"><img src="caminho-para-logo-empresa" alt="Logo da empresa" className="w-6 h-6 mr-2"/> DEVELCODE TECNOLOGIA EM SISTEMAS</p>
            <p className="mt-2">62.09-1-00 - Suporte técnico, manutenção e outros serviços em tecnologia da informação (Dispensada *)</p>
            <h4 className="mt-2 font-semibold">NACIONALIDADE E PORTE:</h4>
            <p className="mt-2">Nacional de pequeno porte com 28 funcionários.</p>
            <h4 className="mt-2 font-semibold">RAMO:</h4>
            <p className="mt-2">Telecomunicações</p>
          </div>
        </div>
      );
}

export default JobResume