export interface TeamMember {
  id: string;
  name: string;
  title: string;
  category: string;
  photo: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "raquel-frizera",
    name: "Raquel Frizera",
    title: "Professora de Engenharia Elétrica",
    category: "Professores Voluntários",
    photo: "/team/perfil_raquel.jpg",
    bio: "",
  },
  
  {
    id: "thais-pedruzzi",
    name: "Thais Pedruzzi do Nascimento",
    title: "Professora de Engenharia Elétrica",
    category: "Professores Voluntários",
    photo: "/team/perfil_thais.jpg",
    bio: "",
  },
 
  {
    id: "arthur-bandeira",
    name: "Arthur Bandeira",
    title: "Estudante de Engenharia Elétrica",
    category: "Alunos Voluntários",
    photo: "/team/perfil_arthur.jpg",
    bio: "",
  },

  {
    id: "josmar-dias",
    name: "Josmar Dias",
    title: "Estudante de Engenharia Elétrica",
    category: "Alunos Voluntários",
    photo: "/team/perfil_josmar.jpg",
    bio: "",
  },
  
  {
    id: "juliana-priori",
    name: "Juliana Priori",
    title: "Estudante de Engenharia Elétrica",
    category: "Alunos Voluntários",
    photo: "/team/perfil_juliana.jpg",
    bio: "",
  },
];
