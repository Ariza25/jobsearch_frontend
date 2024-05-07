const jobs = [
    {
      "id": "000",
      "cargo": "Desenvolvedor Web Full Stack",
      "descricao": "Desenvolver e manter aplicativos web usando tecnologias front-end e back-end.",
      "requisitos": "Experiência comprovada em desenvolvimento web, habilidades em HTML, CSS, JavaScript, Node.js, etc.",
      "localizacao": "São Paulo, SP",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-refeição"],
      "salario": "A negociar",
      "empresa": "Empresa de tecnologia líder no setor de e-commerce",
      "processo_candidatura": "Enviar currículo e portfólio para [email protected]"
    },
    {
      "id": "001",
      "cargo": "Assistente Administrativo",
      "descricao": "Fornecer suporte administrativo em várias áreas, incluindo gestão de documentos, agendamento de reuniões e atendimento ao cliente.",
      "requisitos": "Experiência prévia em funções administrativas, habilidades de organização e comunicação.",
      "localizacao": "Rio de Janeiro, RJ",
      "tipo_emprego": "Meio período",
      "beneficios": ["Flexibilidade de horário"],
      "salario": "R$ 1.500 por mês",
      "empresa": "Pequena empresa de consultoria em crescimento",
      "processo_candidatura": "Envie seu currículo para [email protected]"
    },
    {
      "id": "002",
      "cargo": "Engenheiro de Software Sênior (Remoto)",
      "descricao": "Projetar e desenvolver software de alta qualidade, participar de revisões de código e colaborar com equipes interfuncionais.",
      "requisitos": "Experiência significativa em desenvolvimento de software, habilidades em Python, experiência com metodologias ágeis.",
      "localizacao": "Remoto",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Home office"],
      "salario": "US$ 100.000 por ano",
      "empresa": "Startup de tecnologia inovadora",
      "processo_candidatura": "Candidate-se através do nosso site: www.company.com/careers"
    },
    {
      "id": "003",
      "cargo": "Analista de Marketing Digital",
      "descricao": "Criar e implementar estratégias de marketing digital, monitorar métricas de desempenho e otimizar campanhas online.",
      "requisitos": "Experiência em marketing digital, conhecimento de SEO, SEM, mídias sociais, etc.",
      "localizacao": "Brasília, DF",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-transporte"],
      "salario": "A negociar",
      "empresa": "Agência de marketing digital estabelecida",
      "processo_candidatura": "Envie seu currículo e carta de apresentação para [email protected]"
    },
    {
      "id": "004",
      "cargo": "Técnico de Suporte de TI",
      "descricao": "Fornecer suporte técnico de primeira linha para usuários, resolver problemas de hardware e software e manter a infraestrutura de TI.",
      "requisitos": "Experiência em suporte técnico de TI, conhecimento de sistemas operacionais, redes, etc.",
      "localizacao": "Belo Horizonte, MG",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-alimentação"],
      "salario": "R$ 2.500 por mês",
      "empresa": "Empresa de serviços de TI estabelecida",
      "processo_candidatura": "Candidate-se através do nosso site: www.company.com/careers"
    },
    {
      "id": "005",
      "cargo": "Professor de Inglês",
      "descricao": "Ensinar inglês para alunos de diferentes níveis, planejar aulas e avaliar o progresso dos alunos.",
      "requisitos": "Fluência em inglês, experiência prévia em ensino, certificação em ensino de inglês (por exemplo, TEFL, TESOL).",
      "localizacao": "Curitiba, PR",
      "tipo_emprego": "Meio período",
      "beneficios": ["Flexibilidade de horário"],
      "salario": "R$ 30 por hora",
      "empresa": "Escola de idiomas reconhecida",
      "processo_candidatura": "Envie seu currículo para [email protected]"
    },
    {
      "id": "006",
      "cargo": "Analista Financeiro",
      "descricao": "Analisar dados financeiros, preparar relatórios, fornecer insights para tomada de decisão e garantir conformidade com regulamentos.",
      "requisitos": "Experiência em análise financeira, habilidades em Excel, conhecimento em contabilidade.",
      "localizacao": "Porto Alegre, RS",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Plano de aposentadoria"],
      "salario": "A negociar",
      "empresa": "Empresa multinacional líder no setor",
      "processo_candidatura": "Candidate-se através do nosso site: www.company.com/careers"
    },
    {
      "id": "007",
      "cargo": "Designer Gráfico",
      "descricao": "Criar layouts, gráficos e elementos visuais para diversos projetos, colaborar com equipes criativas.",
      "requisitos": "Experiência em design gráfico, proficiência em Adobe Creative Suite, portfólio sólido.",
      "localizacao": "Recife, PE",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-cultura"],
      "salario": "A negociar",
      "empresa": "Agência de design premiada",
      "processo_candidatura": "Envie seu currículo e portfólio para [email protected]"
    },
    {
      "id": "008",
      "cargo": "Enfermeiro(a) Hospitalar",
      "descricao": "Prestar cuidados de enfermagem a pacientes, administrar medicamentos, monitorar sinais vitais e colaborar com a equipe médica.",
      "requisitos": "Formação em Enfermagem, registro ativo no COREN, experiência em ambiente hospitalar.",
      "localizacao": "Salvador, BA",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-transporte"],
      "salario": "R$ 3.000 por mês",
      "empresa": "Hospital renomado na região",
      "processo_candidatura": "Candidate-se através do nosso site: www.hospital.com/trabalhe-conosco"
    },
    {
      "id": "009",
      "cargo": "Consultor de Recursos Humanos",
      "descricao": "Prestar consultoria em questões de recursos humanos, recrutamento, seleção, treinamento e desenvolvimento de talentos.",
      "requisitos": "Experiência em RH, habilidades em comunicação, formação em Psicologia ou Administração.",
      "localizacao": "Fortaleza, CE",
      "tipo_emprego": "Tempo integral",
      "beneficios": ["Plano de saúde", "Vale-refeição"],
      "salario": "A negociar",
      "empresa": "Consultoria de RH líder no mercado",
      "processo_candidatura": "Envie seu currículo para [email protected]"
    }
  ]
  
  export default jobs;