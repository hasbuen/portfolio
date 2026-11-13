import type { Experience, Project, SkillCategory, NavSection } from '../types'

export const NAV_SECTIONS: NavSection[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'curriculo', label: 'Currículo' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Rhede Sistemas',
    role: 'Analista de Suporte (Help Desk)',
    period: 'Janeiro/2021 – Presente',
    location: 'Cascavel, PR',
    current: true,
    bullets: [
      'Atuação em Help Desk avançado e suporte técnico corporativo focado em estabilidade de sistemas ERP e infraestrutura de clientes.',
      'Diagnóstico e resolução profunda de inconsistências de dados e falhas em ambientes de produção de alta exigência.',
      'Manutenção e sustentação do produto Whats Profissional e desenvolvimento de ferramentas internas para automação de processos do suporte.',
    ],
    tags: ['Help Desk', 'ERP', 'SQL', 'Produção', 'Automação'],
  },
  {
    company: 'Junsoft Sistemas',
    role: 'Analista de Suporte (Help Desk)',
    period: 'Dezembro/2017 – Julho/2018',
    location: 'Cascavel, PR',
    bullets: [
      'Instalação e configuração de softwares comerciais ERP, atendimento direto a clientes e resolução de incidentes críticos em bancos de dados.',
    ],
    tags: ['Help Desk', 'ERP', 'Banco de Dados'],
  },
  {
    company: 'Linx S.A.',
    role: 'Analista de Desenvolvimento de Software',
    period: 'Fevereiro/2015 – Abril/2016',
    location: 'Cascavel, PR',
    bullets: [
      'Implantação de sistemas ERP voltados ao segmento varejista, abrangendo parametrização fiscal e financeira.',
      'Validação e testes de fluxos operacionais de ponta a ponta e treinamento de usuários finais.',
    ],
    tags: ['ERP', 'Varejo', 'Implantação', 'Treinamento'],
  },
  {
    company: 'Softpharma',
    role: 'Analista de Suporte (Help Desk)',
    period: 'Março/2014 – Fevereiro/2015',
    location: 'Cascavel, PR',
    bullets: [
      'Instalação de sistemas comerciais e suporte de 1º e 2º nível, atuando na administração de bancos de dados.',
    ],
    tags: ['Help Desk N1/N2', 'DBA', 'Farmacêutico'],
  },
  {
    company: 'Prefeitura Municipal de Vera Cruz do Oeste',
    role: 'Professor de Informática (Estágio)',
    period: 'Janeiro/2012 – Janeiro/2014',
    location: 'Vera Cruz do Oeste, PR',
    bullets: [
      'Planejamento e ministração de treinamentos práticos de informática básica, pacote Office e noções operacionais de computadores para turmas da rede municipal.',
    ],
    tags: ['Ensino', 'Informática', 'Office'],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Suporte & Atendimento',
    icon: '🛠️',
    color: 'blue',
    skills: [
      'Help Desk (N1/N2/N3)',
      'Atendimento Corporativo',
      'Gestão de Incidentes',
      'Implantação de ERP',
      'Homologação de Fluxos',
      'Capacitação de Usuários',
    ],
  },
  {
    name: 'Linguagens & Bancos de Dados',
    icon: '🗄️',
    color: 'emerald',
    skills: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'JavaScript',
      'TypeScript',
      'C#',
      'Python',
      'Java',
    ],
  },
  {
    name: 'Front-end & Back-end',
    icon: '⚙️',
    color: 'violet',
    skills: [
      'HTML5',
      'CSS3',
      'React',
      'Sass',
      'NestJS',
      'PrismaJS',
      'GraphQL',
      'REST API',
    ],
  },
  {
    name: 'Infraestrutura & DevOps',
    icon: '🐧',
    color: 'orange',
    skills: [
      'Linux',
      'Docker',
      'Jenkins',
      'Git / GitHub',
      'Redes de Computadores',
      'Automação de Rotinas',
      'PM2',
      'Nginx',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Protocord',
    description:
      'Plataforma SaaS para centralização e rastreamento de demandas de ERP. Permite acompanhamento sistemático de erros, incidentes e sugestões de melhoria originadas no atendimento do suporte técnico, com dashboard analítico e gestão por prioridade.',
    tags: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'PrismaJS'],
    highlight: true,
  },
  {
    name: 'Acionar',
    description:
      'Plataforma SaaS completa de gestão operacional para negócios de serviços. Inclui agenda inteligente, gestão de clientes, controle financeiro (Caixa), emissão de NFS-e e suporte integrado. Arquitetura multi-tenant com isolamento rigoroso de dados.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'PrismaJS', 'GraphQL', 'Redis'],
    highlight: true,
  },
  {
    name: 'Storage Space',
    description:
      'Sistema robusto de gestão e processamento de armazenamento de arquivos de áudio construído com arquitetura moderna. Suporta upload, streaming e controle de acesso por tenant, com API GraphQL de alta performance.',
    tags: ['NestJS', 'PrismaJS', 'GraphQL', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'Transcritor',
    description:
      'Ferramenta de transcrição automática de áudio e vídeo para texto, com suporte a múltiplos formatos e exportação em diferentes layouts. Desenvolvida para automação de registros operacionais no suporte.',
    tags: ['Python', 'TypeScript', 'Speech Recognition', 'Automação'],
  },
]

export const EDUCATION = [
  {
    institution: 'Instituto Federal do Paraná (IFPR)',
    course: 'Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)',
    status: 'Interrompido / Em andamento',
  },
  {
    institution: 'Universidade Paranaense (Unipar)',
    course: 'Bacharelado em Sistemas de Informação Gerencial',
    status: 'Interrompido',
  },
  {
    institution: 'DIO · Potência Tech iFood',
    course: 'Bootcamp: Programação do Zero',
    status: 'Concluído — Novembro de 2023 (68h)',
  },
]
