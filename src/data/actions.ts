export interface Action {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const actions: Action[] = [
  {
    id: "informatização-biblioteca",
    title: "Informatização da Biblioteca",
    description: "O projeto de Informatização da Biblioteca do SECRI consiste na organização e digitalização de todo o acervo bibliográfico da instituição, visando modernizar o acesso e a gestão dos materiais disponíveis. As atividades incluem a catalogação detalhada de cada item do acervo, bem como a estruturação de um sistema de organização que permita a consulta e o gerenciamento eficiente das informações.",
    date: "2026 (em andamento)",
    image: "/acoes_headers/biblioteca.png",
  },
  {
    id: "plataforma-egressos",
    title: "Plataforma de Egressos",
    description: "A Plataforma de Egressos do SECRI tem como objetivo o desenvolvimento de um sistema para coleta, organização e visualização de dados dos ex-alunos da instituição, permitindo acompanhar sua trajetória acadêmica e profissional. O projeto envolve o levantamento de requisitos junto à equipe do SECRI, garantindo que o sistema atenda às necessidades reais dos usuários, seguido do desenvolvimento da plataforma propriamente dita.",
    date: "2026 (em andamento)",
    image: "/acoes_headers/egressos.png",
  },
  {
    id: "curso-scratch",
    title: "Curso de Scratch",
    description: "O projeto de Introdução à Lógica de Programação tem como objetivo apresentar os conceitos fundamentais de programação por meio de uma linguagem visual baseada em blocos, facilitando o aprendizado inicial de raciocínio lógico e estruturado. As atividades incluem a preparação de material didático adequado ao público-alvo, o planejamento e a ministração de oficinas práticas, além da proposição e acompanhamento da resolução de exercícios.",
    date: "2026",
    image: "/acoes_headers/scratch.jpg"
  },
  {
    id: "minicurso-informática-basica",
    title: "Minicurso de Informática Básica",
    description: "O minicurso de Informática Básica tem como objetivo introduzir os participantes ao uso fundamental do computador e da internet, desenvolvendo habilidades essenciais para o cotidiano digital e para a autonomia no uso de tecnologias.",
    date: "2026",
    image: "/acoes_headers/informatica_basica.png",
  },
  {
    id: "minicursos-tecnologia",
    title: "Minicursos de Ferramentas Digitais",
    description: "O minicurso de Google Workspace, Canva, gravação e edição de vídeo é voltado para adolescentes e tem como objetivo desenvolver habilidades digitais essenciais para produção de conteúdo, organização de informações e comunicação visual. O projeto envolve o desenvolvimento e adaptação de material didático adequado ao público, garantindo uma abordagem acessível e prática para o aprendizado das ferramentas.",
    date: "2025",
    image: "/acoes_headers/minicurso_tecnologia.jpeg",
  }

];