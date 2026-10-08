import { CourseData } from "@/components/CourseCard";

export const courses: CourseData[] = [
  {
    id: "scratch",
    title: "Scratch",
    description:
      "Aprenda a programar com o Scratch, uma linguagem de programação visual para crianças e iniciantes.",
    workload: "4 horas",
    icon: "",
    materials: {
      pdfs: [
      ],
      slides: [
        { name: "Aula 1 — Introdução à lógica de programação", slides: 14, url: "/materiais/Scratch/aula1_scratch.pdf" },
        { name: "Aula 2 — Uso da plataforma", slides: 16, url: "/materiais/Scratch/aula2_scratch.pdf" },
      ],
      links: [
        { name: "Formulário de feedback", url: "#" },
      ],
    },
  },

  {
    id: "informatica-basica",
    title: "Informática Básica",
    description:
      "Aprenda a usar o computador, navegar na internet e utilizar ferramentas essenciais do dia a dia.",
    workload: "8 horas",
    icon: "",
    materials: {
      pdfs: [
        { name: "Cheat Sheet", size: "2.4 MB", url: "/materiais/Informática Básica/Cheat Sheet.pdf" },
        { name: "Exercícios Prático - Aula 1", size: "115.0 kB", url: "/materiais/Informática Básica/Aula 1 - Exercício.PDF" },
        { name: "Exercício Prático- Aula 2", size: "54.5 MB", url: "/materiais/Informática Básica/Aula 2.zip" },
      ],
      slides: [
        { name: "Aula 1 — Uso do Mouse e Teclado", slides: 39, url: "/materiais/Informática Básica/Aula 1 - Slides.pdf" },
        { name: "Aula 2 — Navegador de Arquivos", slides: 30, url: "/materiais/Informática Básica/Aula 2 - Slides.pdf" },
        { name: "Aula 3 — Google", slides: 27, url: "/materiais/Informática Básica/Aula 3 - Slides.pdf" },
      ],
      links: [
        { name: "Formulário de feedback", url: "#" },
      ],
    },
  },
  {
    id: "canva",
    title: "Canva",
    description:
      "Neste curso, você vai conhecer a interface da ferramenta e aprender a montar materiais gráficos do dia a dia.",
    workload: "2 horas",
    icon: "",
    materials: {
      pdfs: [
      ],
      slides: [
        { name: "Aprendendo a usar o Canva", slides: 12, url: "/materiais/Canva/Minicurso Canva.pptx" },
      ],
      links: [
      ],
    },
  },

  {
    id: "google-workspace",
    title: "Google Workspace",
    description:
      "Aprenda a utilizar as principais ferramentas do Google Workspace para criar documentos, planilhas, organizar arquivos na nuvem e se comunicar por e-mail de forma prática e eficiente.",
    workload: "2 horas",
    icon: "",
    materials: {
      pdfs: [
      ],
      slides: [
        { name: "Aprendendo a usar o Google Docs", slides: 20, url: "/materiais/Google Workspace/Minicurso Docs.pptx" },
        { name: "Aprendendo a usar o Google Drive", slides: 14, url: "/materiais/Google Workspace/Minicurso Drive.pptx" },
        { name: "Aprendendo a usar o Google Presentation", slides: 20, url: "/materiais/Google Workspace/Minicurso Presentation.pptx" },
        { name: "Aprendendo a usar o Google Sheets", slides: 23, url: "/materiais/Google Workspace/Minicurso Sheets.pptx" }
      ],
      links: [
      ],
    },
  },
  {
    id: "gravacao-de-videos",
    title: "Gravação de Vídeos",
    description:
      "Neste curso, você vai conhecer a interface do OBS Studio, aprender a configurar áudio e vídeo, montar cenas, inserir fontes e realizar gravações, mesmo sem experiência prévia.",
    workload: "2 horas",
    icon: "",
    materials: {
      pdfs: [
      ],
      slides: [
        { name: "Aprendendo a gravar vídeos", slides: 16, url: "/materiais/Gravação de Vídeos/Minicurso Gravação de Vídeos.pptx" },
      ],
      links: [
        { name: "Vídeo-aula no YouTube", url: "https://www.youtube.com/watch?v=4KjyBS9qywg" },

      ],
    },
  },
  {
    id: "edicao-de-videos",
    title: "Edição de Vídeos",
    description:
      "Aprenda a editar vídeos de forma simples no CapCut. Você verá como cortar e organizar clipes, adicionar transições, inserir textos e efeitos, além de exportar seu vídeo finalizado.",
    workload: "2 horas",
    icon: "",
    materials: {
      pdfs: [
      ],
      slides: [
        { name: "Aprendendo editar vídeos", slides: 18, url: "/materiais/Edição de Vídeos/Minicurso Edição de Vídeos.pptx" },
      ],
      links: [
        { name: "Vídeo-aula no YouTube", url: "https://www.youtube.com/watch?v=_K8YFK1khVU&t=63s" },
      ],
    },
  },
];
