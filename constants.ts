
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: "neo-001",
    title: "Bot de Pedidos para Pizzaria",
    description: "Automação completa do atendimento via WhatsApp para uma pizzaria, desde o cardápio até o pagamento, reduzindo o tempo de espera e aumentando a satisfação.",
    category: ["WhatsApp", "Automação", "IA"],
    industry: "Alimentação",
    imageUrl: "https://picsum.photos/seed/pizza/600/400",
    results: [
      { label: "Aumento em conversão", value: "+35%" },
      { label: "Tempo de atendimento", value: "-70%" }
    ]
  },
  {
    id: "neo-002",
    title: "Agendamento Inteligente para Clínicas",
    description: "Sistema de IA que gerencia agendamentos, confirmações e remarcações automaticamente, otimizando a agenda de profissionais de saúde.",
    category: ["IA", "Automação", "Dados"],
    industry: "Saúde",
    imageUrl: "https://picsum.photos/seed/clinic/600/400",
    results: [
      { label: "Redução de 'no-shows'", value: "-40%" },
      { label: "Horas economizadas/semana", value: "15h" }
    ]
  },
  {
    id: "neo-003",
    title: "Orquestração de Dados para E-commerce",
    description: "Workflow n8n que integra dados de vendas, estoque e marketing, gerando relatórios e insights em tempo real para tomada de decisão estratégica.",
    category: ["n8n", "Dados", "Automação"],
    industry: "Varejo",
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    results: [
      { label: "Criação de relatórios", value: "100% auto" },
      { label: "Precisão do estoque", value: "+25%" }
    ]
  },
  {
    id: "neo-004",
    title: "Assistente Virtual para Cursos Online",
    description: "Um chatbot de IA que responde dúvidas comuns de alunos 24/7, melhorando o engajamento e liberando tutores para questões mais complexas.",
    category: ["IA", "WhatsApp", "n8n"],
    industry: "Educação",
    imageUrl: "https://picsum.photos/seed/education/600/400",
    results: [
      { label: "Resolução no 1º contato", value: "85%" },
      { label: "Satisfação dos alunos", value: "+30%" }
    ]
  },
    {
    id: "neo-005",
    title: "Triagem de Leads para Imobiliárias",
    description: "Automação que qualifica leads de marketing via WhatsApp, agendando visitas apenas com os contatos de maior potencial e nutrindo os demais.",
    category: ["Automação", "IA", "WhatsApp"],
    industry: "Serviços",
    imageUrl: "https://picsum.photos/seed/services/600/400",
    results: [
      { label: "Leads qualificados", value: "+50%" },
      { label: "Tempo de resposta", value: "< 1 min" }
    ]
  },
  {
    id: "neo-006",
    title: "Integração de Sistemas Legados",
    description: "Utilização de n8n para conectar sistemas antigos a novas plataformas na nuvem, automatizando o fluxo de informações sem a necessidade de refatoração.",
    category: ["n8n", "Dados"],
    industry: "Varejo",
    imageUrl: "https://picsum.photos/seed/legacy/600/400",
    results: [
      { label: "Economia com APIs", value: "-80%" },
      { label: "Processos manuais", value: "-95%" }
    ]
  }
];

export const FILTERS = {
  categories: ['IA', 'Automação', 'WhatsApp', 'n8n', 'Dados'],
  industries: ['Alimentação', 'Saúde', 'Varejo', 'Educação', 'Serviços']
};
