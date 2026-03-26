// ============================================================
// GROWFLIX - Array de vídeos
// Estrutura idêntica ao site original growflix-project.vercel.app
// ============================================================

const movies = [
  // ── GROWCAST ────────────────────────────────────────────
  {
    img: "https://img.youtube.com/vi/9DXRQ1i4wAM/sddefault.jpg",
    title: "Growcast #01 | Manoel Roldão – Conta Tudo...",
    link: "https://www.youtube.com/embed/9DXRQ1i4wAM",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/9TmMllhPLyY/sddefault.jpg",
    title: "Growcast #02 | Willian Soares – E o DA com isso?",
    link: "https://www.youtube.com/embed/9TmMllhPLyY",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/CcVWLQl5QbA/sddefault.jpg",
    title: "Growcast #03 | Gabriel Soares – E o DA lá fora?",
    link: "https://www.youtube.com/embed/CcVWLQl5QbA",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/iFBiMFUHBRc/sddefault.jpg",
    title: "Growcast #04 | Gabriel Soares – Conselho para Ti, Nunca Desista!",
    link: "https://www.youtube.com/embed/iFBiMFUHBRc",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/m3hliJotqXc/sddefault.jpg",
    title: "Growcast #05 | Leandro Souza – Agilidade Importa?",
    link: "https://www.youtube.com/embed/m3hliJotqXc",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/T4IFQ0bRVPs/sddefault.jpg",
    title: "Growcast #06 | Lucas Zluhan & Daniele Stumpf – Dois em Um",
    link: "https://www.youtube.com/embed/T4IFQ0bRVPs",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/Bc5BO4O5FWs/sddefault.jpg",
    title: "Growcast #07 | Daniela & Nati – Lugar de Mulher é na Tecnologia",
    link: "https://www.youtube.com/embed/Bc5BO4O5FWs",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/lEovYpYtXo8/sddefault.jpg",
    title: "Growcast #08 | Lucas Tomazzo – Como Desenvolver Talentos",
    link: "https://www.youtube.com/embed/lEovYpYtXo8",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/ZVXsHDfVRAI/sddefault.jpg",
    title: "Growcast #09 | A Importância da Célula de Talentos",
    link: "https://www.youtube.com/embed/ZVXsHDfVRAI",
    category: "growcast",
  },
  {
    img: "https://img.youtube.com/vi/AauSAIxDqSs/sddefault.jpg",
    title: "Growcast #10 | A Vivência de um Mentor na Célula de Talentos",
    link: "https://www.youtube.com/embed/AauSAIxDqSs",
    category: "growcast",
  },

  // ── WEBINAR ─────────────────────────────────────────────
  {
    img: "https://img.youtube.com/vi/lJdL_-LHJPU/sddefault.jpg",
    title: "Webinar – Recriando a Interface do LinkedIn com Flutter",
    link: "https://www.youtube.com/embed/lJdL_-LHJPU",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/xBHrOhIrX0s/sddefault.jpg",
    title: "Webinar – Invito: Interface do Telegram com Flutter",
    link: "https://www.youtube.com/embed/xBHrOhIrX0s",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/WkE_3wK0Gec/sddefault.jpg",
    title: "Webinar – Ficou com alguma dúvida? Entre em Contato",
    link: "https://www.youtube.com/embed/WkE_3wK0Gec",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/2lmqEsHUgLs/sddefault.jpg",
    title: "Webinar – Como Participar do Programa Advanced",
    link: "https://www.youtube.com/embed/2lmqEsHUgLs",
    category: "webinar",
  },
  {
    img: "https://img.youtube.com/vi/TvkA0G1QSOA/sddefault.jpg",
    title: "Webinar – Recriando a interface do LinkedIn com Flutter (ao vivo)",
    link: "https://www.youtube.com/embed/TvkA0G1QSOA",
    category: "webinar",
  },

  // ── JORNADA UX/UI ───────────────────────────────────────
  {
    img: "https://img.youtube.com/vi/9zjSBKgJBcA/sddefault.jpg",
    title: "Jornada UX/UI – Aula 01 | Introdução ao Design",
    link: "https://www.youtube.com/embed/9zjSBKgJBcA",
    category: "uxui",
  },
  {
    img: "https://img.youtube.com/vi/5QAJP6mLg8Q/sddefault.jpg",
    title: "Jornada UX/UI – Aula 02 | Fundamentos de UX",
    link: "https://www.youtube.com/embed/5QAJP6mLg8Q",
    category: "uxui",
  },
  {
    img: "https://img.youtube.com/vi/d6E_-g4RMVY/sddefault.jpg",
    title: "Jornada UX/UI – Aula 03 | Como é trabalhar com UX/UI",
    link: "https://www.youtube.com/embed/d6E_-g4RMVY",
    category: "uxui",
  },
  {
    img: "https://img.youtube.com/vi/JblnVX3m_yk/sddefault.jpg",
    title: "Jornada UX/UI – Aula 04 | O profissional mais disputado do mercado",
    link: "https://www.youtube.com/embed/JblnVX3m_yk",
    category: "uxui",
  },

  // ── DIVERSOS / GERAL ────────────────────────────────────
  {
    img: "https://img.youtube.com/vi/nLwqM034Jv8/sddefault.jpg",
    title: "Como é o dia a dia de um Dev?",
    link: "https://www.youtube.com/embed/nLwqM034Jv8",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/SfWR3dKnFIo/sddefault.jpg",
    title: "Ciência de Dados | Growdev",
    link: "https://www.youtube.com/embed/SfWR3dKnFIo",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/FsV77YWZP34/sddefault.jpg",
    title: "Growcast #06 | Mulheres e Inclusão na Tecnologia",
    link: "https://www.youtube.com/embed/FsV77YWZP34",
    category: "geral",
  },
  {
    img: "https://img.youtube.com/vi/Bc5BO4O5FWs/sddefault.jpg",
    title: "Por que você precisa Entender de Agilidade",
    link: "https://www.youtube.com/embed/Bc5BO4O5FWs",
    category: "geral",
  },
];
