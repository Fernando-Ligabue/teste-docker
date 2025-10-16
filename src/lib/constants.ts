import type { NavItem } from "./types";

//  globals header/footer
export const logoCpme = "/assets/images/globals/logo-inst-cpme.svg";
export const logoFooter = "/assets/images/globals/icon-footer.svg";

export const navItems: NavItem[] = [
  {
    label: "CPME",
    href: "",
    subItems: [
      { label: "História", href: "/historia" },
      { label: "Estatutos", href: "/estatutos" },
      { label: "Órgãos Sociais", href: "/orgaos-sociais" },
      { label: "Organograma", href: "/organograma" },
      { label: "Relatórios e Contas", href: "/relatorios-contas" },
      { label: "Património", href: "/patrimonio" },
      { label: "Contratação Pública", href: "/contratacao-publica" },
    ],
  },
  {
    label: "Sócios",
    href: "",
    subItems: [
      { label: "Regulamento", href: "/regulamento" },
      { label: "Editais", href: "/editais" },
      { label: "Acordos", href: "/acordos" },
      { label: "Empréstimos", href: "/emprestimos" },
      { label: "Seguros Sociais", href: "/seguros-sociais" },
      { label: "Formulários", href: "/formularios" },
    ],
  },
  { label: "Seguros", href: "/seguros-sociais" },
  { label: "Arrendamento", href: "/arrendamento" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contactos", href: "/contactos" },
];

export const footerInstitutional = [
  {
    label: "CPME",
    subItems: [
      { label: "História", href: "/historia" },
      { label: "Estatutos", href: "/estatutos" },
      { label: "Órgãos Sociais", href: "/orgaos-sociais" },
      { label: "Organograma", href: "/organograma" },
      { label: "Relatório e Contas", href: "/relatorios-contas" },
      { label: "Património", href: "/patrimonio" },
      { label: "Contratação Pública", href: "/contratacao-publica" },
    ],
  },
  {
    label: "Sócios",
    subItems: [
      { label: "Regulamento", href: "/regulamento" },
      { label: "Editais", href: "/editais" },
      { label: "Acordos", href: "/acordos" },
      { label: "Empréstimos", href: "/emprestimos" },
      { label: "Seguros Sociais", href: "/seguros-sociais" },
      { label: "Formulários", href: "/formularios" },
    ],
  },
];

export const footerContacts = [
  {
    label: "Morada",
    value:
      "Caixa de Previdência do Ministério da Educação Praça D. Pedro IV (Rossio), 45 - 1º a 5º 1149-069 Lisboa",
  },
  { label: "NIF", value: "506 146 197" },
  { label: "Telefone", value: "213 243 810 (chamada rede fixa nacional)" },
  { label: "Email", value: "cpme@cpme.pt" },
  { label: "Horário", value: "Das 9h30 às 16h30" },
];

export const policiesFooter = [
  { label: "Política de cookies", href: "/politica-cookies" },
  { label: "Termos e Condiçoes", href: "/termos-condicoes" },
  { label: "Política de Privacidade", href: "/politica-privacidade" },
];

export const socialsFooter = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573442815950",
    icon: "FaFacebookF",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cpme.pt/",
    icon: "FaInstagram",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/caixa-de-previd%C3%AAncia-do-minist%C3%A9rio-da-educa%C3%A7%C3%A3o/",
    icon: "FaLinkedinIn",
  },
];

// **********************************************************************
// HOME PAGE
export const bannersHome = [
  "/assets/images/home/bg-hero-home1.webp",
  "/assets/images/home/bg-hero-home2.webp",
  "/assets/images/home/bg-hero-home3.webp",
];

export const homePageContent = {
  heroContent: [
    {
      label: "TORNE-SE ASSOCIADO",
      heading: "Apoios para os Profissionais do Ensino",
      descriptionText:
        "SEGUROS SOCIAIS. EMPRÉSTIMOS. ACORDOS E PARCERIAS. BENEFÍCIOS EXCLUSIVOS",
      background: bannersHome,
    },
  ],
  featureSection: [
    {
      label: "CPME",
      heading: "Caixa de Previdência do Ministério da Educação",
      descriptionText:
        "A CPME é uma instituição de previdência para os profissionais do ensino em Portugal, que promove o bem-estar e a segurança financeira dos seus associados através de um conjunto abrangente de benefícios e apoios.",
      descriptionText2:
        "Focada na proximidade, no rigor e na transparência, a CPME valoriza a relação de confiança com os seus associados.",
    },
  ],
  benefitsSection: [
    {
      label: "BENEFÍCIOS CPME",
      heading:
        "Vantagens exclusivas para o associado e para toda a sua família",
    },
  ],
  featureCards: [
    {
      id: "1",
      description: "Acordos e Parcerias para toda a sua família.",
      imageUrl: "/assets/images/home/benefits1.webp",
      link: "/acordos",
      size: "lg",
    },
    {
      id: "2",
      description: "Empréstimos para todos os momentos da sua vida.",
      imageUrl: "/assets/images/home/benefits2.webp",
      link: "/emprestimos",
      size: "md",
    },
    {
      id: "3",
      description: "Imóveis Habitacionais ou Comerciais para arrendamento.",
      imageUrl: "/assets/images/home/benefits3.webp",
      link: "/arrendamento",
      size: "lg",
    },
    {
      id: "4",
      description: "Condições especiais para diferentes necessidades.",
      imageUrl: "/assets/images/home/benefits4.webp",
      link: "/regulamento",
      size: "sm",
    },
  ],
  sectionMarquee: [
    {
      label: "ACORDOS",
      rotateText1:
        "Apoio Domiciliário — Lazer — Residências Sénior — Saúde — Outros — ",
      rotateText2:
        "Apoio Domiciliário — Lazer — Residências Sénior — Saúde — Outros — ",
    },
  ],
  safeInsuranceSection: [
    {
      label: "SEGUROS",
      heading:
        "Seguros desenhados para uma proteção completa em diferentes etapas da vida",
    },
  ],
  cardsSafeHome: [
    {
      id: 1,
      image: "/assets/images/home/card-seguro1.webp",
      segment: "Seguro",
      type: "de Vida Inteira",
      url: "/seguro-social/seguro-vida-inteira",
    },
    {
      id: 2,
      image: "/assets/images/home/card-seguro2.webp",
      segment: "Seguro",
      type: "de Reforma",
      url: "/seguro-social/seguro-reforma",
    },
    {
      id: 3,
      image: "/assets/images/home/card-seguro3.webp",
      segment: "Seguro",
      type: "de Prosseguimento de Estudos",
      url: "/seguro-social/seguro-prosseguimento-estudos",
    },
    {
      id: 4,
      image: "/assets/images/home/card-seguro4.webp",
      segment: "Seguro",
      type: "de Maioridade",
      url: "/seguro-social/seguro-maioridade",
    },
    {
      id: 5,
      image: "/assets/images/home/card-seguro5.webp",
      segment: "Seguro",
      type: "de Lazer",
      url: "/seguro-social/seguro-lazer",
    },
    {
      id: 6,
      image: "/assets/images/home/card-seguro6.webp",
      segment: "Capitais",
      type: "Diferidos com Opção",
      url: "/seguro-social/capitais-diferidos",
    },
    {
      id: 7,
      image: "/assets/images/home/card-seguro7.webp",
      segment: "Capital",
      type: "Repartido",
      url: "/seguro-social/capital-repartido",
    },
    {
      id: 8,
      image: "/assets/images/home/card-seguro8.webp",
      segment: "Capital",
      type: "Duplo",
      url: "/seguro-social/capital-duplo",
    },
  ], // Dados dos seguros
  emprestimosSection: [
    {
      label: "EMPRÉSTIMOS APOIO À FAMÍLIA",
      heading: "Condições especiais para diferentes necessidades",
      imgHighlight: "/assets/images/home/emp-apoio-familia.webp",
    },
  ],
  arrendamentoSection: [
    {
      label: "ARRENDAMENTO",
      image: "/assets/images/home/arrendamento.webp",
    },
  ],
  testimonialsSection: [
    {
      label: "TESTEMUNHOS ASSOCIADOS",
      heading: "Depoimentos de quem já faz parte da CPME",
      background: "/assets/images/home/bg-arrendamento.webp",
      testimonialsData: [
        {
          id: 1,
          imageUrl: "/assets/images/home/joao-cabral.webp",
          testimonial:
            "Há uma confiança bastante grande nesta instituição. Todas as questões são tratadas com grande seriedade.",
          author: "João Cabral, lisboa",
          videoUrl:"/CPME/assets/videos/EntrevistaJoaoCabral.mp4",
        },
        {
          id: 2,
          imageUrl: "/assets/images/home/joao-adem.webp",
          testimonial:
            "Por uma questão financeira, do futuro, vi que a CPME tinha melhores benefícios que até os certificados de aforro.",
          author: "João Adem, lisboa",
          videoUrl:"/CPME/assets/videos/EntrevistaJoaoAdem.mp4",
        },
        {
          id: 3,
          imageUrl: "/assets/images/home/sofia-almeida.webp",
          testimonial:
            "A CPME é uma excelente forma de conseguirem ter uma rede de suporte para educadores e também tem um excelente conjunto de produtos financeiros que são muito interessantes e altamente vantajosos.",
          author: "Sofia Almeida, lisboa",
          videoUrl:"/CPME/assets/videos/EntrevistaSofiaAlmeida.mp4",
        },
      ],
    },
  ],
};

// **********************************************************************
// PAGE ASSOCIATE
export const asscociatePageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "TORNE-SE ASSOCIADO",
            heading:
              "Um mundo de vantagens para os associados e para a sua família:",
            descriptionText: "seguros, empréstimos, arrendamento e muito mais.",
            logo: "/assets/images/globals/logoblue.svg",
            background:
              "/assets/images/associados/bg-associados-hero.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        label: "CPME",
        heading:
          "Inscrição para Associados CPME: Quem Pode Adquirir o Estatuto de Associado?",
        descriptionText:
          "Junte-se à CPME e aproveite as vantagens e benefícios exclusivos que temos para si e para a sua família. Podem inscrever-se como associados todos profissionais do ensino que estejam atualmente, ou tenham estado, ao serviço de instituições de ensino (ou tuteladas pelo Ministério da Educação). Também é possível a adesão de docentes e não docentes do ensino particular e cooperativo, desde que ainda não tenham completado 61 anos de idade. ",
        step: "Passos para Inscrição:",
      },
    ],
    stepsSubscribe: [
      {
        id: 1,
        title: "Preenchimento da Proposta",
        description:
          "É necessário preencher o formulário de inscrição e comprovar a identidade e data de nascimento.",
        image: "/assets/images/globals/badge.svg",
      },
      {
        id: 2,
        title: "Escolha de Modalidade",
        description:
          "Deverá subscrever, no mínimo, uma das modalidades previstas no regulamento.",
        image: "/assets/images/globals/badge.svg",
      },
      {
        id: 3,
        title: "Aprovação Médica",
        description:
          "Quando aplicável, terá de se submeter a avaliação médica, de acordo com os requisitos da modalidade escolhida. Importante: este passo está sujeito aos regulamentos internos.",
        image: "/assets/images/globals/badge.svg",
      },
    ],
    sectionWarn: [
      {
        warning: "Atenção",
        warningText:
          "A inscrição será efetivada no primeiro dia do mês em que a proposta for recebida na Secretaria da Caixa, podendo ser suspensa até à obtenção da aprovação médica, caso seja necessária. O associado tem a possibilidade de subscrever várias modalidades e planos, desde que respeite os limites financeiros estabelecidos.",
      },
    ],
    sectionBlue: [
      {
        text: "Junte-se à CPME e aproveite as vantagens e benefícios exclusivos que temos para si e para a sua família.",
      },
    ],
    sectionBenefits: {
      intro: {
        label: "BENEFÍCIOS CPME",
        heading:
          "Vantagens exclusivas para o associado e para toda a sua família",
      },
      benefitsData: [
        {
          id: "1",
          description: "Acordos e Parcerias para toda a sua família.",
          imageUrl: "/assets/images/home/benefits1.webp",
          link: "/acordos",
        },
        {
          id: "2",
          description: "Empréstimos para todos os momentos da sua vida.",
          imageUrl: "/assets/images/home/benefits2.webp",
          link: "/emprestimos",
        },
        {
          id: "3",
          description: "Imóveis Habitacionais ou Comerciais para arrendamento.",
          imageUrl: "/assets/images/home/benefits3.webp",
          link: "/patrimonio",
        },
        {
          id: "4",
          description: "Condições especiais para diferentes necessidades.",
          imageUrl: "/assets/images/home/benefits4.webp",
          link: "/regulamento",
        },
      ],
      btnAssociate: [
        {
          id: 1,
          label: "Torne-se Associado",
          link: "/associados",
        },
      ],
      btnSimulate: [
        {
          id: 1,
          label: "Peça já a sua simulação",
          link: "/contactos",
        },
      ],
    },
  },
];

// **********************************************************************
// PAGE Historia
export const historyPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "Quase um século de compromisso",
            descriptionText:
              "com a proteção e bem-estar dos profissionais do ensino.",
            logo: "/assets/images/globals/logoblue.svg",
            background: "/assets/images/historia/bg-history-hero.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "A Caixa de Previdência do Ministério da Educação (CPME), cujo estatuto remonta a 1926, foi fundada para apoiar os profissionais do ensino.",
        descriptionText:
          "Ao longo dos anos, evoluiu para oferecer maior proteção social aos seus associados e respetivas famílias. Hoje, mantém o compromisso de garantir segurança e bem-estar à comunidade educativa.",
        image: "/assets/images/historia/history-img.webp",
      },
    ],
    timeline: [
      {
        id: 12,
        date: "",
        year: "1925",
        intro: "Primeiros Estatutos",
        description: [
          "Criação da Caixa de Previdência dos Funcionários dos Serviços do Ministério da Instrução Pública, aprovada pelo Decreto n.º 11.220 de 6 de Novembro de 1925.",
        ],
        list: [],
      },
      {
        id: 11,
        date: "",
        year: "1926",
        intro: "Alteração aos Estatutos",
        description: [
          "A publicação do Decreto n.º 12.695, de 19 de Novembro, aprova os novos Estatutos da Caixa de Previdência do Ministério da Instrução Pública. Início de atividade da Caixa.",
        ],
        list: [],
      },
      {
        id: 10,
        date: "",
        year: "1932",
        intro: "Regulamento das Associações Mutualistas",
        description: [
          "Publicação, em Fevereiro, do Regulamento das Associações Mutualistas procurando normalizar o respetivo funcionamento.",
        ],
        list: [],
      },
      {
        id: 9,
        date: "",
        year: "1934",
        intro: "Montepio dos Servidores do Estado",
        description: [
          "Criação do Montepio dos Servidores do Estado, de inscrição obrigatória para os funcionários do Estado.",
        ],
        list: [],
      },
      {
        id: 8,
        date: "",
        year: "1935",
        intro: "Inscrição Obrigatória na Caixa",
        description: [
          "Em 16 de Novembro de 1935 foi publicado o Decreto-Lei n.º 26060, que revoga o parágrafo 2.º do Artigo 3.º dos Estatutos da Caixa de Previdência do Ministério da Instrução Pública, fazendo cessar a obrigatoriedade de inscrição, considerando que sendo ela obrigatória no Montepio dos Servidores do Estado, não se justificava a existência de outras Instituições de previdência de funcionários públicos com idêntica obrigação, pois isso seria para muitos um encargo insuportável.",
        ],
        list: [],
      },
      {
        id: 7,
        date: "",
        year: "1937",
        intro: "Incorporação do Montepio do Professorado Primário",
        description: [
          "A incorporação do Montepio Oficial do Professorado Primário, dá-se no 11.º exercício da Administração da Caixa de Previdência em cujos Estatutos foram introduzidas, para esse efeito, diversas alterações, pelo Decreto-Lei n.º 27993 de 26 de Agosto de 1937.",
        ],
        list: [],
      },
      {
        id: 6,
        date: "",
        year: "1946",
        intro: "Alteração aos Estatutos",
        description: [
          "O Decreto-Lei n.º 35781 publicado em 5 de Agosto de 1946 introduziu novas alterações aos Estatutos de 1926. O valor do subsídio máximo foi alterado de 30.000$00 para 50.000$00, mantendo a idade limite de inscrição nos 51 anos. As quotas e joias continuaram a ser calculadas pela Tábua Hm 3 por cento, em uso de 1944. Esta taxa sofreu as seguintes alterações, desde a criação da Caixa:",
        ],
        list: [
          "Desde Novembro de 1926, até à alteração estatutária de Agosto de 1937 - Tábua Hm 5 por cento;",
          "Desde Outubro de 1937, até à alteração estatutária de Junho de 1944 - Tábua Hm 4 por cento.",
        ],
      },
      {
        id: 5,
        date: "",
        year: "1991",
        intro: "Revogação dos Estatutos",
        description: [
          "Publicação do Decreto-Lei n.º 82/91 de 19 de Fevereiro, revogando o Decreto-Lei n.º 35781 de 5 de Agosto de 1946, que aprovara os últimos Estatutos da Caixa. - Período de presidências de todos os Órgãos Sociais por inerência.",
        ],
        list: [],
      },
      {
        id: 4,
        date: "",
        year: "1993",
        intro: "Revogação do Decreto-Lei n.º 82/91",
        description: [
          "Publicação do Decreto-Lei n.º 133/93 de 26 de Abril, que revoga o Decreto-Lei n.º 82/91 de 19 de Fevereiro.",
        ],
        list: [],
      },
      {
        id: 3,
        date: "",
        year: "1997",
        intro: "Nova Alteração aos Estatutos",
        description: [
          "Entendendo-se que, por repristinação, se mantém em vigor o Decreto-Lei n.º 35781 de 5 de Agosto de 1946, foi publicado o Decreto-Lei n.º 193/97, de 29 de Julho, que aprovou novas alterações aos Estatutos, adaptando-os às realidades atuais, constituindo a força da mudança para a revitalização da Caixa.",
        ],
        list: [
          "Aumentou para os 61 anos a idade limite de inscrição, dado que, anteriormente, já era permitido ao sócio elevar o subsídio até esta mesma idade.",
          "Abriu um leque de novas perspetivas de âmbito social, contemplado no Artigo 1º A, deste diploma, nomeadamente a criação de novas modalidades com vista ao aumento dos benefícios ao sócio e à sua família.",
          "Atualizaram-se as linhas de orientação, tendo em vista a normalidade da atividade dos Órgãos Sociais da Instituição.",
        ],
      },
      {
        id: 2,
        date: "13 dez 2001",
        year: "2001",
        intro: "Regulamento dos Novos Benefícios Sociais",
        description: [
          "Com base na alteração estatutária de 1997 foi homologado, em 13/12/2001, o Regulamento de Benefícios aprovado em Assembleia Geral Extraordinária de 23 de Novembro de 2001.",
          "Este Regulamento consubstancia o alargamento das modalidades de benefícios sociais e acrescenta ao antigo Subsídio por Morte as modalidades de Vida Inteira, Reforma, Maioridade, Prosseguimento de Estudos, Lazer e Pensões de Reforma. Define, também, a concessão de empréstimo sobre Reservas Matemáticas ou quotas pagas, a partir de três anos da constituição da respetiva Modalidade.",
        ],
        list: [],
      },
      {
        id: 1,
        date: "28 nov 2008",
        year: "2008",
        intro: "Alteração ao Regulamento dos Benefícios Sociais",
        description: [
          "Em Assembleia Geral Extraordinária de 28/11/2008 foi aprovado o novo Regulamento de Benefícios, que foi homologado por despacho Ministerial de 22/12/2008.",
          "Este Regulamento introduziu novas modalidades, em benefício do sócio e da família, que se referem: Capitais Diferidos com Opção; Capital Repartido e Capital Duplo.",
          "Foi desativada a modalidade de Pensões de Reforma e efetuados alguns ajustes de pormenor.",
          "Este Regulamento mantém-se em vigor.",
        ],
        list: [],
      },
    ],
  },
];

// **********************************************************************
// PAGE Estatutos
export const estatutosPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "CPME em detalhe:",
            descriptionText: "aceda aos Estatutos",
            logo: "/assets/images/globals/logoblue.svg",
            background: "/assets/images/estatutos/bg-estatutos-hero.webp",
          },
        ],
      },
    ],
    sectionDocs: [
      {
        heading: "Estatutos da Caixa de Previdência do Ministério da Educação",
        descriptionText:
          "Diário da República – I Série A Nº 173 de 29-7-1997 (Página 3873 e seguintes)",
        doc: "/assets/docs/estatutos/Estatutos_CPME_1997.pdf",
      },
    ],
  },
];

// **********************************************************************
// PAGE Orgaos Sociais
export const orgaosSociaisPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "Compromisso e transparência na gestão",
            descriptionText: "ao serviço dos nossos associados",
            logo: "/assets/images/globals/logoblue.svg",
            background:
              "/assets/images/orgaos-sociais/bg-orgaos-sociais.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "Os Órgãos Sociais da Caixa de Previdência do Ministério da Educação (CPME) são responsáveis pela gestão e orientação da instituição, assegurando o cumprimento da sua missão de apoio e proteção social aos seus associados.",
        descriptionText:
          "Composta por sócios dedicados, a estrutura dirige-se à promoção do bem-estar dos profissionais do ensino, garantindo uma administração transparente e eficiente.",
        image: "/assets/images/orgaos-sociais/orgaos-sociais.webp",
      },
    ],
    orgaos: [
      {
        titulo: "Mesa da Assembleia Geral",
        estrutura: {
          cabecalho: [
            "Presidente da Mesa",
            "Secretários Efetivos",
            "Secretários Suplentes",
          ],
          linhas: [
            {
              celulas: [
                {
                  nome: "Dr. Raúl Capaz Coelho",
                  cargo: "Secretário-Geral da Educação e Ciência",
                },
                [
                  {
                    nome: "Albertina Olimpia Pereira Mateus",
                    numeroSocio: "Sócia nº 26 582",
                  },
                  {
                    nome: "António Manuel Dias Farinha",
                    numeroSocio: "Sócio nº 22 605",
                  },
                ],
                [
                  {
                    nome: "Fernanda Margarida Coutinho Lopes Cabral",
                    numeroSocio: "Sócia nº 32 125",
                  },
                ],
              ],
            },
          ],
        },
      },
      {
        titulo: "Conselho de Administração",
        estrutura: {
          cabecalho: ["Presidente", "Efetivo", "Suplentes"],
          linhas: [
            {
              celulas: [
                [
                  {
                    nome: "Cristina Maria Carapeto Pereira",
                    cargo: "",
                    numeroSocio: "Sócia nº 31 190",
                  },
                  {
                    nome: "Luís Manuel Guerra Silva Rosa",
                    cargo: "Vice-Presidente",
                    numeroSocio: "Sócio nº 26 018",
                  },
                ],
                [
                  {
                    nome: "Administrador-Delegado - Emídio José Simões Rodrigues",
                    numeroSocio: "Sócio nº 31 373",
                  },
                  {
                    nome: "Administrador-Delegado Substituto - José Alberto Alves Sousa",
                    numeroSocio: "Sócio nº 28 411",
                  },
                  {
                    nome: "Vogal Secretário - Libânia Madalena Mateus Morais Mamede",
                    numeroSocio: "Sócia nº 20 258",
                  },
                ],
                [
                  {
                    nome: "Maria de Fátima Lencastre Silva",
                    numeroSocio: "Sócia nº 24 414",
                  },
                  {
                    nome: "Olinda Maria Silva Ramos",
                    numeroSocio: "Sócia nº 31 486",
                  },
                ],
              ],
            },
          ],
        },
      },
      {
        titulo: "Conselho Fiscal",
        estrutura: {
          cabecalho: ["Presidente", "Efetivos", "Suplentes"],
          linhas: [
            {
              celulas: [
                {
                  nome: "Ana Maria Benavente Silva Nuno",
                },
                [
                  {
                    nome: "Vogal - Daniel Marinho Soares Oliveira",
                    numeroSocio: "Sócio nº 25 492",
                  },
                  {
                    nome: "Henrique Alberto de Moura Portugal Sobral",
                    numeroSocio: "Sócio nº 30 234",
                  },
                  {
                    nome: "Vogal - Victor Manuel Simas",
                    numeroSocio: "Sócio nº 31 367",
                  },
                ],
                [
                  {
                    nome: "Jorge Carvalho Arroteia",
                    numeroSocio: "Sócio nº 25 249",
                  },
                ],
              ],
            },
          ],
        },
      },
    ],
  },
];

// **********************************************************************
// PAGE Orgaograma
export const organogramaPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "Organograma",
            descriptionText: "",
            logo: "/assets/images/globals/logoblue.svg",
            background: "/assets/images/organograma/bg-organograma.webp",
          },
        ],
      },
    ],
    sectionOrganograma: [
      {
        image: "/assets/images/organograma/organograma.webp",
      },
    ],
  },
];

// **********************************************************************
// PAGE Relatorio e contas
export const relatoriosContasPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "A gestão em detalhe:",
            descriptionText: "aceda aos Relatórios e Contas",
            logo: "/assets/images/globals/logoblue.svg",
            background:
              "/assets/images/relatorios-contas/bg-relatorios-contas.webp",
          },
        ],
      },
    ],
    sectionTitle: "Relatórios e Contas CPME",
    sectionRelatorios: [
      {
        id: 1,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2024",
        doc: "/assets/docs/relatorios-contas/Relatorio_2024.pdf",
      },
      {
        id: 2,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2023",
        doc: "/assets/docs/relatorios-contas/Relatorio_2023.pdf",
      },
      {
        id: 3,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2022",
        doc: "/assets/docs/relatorios-contas/Relatorio_2022.pdf",
      },
      {
        id: 4,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2021",
        doc: "/assets/docs/relatorios-contas/Relatorio_2021.pdf",
      },
      {
        id: 5,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2020",
        doc: "/assets/docs/relatorios-contas/Relatorio_2020.pdf",
      },
      {
        id: 6,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2019",
        doc: "/assets/docs/relatorios-contas/Relatorio_2019.pdf",
      },
      {
        id: 7,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2018",
        doc: "/assets/docs/relatorios-contas/Relatorio_2018.pdf",
      },
      {
        id: 8,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2017",
        doc: "/assets/docs/relatorios-contas/Relatorio_2017.pdf",
      },
      {
        id: 9,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2016",
        doc: "/assets/docs/relatorios-contas/Relatorio_2016.pdf",
      },
      {
        id: 10,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2015",
        doc: "/assets/docs/relatorios-contas/Relatorio_2015.pdf",
      },
      {
        id: 11,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2014",
        doc: "/assets/docs/relatorios-contas/Relatorio_2014.pdf",
      },
      {
        id: 12,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2013",
        doc: "/assets/docs/relatorios-contas/Relatorio_2013.pdf",
      },
      {
        id: 13,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2012",
        doc: "/assets/docs/relatorios-contas/Relatorio_2012.pdf",
      },
      {
        id: 14,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2011",
        doc: "/assets/docs/relatorios-contas/Relatorio_2011.pdf",
      },
      {
        id: 15,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2010",
        doc: "/assets/docs/relatorios-contas/Relatorio_2010.pdf",
      },
      {
        id: 16,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2009",
        doc: "/assets/docs/relatorios-contas/Relatorio_2009.pdf",
      },
      {
        id: 17,
        entity: "CPME",
        title: "Relatório e Contas",
        year: "2008",
        doc: "/assets/docs/relatorios-contas/Relatorio_2008.pdf",
      },
    ],
  },
];

// **********************************************************************
// PAGE Patrimonio
export const patrimonioPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "Ao investir no futuro,",
            descriptionText:
              "protegemos o presente dos profissionais do ensino",
            logo: "/assets/images/patrimonio/key-darkblue.webp",
            background:
              "/assets/images/patrimonio/bg-patrimonio-hero.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "A CPME disponibiliza soluções de arrendamento em zonas privilegiadas da capital, proporcionando maior economia, comodidade e rapidez nas deslocações diárias.",
        descriptionText:
          "Ao optar pelo arrendamento através da CPME, evita-se o endividamento ao longo de toda a vida ativa, bem como os encargos inesperados com obras ou manutenções, promovendo uma melhor qualidade de vida e maior estabilidade. Para além disso, o arrendamento através da CPME proporciona ainda rendas de valor não especulativo.",
        image: "/assets/images/patrimonio/patrimonio-img.webp",
      },
    ],

    sectionTitle: "Relatórios e Contas CPME",
    propertiesPatrimonio: [
      {
        id: 1,
        type: "patrimonio",
        cod: "P01",
        segment: "Habitacional",
        title: "Rua Nova da Trindade, 1 / Largo do Chiado, 16",
        address: "Rua Nova da Trindade, 1",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P01.webp",
        lat: 38.71093174794789,
        lng: -9.1424339,
      },
      {
        id: 2,
        type: "patrimonio",
        cod: "P02",
        segment: "Habitacional",
        title: "Rua dos Correeiros, 8/20",
        address: "Rua dos Correeiros, 8",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P02.webp",
        lat: 38.71001190905503,
        lng: -9.136841615339515,
      },
      {
        id: 3,
        type: "patrimonio",
        cod: "P03",
        segment: "Comercial",
        title: "Praça D. Pedro IV, 45/50 / Rua 1º de Dezembro, 66/76",
        address: "Praça D. Pedro IV, 45",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P03.webp",
        lat: 38.71390162958481,
        lng: -9.140217886504637,
      },
      {
        id: 4,
        type: "patrimonio",
        cod: "P04",
        segment: "Comercial",
        title: "Rua D. Pedro V, 53/57 / Rua da Rosa, 254/266",
        address: "Rua D. Pedro V, 53",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P04.webp",
        lat: 38.71560586889042,
        lng: -9.14608777116512,
      },
      {
        id: 5,
        type: "patrimonio",
        cod: "P05",
        segment: "Comercial",
        title: "Av. da Liberdade, 1/7 / Rua da Glória, 2-A",
        address: "Av. da Liberdade, 1",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P05.webp",
        lat: 38.71639440960002,
        lng: -9.142889744174397,
      },
      {
        id: 6,
        type: "patrimonio",
        cod: "P06",
        segment: "Habitacional",
        title: "Av. Duque de Loulé, 93/95-B",
        address: "Av. Duque de Loulé, 93",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P06.webp",
        lat: 38.726240695583776,
        lng: -9.147507328834878,
      },
      {
        id: 7,
        type: "patrimonio",
        cod: "P07",
        segment: "Habitacional",
        title: "Rua 1º de Dezembro, 55/65 / Calçada do Carmo, 13/17",
        address: "Rua 1º de Dezembro, 55",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P07.webp",
        lat: 38.71354921643104,
        lng: -9.140124842330243,
      },
      {
        id: 8,
        type: "patrimonio",
        cod: "P08",
        segment: "Habitacional",
        title: "Rua de Macau, 12/12-A",
        address: "Rua de Macau, 12",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P08.webp",
        lat: 38.724739338411524,
        lng: -9.131963628834878,
      },
      {
        id: 9,
        type: "patrimonio",
        cod: "P09",
        segment: "Habitacional",
        title: "Rua do Forno do Tijolo, 10/10-A",
        address: "Rua do Forno do Tijolo, 10",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P09.webp",
        lat: 38.72418856911983,
        lng: -9.132014857669757,
      },
      {
        id: 10,
        type: "patrimonio",
        cod: "P10",
        segment: "Habitacional",
        title: "Rua Sampaio Pina, 2/14 / Rua Castilho, 175/183",
        address: "Rua Sampaio Pina, 2",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P10.webp",
        lat: 38.72796471196228,
        lng: -9.156326286504639,
      },
      {
        id: 11,
        type: "patrimonio",
        cod: "P11",
        segment: "Habitacional",
        title: "Av. Almirante Reis, 250/250-A",
        address: "Av. Almirante Reis, 250",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P11.webp",
        lat: 38.74059467287987,
        lng: -9.133376086504637,
      },
      {
        id: 12,
        type: "patrimonio",
        cod: "P12",
        segment: "Habitacional",
        title: "Rua Coelho da Rocha, 122",
        address: "Rua Coelho da Rocha, 122",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P12.webp",
        lat: 38.716727351144705,
        lng: -9.168699915339518,
      },
      {
        id: 13,
        type: "patrimonio",
        cod: "P13",
        segment: "Habitacional",
        title: "Rua Augusto José Vieira, 26",
        address: "Rua Augusto José Vieira, 26",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P13.webp",
        lat: 38.72387765096639,
        lng: -9.13066225766976,
      },
      {
        id: 14,
        type: "patrimonio",
        cod: "P14",
        segment: "Habitacional",
        title: "Rua Augusto José Vieira, 28",
        address: "Rua Augusto José Vieira, 28",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P14.webp",
        lat: 38.72386511032944,
        lng: -9.130748067977773,
      },
      {
        id: 15,
        type: "patrimonio",
        cod: "P15",
        segment: "Habitacional",
        title: "Av. Defensores de Chaves, 36",
        address: "Av. Defensores de Chaves, 36",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P15.webp",
        lat: 38.73857384468208,
        lng: -9.144004144174398,
      },
      {
        id: 16,
        type: "patrimonio",
        cod: "P16",
        segment: "Habitacional",
        title: "Av. de Berna, 27/27-A",
        address: "Av. de Berna, 27",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P16.webp",
        lat: 38.74043644668458,
        lng: -9.149946528834878,
      },
      {
        id: 17,
        type: "patrimonio",
        cod: "P17",
        segment: "Habitacional",
        title: "Rua das Praças, 13-B/13-C",
        address: "Rua das Praças, 13",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P17.webp",
        lat: 38.70964000981716,
        lng: -9.158837942330242,
      },
      {
        id: 18,
        type: "patrimonio",
        cod: "P18",
        segment: "Habitacional",
        title: "Av. Almirante Reis, 225/225-B",
        address: "Av. Almirante Reis, 225",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P18.webp",
        lat: 38.73879706732998,
        lng: -9.133921686504639,
      },
      {
        id: 19,
        type: "patrimonio",
        cod: "P19",
        segment: "Habitacional",
        title: "Av. Visconde Valmor, 75/75-B",
        address: "Av. Visconde Valmor, 75",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P19.webp",
        lat: 38.73763846475031,
        lng: -9.150699286504636,
      },
      {
        id: 20,
        type: "patrimonio",
        cod: "P20",
        segment: "Comercial",
        title: "Travessa do Sequeiro, 4/4-B",
        address: "Travessa do Sequeiro, 4",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P20.webp",
        lat: 38.710440155356956,
        lng: -9.1456778,
      },
      {
        id: 21,
        type: "patrimonio",
        cod: "P21",
        segment: "Habitacional",
        title: "Rua Capitão Renato Baptista, 27/27-A",
        address: "Rua Capitão Renato Baptista, 27",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P21.webp",
        lat: 38.72151303853266,
        lng: -9.136901142330244,
      },
      {
        id: 22,
        type: "patrimonio",
        cod: "P22",
        segment: "Habitacional",
        title: "Calçada Palma de Baixo, 9",
        address: "Calçada Palma de Baixo, 9",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P22.webp",
        lat: 38.74555320398257,
        lng: -9.168761015339516,
      },
      {
        id: 23,
        type: "patrimonio",
        cod: "P23",
        segment: "Habitacional",
        title: "Rua D. João V, 14/14-A",
        address: "Rua D. João V, 14",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P23.webp",
        lat: 38.72061512875053,
        lng: -9.157839042330242,
      },
      {
        id: 24,
        type: "patrimonio",
        cod: "P24",
        segment: "Habitacional",
        title: "Rua Braamcamp Freire, 36/36-A / Rua David Lopes, 14",
        address: "Rua Braamcamp Freire, 36",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P24.webp",
        lat: 38.72747829272437,
        lng: -9.120092928834879,
      },
      {
        id: 25,
        type: "patrimonio",
        cod: "P25",
        segment: "Habitacional",
        title: "Rua Tenente Espanca, 26/26-C",
        address: "Rua Tenente Espanca, 26",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P25.webp",
        lat: 38.73949982261435,
        lng: -9.155139186504638,
      },
      {
        id: 26,
        type: "patrimonio",
        cod: "P26",
        segment: "Habitacional",
        title: "Rua Luís Augusto Palmeirim, 6/6-E",
        address: "Rua Luís Augusto Palmeirim, 6",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P26.webp",
        lat: 38.755741481890816,
        lng: -9.141561428834878,
      },
      {
        id: 27,
        type: "patrimonio",
        cod: "P27",
        segment: "Habitacional",
        title: "Rua José D’Esaguy, 10/10-D",
        address: "Rua José D’Esaguy, 10",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P27.webp",
        lat: 38.75508471907011,
        lng: -9.141851087005602,
      },
      {
        id: 28,
        type: "patrimonio",
        cod: "P29",
        segment: "Comercial",
        title: "Rua Victor Córdon, 8/12",
        address: "Rua Victor Córdon, 8",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P29.webp",
        lat: 38.7083371846382,
        lng: -9.14054557116512,
      },
      {
        id: 29,
        type: "patrimonio",
        cod: "P30",
        segment: "Habitacional",
        title: "Rua D. Estefânia, 195/195-D",
        address: "Rua D. Estefânia, 195",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P30.webp",
        lat: 38.734820389152475,
        lng: -9.14165927116512,
      },
      {
        id: 30,
        type: "patrimonio",
        cod: "P31",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 52/52-A",
        address: "Av. Estados Unidos da América, 52",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P31.webp",
        lat: 38.74969079309487,
        lng: -9.1377487,
      },
      {
        id: 31,
        type: "patrimonio",
        cod: "P32",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 113/113-A",
        address: "Av. Estados Unidos da América, 113",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P32.webp",
        lat: 38.74909254578405,
        lng: -9.1437353694916,
      },
      {
        id: 32,
        type: "patrimonio",
        cod: "P33",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 40/40-A",
        address: "Av. Estados Unidos da América, 40",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P33.webp",
        lat: 38.74990839453959,
        lng: -9.1362309,
      },
      {
        id: 33,
        type: "patrimonio",
        cod: "P34",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 38/38-A",
        address: "Av. Estados Unidos da América, 38",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P34.webp",
        lat: 38.74963429513391,
        lng: -9.136263286504638,
      },
      {
        id: 34,
        type: "patrimonio",
        cod: "P35",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 130 / 130 B",
        address: "Av. Estados Unidos da América, 130",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P35.webp",
        lat: 38.74933756312619,
        lng: -9.146446515339516,
      },
      {
        id: 35,
        type: "patrimonio",
        cod: "P36",
        segment: "Habitacional",
        title: "Av. Estados Unidos da América, 123",
        address: "Av. Estados Unidos da América, 123",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P36.webp",
        lat: 38.748788964380005,
        lng: -9.144844699999998,
      },
      {
        id: 36,
        type: "patrimonio",
        cod: "P37",
        segment: "Habitacional",
        title: "Alameda Santo António dos Capuchos, 4/4-C",
        address: "Alameda Santo António dos Capuchos, 4",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P37.webp",
        lat: 38.722694101192374,
        lng: -9.140958471165122,
      },
      {
        id: 37,
        type: "patrimonio",
        cod: "P38",
        segment: "Comercial",
        title: "Rua Ferreira Lapa 29/29-B / Rua Conde Redondo, 18",
        address: "Rua Ferreira Lapa, 29",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P38.webp",
        lat: 38.7275373430352,
        lng: -9.1442667,
      },
      {
        id: 38,
        type: "patrimonio",
        cod: "P39",
        segment: "Habitacional",
        title:
          "Av. Estados Unidos da América, 63 / Rua Coronel Bento Roma, 18/18-B",
        address: "Av. Estados Unidos da América, 63",
        location: "Lisboa",
        imageUrl: "/assets/images/patrimonio/propriedades/P39.webp",
        lat: 38.748617462475075,
        lng: -9.13813245766976,
      },
    ],
  },
];

// **********************************************************************
// PAGE Contratação Pública
import { contractsCpublica } from "./constants-cpublica";
export const cPublicaPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CPME",
            heading: "Consulte toda a informação",
            descriptionText:
              "relacionada com os processos de contratação pública",
            logo: "/assets/images/globals/logoblue.svg",
            background:
              "/assets/images/contratacao-publica/bg-CPublica.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "Portaria n.º 701-E/2008, de 29 de Julho Relatório de formação do contrato / Relatório de contratação",
        descriptionText:
          "A portaria n.º 701-E/2008, relativa aos blocos de dados que alimentam as bases de dados associadas ao portal da internet dedicado aos contratos públicos, prevê um período de transição até ao dia 31 de Outubro, durante o qual o Relatório de formação do contrato / Relatório de contratação coincide com o anexo III do Código dos Contratos Públicos.",
        heading2:
          "Artigo 127.º do Código dos Contratos Públicos, Publicitação e eficácia do contrato",
        descriptionText2: [
          "1) A celebração de quaisquer contratos na sequência de ajuste direto deve ser publicitada, pela entidade adjudicante, no portal da Internet dedicado aos contratos públicos através de uma ficha conforme modelo constante do anexo III do presente Código e do qual faz parte integrante.",
          "2) A publicitação referida no número anterior é condição de  eficácia do respetivo contrato, independentemente da sua redução ou não a escrito, nomeadamente para efeitos de quaisquer pagamentos.",
        ],
        image: "/assets/images/contratacao-publica/img-CPublica.webp",
      },
    ],
    contracts: contractsCpublica,
  },
];

// **********************************************************************
// PAGE Regulamentos
export const regulamentosContasPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SÓCIOS",
            heading: "Regulamentos",
            descriptionText: "",
            logo: "",
            background:
              "/assets/images/regulamento/bg-regulamentos-hero.webp",
          },
        ],
      },
    ],
    estatutarioTitle: "Regulamento Estatutário",
    sectionRegEstatutario: [
      {
        id: 1,
        title: "Regulamento Estatutário",
        date: "DEZ 2000",
        doc: "/assets/docs/regulamentos/RegulamentoEstatutario.pdf",
      },
    ],
    emprestimosTitle: "Regulamentos Empréstimos",
    sectionRegEmprestimos: [
      {
        id: 2,
        title: "Regulamento Empréstimos Apoio à Família",
        date: "",
        doc: "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Apoio-Familia.pdf",
      },
      {
        id: 3,
        title: "Regulamento Crédito à Habitação",
        date: "",
        doc: "/assets/docs/regulamentos/emprestimos/Regulamento-Credito-Habitacao.pdf",
      },
      {
        id: 4,
        title:
          "Regulamento Empréstimo sobre Reservas Matemáticas e Quotas Pagas",
        date: "",
        doc: "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Reservas-Matematicas-Quotas-Pagas.pdf",
      },
    ],
    segurosTitle: "Regulamentos Seguros",
    sectionRegSeguros: [
      {
        id: 5,
        title: "Regulamento Novos Seguros",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
      },
      {
        id: 6,
        title: "Regulamento Seguro de Prosseguimento de Estudos",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Seguro-de-Prosseguimento-de-Estudos.pdf",
      },
      {
        id: 7,
        title: "Regulamento Seguro de Maioridade",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Seguro-de-Maioridade.pdf",
      },
      {
        id: 8,
        title: "Regulamento Capitais Diferidos com Opção",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Capitais-Diferidos-com-Opcao.pdf",
      },
      {
        id: 9,
        title: "Regulamento Capital Repartido",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Capital-Repartido.pdf",
      },
      {
        id: 10,
        title: "Regulamento Capital Duplo",
        date: "",
        doc: "/assets/docs/regulamentos/seguros/Regulamento_Capital-Duplo.pdf",
      },
    ],
  },
];

// **********************************************************************
// PAGE Editais
export const editalsPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SÓCIOS",
            heading: "Editais",
            descriptionText: "",
            logo: "",
            background: "/assets/images/editais/bg-edital-hero.webp",
          },
        ],
      },
    ],
    editals: [
      {
        id: 1,
        name: "António Luís Coelho Gancho",
        socialNumber: "18542",
        date: new Date(2025, 3, 14),
        editoNumber: "Édito nº 205/2025",
        edito:
          "Em conformidade com o artigo 11.º-A dos Estatutos desta Caixa, na redação que lhe foi dada pelo Decreto-Lei n.º 193/97 de 29/7, se declara que, para habilitação edital ao subsídio de € 2.043,81 constituído por António Luís Coelho Gancho, sócio desta Caixa n.º 18542, falecido em 05/09/2023, correm éditos de trinta dias a contar da data da publicação deste anúncio no “Diário da República” citando as pessoas que se julgarem com direito ao referido subsídio a deduzirem a sua habilitação naquele prazo, a fim de, apreciados os direitos invocados, se decidir sobre o seu pagamento.",
        responsible:
          "25/03/2025 - O Administrador-Delegado, Emídio José Simões Rodrigues.",
      },
    ],
  },
];

// **********************************************************************
// PAGE Acordos
import { AcordosPageContent } from "./types";

export const acordosPageContent: AcordosPageContent[] = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SÓCIOS",
            heading: "Dispomos de acordos vantajosos",
            descriptionText:
              "com diversas instituições, permitindo o acesso a serviços, descontos e condições exclusivas.",
            logo: "/assets/images/acordos/documento-lightgreen.webp",
            background: "/assets/images/acordos/bg-acordos.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "A CPME oferece aos seus associados uma rede de acordos com instituições parceiras, garantindo condições especiais em várias áreas como saúde, educação, lazer e serviços diversos.",
        descriptionText:
          "Estes acordos visam proporcionar vantagens e descontos exclusivos, melhorando a qualidade de vida dos associados e das suas famílias.",
        image: "",
      },
    ],
    infoCard: [
      {
        id: 1,
        icon: "/assets/images/acordos/icon-lightgreen.svg",
        title:
          "Explore as opções disponíveis e usufrua de benefícios pensados para o seu bem-estar.",
      },
    ],
    accords: [
      {
        id: 1,
        imageUrl: "/assets/images/acordos/card-acordo1.webp",
        title: "Apoio Domiciliário",
        size: "lg",
        link: "apoio-domiciliario",
      },
      {
        id: 2,
        imageUrl: "/assets/images/acordos/card-acordo2.webp",
        title: "Lazer",
        size: "md",
        link: "lazer",
      },
      {
        id: 3,
        imageUrl: "/assets/images/acordos/card-acordo3.webp",
        title: "Residências Sénior",
        size: "lg",
        link: "residencias-senior",
      },
      {
        id: 4,
        imageUrl: "/assets/images/acordos/card-acordo4.webp",
        title: "Saúde",
        size: "md",
        link: "saude",
      },
      {
        id: 5,
        imageUrl: "/assets/images/acordos/card-acordo5.webp",
        title: "Outros Acordos",
        size: "lg",
        link: "outros-acordos",
      },
    ],
    infoSection: [
      {
        heading: "Tem uma parceria para nos propor?",
        descriptionText: "Entre em contacto connosco através de:",
        phone: "+351 213 243 810",
        email: "cpme@cpme.pt",
        linkContact: "/contactos/#formContact",
      },
    ],
    contentPages: {
      "apoio-domiciliario": {
        label: "APOIO",
        heading: "Apoio Domiciliário",
        descriptionText: "",
        logo: "/assets/images/acordos/documento-lightgreen.webp",
        background: "/assets/images/acordos/bg-apoioDomiciliario.webp",
        entidades: [
          {
            id: 1,
            entidade: "Cuidado Sublime",
            location: "Coimbra",
            benefits:
              "Desconto de 10% sobre o valor do preçário em vigor, na mensalidade calculada nos Serviços de Apoio Domiciliário. | Desconto de 5% sobre a venda de produtos e ajudas técnicas. | Prestação de Serviço de Apoio Domiciliário limitado ao concelho de Coimbra e concelhos limitrofes.",
            websiteUrl: "https://www.cuidadosublime.pt/",
            coordinates:
              "https://www.google.com/maps?q=Cuidado+Sublime,+Edif%C3%ADcio+Top%C3%A1zio,+Rua+de+Oliven%C3%A7a+n.%C2%BA+11,+5.%C2%BA+andar+-+Escrit%C3%B3rio+505+-+A,+3000+-+306+Coimbra",
            email: "mailto:geral@cuidadosublime.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/cuidado-sublime.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/cuidado-sublime.webp",
          },
          {
            id: 2,
            entidade: "Cuidar & Cuidados",
            location: "Faro",
            benefits:
              "Desconto de 10% sobre os preços ao público (ver tabela em anexo).",
            websiteUrl: "https://cuidarecuidados.pt/p1-homepage-pt",
            coordinates:
              "https://www.google.com/maps/place/Cuidar%26Cuidados+-+Apoio+Domicili%C3%A1rio/@37.0182588,-7.9332411,17z/data=!3m1!4b1!4m6!3m5!1s0xd0553f7000c6341:0x9b2ab2d39a0e6ba2!8m2!3d37.0182588!4d-7.9306662!16s%2Fg%2F11vwwphx7j?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@cuidarecuidados.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/cuidar-cuidados.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/cuidar-cuidados.webp",
          },
          {
            id: 3,
            entidade: "VitaLiving - Apoio Domiciliário",
            location: "Aveiro",
            benefits:
              "Desconto de 40% - Plano de 24 horas. | Desconto de 25% - Planos de 9 a 12 horas. | Desconto de 15% - Planos de 4 a 8 horas. | Desconto de 40% - Plano de Pernoita. Desconto de 30% - Plano de 1 hora. | Estes descontos não são acumuláveis com outras promoções que estejam em vigor.",
            websiteUrl: "https://www.vitaliving.pt/",
            coordinates:
              "https://www.google.com/maps/place/VitaLiving+%7C+Apoio+Domicili%C3%A1rio+Aveiro/@40.646122,-8.6447304,17z/data=!3m1!4b1!4m6!3m5!1s0xd239937476c4c2f:0xf6b6c55bef895a99!8m2!3d40.646122!4d-8.6421555!16s%2Fg%2F11hzmmjdg5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@vitaliving.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/vitaliving.webp",
          },
          {
            id: 4,
            entidade: "Conversas, Cuidados & Carinhos",
            location: "Viseu",
            benefits:
              "Desconto de 10% sobre os pacotes do Serviço de Apoio Domiciliário. ",
            websiteUrl: "https://conversascuidadosecarinhos.pt/",
            coordinates:
              "https://www.google.com/maps/place/Conversas+Cuidados+e+Carinhos/@40.6566509,-7.9239207,17z/data=!3m1!4b1!4m6!3m5!1s0xd2337ae01d2260d:0xb3dac1a55253e2a1!8m2!3d40.6566509!4d-7.9213458!16s%2Fg%2F11df3m1cdf?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:conversas.cuidados.carinhos@gmail.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/conversas-carinhos.webp",
          },
          {
            id: 5,
            entidade: "Fisiolar – Saúde e Apoio Domiciliário",
            location: "Setúbal",
            benefits:
              "Desconto de 10%  nas sessões avulso. | Desconto de 7% por ato de enfermagem sobre o PVP para os colaboradores e familiares em 1º Grau.",
            websiteUrl: "https://fisiolar.pt/",
            coordinates:
              "https://www.google.com/maps/place/Fisiolar+-+Sa%C3%BAde+e+Apoio+Domicili%C3%A1rio/@38.6235775,-9.103932,17z/data=!3m1!4b1!4m6!3m5!1s0xd1949f7ff408247:0xa44dbb958ac3cf11!8m2!3d38.6235775!4d-9.1013571!16s%2Fg%2F12ltd2yc5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:info@fisiolar.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/fisiolar.webp",
          },
          {
            id: 6,
            entidade: "LisboApoio, Lda – Apoio Domiciliário",
            location: "Lisboa",
            benefits:
              "Desconto de 10% em Apoio Domiciliário (10 horas por dia), 5 e 7 dias por semana. | Desconto de 10% em Apoio Domiciliário (12 horas por dia), 5 e 7 dias por semana. | Desconto de 10% em Apoio Domiciliário (24 horas por dia), 5 e 7 dias por semana.",
            websiteUrl: "https://lisboapoio.pt/",
            coordinates:
              "https://www.google.com/maps?q=LisboApoio,+Lda,+Rua+Dr.+Jo%C3%A3o+de+Barros,+N.%C2%BA+7,+R/C+Esq.,+1500-230+Lisboa",
            email: "mailto:geral@lisboapoio.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/lisboapoio.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/lisboapoio.webp",
          },
          {
            id: 7,
            entidade: "Momentos Felizes - Sénior Care",
            location: "Ponta Delgada",
            benefits:
              "Desconto de 5% nos serviços de Residência Assistida, Centro de Dia e de Serviço de Apoio ao Domicílio durante 1 ano.",
            websiteUrl: "https://www.momentosfelizes.pt/",
            coordinates:
              "https://www.google.com/maps/place/Momentos+Felizes+-+S%C3%A9nior+Care/@37.7563811,-25.6733973,17z/data=!3m1!4b1!4m6!3m5!1s0xb432b0d4975a483:0x38afbe3cc9252c1d!8m2!3d37.7563811!4d-25.6708224!16s%2Fg%2F11j09zdydh?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@momentosfelizes.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/momentos-felizes.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/momentos-felizes.webp",
          },
          {
            id: 8,
            entidade: "Empathy - Serviço de Apoio Domiciliário",
            location: "Lisboa",
            benefits:
              "Desconto de 10% aplicável ao Serviço de Apoio Domiciliário base contratado para associados, respetivo agregado familiar e restantes familiares de 1º grau de parentesco e afinidade (não acumulável com outros descontos ou campanhas em vigor).",
            websiteUrl: "https://www.empathysad.pt/",
            coordinates:
              "https://www.google.com/maps?q=Empathy+Servi%C3%A7o+de+Apoio+Domicili%C3%A1rio,+Av.+Ernest+Solvay,+5A+-+16+2625-168+P%C3%B3voa+de+Santa+Iria",
            email: "mailto:geral@empathysad.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/empathy.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/empathy.webp",
          },
          {
            id: 9,
            entidade: "Somos Avós (Triunfos na Ribalta)",
            location: "Braga",
            benefits:
              "Desconto de 10% em todos os serviços de apoio domiciliário (acompanhamento no domicílio). | Serviços de acompanhamento no domicílio em permanência, temporário ou esporádico. | Prestamos serviços de acompanhamento no domicílio em todo o país.",
            websiteUrl: "https://somosavos.site/",
            coordinates:
              "https://www.google.com/maps/place/Somos+Av%C3%B3s/@41.5236594,-8.5685154,17z/data=!3m1!4b1!4m6!3m5!1s0xd24559e42808ff3:0x55a19fd405622011!8m2!3d41.5236594!4d-8.5659405!16s%2Fg%2F11rss3vtb1?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@somosavos.site",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/somos-avos.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/somos-avos.webp",
          },
          {
            id: 10,
            entidade: "Domicare",
            location: "Lisboa",
            benefits:
              "Desconto de 10% em serviços de fisioterapia e enfermagem e 5% em serviços de apoio domiciliário.",
            websiteUrl: "https://www.domicarecuida.pt/site/index.php",
            coordinates:
              "https://www.google.com/maps?q=Domicare,+Rua+Paz+e+Amizade+n%C2%BA+37,+2605-291+Belas,+Sintra",
            email: "mailto:comercial@domicarecuida.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/domicare.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/domicare.webp",
          },
          {
            id: 11,
            entidade: "Casa do Pais",
            location: "Porto",
            benefits: "10% nas tabelas de descontos.",
            websiteUrl: "https://www.casadospais.pt/",
            coordinates:
              "https://www.google.com/maps?q=Casa+dos+Pais,+Avenida+Boavista+3179+4100-137+Porto,+Portugal",
            email: "mailto:geral@casadospais.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/casa-dos-pais.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/casa-dos-pais.webp",
          },
          {
            id: 12,
            entidade: "All Day Care",
            location: "Ponta Delgada",
            benefits:
              "Desconto de 5% em Serviços até 15h Semanais. | Desconto de 10% em Serviços de 16h a 40h Semanais. | 15h em Serviços Superiores a 40h Semanais.",
            websiteUrl: "https://alldaycare.com.pt/",
            coordinates:
              "https://www.google.com/maps?q=All+Day+Care,+Rua+Jo%C3%A3o+de+Melo+Abreu,+11+%E2%80%93+S%C3%A3o+Pedro+%E2%80%93+9500-316+Ponta+Delgada",
            email: "mailto:info@alldaycare.com.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/all-day-care.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/alldaycare.webp",
          },
          {
            id: 13,
            entidade: "Habicuidados",
            location: "Lisboa",
            benefits:
              "Desconto de 15% nos serviços de acompanhamento, enfermagem, fisioterapia e desconto de 10% nos serviços de aluguer e venda de material hospitalar e teleassistência.",
            websiteUrl: "https://habicuidados.pt/",
            coordinates:
              "https://www.google.com/maps?q=Habicuidados+-+Servi%C3%A7os+Domicili%C3%A1rios+a+Idosos,+Av.+E.U.A.,+n%C2%BA+94+%E2%80%93+13+A+%E2%80%93+1700-178+Lisboa",
            email: "mailto:isboa@habicuidados.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/habicuidados.webp",
          },
          {
            id: 14,
            entidade: "Conforto no Futuro",
            location: "Braga",
            benefits:
              "Desconto em todos os serviços, de acordo com a tabela (ver tabela em anexo).",
            websiteUrl: "https://confortonofuturo.pt/",
            coordinates:
              "https://www.google.com/maps?q=Conforto+no+Futuro,+Praceta+Pedro+da+Rocha,+26,+4715-294+Braga",
            email: "mailto:geral@confortonofuturo.pt",
            pdfDocument:
              "/assets/docs/acordos/apoio-domiciliario/conforto-futuro.pdf",
            imageUrl:
              "/assets/images/acordos/apoio-domiciliario/conforto-futuro.webp",
          },
        ],
      },
      lazer: {
        label: "SÓCIOS",
        heading: "Acordos na área de Lazer",
        descriptionText: "Parcerias com hotéis, termas e atividades de lazer",
        logo: "/assets/images/acordos/documento-lightgreen.webp",
        background: "/assets/images/acordos/bg-hero-acordo-lazer.webp",
        entidades: [
          {
            id: 1,
            entidade: "Vitoria Stone Hotel",
            location: "Évora",
            benefits: "Desconto de 10% em Alojamento (tarifas reembolsáveis).",
            websiteUrl: "https://www.vitoriastonehotel.com/",
            coordinates:
              "https://www.google.com/maps?q=R.+Diana+de+Lis+5,+7005-413+%C3%89vora",
            email: "mailto:info@vitoriastonehotel.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/vitoria-stone-hotel.webp",
          },
          {
            id: 2,
            entidade: "Vila Galé Hotéis",
            location: "Lisboa",
            benefits:
              "Anuidade gratuita. | Acesso a promoções exclusivas. | Desconto de 10% em Alojamento, Restauração, Serviços, nos Satsanga SPAs & Wellness. | Early check-in a partir das 11 horas e Late check-out até às 15 horas (mediante disponibilidade).",
            websiteUrl: "https://www.vilagale.com/",
            coordinates:
              "https://www.google.com/maps?q=Vila+Gal%C3%A9+Hot%C3%A9is,+Edf.Campo+Grande,28-11%C2%BA,1700-093+Lisboa",
            email: "mailto:vilagale@vilagale.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/vila-gale.webp",
          },
          {
            id: 3,
            entidade: "Vidago Palace Hotel",
            location: "Vila Real",
            benefits:
              "Desconto de 15% sobre a melhor tarifa de balcão para estadias todo o ano. | Desconto de 15% em Tratamentos de Spa marcados antes do Chec-In (exclui tratamentos Termais). | Desconto de 10% em Tours guiados. | Desconto de 50% na compra de aula de Golf.",
            websiteUrl: "https://vidagopalace.com/",
            coordinates:
              "https://www.google.com/maps?q=Vidago+Palace+Hotel,+Parque+de+Vidago,+Apartado+16,+5425-307+Vidago",
            email: "mailto:reservations@vidagopalace.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/vidago-palace.webp",
          },
          {
            id: 4,
            entidade: "Viagens Abreu",
            location: "Porto",
            benefits:
              "Desconto de 5% sobre o preço base de programação turística Abreu e Terceiros, e pacotes de serviços combinados. | Estes descontos podem ser extensíveis aos familiares diretos, desde que viajem em conjunto. | Não são aplicados descontos em bilhetes avulsos, rent-a-car, comboio, autocarro, taxas e suplementos.",
            websiteUrl: "https://www.abreu.pt/",
            coordinates:
              "https://www.google.com/maps/place/Ag%C3%AAncia+Abreu+-+Porto+(Baixa)/@41.1510003,-8.613527,17z/data=!3m1!4b1!4m6!3m5!1s0xd2464fc9c1443b7:0x5b1c177231f99890!8m2!3d41.1510003!4d-8.6109521!16s%2Fg%2F11d_vdm9p4?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:miguel.barbosa@abreu.pt",
            pdfDocument: "/assets/docs/acordos/lazer/viagens-abreu.pdf",
            imageUrl: "/assets/images/acordos/lazer/viagens-abreu.webp",
          },
          {
            id: 5,
            entidade: "TOPSPA Collection",
            location: "Lisboa",
            benefits:
              "Desconto de 15% em Massagens e Rituais Exclusivos. | Desconto de 10% nos restantes serviços SPA (exceto toques finais). | Desconto de 10% na compra de Vouchers Oferta (exceto promoções em vigor). | Usufruto das instalações do SPA* (sauna, piscina, banho turco, entre outros) de forma gratuita mediante realização de um serviço. | A TOPSPA Collection conta com um portefólio de spas internacionalmente premiados, de norte a sul do país, situados em hotéis premium. Ver localização dos hotéis e spas no ficheiro em anexo.",
            websiteUrl: "https://www.topspa.pt/pt",
            coordinates:
              "https://www.google.com/maps?q=BluSpa+Jupiter+Lisboa,+Av.+da+Rep%C3%BAblica+46,+1050-195+Lisboa",
            email: "mailto:geral@topspa.pt",
            pdfDocument: "/assets/docs/acordos/lazer/topspa.pdf",
            imageUrl: "/assets/images/acordos/lazer/topspa.webp",
          },
          {
            id: 6,
            entidade: "The Noble House - Boutique Hotel",
            location: "Évora",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Não válido para épocas festivas, congressos e eventos.",
            websiteUrl: "https://thenoblehouse.pt/",
            coordinates:
              "https://www.google.com/maps?q=The+Noble+House,+Rua+da+Freiria+de+Baixo,+16++7000-898+%C3%89vora",
            email: "mailto:noblehouse@unlockhotels.com",
            pdfDocument: "/assets/docs/acordos/lazer/noble-house.pdf",
            imageUrl: "/assets/images/acordos/lazer/noble-house.webp",
          },
          {
            id: 7,
            entidade: "Termas São Pedro do Sul",
            location: "Viseu",
            benefits:
              "Desconto de 20% entre 1 de dezembro e 28 de fevereiro, em todas as Curas Termais. | Desconto de 5% entre 1 de março e 30 de novembro, em todas as Curas Termais. | Não abrangem os Serviços de Fisioterapia, nem os Serviços de Bem-estar.",
            websiteUrl: "https://termas-spsul.com/",
            coordinates:
              "https://www.google.com/maps?q=Termas+S%C3%A3o+Pedro+do+Sul,+Pra%C3%A7a+Dr.+Ant%C3%B3nio+Jos%C3%A9+de+Almeida,+3660-692+V%C3%A1rzea",
            email: "mailto:geral@termas-spsul.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/termas-sao-pedro.webp",
          },
          {
            id: 8,
            entidade: "Teatro Politeama",
            location: "Lisboa",
            benefits:
              "Desconto de 10% (sábados e domingos) no espetáculo 'A BELA E O MONSTRO'. | Desconto de 15% (quartas e quintas-feiras) e 10% (sextas e sábados) no espetáculo 'FÁTIMA – ÓPERA ROCK'. | Efetuar reserva pelos telefones: 213 405 700 / 964 409 036.",
            websiteUrl: "https://filipelaferia.pt/",
            coordinates:
              "https://www.google.com/maps?q=Teatro+Politeama,+Rua+das+Portas+de+Santo+Ant%C3%A3o,+N%C2%BA109,+1150-266+LISBOA",
            email: "mailto:comunicacao@filipelaferia.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/teatro-politeama.webp",
          },
          {
            id: 9,
            entidade: "Taipas Turitermas",
            location: "Braga",
            benefits:
              "Desconto de 15% em todos os programas de bem-estar (exceto circuitos termais).",
            websiteUrl: "https://taipastermal.com/",
            coordinates:
              "https://www.google.com/maps?q=Taipas+Turitermas,+Largo+das+Termas,+4805-079+Caldas+das+Taipas",
            email: "mailto:geral@taipastermal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/taipas-termal.webp",
          },
          {
            id: 10,
            entidade: "Solinca Classic",
            location: "Setúbal",
            benefits:
              "Oferta da joia de inscrição. | Valor: €12,49/semana (Horário Peak). | Valor: 10,49€/semana (Horário Off-Peak). | Inclui acesso a sala de cardio/musculação, aulas de grupo, piscina, jacuzzi, sauna e banho turco. | Acesso a todos os Solinca Classic em Portugal. | 15 consultas de Nutrição por cada 52 semanas.",
            websiteUrl: "https://www.solinca.pt/",
            coordinates:
              "https://www.google.com/maps?q=Solinca+Classic,+R.+Marcos+de+Assun%C3%A7%C3%A3o+8,++2805-290+Almada",
            email: "mailto:almadaclassic@solinca.pt",
            pdfDocument: "/assets/docs/acordos/lazer/solinca.pdf",
            imageUrl: "/assets/images/acordos/lazer/solinca.webp",
          },
          {
            id: 11,
            entidade: "Solar dos Araújo Coutinho – Casa dos Cavaleiros",
            location: "Viseu",
            benefits:
              "Desconto de 10% em estadias de uma noite. | Desconto de 20% em estadias de duas ou mais noites. | Unidade de Turismo de Habitação num Solar medieval do século XIII.",
            websiteUrl: "https://www.facebook.com/solarcasadoscavaleiros/",
            coordinates:
              "https://www.google.com/maps?q=Solar+dos+Ara%C3%BAjo+Coutinho+%E2%80%93+Casa+dos+Cavaleiros,+Turismo+de+Habita%C3%A7%C3%A3o,+Largo+da+Pra%C3%A7a,+n%C2%BA+12+-+Vila+da+Ponte+-+Sernancelhe",
            email: "mailto:casadoscavaleiros.th@gmail.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/casa-cavaleiros.webp",
          },
          {
            id: 12,
            entidade: "Sobreiras Alentejo Country Hotel - by Unlock Hotels",
            location: "Setúbal",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Não válido para épocas festivas, congressos e eventos.",
            websiteUrl: "https://sobreiras.pt/",
            coordinates:
              "https://www.google.com/maps?q=Sobreiras+Alentejo+Country+Hotel,+Caixa+Postal+3143,+Mosqueir%C3%B5es++7570-336+Gr%C3%A2ndola",
            email: "mailto:info@sobreiras.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/sobreiras.webp",
          },
          {
            id: 13,
            entidade: "Rosegarden House - by Unlock Boutique Hotels",
            location: "Lisboa",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Não válido para épocas festivas, congressos e eventos.",
            websiteUrl: "https://rosegarden.house/",
            coordinates:
              "https://www.google.com/maps?q=Rosegarden+House,+Largo+do+Adro,+n+12+a+14++2710-487+Sintra",
            email: "mailto:hotel.rosegarden@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/rosegarden.webp",
          },
          {
            id: 14,
            entidade: "Pedras Salgadas Spa & Nature Park",
            location: "Vila Real",
            benefits:
              "Desconto de 15% sobre a melhor tarifa de balcão. | Desconto de 15% em Tratamentos de Spa. | Desconto de 10% em Tours guiados. | Desconto de 50% na compra de aula de Golf.",
            websiteUrl: "https://www.pedrassalgadaspark.com/",
            coordinates:
              "https://www.google.com/maps?q=Pedras+Salgadas+Spa+&+Nature+Park,+Parque+de+Pedras+Salgadas,+5450-140+Bornes+de+Aguiar",
            email: "mailto:reservations@pedrassalgadaspark.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/pedras-salgadas.webp",
          },
          {
            id: 15,
            entidade: "Parque Cerdeira | Gerês",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre os preços de balcão nos serviços de Alojamento e de Animação turística, sem prejuízo de outros mais vantajosos que se verifiquem no momento da estadia.",
            websiteUrl: "https://parquecerdeira.com/",
            coordinates:
              "https://www.google.com/maps?q=Parque+Cerdeira,+Rua+de+Cerdeira,+400,+Campo+do+Ger%C3%AAs,+4840-030+Terras+de+Bouro",
            email: "mailto:info@parquecerdeira.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/cerdeira.webp",
          },
          {
            id: 16,
            entidade: "Palácio dos Condes de Anadia",
            location: "Viseu",
            benefits:
              "Descontos associados à Visita ao Palácio Anadia, aos Jardins do Palácio de Anadia e à Prova de Vinhos (ver tabela de descontos em anexo).",
            websiteUrl: "https://palacioanadiamangualde.com/",
            coordinates:
              "https://www.google.com/maps?q=Pal%C3%A1cio+dos+Condes+de+Anadia,+Largo+Conde+de+Anadia+3530-129+Mangualde",
            email: "mailto:info@palacioanadiamangualde.com",
            pdfDocument: "/assets/docs/acordos/lazer/palacio-anadia.pdf",
            imageUrl: "/assets/images/acordos/lazer/palacio-anadia.webp",
          },
          {
            id: 17,
            entidade: "Palacete Chafariz D'El Rei - by Unlock Boutique Hotels",
            location: "Lisboa",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Não válido para épocas festivas, congressos e eventos.",
            websiteUrl: "https://chafarizdelrei.com/",
            coordinates:
              "https://www.google.com/maps/place/Palacete+Chafariz+D'el+Rei,+Lisboa+-+by+Unlock+Boutique+Hotels/@38.7099431,-9.1321009,17z/data=!4m9!3m8!1s0xd193476a5c787fd:0xa3707e1e705ff900!5m2!4m1!1i2!8m2!3d38.7099431!4d-9.129526!16s%2Fg%2F1thtfdl0?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
            email: "mailto:hotel.chafarizdelrei@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/chafariz-rei.webp",
          },
          {
            id: 18,
            entidade: "Moxy Lisboa Oriente",
            location: "Lisboa",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 4,00/Hóspede/noite aplicável no município de Lisboa (nas primeiras 7 noites de estadia). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 210 488 355",
            websiteUrl:
              "https://www.hotihoteis.com/pt-pt/hotel/moxy-lisboa-oriente/",
            coordinates:
              "https://www.google.com/maps?q=Moxy+Lisboa+Oriente,+Avenida+Aquilino+Ribeiro+Machado,+10,+1800-399+-+Parque+das+Na%C3%A7%C3%B5es",
            email: "mailto:res.mxo@moxylisboaoriente.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/moxy-hotihotels.webp",
          },
          {
            id: 19,
            entidade: "Monverde Wine Experience Hotel",
            location: "Porto",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Desconto de 5% em SPA durante o período de alojamento.",
            websiteUrl: "https://www.monverde.pt/",
            coordinates:
              "https://www.google.com/maps?q=Monverde+Wine+Experience+Hotel,+Quinta+de+Sanguinhedo+166,+Castanheiro+Redondo,+4600-761+Tel%C3%B5es,+Amarante",
            email: "mailto:reservas@monverde.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/monverde.webp",
          },
          {
            id: 20,
            entidade: "MAAT - Museu de Arte, Arquitetura e Tecnologia",
            location: "Lisboa",
            benefits:
              "Desconto de 15% na aquisição do bilhete de entrada no museu.",
            websiteUrl: "https://www.maat.pt/",
            coordinates:
              "https://www.google.com/maps/place/MAAT:+Museu+de+Arte,+Arquitetura+e+Tecnologia/@38.6958561,-9.1958869,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecb4dd3e5f491:0xcb13504c19595bc4!8m2!3d38.6958561!4d-9.193312!16s%2Fg%2F11cs3vkn8z?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
            email: "mailto:maat@edp.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/maat.webp",
          },
          {
            id: 21,
            entidade: "Jardins do Porto - Unlock Boutique Hotel",
            location: "Porto",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Não válido para épocas festivas, congressos e eventos.",
            websiteUrl: "https://jardinsdoporto.pt/",
            coordinates:
              "https://www.google.com/maps?q=Jardins+do+Porto+-+Unlock+Boutique+Hotel,+Rua+do+Almada,+613,++4050-039+Porto",
            email: "mailto:jardinsdoporto@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/jardins-porto.webp",
          },
          {
            id: 22,
            entidade: "Hotel Tryp Porto Expo",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Matosinhos (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 229 990 015",
            websiteUrl: "https://www.trypportoexpo.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Porto+Expo,+Rotunda+da+Exponor+-+Le%C3%A7a+da+Palmeira,+4450-801+Porto",
            email: "mailto:res.tpe@trypportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/tryp-porto-expo.webp",
          },
          {
            id: 23,
            entidade: "Hotel Tryp Porto Centro",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Matosinhos (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 229 990 015",
            websiteUrl: "https://www.trypportocentro.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Porto+Centro,",
            email: "mailto:res.tpc@trypportugal.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/tryp-porto-centro.webp",
          },
          {
            id: 24,
            entidade: "Hotel Tryp Porto Centro",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Matosinhos (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 229 990 015",
            websiteUrl: "https://www.trypportocentro.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Porto+Centro",
            email: "mailto:res.tpc@trypportugal.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/tryp-porto-centro.webp",
          },
          {
            id: 25,
            entidade: "Hotel Tryp Montijo Parque Hotel",
            location: "Setúbal",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Setúbal (até ao máximo de 5 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 212 326 600",
            websiteUrl: "https://www.trypmontijo.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Montijo+Parque+Hotel,+Av.+Jo%C3%A3o+XXIII+193,+2870-159+Montijo",
            email: "mailto:res.tmp@trypportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/tryp-montijo.webp",
          },
          {
            id: 26,
            entidade: "Hotel Tryp Lisboa Caparica Mar",
            location: "Setúbal",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Setúbal (até ao máximo de 5 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 212 918 905",
            websiteUrl: "https://www.tryplisboacaparica.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Lisboa+Caparica+Mar,+Avenida+General+Humberto+Delgado,+47+2829-506+Costa+da+Caparica",
            email: "mailto:res.tlc@trypportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/tryp-caparica.webp",
          },
          {
            id: 27,
            entidade: "Hotel Tryp Leiria",
            location: "Leiria",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 244 249 900",
            websiteUrl: "https://www.trypleiria.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Tryp+Leiria,+R.+do+Arrabalde+da+Ponte,+2415-520+Leiria",
            email: "mailto:res.tl@trypportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/tryp-leiria.webp",
          },
          {
            id: 28,
            entidade: "Hotel Star inn Porto",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 3,00/Hóspede/noite aplicável no município do Porto (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 228 347 015",
            websiteUrl: "https://www.hotelstarinn.com/porto/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Star+inn+Porto,+R.+Senhora+do+Porto,+930+4250-453+Porto",
            email: "mailto:res.sip@hotelstarinn.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/starinn-porto.webp",
          },
          {
            id: 29,
            entidade: "Hotel Star inn Peniche",
            location: "Leiria",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 1,00/Hóspede/noite aplicável no município de Peniche (até ao máximo de 5 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 262 780 400",
            websiteUrl: "https://www.hotelstarinn.com/peniche/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Star+inn+Peniche,+Av.+da+Praia,+2520-206+Peniche",
            email: "mailto:res.peniche@hotelstarinn.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/starinn-peniche.webp",
          },
          {
            id: 30,
            entidade: "Hotel Star inn Libon Aeroporto",
            location: "Lisboa",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 4,00/Hóspede/noite aplicável no município de Lisboa (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 218 425 715",
            websiteUrl: "https://www.hotelstarinn.com/lisboa/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Star+inn+Lisbon+Aeroporto,+Aeroporto+Internacional+de+Lisboa,+Rua+C,2+1749-125+Lisboa",
            email: "mailto:res.sil@hotelstarinn.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/starinn-lisboa.webp",
          },
          {
            id: 31,
            entidade: "Hotel Meliã Setúbal",
            location: "Setúbal",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município de Setúbal (até ao máximo de 5 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 265 240 405",
            websiteUrl: "https://www.meliasetubal.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Set%C3%BAbal,+Avenida+Alexandre+Herculano,+n%C2%BA+58,+2900-206+Set%C3%BAbal",
            email: "mailto:res.ms@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-setubal.webp",
          },
          {
            id: 32,
            entidade: "Hotel Meliã Ria Hotel & SPA",
            location: "Aveiro",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 234 401 000",
            websiteUrl: "https://www.meliaria.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Ria+Hotel+&+SPA,+Cais+da+Fonte+Nova,+Lote+5,+3810-200+Aveiro",
            email: "mailto:melia.ria@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-aveiro.webp",
          },
          {
            id: 33,
            entidade: "Hotel Meliã Madeira Mare Resort & SPA",
            location: "Funchal",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município do Funchal (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 291 724 140",
            websiteUrl: "https://www.meliamadeira.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Madeira+Mare+Resort+&+SPA,+Rua+Leichlingen,+2-4++9000-003+Funchal",
            email: "mailto:res.hmmm@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-funchal.webp",
          },
          {
            id: 34,
            entidade: "Hotel Meliã Lisboa Oriente",
            location: "Lisboa",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 4,00/Hóspede/noite aplicável no município de Lisboa (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 218 930 013",
            websiteUrl: "https://www.melialisboaoriente.com/",
            coordinates:
              "https://maps.google.com/?q=Hotel%20Meli%C3%A3%20Lisboa%20Oriente,%20Av.%20D.%20Jo%C3%A3o%20II,%20Parque%20das%20Na%C3%A7%C3%B5es,%201990-083%20Lisboa",
            email: "mailto:res.mlo@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-oriente.webp",
          },
          {
            id: 35,
            entidade: "Hotel Meliã Lisboa Aeroporto",
            location: "Lisboa",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 4,00/Hóspede/noite aplicável no município de Lisboa (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 218 425 015",
            websiteUrl: "https://www.melialisboaaeroporto.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Lisboa+Aeroporto,+Aeroporto+Internacional+de+Lisboa,+Rua+C+N%C2%BA2,+1749-125+Lisboa",
            email: "mailto:res.mla@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-aeroporto.webp",
          },
          {
            id: 36,
            entidade: "Hotel Meliã Castelo Branco",
            location: "Castelo Branco",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 272 349 280",
            websiteUrl: "https://www.meliacastelobranco.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Castelo+Branco,+Rua+da+Piscina+s/n,+6000-776,+Castelo+Branco",
            email: "mailto:meliacastelobranco@meliaportugal.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/melia-castelo-branco.webp",
          },
          {
            id: 37,
            entidade: "Hotel Meliã Braga Hotel & SPA",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 1,50/Hóspede/noite aplicável no município de Braga (até ao máximo de 4 noites seguidas entre março e outubro). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 253 144 000",
            websiteUrl: "https://www.meliabraga.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Meli%C3%A3+Braga+Hotel+&+SPA,+Av.+General+Carrilho+da+Silva+Pinto,+n%C2%BA+8,+4715-380+Braga",
            email: "mailto:res.melia.braga@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melia-braga.webp",
          },
          {
            id: 38,
            entidade: "Hotel InnSide Braga Centro",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 1,50/Hóspede/noite aplicável no município de Braga (até ao máximo de 4 noites seguidas entre março e outubro). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 253 200 200",
            websiteUrl: "https://www.innsidebraga.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+InnSide+Braga+Centro,+Av.+Central+107,+4710-310+Braga",
            email: "mailto:res.innside.braga@meliaportugal.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/innside-braga.webp",
          },
          {
            id: 39,
            entidade: "Hotel Golden Residence Madeira",
            location: "Funchal",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 2,00/Hóspede/noite aplicável no município do Funchal (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 291 710 118",
            websiteUrl: "https://www.goldenresidencehotel.com.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+Golden+Residence+Madeira,+Rua+do+Cabrestante+25,+9000-105+Funchal",
            email: "mailto:res.hgrm@hotihoteis.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/residence-madeira.webp",
          },
          {
            id: 40,
            entidade: "Hotel do Templo & SPA (Hotéis do Bom Jesus)",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre tarifas on-line e reserva direta com o hotel. | Nota: Deve mencionar no pedido de reserva (por email) o hotel onde pretende ficar hospedado, a tipologia e as datas pretendidas.",
            websiteUrl:
              "https://www.hoteisbomjesus.pt/hotel-templo-hotel-spa-em-braga/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+do+Templo+&+SPA,+Bom+Jesus+do+Monte,+4715-056+Braga",
            email: "mailto:grupos@hoteisbomjesus.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hoteis-bom-jesus.webp",
          },
          {
            id: 41,
            entidade: "Hotel do Parque (Hotéis do Bom Jesus)",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre tarifas on-line e reserva direta com o hotel. | Nota: Deve mencionar no pedido de reserva (por email) o hotel onde pretende ficar hospedado, a tipologia e as datas pretendidas.",
            websiteUrl:
              "https://www.hoteisbomjesus.pt/hotel-do-parque-em-braga/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+do+Parque,+Bom+Jesus+do+Monte,+4715-056+Braga",
            email: "mailto:grupos@hoteisbomjesus.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hoteis-bom-jesus.webp",
          },
          {
            id: 42,
            entidade: "Hotel do Mar",
            location: "Setúbal",
            benefits: "Desconto de 10%.",
            websiteUrl: "https://www.hoteldomar.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+do+Mar,+Rua+General+Humberto+Delgado,+2970-628+Sesimbra",
            email: "mailto:d.reservas@hoteldomar.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hotel-mar.webp",
          },
          {
            id: 43,
            entidade: "Hotel do Lago (Hotéis do Bom Jesus)",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre tarifas on-line e reserva direta com o hotel. | Nota: Deve mencionar no pedido de reserva (por email) o hotel onde pretende ficar hospedado, a tipologia e as datas pretendidas.",
            websiteUrl: "https://www.hoteisbomjesus.pt/hotel-do-lago-em-braga/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+do+Lago,+Bom+Jesus+do+Monte,+4715-056+Braga",
            email: "mailto:grupos@hoteisbomjesus.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hoteis-bom-jesus.webp",
          },
          {
            id: 44,
            entidade: "Hotel do Elevador (Hotéis do Bom Jesus)",
            location: "Braga",
            benefits:
              "Desconto de 10% sobre tarifas on-line e reserva direta com o hotel. | Nota: Deve mencionar no pedido de reserva (por email) o hotel onde pretende ficar hospedado, a tipologia e as datas pretendidas.",
            websiteUrl:
              "https://www.hoteisbomjesus.pt/hotel-do-elevador-em-braga/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+do+Elevador,+Bom+Jesus+do+Monte,+4715-056+Braga",
            email: "mailto:grupos@hoteisbomjesus.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hoteis-bom-jesus.webp",
          },
          {
            id: 45,
            entidade: "Hotel da Música",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre a melhor tarifa diária presente no site do hotel, tarifa BAR (Best Available Rate). | Preços por quarto standart, por noite com pequeno-almoço incluído. | Reservas on request. Acesso gratuito à internet (sistema Wi-Fi). | Taxa em vigor: € 3,00/Hóspede/noite aplicável no município do Porto (até ao máximo de 7 noites seguidas). | Taxa municipal não incluída nos preços apresentados e sujeita a alterações pela entidade competente. | As reservas terão de ser realizadas diretamente com o hotel mencionando o número de Associado e o Acordo/Parceria CPME/Hoti Hotels. | T. (+351) 226 076 005",
            websiteUrl: "https://www.hoteldamusica.com/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+da+M%C3%BAsica,+Mercado+do+Bom+Sucesso+Largo+Ferreira+Lapa,+21+a+183,+4150-323+Porto",
            email: "mailto:res.hmp@hoteldamusica.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hotel-musica.webp",
          },
          {
            id: 46,
            entidade: "Hotel D. Luís",
            location: "Coimbra",
            benefits:
              "Desconto de 10% sobre as suas tarifas BAR (Best Available Rate).",
            websiteUrl: "https://www.hoteldluis.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hotel+D.+Lu%C3%ADs,+Santa+Clara,+340-091+Coimbra",
            email: "mailto:reservas@hoteldluis.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/hotel-d-luis.webp",
          },
          {
            id: 47,
            entidade:
              "Forrester Essence Douro Hotel - Boutique Hotel Experience",
            location: "Vila Real",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Este desconto não é válido para épocas festivas, congressos e eventos, pontes, feriados ou pacotes promocionais. | Para usufruto dos descontos as reservas deverão ser realizadas no site da Unlock ou no website individual do hotel e deverá ser usado o código promocional: 'CPME_exclusiveUBH'.",
            websiteUrl:
              "https://unlockhotels.com/pt/estadias/forrester-essence-douro-hotel/",
            coordinates:
              "https://www.google.com/maps?q=Forrester+Essence+Douro+Hotel,+Rua+Comendador+Jos%C3%A9+Rufino,+5070-031+Alij%C3%B3",
            email: "mailto:hotel.forrester@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/forrester.webp",
          },
          {
            id: 48,
            entidade: "DiverLanhoso - Atividades Desportivas",
            location: "Braga",
            benefits:
              "Desconto de 10% em atividades DiverLanhoso. | Desconto de 10% em alojamento DiverLanhoso. | Desconto de 10% em Campos de Férias.",
            websiteUrl: "https://www.diverlanhoso.pt/",
            coordinates:
              "https://www.google.com/maps?q=DiverLanhoso,+Lugar+de+Porto+de+Bois,+4830-602+P%C3%B3voa+de+Lanhoso",
            email: "mailto:info@diver.com.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/diver-lanhoso.webp",
          },
          {
            id: 49,
            entidade: "Chaves - Termas & SPA",
            location: "Vila Real",
            benefits:
              "Desconto de 10% nos tratamentos de termalismo teraputico e fisioterapia. Desconto de 5% nos programas e tratamentos complementares de bem-estar termal. São excluídas destes descontos as consultas médicas. Tel: 276 332 445/6 - Fax: 276 332 447 ",
            websiteUrl: "https://termasdechaves.com/",
            coordinates:
              "https://www.google.com/maps?q=Chaves+-+Termas+&+Spa,+Largo+Tito+Fl%C3%A1vio+Vespasiano+n.%C2%BA+1,+5400-534+Chaves",
            email: "mailto:geral.termas@chaves.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/chaves-termas.webp",
          },
          {
            id: 50,
            entidade: "Casa Museu Amália Rodrigues",
            location: "Lisboa",
            benefits:
              "Preço especial de 5,50 € para visitas guiadas à Casa Museu Amália Rodrigues. | (A Casa Museu dispõe de espaços de lazer, em especial um jardim onde as pessoas podem livremente estar. É ainda servida por uma cafetaria. Acontecem sessões de fado e outras atividades ao longo do ano. | Preços sob. consulta.)",
            websiteUrl: "https://amaliarodrigues.pt/pt/casa-museu/",
            coordinates:
              "https://www.google.com/maps?q=Casa+Museu+Am%C3%A1lia+Rodrigues,+Funda%C3%A7%C3%A3o+Am%C3%A1lia+Rodrigues+Rua+de+S%C3%A3o+Bento,+193+1250-219+Lisboa",
            email: "mailto:casamuseu@amaliarodrigues.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/amalia-rodrigues.webp",
          },
          {
            id: 51,
            entidade: "Casa Melo Alvim - Boutique Hotel",
            location: "Viana do Castelo",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Este desconto não é válido para épocas festivas, congressos e eventos, pontes, feriados ou pacotes promocionais. | Para usufruto dos descontos as reservas deverão ser realizadas no site da Unlock ou no website individual do hotel e deverá ser usado o código promocional: 'CPME_exclusiveUBH'.",
            websiteUrl: "https://hotelmeloalvim.com/pt/home",
            coordinates:
              "https://www.google.com/maps?q=Casa+Melo+Alvim+-+Boutique+Hotel,+Av.+Conde+Da+Carreira,+28+4900-343+-+Viana+do+Castelo",
            email: "mailto:hotel.meloalvim@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/melo-alvim.webp",
          },
          {
            id: 52,
            entidade: "Casa das Senhoras Rainhas - Boutique Hotel",
            location: "Leiria",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Este desconto não é válido para épocas festivas, congressos e eventos, pontes, feriados ou pacotes promocionais. | Para usufruto dos descontos as reservas deverão ser realizadas no site da Unlock ou no website individual do hotel e deverá ser usado o código promocional:  'CPME_exclusiveUBH' ",
            websiteUrl: "https://senhorasrainhasobidos.com/",
            coordinates:
              "https://www.google.com/maps?q=Casa+das+Senhoras+Rainhas,+Rua+do+Padre+Nunes+Tavares,+6+++2510-070+%C3%93bidos",
            email: "mailto:hotel.senhorasrainhas@unlockhotels.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/senhoras-rainhas.webp",
          },
          {
            id: 53,
            entidade: "Azeites Casa Anadia",
            location: "Santarém",
            benefits:
              "Visitas Olivoturismo com Degustação de Azeites + Produtos Regionais + Vinhos (ver tabela de desconto em anexo)",
            websiteUrl: "https://casaanadia.pt/",
            coordinates:
              "https://www.google.com/maps?q=Azeites+Casa+Anadia,+Quinta+do+Bom+Sucesso,+2200-484+Alferrarede,+Abrantes",
            email: "mailto:reservas@casaanadia.pt",
            pdfDocument: "/assets/docs/acordos/lazer/casa-anadia.pdf",
            imageUrl: "/assets/images/acordos/lazer/casa-anadia.webp",
          },
          {
            id: 54,
            entidade: "Albergaria do Calvário - Boutique Hotel",
            location: "Évora",
            benefits:
              "Desconto de 8% em alojamento cumulativo com todas as campanhas no website da Unlock Boutique Hotels. | Este desconto não é válido para épocas festivas, congressos e eventos, pontes, feriados ou pacotes promocionais. | Para usufruto dos descontos as reservas deverão ser realizadas no site da Unlock ou no website individual do hotel e deverá ser usado o código promocional: 'CPME_exclusiveUBH'",
            websiteUrl: "https://adcevora.com/pt/home",
            coordinates:
              "https://www.google.com/maps?q=Albergaria+do+Calv%C3%A1rio,+Travessa+dos+Lagares,+3++7000-565+%C3%89vora",
            email: "mailto:hotel.adcalvario@unlockhotels.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/lazer/albergaria-calvario.webp",
          },
          {
            id: 55,
            entidade: "ACP – Automóvel Club de Portugal",
            location: "Lisboa",
            benefits:
              " Isenção de joia. | Desconto de 20% na primeira anuidade. | Unidades/Especialidades: Assistência em Estrada, Saúde, Seguros, Assistência Técnica em Casa, Desconto em + de 5 mil parceiros.",
            websiteUrl: "https://www.acp.pt/inicio",
            coordinates:
              "https://www.google.com/maps?q=ACP,+Rua+Rosa+Ara%C3%BAjo+24,+1250-195+Lisboa",
            email: "mailto:apoio.socio@acp.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/lazer/acp.webp",
          },
        ],
      },
      "residencias-senior": {
        label: "SÓCIOS",
        heading: "Residências Sénior",
        descriptionText: "Parcerias com residências para idosos",
        logo: "/assets/images/acordos/documento-lightgreen.webp",
        background:
          "/assets/images/acordos/bg-hero-acordo-res-senior.webp",
        entidades: [
          {
            id: 1,
            entidade: "Hotel Sénior",
            location: "Póvoa de Lanhoso, Braga",
            benefits:
              "Desconto entre 5% e 10% sobre o precário em vigor. | Serviços: fisioterapia, psicomotricidade, enfermagem, psicologia, podologia, nutrição, neurologia, medicina geral, animação, passeios e visitas culturais, musicoterapia, momentos religiosos, hidroginástica sénior e cuidado da imagem pessoal. | A nossa instituição destaca-se por proporcionar aos seus residentes uma autonomia inigualável. Os residentes têm liberdade para sair e regressar à instituição sempre que desejarem, podendo deslocar-se ao exterior sozinhos.",
            websiteUrl: "https://www.hotelseniorpvl.pt/",
            coordinates:
              "https://www.google.com/maps/place/Hotel+Senior+de+Povoa+de+Lanhoso/@41.5786332,-8.2765937,17z/data=!3m1!4b1!4m6!3m5!1s0xd24e385b641ac0f:0xfff9e733c340efe7!8m2!3d41.5786332!4d-8.2740188!16s%2Fg%2F11sxy80qrj?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@hotelseniorpvl.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/residencias-senior/hotel-senior.webp",
          },
          {
            id: 2,
            entidade: "Casa dos Pais",
            location: "Porto",
            benefits: "Desconto de 10% nas tabelas em vigor.",
            websiteUrl: "https://www.casadospais.pt/",
            coordinates:
              "https://www.google.com/maps/place/Casa+dos+Pais+-+Resid%C3%AAncias+Geri%C3%A1tricas+e+Apoio+Domicili%C3%A1rio/@41.1630086,-8.6634226,17z/data=!3m1!4b1!4m6!3m5!1s0xd246f7d77bf833b:0x147fd39ae2e9a2b0!8m2!3d41.1630086!4d-8.6608477!16s%2Fg%2F11g9mhrkcw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:geral@casadospais.pt",
            pdfDocument:
              "/assets/docs/acordos/residencias-senior/casa-dos-pais.pdf",
            imageUrl:
              "/assets/images/acordos/residencias-senior/casa-dos-pais.webp",
          },
          {
            id: 3,
            entidade: "Chão do Grou",
            location: "Viseu",
            benefits: "Desconto de 10% sobre a tabela em vigor.",
            websiteUrl: "http://www.chaodogrou.pt/",
            coordinates:
              "https://www.google.com/maps?q=Rua+Ch%C3%A3o+de+Grou,+3,+3520-095+Nelas",
            email: "mailto:info@chaodogrou.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/residencias-senior/chao-do-grou.webp",
          },
        ],
      },
      saude: {
        label: "SÓCIOS",
        heading: "Acordos na área da Saúde",
        descriptionText: "Parcerias com clínicas e hospitais",
        logo: "/assets/images/acordos/documento-lightgreen.webp",
        background: "/assets/images/acordos/bg-hero-acordo-saude.webp",
        entidades: [
          {
            id: 1,
            entidade: "Khushi Minds",
            location: "Leiria",
            benefits:
              "Desconto de 20% sobre o preço de tabela das consultas de psicologia online. | 1 Welcome Webinar sem custo associado, com duração entre 30-45 minutos para apresentação da Khushi Minds e para sensibilização para o tema da saúde mental (com um tema à escolha (ansiedade / burnout / outros). | Para usufruto do desconto deverá apresentar o cartão de Associado CPME e mencionar o Acordo/Parceria CPME/Khushi Minds.",
            websiteUrl: "https://www.khushiminds.com/",
            coordinates:
              "https://www.google.com/maps?q=Khushi+Minds,+R.+dos+Colaboradores+Lote+D,+3105-089+Guia",
            email: "mailto:geral@khushiminds.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/khushi-minds.webp",
          },
          {
            id: 2,
            entidade: "Hospital Terra Quente (Mirandela) - Grupo HTQ",
            location: "Bragança",
            benefits:
              "Desconto de 10% sobre o valor dos serviços hospitalares oferecidos pelos HB, no Hospital Terra Quente (Mirandela). | Desconto de 5% nas Mensalidades da Residência Sénior desta unidade hospitalar.",
            websiteUrl: "https://htq.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hospital+Terra+Quente,+Rua+25+de+Maio,+N%C2%BA+119,+5370-535+Mirandela",
            email: "mailto:geral@htq.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/saude/hospital-terra-quente.webp",
          },
          {
            id: 3,
            entidade: "Hospital Privado de Chaves - Grupo HTQ",
            location: "Vila Real",
            benefits:
              "Desconto de 10% sobre o valor dos serviços hospitalares oferecidos pelos HB, no Hospital Privado de Chaves. | Desconto de 5% nas Mensalidades da Residência Sénior desta unidade hospitalar.",
            websiteUrl: "https://hpchaves.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hospital+Privado+de+Chaves,+Rua+Dom+Francisco+Manuel+de+Melo,+N+9+5400-278+Chaves",
            email: "mailto:geral@hpchaves.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/hospital-chaves.webp",
          },
          {
            id: 4,
            entidade: "+ Saúde Ortopedia e Bem Estar (Monção)",
            location: "Viana do Castelo",
            benefits:
              "Desconto de 10% em produtos (consumíveis, ajudas técnicas, nutrição, ortopedia, calçado, anti escaras, enfermagem, diagnóstico, equipamentos técnicos e fisioterapia).",
            websiteUrl:
              "https://www.facebook.com/profile.php?id=100086171032014",
            coordinates:
              "https://www.google.com/maps?q=++Sa%C3%BAde+Ortopedia+e+Bem+Estar,+Avenida+da+Boavista,+218,+4950-851+CORTES",
            email: "mailto:saudemoncao@gmail.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/saude-ortopedia.webp",
          },
          {
            id: 5,
            entidade: "Clínica de Santos",
            location: "Lisboa",
            benefits:
              "Desconto de 20% na tabela particular de medicina dentária. | Desconto de 10% nas consultas de psicologia, nutrição, podologia, medicina anti-aging e medicina tradicional chinesa e acupuntura a todos os beneficiários e familiares diretos. | Desconto de 25% em aparelhos auditivos. | Os rastreios auditivos na Clínica de Santos com a Amplifon_Minisom são gratuitos. ",
            websiteUrl:
              "https://www.facebook.com/aclinicadesantos/?locale=pt_PT",
            coordinates:
              "https://www.google.com/maps?q=Miminho+aos+Av%C3%B3s,+Rua+de+Our%C3%A9m,+Lote+5,+Loja+1,+2415-781+Leiria",
            email: "mailto:geral@clinicadesantos.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/clinica-santos.webp",
          },
          {
            id: 6,
            entidade: "Miminho aos Avós",
            location: "Leiria",
            benefits:
              "Desconto de 10% em produtos (consumíveis, ajudas técnicas, nutrição, ortopedia, calçado, anti escaras, enfermagem, diagnóstico, equipamentos técnicos e fisioterapia). Ver tabela em anexo. | Protocolo estensível às diversas Unidades (Castelo Branco, Gaia, Leiria, Matosinhos, Oeiras, Santa Maria da Feira e Sintra).",
            websiteUrl: "https://www.miminhoaosavos.pt/",
            coordinates:
              "https://www.google.com/maps?q=Miminho+aos+Av%C3%B3s,+Rua+de+Our%C3%A9m,+Lote+5,+Loja+1,+2415-781+Leiria",
            email: "mailto:rui.francisco@miminhoaosavos.pt",
            pdfDocument: "/assets/docs/acordos/saude/miminho-avos.pdf",
            imageUrl: "/assets/images/acordos/saude/miminho-avos.webp",
          },
          {
            id: 7,
            entidade: "Hospital Privado de Bragança - Grupo HTQ",
            location: "Bragança",
            benefits:
              "Desconto de 10% sobre o valor dos serviços hospitalares oferecidos pelos HB, no Hospital Privado de Bragança. | Desconto de 5% nas Mensalidades da Residência Sénior desta unidade hospitalar.",
            websiteUrl: "https://hpbraganca.pt/",
            coordinates:
              "https://www.google.com/maps?q=Hospital+Privado+de+Bragan%C3%A7a,+Rua+Professor+Doutor+Gon%C3%A7alves+Rodrigues,+5300-238+Bragan%C3%A7a",
            email: "mailto:geral@hpbraganca.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/saude/hospital-braganca.webp",
          },
          {
            id: 8,
            entidade: "Fisiolar – Saúde e Apoio Domiciliário",
            location: "Setúbal",
            benefits:
              "Desconto de 10% de desconto nas sessões avulso. | Desconto de 7% por ato de enfermagem sobre o PVP para os colaboradores e familiares em 1º Grau.",
            websiteUrl: "https://fisiolar.pt/",
            coordinates:
              "https://www.google.com/maps?q=Fisiolar,+Rua+Atl%C3%A9tico+Clube+de+Arrentela,+n%C2%BA+5A,+2840-615+Seixal",
            email: "mailto:info@fisiolar.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/fisiolar.webp",
          },
          {
            id: 9,
            entidade: "Diatra - Centro de Diagnóstico e Tratamento Médico",
            location: "Lisboa",
            benefits: "Desconto de 20% sobre a Tabela Particular.",
            websiteUrl: "https://diatra.pt/",
            coordinates:
              "https://www.google.com/maps?q=diatra,+R.+Alexandre+Herculano+n%C2%BA+9+A,+1150-005+Lisboa",
            email: "mailto:geral@diatra.pt",
            pdfDocument: "/assets/docs/acordos/saude/diatra.pdf",
            imageUrl: "/assets/images/acordos/saude/diatra.webp",
          },
          {
            id: 10,
            entidade: "New Clinic",
            location: "Lisboa",
            benefits:
              "Primeira consulta gratuita, para avaliação com realização de uma radiografia panorâmica e análise oral. | Descontos iguais aos aplicados na Tabela de Preços da Medicare (ver tabela em anexo).",
            websiteUrl: "https://www.clinicadentariaodivelas.pt/",
            coordinates:
              "https://www.google.com/maps?q=New+Clinic,+Av.+Miguel+Torga+9,+2675-635+Odivelas",
            email: "mailto:geral@newclinic.pt",
            pdfDocument: "/assets/docs/acordos/saude/new-clinic.pdf",
            imageUrl: "/assets/images/acordos/saude/new-clinic.webp",
          },
          {
            id: 11,
            entidade: "Excellent Óptica",
            location: "Lisboa",
            benefits:
              "Desconto de 25% em Óculos graduados (aros e lentes). | Desconto de 20% em Lentes de contacto e em Óculos de sol. | Desconto de 10% em Outro material óptico. Desconto de 100% e prioridade na marcação de Exames de optometria, contactologia e ortóptica - quando disponíveis. | Oferta dos primeiros produtos de conservação, manutenção e esterilização de lentes, quando necessário.",
            websiteUrl: "https://excellentoptica.pt/",
            coordinates:
              "https://www.google.com/maps?q=Excellent+%C3%93ptica,+Rua+Virgilio+Correia,+5+B,+1600-219+LISBOA",
            email: "mailto:central@excellentoptica.pt",
            pdfDocument: "/assets/docs/acordos/saude/excellent-optica.pdf",
            imageUrl: "/assets/images/acordos/saude/excellent-optica.webp",
          },
          {
            id: 12,
            entidade: "Cuidar e Viver - Marques Inovação & Ambiente, S.A.",
            location: "Ponta Delgada",
            benefits:
              "Desconto de 5% de desconto sobre o PVP dos serviços prestados pela 'Cuidar e Viver - Marques Inovação & Ambiente, S.A.' e referidos na tabela em anexo. | Desconto válido para sócios, cônjuges, ascendentes, descendentes e afins no 1º grau na linha reta.",
            websiteUrl: "https://cuidareviver.pt/",
            coordinates:
              "https://www.google.com/maps?q=Marques+Inova%C3%A7%C3%A3o+&+Ambiente,+S.A.,+Rua+Joaquim+Marques+34,+9600-049+Pico+da+Pedra,+Ribeira+Grande",
            email: "mailto:cuidareviver@grupomarques.org",
            pdfDocument: "/assets/docs/acordos/saude/cuidar-viver.pdf",
            imageUrl: "/assets/images/acordos/saude/cuidar-viver.webp",
          },
          {
            id: 13,
            entidade: "Clínica de São Cristóvão",
            location: "Lisboa",
            benefits: "Ver Tabela de Serviços e Preçário em anexo.",
            websiteUrl: "https://www.clinicasaocristovao.pt/",
            coordinates:
              "https://www.google.com/maps?q=CSC+-+Associa%C3%A7%C3%A3o+de+Socorros+M%C3%BAtuos+de+Empregados+no+Com%C3%A9rcio+de+Lisboa+-+IPSS+Largo+de+S%C3%A3o+Crist%C3%B3v%C3%A3o,+1+1149-053+Lisboa,+Portugal",
            email: "mailto:administracao@clinicasaocristovao.pt",
            pdfDocument:
              "/assets/docs/acordos/saude/clinica-sao-cristovao.pdf",
            imageUrl:
              "/assets/images/acordos/saude/clinica-sao-cristovao.webp",
          },
          {
            id: 14,
            entidade: "A Farmácia Online",
            location: "Lisboa",
            benefits:
              "Compras Presenciais n' A Farmácia(s) + Compras por Email: 10% de desconto direto no valor a pagar, salvo exceções previstas pela Lei, acrescido de 5% do valor a pagar colocado em cartão virtual Protocolo + Vantagens A Farmácia. | Ao acumular 50€ no cartão virtual é lhe atribuído um vale de 2,5€ que pode utilizar no prazo de 60 dias em compras acima de 2.5€. | Em Compras pelo Site: Os PVP dos produtos já têm 10% de desconto online. A somar a essa vantagem, por cada 1 Euro pago em produtos é lhe atribuído 1 ponto. | Sempre que acumula 50 pontos, é lhe atribuído um cupão de 2,5€ que pode utilizar no site no prazo de 60 dias em compras acima de 2,5€. | Condições de Entrega/Envio gratuitos (ver tabela em anexo).",
            websiteUrl: "https://www.afarmaciaonline.pt/",
            coordinates:
              "https://www.google.com/maps?q=A+Farm%C3%A1cia+Online,+Estrada+de+Benfica,+592-594+%7C+1500-107+Lisboa",
            email: "mailto:encomendas@afarmaciaonline.pt",
            pdfDocument: "/assets/docs/acordos/saude/farmacia-online.pdf",
            imageUrl: "/assets/images/acordos/saude/farmacia-online.webp",
          },
          {
            id: 15,
            entidade: "Ideal Óptica da Malveira",
            location: "Lisboa",
            benefits:
              "Desconto de 30% em Aros e ou Lentes Oftálmicas. Desconto de 20% em Óculos de Sol e Lentes de Contacto. Desconto de 10% noutros produtos ópticos. Lentes progressivas (em caso de inadaptação efetuamos a troca das lentes). Consulta de Optometria - Grátis mediantes marcação. Consulta de Contactologia - Grátis com oferta de 1º Par. Medição da Tensão Ocular. ",
            websiteUrl: "https://www.idealopticamalveira.com/",
            coordinates:
              "https://www.google.com/maps?q=Ideal+%C3%93ptica+da+Malveira,+Est.+Nacional,+N%C2%BA+8,+Edif.+Salamanca,+Bloco+A,+R/C+-+Dt%C2%BA+%7C+2665-258+Malveira",
            email: "mailto:idealopticamalveira@sapo.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/ideal-optica.webp",
          },
          {
            id: 16,
            entidade: "Farmácias Progresso",
            location: "Lisboa",
            benefits:
              "Desconto de 10% em transações sobre o valor total da fatura (excepto medicamentos sujeitos a receita médica com PVP unitário superior a 50€, produtos protocolo diabetes, alimentação infantil e fraldas), em todas as farmácias da rede. | Farmácias Progresso Localização: Lisboa – Mértola – Lazarim - Oeiras.",
            websiteUrl: "https://www.farmaciasprogresso.pt/",
            coordinates:
              "https://www.google.com/maps?q=Farm%C3%A1cia+Progresso,+Av.+Guerra+Junqueiro,+30+B,+1000-167+Lisboa",
            email: "mailto:mariajoaocruz.gps@gmail.com",
            pdfDocument:
              "/assets/docs/acordos/saude/farmacias-progresso.pdf",
            imageUrl:
              "/assets/images/acordos/saude/farmacias-progresso.webp",
          },
          {
            id: 17,
            entidade:
              "Presmedenta - Clínica Médica Dentária Praça do Areeiro (As Clínicas)",
            location: "Lisboa",
            benefits: "Desconto de 15% de desconto sobre a Tabela de P.V.P.",
            websiteUrl: "https://asclinicas.pt/",
            coordinates:
              "https://www.google.com/maps?q=Presmedenta,+R.+Dr.+Gama+Barros+27A,+1700-143+Lisboa",
            email: "mailto:info@asclinicas.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/asclinicas.webp",
          },
          {
            id: 18,
            entidade: "Euroroma - Consultório Médico e Dentário (As Clínicas)",
            location: "Lisboa",
            benefits: "Desconto de 15% de desconto sobre a Tabela de P.V.P.",
            websiteUrl: "https://asclinicas.pt/",
            coordinates:
              "https://www.google.com/maps?q=Euroroma+-+Consult%C3%B3rio+M%C3%A9dico+e+Dent%C3%A1rio,+Pra%C3%A7a+de+Alvalade,+n%C2%BA+6+%E2%80%93+1+Dt%C2%BA,+1700-036+Lisboa",
            email: "mailto:info@asclinicas.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/asclinicas.webp",
          },
          {
            id: 19,
            entidade: "Falas e Palavras",
            location: "Aveiro",
            benefits:
              "Oferta de 1 consulta de avaliação diagnóstica. Desconto de 15% nas consultas das diversas especialidades. | Especialidades: Psicologia, Terapia da Fala, Terapia Ocupacional, Psicomotricidade, Psicopedagogia, Terapia Familiar.",
            websiteUrl: "https://falasepalavras0.wixsite.com/falasepalavras",
            coordinates:
              "https://www.google.com/maps?q=Falas+e+Palavras,+Rua+Comendador+Luis+Bernardo+de+Almeida,+36+3730-252+Vale+de+Cambra",
            email: "mailto:falasepalavras@gmail.com",
            pdfDocument: "/assets/docs/acordos/saude/falas-palavras.pdf",
            imageUrl: "/assets/images/acordos/saude/falas-palavras.webp",
          },
          {
            id: 20,
            entidade: "Domus Óptica Picoas",
            location: "Lisboa",
            benefits:
              "Desconto de 30% em armações e lentes (quando compradas em conjunto). | Tel.: 213 152 609",
            websiteUrl:
              "https://meu-optico.com/detalhes-da-loja/MEUOPTICO-DOMUS-Opticas-Picoas",
            coordinates:
              "https://www.google.com/maps?q=DOMUS+Opticas+(Picoas),+Pra%C3%A7a+Jos%C3%A9+Fontana,+n%C2%BA+10+E+%E2%80%93+1050-129+Lisboa",
            email: "mailto:mail@domusoptica.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/domus-optica.webp",
          },
          {
            id: 21,
            entidade: "Domus Óptica Duque de Loulé",
            location: "Lisboa",
            benefits:
              "Desconto de 50% em armações e lentes (quando compradas em conjunto). | Tel.: 213 152 609",
            websiteUrl:
              "https://meu-optico.com/detalhes-da-loja/MEUOPTICO-DOMUS-Opticas-Duque-de-Loule",
            coordinates:
              "https://www.google.com/maps?q=Domus+%C3%93ptica+Duque+de+Loul%C3%A9,+Av.+Duque+de+Loul%C3%A9,+103+%E2%80%93+LJ1+%E2%80%93+1050-089+Lisboa",
            email: "mailto:mail@domusoptica.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/domus-optica.webp",
          },
          {
            id: 22,
            entidade: "José Carlos Simões Fernandes, (Dr.)",
            location: "Lisboa",
            benefits:
              "Preço único 40 euros quer seja primeira ou continuação em clínica geral. Consulta 80 euros e relatório 150 euros em avaliação do dano corporal pós-traumático em direito de trabalho e direito civil. | Tlm.: 967 193 765 | Tel.: 218 126 729 ",
            websiteUrl: "",
            coordinates:
              "https://www.google.com/maps?q=Jos%C3%A9+Carlos+Sim%C3%B5es+Fernandes,+(Dr.),+Av.+E.U.A.,+n%C2%BA+100+%E2%80%93+1%C2%BA+Dt%C2%BA+-+1700-179+Lisboa",
            email: "mailto:jcsimoesfernandes@gmail.com",
            pdfDocument: "",
            imageUrl: "",
          },
          {
            id: 23,
            entidade: "CNO – Centro Neuroftalmológico de Lisboa",
            location: "Lisboa",
            benefits:
              "Consulta 40€. Outras especialidades 30% de desconto. | Tlm.: 917 644 046 | Tel.: 213 146 594",
            websiteUrl:
              "https://www.facebook.com/CentroNeuroftalmologicodeLisboa/",
            coordinates:
              "https://www.google.com/maps?q=CNO+%E2%80%93+Centro+Neuroftalmol%C3%B3gico+de+Lisboa,+Pra%C3%A7a+Jos%C3%A9+Fontana,+11+%E2%80%93+1%C2%BA+Esq.+%E2%80%93+1050-129+Lisboa",
            email: "mailto:consultas@cno-lx.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/cno.webp",
          },
          {
            id: 24,
            entidade: "Blueberry Clinic",
            location: "Lisboa",
            benefits:
              "Desconto de 10% nos serviços. Consultas exceto análises clínicas.",
            websiteUrl: "https://www.blueberryclinic.pt/",
            coordinates:
              "https://www.google.com/maps?q=Blueberry+Clinic,+Rua+Mouzinho+de+Albuquerque,+10+A-Loja+A++2685-221+Portela+LRS",
            email: "mailto:geral@blueberryclinic.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/blueberry.webp",
          },
          {
            id: 25,
            entidade: "Clínica de Medicina Dentária Dr. Nuno Mendes Guimarães",
            location: "Porto",
            benefits:
              "Desconto de 20% em todas as consultas e tratamentos de medicina dentária. | Desconto de 10% de desconto noutras especialidades.",
            websiteUrl:
              "https://www.clinicamedica.pt/clinica/clinica-de-medicina-dentaria-dr-nuno-mendes-guimaraes/",
            coordinates:
              "https://www.google.com/maps?q=Cl%C3%ADnica+de+Medicina+Dent%C3%A1ria+Dr.+Nuno+Mendes+Guimar%C3%A2es,+Rua+Dr.+Eduardo+Santos+Silva,+70+Vila+Nova+de+Gaia+4200-278",
            email: "mailto:clinicanmg@gmail.com",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/saude/clinica-nuno-guimaraes.webp",
          },
          {
            id: 26,
            entidade: "Oralklass - Clínicas Dentárias",
            location: "Porto",
            benefits:
              "Desconto de 10% sobre tratamentos dentários, com exceção de especialidades (Implantologia / Prostodontia / Ortodontia).",
            websiteUrl: "https://www.oralklass.pt/",
            coordinates:
              "https://www.google.com/maps?q=Oralklass,+Rua+Santa+Catarina,+n%C2%BA+635,+4000-272+Porto",
            email: "mailto:oralklass@gmail.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/oralklass.webp",
          },
          {
            id: 27,
            entidade: "Clínica Cyrne",
            location: "Lisboa",
            benefits:
              "Desconto de 10% em todos os tratamentos e especialidades.",
            websiteUrl: "https://clinicacyrne.com/",
            coordinates:
              "https://www.google.com/maps?q=Cl%C3%ADnica+Cyrne,+Praceta+Dr.+Gentil+Martins,+n%C2%BA+2-Loja+D+-+2720-210+Amadora",
            email: "mailto:clinicacyrne@clinicacyrne.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/clinica-cyrne.webp",
          },
          {
            id: 28,
            entidade: "Óptica Lab - Laboratórios de Lentes",
            location: "Lisboa",
            benefits:
              "Desconto de 25% em Armações e Lentes de Contacto. Desconto de 20% em Óculos de Sol. Desconto de  10% em Lentes de Contacto, em Exame Visual Gratuito, em Consumíveis de Manutenção, limpeza e esterlização.",
            websiteUrl: "https://www.facebook.com/OpticaLab.pt/",
            coordinates:
              "https://www.google.com/maps?q=%C3%93ptica+Lab+-+Laborat%C3%B3rios+de+Lentes,+Largo+do+Calv%C3%A1rio,+Loja+25/26-1300-114+Lisboa",
            email: "mailto:lablenteslisboa@gmail.com",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/optica-lab.webp",
          },
          {
            id: 29,
            entidade: "Clínica das Conchas",
            location: "Lisboa",
            benefits:
              "Descontos diversos verificados caso a caso em: Centro Clínico, Centro de Reabilitação, Centro de Exercício e Centro de Bem Estar.",
            websiteUrl: "https://www.clinicadasconchas.pt/",
            coordinates:
              "https://www.google.com/maps?q=Cl%C3%ADnica+das+Conchas,+Rua+Lu%C3%ADs+Pastor+Macedo,+27-C+Lumiar+-+1750-156+Lisboa",
            email: "mailto:geral@clinicadasconchas.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/saude/clinica-conchas.webp",
          },
          {
            id: 30,
            entidade: "Centro de Medicina Física e de Reabilitação Vimarlis",
            location: "Lisboa",
            benefits:
              "Desconto de 20% em Consultas de Fisiatria e em Tratamentos de Fisioterapia sobre a Tabela de Particulares (ver tabela em anexo). ",
            websiteUrl: "https://www.clinicavimarlis.pt/",
            coordinates:
              "https://www.google.com/maps?q=Centro+de+Medicina+F%C3%ADsica+e+de+Reabilita%C3%A7%C3%A3o+Vimarlis,+Rua+de+Arroios,+9+A/B,+1150-053+Lisboa",
            email: "mailto:vimarlis@gmail.com",
            pdfDocument: "/assets/docs/acordos/saude/vimarlis.pdf",
            imageUrl: "/assets/images/acordos/saude/vimarlis.webp",
          },
        ],
      },
      "outros-acordos": {
        label: "SÓCIOS",
        heading: "Outros Acordos",
        descriptionText: "Diversas parcerias em diferentes áreas",
        logo: "/assets/images/acordos/documento-lightgreen.webp",
        background: "/assets/images/acordos/bg-hero-outros-acordos.webp",
        entidades: [
          {
            id: 1,
            entidade: "Royal School of Languages",
            location: "Aveiro",
            benefits:
              "Desconto de 10% na aquisição de todos os produtos/serviços (matrículas na Royal School of Languages; cursos de ano letivo, em turma; cursos em regime individual e/ou em grupo fechado; cursos intensivos de Verão; formações modulares; testes de avaliação e certificação de conhecimentos e testes diagnósticos) prestados pela Royal School of Languages) – Formação em Portugal. | Desconto de 5% na aquisição de todos os produtos/serviços (matrículas na Royal School of Languages; Cursos de ano letivo, em turma) – Formação Online. | Desconto de 4%, sobre o preço do pack (exclui avião e seguro), nos cursos de Verão em Inglaterra para jovens – Formação em Inglaterra. | Desconto de 4%, sobre o valor de formação, nos cursos de formação intensiva para adultos em Inglaterra – Formação em Inglaterra.",
            websiteUrl: "https://www.royalschool.pt/en/home-2/",
            coordinates:
              "https://www.google.com/maps/place/ROYAL+SCHOOL+OF+LANGUAGES/@40.6408805,-8.6582297,17z/data=!3m1!4b1!4m6!3m5!1s0xd2398039723626f:0x87242230c65cc7e5!8m2!3d40.6408805!4d-8.6556548!16s%2Fg%2F1thbxyr8?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
            email: "mailto:rsl@royalschooloflanguages.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/outros-acordos/royal-school.webp",
          },
          {
            id: 2,
            entidade:
              "CLi – Centro de Línguas da Faculdade de Letras da ULisboa",
            location: "Lisboa",
            benefits:
              "Desconto de 10% sobre o valor da propina aplicada ao público geral para “cursos regulares” de línguas.",
            websiteUrl: "https://cli.letras.ulisboa.pt/",
            coordinates:
              "https://www.google.com/maps?q=CLi+%E2%80%93+Centro+de+L%C3%ADnguas+da+Faculdade+de+Letras+da+Universidade+de+Lisboa,+Ed.+Faculdade+de+Letras,+Alameda+da+Universidade,+1600-214+Lisboa",
            email: "mailto:cli@letras.ulisboa.pt",
            pdfDocument: "/assets/docs/acordos/outros-acordos/cli.pdf",
            imageUrl: "/assets/images/acordos/outros-acordos/cli.webp",
          },
          {
            id: 3,
            entidade: "Associação Nacional de Professores",
            location: "Braga",
            benefits:
              "A Associação Nacional de Professores é uma organização profissional, não sindical, de docentes de todos os níveis e graus de educação e ensino (educação pré-escolar, ensinos básico, secundário e superior), em exercício no sector público ou no sector privado. Foi fundada em 1985 e Declarada de Utilidade Pública a partir de 1991 (D.R. nº 228, II Série, de 03/10/1991). A Sede Nacional é em Braga e está implantada em todo o território nacional através de secções regionais, para apoio aos docentes.",
            websiteUrl: "https://anprofessores.pt/",
            coordinates:
              "https://www.google.com/maps?q=Associa%C3%A7%C3%A3o+Nacional+de+Professores,+Av.+da+Liberdade+296+1%C2%BA+DTO,+4710-250+Braga",
            email: "mailto:geral@anprofessores.pt",
            pdfDocument: "",
            imageUrl: "/assets/images/acordos/outros-acordos/anp.webp",
          },
          {
            id: 4,
            entidade: "Cambridge School Portugal",
            location: "Lisboa",
            benefits:
              "Desconto de 5% sobre as mensalidades dos cursos de “Inglês”, “Francês”, “Alemão” e “Português para Estrangeiros”, para além dos descontos de trimestre e anual mencionados na tabela de preços (ver tabela em anexo). | Descontos válidos para associados, respetivos cônjuges e filhos.",
            websiteUrl: "https://www.cambridge.pt/?lang=en",
            coordinates:
              "https://www.google.com/maps?q=Cambridge+School+Portugal,+Av.+da+Liberdade+173,+1250-141+Lisboa",
            email: "mailto:info@cambridge.pt",
            pdfDocument:
              "/assets/docs/acordos/outros-acordos/cambridge-school.pdf",
            imageUrl:
              "/assets/images/acordos/outros-acordos/cambridge-school.webp",
          },
          {
            id: 5,
            entidade: "Wall Street English",
            location: "Lisboa",
            benefits:
              "Desconto de 10%* na matrícula e mensalidades para uma pessoa. | Desconto de 15%* na matrícula e mensalidades para duas ou mais pessoas. | *Condições válidas na inscrição de 4 ou mais níveis. | Beneficiários: Sócios e familiares. Curso de Inglês para TEENS, 100% online dos 13 aos 16 anos. Curso de Inglês para adultos, online, presencial ou ambos, a partir dos 17 anos, sem limite máximo de idade. Condições não acumuláveis com outras campanhas promocionais em vigor.",
            websiteUrl: "https://www.wsenglish.pt/pt/",
            coordinates:
              "https://www.google.com/maps?q=Wall+Street+English,+Avenida+Jo%C3%A3o+Cris%C3%B3stomo+46+A,+1050-127+Lisboa",
            email: "mailto:info@wsenglish.pt",
            pdfDocument: "",
            imageUrl:
              "/assets/images/acordos/outros-acordos/wall-street-english.webp",
          },
        ],
      },
    },
  },
];

// **********************************************************************
// PAGE Emprestimos
import { EmprestimosPageContentData } from "./types";

export const emprestimosPageContent: EmprestimosPageContentData[] = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SÓCIOS",
            heading: "Empréstimos pensados para apoiar",
            descriptionText: "o seu bem-estar e o da sua família",
            logo: "/assets/images/emprestimos/cashbag-darkblue.webp",
            background:
              "/assets/images/emprestimos/bg-hero-emprestimos.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "A CPME oferece aos seus associados a possibilidade de recorrer a empréstimos em condições especiais, com o objetivo de apoiar as suas necessidades financeiras, seja para imprevistos ou projetos familiares.",
        descriptionText:
          "Com prazos ajustáveis e taxas competitivas, a modalidade visa proporcionar segurança e apoio imediato, sempre com o compromisso de assegurar um processo simples e transparente, com condições adequadas à realidade de cada sócio.",
        image: "",
      },
    ],
    infoText: [
      {
        id: 1,
        icon: "/assets/images/emprestimos/icon-darkblue.svg",
        title:
          "Descubra as opções disponíveis e escolha o melhor para o seu futuro.",
      },
    ],
    cardEmprestimos: {
      emprestimosApoioFamilia: [
        {
          id: 1,
          imageUrl: "/assets/images/emprestimos/emp-familia1.webp",
          title: "Bolsas de Estudo",
          link: "/emprestimo/bolsas-de-estudo",
        },
        {
          id: 2,
          imageUrl: "/assets/images/emprestimos/emp-familia2.webp",
          title: "Aquisição de Equipamento Educativo",
          link: "/emprestimo/equipamento-educativo",
        },
        {
          id: 3,
          imageUrl: "/assets/images/emprestimos/emp-familia3.webp",
          title: "Cuidados de Saúde",
          link: "/emprestimo/cuidados-saude",
        },
      ],
      creditoHabitacao: [
        {
          id: 1,
          imageUrl: "/assets/images/emprestimos/cred-habit1.webp",
          title: "Obras em Casa Própria",
          link: "/emprestimo/obras-casa-propria",
        },
        {
          id: 2,
          imageUrl: "/assets/images/emprestimos/cred-habit2.webp",
          title: "Comprar ou Construção",
          link: "/emprestimo/comprar-ou-construir",
        },
        {
          id: 3,
          imageUrl: "/assets/images/emprestimos/cred-habit3.webp",
          title: "Transferência de Empréstimos",
          link: "/emprestimo/transferencia-emprestimos",
        },
      ],
      reservasMatematicas: [
        {
          id: 1,
          imageUrl: "/assets/images/emprestimos/reservas-mat1.webp",
          title: "Reservas Matemáticas",
          link: "/emprestimo/reservas-matematicas",
        },
        {
          id: 2,
          imageUrl: "/assets/images/emprestimos/reservas-mat2.webp",
          title: "Quotas Pagas",
          link: "/emprestimo/quotas-pagas",
        },
      ],
    },
    contentPages: {
      "bolsas-de-estudo": {
        label: "EMPRÉSTIMOS DE APOIO À FAMÍLIA",
        heading: "Bolsas de Estudo",
        descriptionText: "",
        background:
          "/assets/images/emprestimos/bg-hero-bolsas-estudo.webp",
        sectionDescript: {
          title: "Invista na sua formação com segurança e flexibilidade",
          description:
            "A educação é um dos pilares para um futuro promissor e com o nosso empréstimo para bolsas de estudo, pode focar-se no seu crescimento académico sem preocupações.",
          description2:
            "Esta solução permite financiar até 100% das despesas de formação, abrangendo Licenciaturas, Mestrados, Pós-Graduações, MBAs, Doutoramentos ou Cursos Técnicos.",
          imageUrl: "/assets/images/emprestimos/image-bolsas-estudo.webp",
        },
        sectionCards: {
          card1: {
            title: "Montante até 10.000€",
            description: "Para cobrir propinas e outras despesas académicas.",
          },
          card2: {
            title: "Taxa de juro anual de 5%",
            description:
              "Condições acessíveis para apoiar o seu investimento na educação.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title:
            "Garanta já o financiamento dos seus estudos e avance com confiança para o futuro!",
          textRegulamento: "Regulamento Empréstimos Apoio à Família",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Apoio-Familia.pdf",
        },
      },
      "equipamento-educativo": {
        label: "EMPRÉSTIMOS DE APOIO À FAMÍLIA",
        heading: "Aquisição de Equipamento",
        descriptionText: "Educativo",
        background:
          "/assets/images/emprestimos/bg-hero-equipamento-educativo.webp",
        sectionDescript: {
          title: "Invista no seu futuro com confiança e estabilidade",
          description:
            "A aquisição de equipamentos educativos é essencial para o desenvolvimento académico e profissional. A CPME disponibiliza um empréstimo exclusivo que lhe permite financiar essa necessidade com condições vantajosas e acessíveis.",
          imageUrl:
            "/assets/images/emprestimos/image-equip-educativo.webp",
        },
        sectionCards: {
          card1: {
            title: "Montante até 5.000€",
            description:
              "Invista em tecnologia, materiais de estudo ou outros equipamentos essenciais para a sua formação.",
          },
          card2: {
            title: "Prazo de amortização até 36 meses",
            description: "Pague com tranquilidade e sem pressões.",
          },
          card3: {
            title: "Taxa de juro anual de 5%",
            description:
              "Condições competitivas para facilitar o seu investimento.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title:
            "Dê um passo em frente na sua educação e conquiste novas oportunidades!",
          textRegulamento: "Regulamento Empréstimos Apoio à Família",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Apoio-Familia.pdf",
        },
      },
      "cuidados-saude": {
        label: "EMPRÉSTIMOS DE APOIO À FAMÍLIA",
        heading: "Cuidados de Saúde",
        descriptionText: "",
        background:
          "/assets/images/emprestimos/bg-hero-cuidados-saude.webp",
        sectionDescript: {
          title: "Porque a sua saúde e bem-estar são a nossa prioridade",
          description:
            "Garantir o acesso a cuidados médicos de qualidade pode ser essencial em momentos inesperados. Com este empréstimo, pode obter apoio financeiro para consultas, exames, cirurgias ou tratamentos especializados, sem comprometer a sua estabilidade financeira.",
          imageUrl: "/assets/images/emprestimos/image-cuidados-saude.webp",
        },
        sectionCards: {
          card1: {
            title: "Montante até 15.000€",
            description:
              "Para cobrir despesas médicas planeadas ou imprevistas.",
          },
          card2: {
            title: "Prazo de amortização até 60 meses",
            description: "Condições flexíveis para um pagamento tranquilo.",
          },
          card3: {
            title: "Transparência e segurança",
            description: "Requer apresentação de comprovativo da despesa.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title: "Invista na sua saúde com confiança!",
          textRegulamento: "Regulamento Empréstimos Apoio à Família",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Apoio-Familia.pdf",
        },
      },
      "obras-casa-propria": {
        label: "CRÉDITO À HABITAÇÃO",
        heading: "Obras em Casa Própria",
        descriptionText: "",
        background: "/assets/images/emprestimos/bg-hero-obras-casa.webp",
        sectionDescript: {
          title: "Transforme a sua casa com facilidade e segurança",
          description:
            "Com o Crédito para Obras em Casa Própria da CPME, pode dar vida aos seus projetos e renovar o seu imóvel com condições vantajosas. ",
          imageUrl: "/assets/images/emprestimos/image-obras-casa.webp",
        },
        sectionCards: {
          card1: {
            title: "Até 15 anos para amortizar",
            description:
              "Flexibilidade total para se ajustar ao seu orçamento.",
          },
          card2: {
            title: "Taxa Anual de 5,5%",
            description: "Sem surpresas, mas com a garantia de transparência.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title:
            "Peça uma simulação e concretize o seu sonho sem preocupações.",
          textRegulamento: "Regulamento Crédito à habitação",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Credito-Habitacao.pdf",
        },
      },
      "comprar-ou-construir": {
        label: "CRÉDITO À HABITAÇÃO",
        heading: "Comprar ou construção",
        descriptionText: "",
        background:
          "/assets/images/emprestimos/bg-hero-comprar-construcao.webp",
        sectionDescript: {
          title: "A sua casa, construído à sua medida",
          description:
            "A casa dos seus sonhos pode estar mais perto do que imagina. Com uma solução de crédito habitação flexível, pode financiar a compra ou construção da sua nova casa, garantindo que cada fase do projeto decorre com segurança e tranquilidade.",
          imageUrl:
            "/assets/images/emprestimos/image-comprar-construir.webp",
        },
        sectionCards: {
          card1: {
            title: "Soluções personalizadas",
            description:
              "Adapte o financiamento às suas necessidades e ao seu orçamento.",
          },
          card2: {
            title: "Prazo até 20 anos",
            description:
              "Planifique a sua amortização com um período alargado (idade limite de 70 anos).",
          },
          card3: {
            title: "Acompanhamento dedicado",
            description:
              "Um consultor especializado acompanha-o em todo o processo.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title: "Invista no seu futuro e no conforto da sua família!",
          textRegulamento: "Regulamento Crédito à habitação",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Credito-Habitacao.pdf",
        },
      },
      "transferencia-emprestimos": {
        label: "CRÉDITO À HABITAÇÃO",
        heading: "Transferência de Empréstimo",
        descriptionText: "",
        background:
          "/assets/images/emprestimos/bg-hero-transf-emprestimos.webp",
        sectionDescript: {
          title: "Se tudo muda, mude também o seu Crédito à Habitação",
          description:
            "A transferência do seu crédito à habitação pode ser a solução ideal para melhorar as suas condições financeiras. Se procura uma taxa mais competitiva, um prazo mais ajustado ou um apoio mais próximo, oferecemos uma alternativa que lhe garante segurança e estabilidade no futuro.",
          imageUrl:
            "/assets/images/emprestimos/image-transf-emprestimos.webp",
        },
        sectionCards: {
          card1: {
            title: "Condições Financeiras Competitivas",
            description:
              "Taxa de juro anual de 6% (atualizável). Prazo de Amortização até 15 anos – Adaptado à sua idade (limite de 70 anos).",
          },
          card2: {
            title: "Acompanhamento Personalizado",
            description:
              "Equipa de especialistas para o apoiar em todas as fases do processo.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title: "Dê um passo rumo a uma solução mais vantajosa e segura!",
          textRegulamento: "Regulamento Crédito à habitação",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Credito-Habitacao.pdf",
        },
      },
      "reservas-matematicas": {
        label: "RESERVAS MATEMÁTICAS",
        heading: "Reservas Matemáticas",
        descriptionText: "",
        background:
          "/assets/images/emprestimos/bg-hero-reservas-matematicas.webp",
        sectionDescript: {
          title: "Apoio Flexível para Despesas Extraordinárias",
          description:
            "Os Empréstimos sobre Reservas Matemáticas oferecem aos associados uma solução prática para enfrentar despesas imprevistas, utilizando as suas reservas acumuladas ou quotas pagas. Esta modalidade proporciona flexibilidade de prazos e condições ajustáveis à sua situação.",
          imageUrl:
            "/assets/images/emprestimos/image-reservas-matematicas.webp",
        },
        sectionCards: {
          card1: {
            title: "Taxa sem efeitos retroativos",
            description:
              "A taxa de juro a aplicar a estes empréstimos será fixada anualmente pelo Conselho de Administração, mas sem efeitos retroativos sobre os empréstimos anteriormente concedidos.",
          },
          card2: {
            title: "Prazo 6, 12, 18 ou 24 meses",
            description:
              "A amortização do empréstimo será feita em 6, 12, 18 ou 24 prestações mensais e iguais, postecipadas, compreendendo capital e juros.",
          },
          card3: {
            title: "Taxa de 2%",
            description:
              "A taxa de juro anual não pode ser inferior à taxa de capitalização usada na modalidade acrescida de 2%.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title:
            "Conte com o apoio da CPME para resolver necessidades financeiras de forma eficaz e sem surpresas.",
          textRegulamento:
            "Regulamento Empréstimo sobre Reservas Matemáticas e Quotas Pagas",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Reservas-Matematicas-Quotas-Pagas.pdf",
        },
      },
      "quotas-pagas": {
        label: "RESERVAS MATEMÁTICAS",
        heading: "Quotas Pagas",
        descriptionText: "",
        background: "/assets/images/emprestimos/bg-hero-quotas-pagas.webp",
        sectionDescript: {
          title: "Apoio Flexível para Despesas Extraordinárias",
          description:
            "Os Empréstimos sobre Reservas Matemáticas oferecem aos associados uma solução prática para enfrentar despesas imprevistas, utilizando as suas reservas acumuladas ou quotas pagas. Esta modalidade proporciona flexibilidade de prazos e condições ajustáveis à sua situação.",
          imageUrl: "/assets/images/emprestimos/image-quotas-pagas.webp",
        },
        sectionCards: {
          card1: {
            title: "Taxa sem efeitos retroativos",
            description:
              "A taxa de juro a aplicar a estes empréstimos será fixada anualmente pelo Conselho de Administração, mas sem efeitos retroativos sobre os empréstimos anteriormente concedidos.",
          },
          card2: {
            title: "Prazo 6, 12, 18 ou 24 meses",
            description:
              "A amortização do empréstimo será feita em 6, 12, 18 ou 24 prestações mensais e iguais, postecipadas, compreendendo capital e juros.",
          },
          card3: {
            title: "Taxa de 2%",
            description:
              "A taxa de juro anual não pode ser inferior à taxa de capitalização usada na modalidade acrescida de 2%.",
          },
        },
        sectionData: {
          icon: "/assets/images/emprestimos/icon-darkblue.svg",
          title:
            "Conte com o apoio da CPME para resolver necessidades financeiras de forma eficaz e sem surpresas!",
          textRegulamento:
            "Regulamento Empréstimo sobre Reservas Matemáticas e Quotas Pagas",
          linkPdf:
            "/assets/docs/regulamentos/emprestimos/Regulamento-Emprestimos-Reservas-Matematicas-Quotas-Pagas.pdf",
        },
      },
    },
  },
];

// **********************************************************************
// PAGE Seguros sociais
import { InsurancePageContent } from "./types";

export const segurosPageContent: InsurancePageContent[] = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SEGUROS",
            heading: "Proteja o seu futuro e o da sua família",
            descriptionText: "com os seguros sociais exclusivos",
            logo: "/assets/images/seguros-sociais/umbrella-cyan.webp",
            background:
              "/assets/images/seguros-sociais/bg-hero-seg-sociais.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "A CPME disponibiliza aos seus associados um conjunto de seguros sociais, garantindo proteção em diversas fases da vida.",
        descriptionText:
          "Com coberturas ajustadas às necessidades individuais, estes seguros oferecem uma segurança social e bem-estar para si e para a sua família.",
        image: "",
      },
    ],
    infoCard: [
      {
        id: 1,
        icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
        title:
          "Descubra as opções disponíveis e escolha o melhor solução para proteger o seu futuro.",
      },
    ],
    insurances: [
      {
        id: 1,
        imageUrl: "/assets/images/seguros-sociais/card-seguro1.webp",
        title: "Seguro de Vida Inteira",
        size: "lg",
        link: "seguro-vida-inteira",
      },
      {
        id: 2,
        imageUrl: "/assets/images/seguros-sociais/card-seguro2.webp",
        title: " Seguro de Reforma",
        size: "md",
        link: "seguro-reforma",
      },
      {
        id: 3,
        imageUrl: "/assets/images/seguros-sociais/card-seguro3.webp",
        title: "Seguro de Prosseguimento de Estudos",
        size: "lg",
        link: "seguro-prosseguimento-estudos",
      },
      {
        id: 4,
        imageUrl: "/assets/images/seguros-sociais/card-seguro4.webp",
        title: "Seguro de Maioridade",
        size: "md",
        link: "seguro-maioridade",
      },
      {
        id: 5,
        imageUrl: "/assets/images/seguros-sociais/card-seguro5.webp",
        title: "Seguro de Lazer",
        size: "lg",
        link: "seguro-lazer",
      },
      {
        id: 6,
        imageUrl: "/assets/images/seguros-sociais/card-seguro6.webp",
        title: "Capitais Diferidos com Opção",
        size: "lg",
        link: "capitais-diferidos",
      },
      {
        id: 7,
        imageUrl: "/assets/images/seguros-sociais/card-seguro7.webp",
        title: "Capital Repartido",
        size: "md",
        link: "capital-repartido",
      },
      {
        id: 8,
        imageUrl: "/assets/images/seguros-sociais/card-seguro8.webp",
        title: "Capital Duplo",
        size: "lg",
        link: "capital-duplo",
      },
    ],
    contentPages: {
      "seguro-vida-inteira": {
        label: "SEGUROS SOCIAIS",
        heading: "SEGURO DE VIDA INTEIRA",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-seg-vida-inteira.webp",
        sectionDescript: {
          title:
            "Proteja quem mais importa com um capital seguro para o futuro",
          description:
            "O Seguro de Vida Inteira da CPME foi criado para garantir a segurança dos seus familiares em caso de falecimento. Esta modalidade permite a entrega de um capital aos beneficiários designados ou aos herdeiros do subscritor, proporcionando estabilidade e tranquilidade num momento difícil.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-seg-vida-inteira.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description:
              "A soma das subscrições nesta modalidade com a totalidade das subscrições noutras modalidades que envolvam capitais a pagar por morte do mesmo subscritor não pode exceder 25.000 euros",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Sem riscos associados",
            description:
              "Esta modalidade pode ser subscrita por qualquer sócio que, à data da subscrição, tenha aprovação médica e não tenha completado 61 anos de idade. ",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "Empréstimos sobre as reservas matemáticas",
            description:
              "São permitidos empréstimos sobre as reservas matemáticas São permitidos empréstimos sobre as reservas matemáticas, nos termos do artigo 13º das Disposições Gerais deste Regulamento.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro garante o pagamento de um capital aos beneficiários escolhidos pelo subscritor ou, na sua ausência, aos seus herdeiros. A adesão pode ser feita em duas modalidades: Plano A, com capital e quotas fixas, ou Plano B, com capital e quotas que aumentam 5% ao ano em progressão geométrica.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "seguro-reforma": {
        label: "SEGUROS SOCIAIS",
        heading: "SEGURO DE REFORMA",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-seg-reforma.webp",
        sectionDescript: {
          title: "Porque a reforma é para ser vivida com tranquilidade",
          description:
            "O Seguro de Reforma da CPME é uma solução pensada para garantir um complemento financeiro ao subscritor quando este atinge os 65 anos, proporcionando um futuro mais estável e confortável. Este seguro é uma forma de cuidar do seu bem-estar e de se preparar para desfrutar desta nova fase da vida com maior liberdade.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-seg-reforma.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Plano B: Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Possibilidade de empréstimos sobre as quotas pagas",
            description:
              "O subscritor pode solicitar um empréstimo sobre as quotas já pagas, desde que o pedido seja feito antes dos 60 anos, sendo que o reembolso deve estar concluído até aos 61 anos.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "Sem riscos associados",
            description:
              "O prazo de amortização destes empréstimos deve ser tal que aquela tenha terminado antes do subscritor atingir a idade de 61 anos.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro garante o pagamento de um capital ao subscritor quando este atinge os 65 anos, funcionando como um complemento financeiro para a sua reforma. Caso o subscritor faleça antes dessa idade, o valor das quotas puras pagas é reembolsado aos seus herdeiros, assegurando uma proteção adicional para a família.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "seguro-prosseguimento-estudos": {
        label: "SEGUROS SOCIAIS",
        heading: "SEGURO DE PROSSEGUIMENTO DE ESTUDOS",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-seg-prosseg-estudos.webp",
        sectionDescript: {
          title: "O futuro dos mais novos merece ser protegido",
          description:
            "O Seguro de Prosseguimento de Estudos da CPME oferece um apoio vital para os jovens ao garantir doze prestações semestrais, com o objetivo de cobrir as despesas de um curso médio ou superior.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-seg-prosseguimento-estudos.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title:
              "Possibilidade de escolha da idade em que os pagamentos se devem iniciar",
            description:
              "O valor das novas semestralidades é calculado por capitalização, à taxa usada na modalidade.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: " São permitidos empréstimos sobre as reservas matemáticas",
            description:
              "Se, no início do pagamento das semestralidades, um empréstimo ainda não se encontrar totalmente amortizado, serão aquelas preferencial e integralmente usadas para efetuar a amortização.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "O beneficiário tem direito a doze prestações semestrais a partir dos 18 anos, destinadas a cobrir, em princípio, as despesas com um curso médio ou superior. Este seguro garante as condições necessárias para a formação profissional de um jovem, proporcionando apoio em caso de imprevistos que possam surgir ao longo do percurso académico.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "seguro-maioridade": {
        label: "SEGUROS SOCIAIS",
        heading: "SEGURO DE MAIORIDADE",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-seg-maioridade.webp",
        sectionDescript: {
          title: "Entrar na vida adulta com segurança e tranquilidade",
          description:
            "O Seguro de Maioridade da CPME é uma excelente forma de garantir um apoio ao jovem ao atingir a maioridade, aos 18 anos.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-seg-maioridade.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Sem riscos associados",
            description:
              "No caso de falecimento do jovem ou do subscritor antes de decorrido um ano sobre a subscrição, as quotas puras pagas serão devolvidas, respetivamente ao subscritor ou ao jovem, ficando a subscrição sem efeito.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: " São permitidos empréstimos sobre as reservas matemáticas",
            description:
              "São permitidos empréstimos sobre as reservas matemáticas, nos termos do artigo 13º das Disposições Gerais deste Regulamento.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro proporciona segurança e proteção, celebrando de forma simbólica e prática a maioridade e o início da vida adulta do jovem.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "seguro-lazer": {
        label: "SEGUROS SOCIAIS",
        heading: "SEGURO DE LAZER",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-seg-lazer.webp",
        sectionDescript: {
          title:
            "Ofereça um presente a si próprio e aproveite a vida com mais segurança",
          description:
            "O Seguro de Lazer da CPME foi criado para proporcionar ao subscritor um capital garantido caso atinja o fim de um prazo pré-determinado, em vida. Este seguro oferece flexibilidade na escolha do prazo, podendo optar entre 15, 20 ou 25 anos, permitindo uma personalização que se adapta às suas necessidades e planos de vida.",
          description2: "",
          imageUrl: "/assets/images/seguros-sociais/image-seg-lazer.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Escolha de prazos",
            description:
              "Opte entre 15, 20 ou 25 anos para o pagamento do capital.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "São permitidos empréstimos sobre as quotas pagas",
            description:
              "São permitidos empréstimos sobre as quotas pagas, nos termos do artigo 13º das Disposições Gerais deste Regulamento, desde que solicitados quando faltem mais de cinco anos para o subscritor atingir o fim do prazo escolhido.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro é uma forma de garantir um futuro mais tranquilo, permitindo ao subscritor usufruir de um presente financeiro no futuro, quando atingir o fim do prazo escolhido.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "capitais-diferidos": {
        label: "SEGUROS SOCIAIS",
        heading: "CAPITAIS DIFERIDOS COM OPÇÃO",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-capitais-diferidos.webp",
        sectionDescript: {
          title: "No poupar é que está o ganho",
          description:
            "A modalidade de Capitais Diferidos com Opção da CPME permite ao subscritor receber quantias periódicas, com base na sua subscrição inicial e no prazo escolhido.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-capitais-diferidos.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Escolha como quer receber",
            description:
              "A cada cinco anos, o subscritor pode escolher entre receber a fração do capital acumulado ou aplicá-la novamente em novas subscrições, com prazos variáveis.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "São permitidos empréstimos sobre as reservas matemáticas",
            description:
              "Se se vencer alguma fração antes do empréstimo estar totalmente amortizado, será a mesma usada para a respetiva amortização e só o remanescente será posto à disposição do subscritor.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Esta modalidade é ideal para quem deseja garantir uma entrega periódica de capital, com a possibilidade de reinvestir e flexibilizar os recebimentos ao longo do tempo, com a proteção de um seguro em caso de falecimento.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "capital-repartido": {
        label: "SEGUROS SOCIAIS",
        heading: "CAPITAL REPARTIDO",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-capital-repartido.webp",
        sectionDescript: {
          title:
            "Assegure estabilidade na sua vida, protegendo o futuro da sua família",
          description:
            "O Capital Repartido é uma modalidade de seguro da CPME que visa proporcionar ao subscritor a entrega periódica de determinadas quantias, com base na subscrição inicial e no prazo escolhido.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-capital-repartido.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Capital garantido",
            description: "Plano A: Capital e quotas constantes ou ",
            description2:
              "Capital e quotas crescentes 5% ao ano, em progressão geométrica.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Os subscritores podem legar o capital",
            description:
              "A partir de um ano após a subscrição, os subscritores podem legar o capital a beneficiários ou herdeiros.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "São permitidos empréstimos sobre as reservas matemáticas",
            description:
              "Se se vencer alguma fração antes do empréstimo estar totalmente amortizado, será a mesma usada para a respetiva amortização e só o remanescente será posto à disposição do subscritor.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro oferece uma alternativa segura e flexível para garantir estabilidade a longo prazo, com a possibilidade de deixar um legado à sua família.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
      "capital-duplo": {
        label: "SEGUROS SOCIAIS",
        heading: "CAPITAL DUPLO",
        descriptionText: "",
        background:
          "/assets/images/seguros-sociais/bg-hero-capital-duplo.webp",
        sectionDescript: {
          title: "A pensar no seu futuro e no da sua família",
          description:
            "O Capital Duplo é uma modalidade de seguro que visa proporcionar ao subscritor ou aos seus beneficiários um capital acordado, no final de um prazo previamente estabelecido.",
          description2: "",
          imageUrl:
            "/assets/images/seguros-sociais/image-capital-duplo.webp",
        },
        sectionCards: {
          card1: {
            id: 1,
            title: "Os subscritores podem legar o capital",
            description:
              "Os subscritores desta modalidade adquirem o direito de legarem o capital um ano após a subscrição. No caso de falecimento do subscritor antes de decorrido um ano sobre a subscrição, as quotas puras pagas serão devolvidas aos seus beneficiários ou herdeiros, ficando a subscrição sem efeito.",
            image: "/assets/images/globals/badge.svg",
          },
          card2: {
            id: 2,
            title: "Possibilidade de resgate",
            description:
              "Nesta modalidade é permitido o resgate, nos termos do artigo 12° das Disposições Gerais deste Regulamento.",
            image: "/assets/images/globals/badge.svg",
          },
          card3: {
            id: 3,
            title: "São permitidos empréstimos sobre as reservas matemáticas",
            description:
              "São permitidos empréstimos sobre as reservas matemáticas, nos termos do artigo 13° das Disposições Gerais deste Regulamento.",
            image: "/assets/images/globals/badge.svg",
          },
        },
        sectionData: {
          icon: "/assets/images/seguros-sociais/umbrella-cyan.svg",
          title:
            "Este seguro oferece uma solução completa para quem deseja garantir estabilidade tanto para si como para a sua família.",
          linkSubscricao:
            "/assets/docs/seguros-sociais/subscrever-seguros-novosmod_378.pdf",
          linkRegulamento:
            "/assets/docs/regulamentos/seguros/Regulamento_Novos-Seguros.pdf",
        },
      },
    },
  },
];

// PAGE Formulários
export const formulariosPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "SÓCIOS",
            heading: "Precisa de mais informação?",
            descriptionText:
              "Deverá enviar o pedido através do seguinte formulário",
            logo: "/assets/images/formularios/phone-lightpurple.webp",
            background:
              "/assets/images/formularios/bg-hero-formularios.webp",
          },
        ],
      },
    ],
    formsList: [
      {
        id: 1,
        model: "Mod. 02",
        title: "Formulário Inscrição Sócio",
        pdfDocument: "/assets/docs/formularios/Formulario-Socio.pdf",
      },
      {
        id: 2,
        model: "Mod. 03",
        title: "Regulamento Seguro de Maioridade",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Seguro-de-Maioridade.pdf",
      },
      {
        id: 3,
        model: "Mod. 04",
        title: "Regulamento - Capitais Diferidos com Opção",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Capitais-Diferidos-com-Opcao.pdf",
      },
      {
        id: 4,
        model: "Mod. 05",
        title:
          "Regulamento - Empréstimos sobre Reservas Matemáticas e Quotas Pagas",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Empréstimos-sobre-Reservas-Matematicas-e-Quotas-Pagas.pdf",
      },
      {
        id: 5,
        model: "Mod. 06",
        title: "Regulamento - Capital Duplo",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Capital-Duplo.pdf",
      },
      {
        id: 6,
        model: "Mod. 07",
        title: "Informação sobre Crédito à Habitação",
        pdfDocument:
          "/assets/docs/formularios/Informacao-Credito-a-Habitacao.pdf",
      },
      {
        id: 7,
        model: "Mod. 08",
        title: "Regulamento - Seguro de Prosseguimento de Estudos",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Seguro-de-Prosseguimento-de-Estudos.pdf",
      },
      {
        id: 8,
        model: "Mod. 09",
        title:
          "Crédito à Habitação - Normas de compra, construção e transferência de empréstimo",
        pdfDocument:
          "/assets/docs/formularios/Credito-a-Habitacao-Normas-de-compra-construcao-e-transferencia-de-emprestimo.pdf",
      },
      {
        id: 9,
        model: "Mod. 10",
        title: "Formulário Sócio",
        pdfDocument:
          "/assets/docs/formularios/Formulario-Socio-mod_378.pdf",
      },
      {
        id: 10,
        model: "Mod. 12",
        title: "Empréstimos Apoio à Família - Cuidados Saúde",
        pdfDocument:
          "/assets/docs/formularios/Emprestimos-Apoio-a-Familia.pdf",
      },
      {
        id: 11,
        model: "Regulamento",
        title: "Regulamento Novos Seguros",
        pdfDocument:
          "/assets/docs/formularios/Regulamento-Beneficios-Novos-Seguros.pdf",
      },
    ],
  },
];

//**********************************************************************************
// PAGE Arrendamento
export const house = "/assets/images/globals/house.svg";
export const arrendamentoPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "ARRENDAMENTO",
            heading: "Encontre o imóvel ideal para viver ",
            descriptionText: "",
            logo: "/assets/images/arrendamento/key-darkblue.webp",
            background:
              "/assets/images/arrendamento/bg-hero-arrendamento.webp",
          },
        ],
      },
    ],
    sectionCPME: [
      {
        heading:
          "Soluções de arrendamento: imóveis habitacionais e comerciais.",
        descriptionText:
          "A CPME disponibiliza uma oferta diversificada de imóveis, tanto habitacionais como comerciais, localizados em zonas estratégicas da capital.",
        descriptionText2: "Conheça as nossas soluções e andares disponíveis.",
        image: "/assets/images/arrendamento/image-arrendamento.webp",
      },
    ],
    advantages: [
      {
        id: 1,
        strongText: "Habitação em bons locais da capital",
        descriptionText:
          "facultando economia, comodidade e rapidez nas deslocações;",
        icon: "/assets/images/globals/badge.svg",
      },
      {
        id: 2,
        strongText: "Melhor qualidade de vida",
        descriptionText:
          "ao evitar endividamento por toda a vida ativa, ou eventuais obras imprevistas;",
        icon: "/assets/images/globals/badge.svg",
      },
      {
        id: 3,
        strongText: "O Arrendamento através da CPME",
        descriptionText: "proporciona ainda rendas de valor não especulativo.",
        icon: "/assets/images/globals/badge.svg",
      },
    ],
    infoText: [
      {
        id: 1,
        icon: "/assets/images/arrendamento/key-darkblue.svg",
        title:
          "Descubra as opções disponíveis e dê o próximo passo para o seu futuro:",
      },
    ],
    rules:
      "/assets/docs/arrendamento/Regras-Arrendamento-2024_MC_v_25_10_2024.pdf",
    propertiesArrendamento: [
      {
        id: 1,
        type: "arrendamento",
        segment: "Habitacional",
        title: "Av. EUA 52 – 8º DTO",
        address: "Av. EUA 52 – 8º DTO",
        location: "Lisboa",
        lat: 38.74974936409276,
        lng: -9.137780886504636,
        bathrooms: 1,
        tipology: "T2",
        floor: "8º DTO",
        squareMeters: 111,
        ernergetic: "C",
        publish: "18/07",
        monthlyRent: "1150",
        images: [
          "/assets/images/arrendamento/habitacional/P31/1.webp",
          "/assets/images/arrendamento/habitacional/P31/2.webp",
          "/assets/images/arrendamento/habitacional/P31/3.webp",
          "/assets/images/arrendamento/habitacional/P31/4.webp",
          "/assets/images/arrendamento/habitacional/P31/5.webp",
          "/assets/images/arrendamento/habitacional/P31/6.webp",
          "/assets/images/arrendamento/habitacional/P31/7.webp",
          "/assets/images/arrendamento/habitacional/P31/8.webp",
          "/assets/images/arrendamento/habitacional/P31/9.webp",
          "/assets/images/arrendamento/habitacional/P31/10.webp",
          "/assets/images/arrendamento/habitacional/P31/11.webp",
          "/assets/images/arrendamento/habitacional/P31/12.webp",
          "/assets/images/arrendamento/habitacional/P31/13.webp",
          "/assets/images/arrendamento/habitacional/P31/14.webp",
          "/assets/images/arrendamento/habitacional/P31/15.webp",
          "/assets/images/arrendamento/habitacional/P31/16.webp",
          "/assets/images/arrendamento/habitacional/P31/17.webp",
          "/assets/images/arrendamento/habitacional/P31/18.webp",
          "/assets/images/arrendamento/habitacional/P31/19.webp",
          "/assets/images/arrendamento/habitacional/P31/20.webp",
          "/assets/images/arrendamento/habitacional/P31/21.webp",
          "/assets/images/arrendamento/habitacional/P31/22.webp",
          "/assets/images/arrendamento/habitacional/P31/23.webp",
        ],
      },
      {
        id: 2,
        type: "arrendamento",
        segment: "Habitacional",
        title: "Rua Sampaio Pina, 2/14, 7º DTO",
        address: "Rua Sampaio Pina, 2/14, 7º DTO",
        location: "Lisboa",
        lat: 38.72796471196228,
        lng: -9.15631555766976,
        bathrooms: 2,
        tipology: "T4",
        floor: "7º DTO",
        squareMeters: 130,
        ernergetic: "C",
        publish: "13/05",
        monthlyRent: "1100",
        images: [
          "/assets/images/arrendamento/habitacional/P10/capa.webp",
          "/assets/images/arrendamento/habitacional/P10/1.webp",
          "/assets/images/arrendamento/habitacional/P10/2.webp",
          "/assets/images/arrendamento/habitacional/P10/3.webp",
          "/assets/images/arrendamento/habitacional/P10/4.webp",
          "/assets/images/arrendamento/habitacional/P10/5.webp",
          "/assets/images/arrendamento/habitacional/P10/6.webp",
          "/assets/images/arrendamento/habitacional/P10/7.webp",
          "/assets/images/arrendamento/habitacional/P10/8.webp",
          "/assets/images/arrendamento/habitacional/P10/9.webp",
          "/assets/images/arrendamento/habitacional/P10/10.webp",
          "/assets/images/arrendamento/habitacional/P10/11.webp",
          "/assets/images/arrendamento/habitacional/P10/12.webp",
          "/assets/images/arrendamento/habitacional/P10/13.webp",
          "/assets/images/arrendamento/habitacional/P10/14.webp",
          "/assets/images/arrendamento/habitacional/P10/15.webp",
          "/assets/images/arrendamento/habitacional/P10/16.webp",
          "/assets/images/arrendamento/habitacional/P10/17.webp",
          "/assets/images/arrendamento/habitacional/P10/18.webp",
          "/assets/images/arrendamento/habitacional/P10/19.webp",
          "/assets/images/arrendamento/habitacional/P10/20.webp",
          "/assets/images/arrendamento/habitacional/P10/21.webp",
          "/assets/images/arrendamento/habitacional/P10/22.webp",
        ],
      },
      {
        id: 3,
        type: "arrendamento",
        segment: "Comercial",
        title: "Av. Estados Unidos América, 130",
        address: "Av. Estados Unidos América, 130",
        location: "Lisboa",
        lat: 38.74949464685095,
        lng: -9.1463501464342,
        bathrooms: 0,
        tipology: "Comercial",
        floor: "R/C - Loja B",
        squareMeters: 320,
        ernergetic: "D",
        publish: "13/01",
        monthlyRent: "2200",
        images: [
          "/assets/images/arrendamento/comercial/P35/P35-capa.webp",
        ],
      },
      {
        id: 4,
        type: "arrendamento",
        segment: "Comercial",
        title: "Rua Vitor Córdon 8/12",
        address: "Rua Vitor Córdon 8/12",
        location: "Lisboa",
        lat: 38.708219608769475,
        lng: -9.14055635335251,
        bathrooms: 2,
        tipology: "Comercial",
        floor: "4º Andar",
        squareMeters: 375.6,
        ernergetic: "D",
        publish: "13/01",
        monthlyRent: "Sob Consulta",
        images: [
          "/assets/images/arrendamento/comercial/P29-4andar/P29-4-capa.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/01.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/02.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/03.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/04.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/05.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/06.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/07.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/08.webp",
          "/assets/images/arrendamento/comercial/P29-4andar/09.webp",
        ],
      },
      {
        id: 5,
        type: "arrendamento",
        segment: "Comercial",
        title: "Rua Vitor Córdon 8/12",
        address: "Rua Vitor Córdon 8/12",
        location: "Lisboa",
        lat: 38.708219608769475,
        lng: -9.14055635335251,
        bathrooms: 2,
        tipology: "Comercial",
        floor: "3º Andar",
        squareMeters: 375.6,
        ernergetic: "D",
        publish: "13/01",
        monthlyRent: "Sob Consulta",
        images: [
          "/assets/images/arrendamento/comercial/P29-3andar/P29-3-capa.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/01.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/02.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/03.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/04.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/05.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/06.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/07.webp",
          "/assets/images/arrendamento/comercial/P29-3andar/08.webp",
        ],
      },
      {
        id: 6,
        type: "arrendamento",
        segment: "Comercial",
        title: "Rua Nova Da Trindade / Largo Do Chiado, 1, 5º U/T.",
        address: "Rua Nova Da Trindade / Largo Do Chiado, 1, 5º U/T.",
        location: "Lisboa",
        lat: 38.710841672810545,
        lng: -9.142432078520411,
        bathrooms: 3,
        tipology: "T4",
        floor: "5º U/T",
        squareMeters: 130,
        ernergetic: "E",
        publish: "13/01",
        monthlyRent: "Sob Consulta",
        images: [
          "/assets/images/arrendamento/comercial/P01-5UT/P01-5UT-capa.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/01.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/02.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/03.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/04.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/05.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/06.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/07.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/08.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/09.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/10.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/11.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/12.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/13.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/14.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/15.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/16.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/17.webp",
          "/assets/images/arrendamento/comercial/P01-5UT/18.webp",
        ],
      },
      {
        id: 7,
        type: "arrendamento",
        segment: "Comercial",
        title: "Rua Nova Da Trindade / Largo Do Chiado, 1, 5º 1º ESQ",
        address: "Rua Nova Da Trindade / Largo Do Chiado, 1, 5º 1º ESQ",
        location: "Lisboa",
        lat: 38.710841672810545,
        lng: -9.142432078520411,
        bathrooms: 2,
        tipology: "T5",
        floor: "1º ESQ",
        squareMeters: 330,
        ernergetic: "C",
        publish: "13/01",
        monthlyRent: "Sob Consulta",
        images: [
          "/assets/images/arrendamento/comercial/P01-5X/P01-5X-capa.webp",
        ],
      },
    ],
  },
];

// *******************************************************************
// PAGE Noticias
import { NewsPageContent } from "./types";
export const newsPageContent: NewsPageContent[] = [
  {
    content: [
      {
        heroContent: [
          {
            label: "NOTÍCIAS",
            heading: "Notícias",
            background: "/assets/images/noticias/bg-hero-noticias.webp",
          },
        ],
      },
    ],
    contentNoticia: {
      "tomada-de-posse-novos-orgaos": {
        label: "NOTÍCIA",
        heading: "Tomada de Posse dos Novos Órgãos Sociais",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "tomada-de-posse-novos-orgaos",
            date: "09 JUN 2025",
            banner: "/assets/images/noticias/not-tomada_posse.webp",
            title: "Tomada de Posse dos Novos Órgãos Sociais",
            excerpt:
              "Tomaram posse na sexta feira, dia 23 de Maio, os novos corpos sociais da CPME",
            content: [
              "Tomaram posse na sexta feira, dia 23 de Maio, os novos corpos sociais, eleitos em Assembleia Geral Eleitoral, em Dezembro último. A sessão solene foi presidida pelo Sr. Secretário Geral do Ministério da Educação, Dr. Raúl Capaz Coelho.",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/not-tomada_posse.webp"],
          },
        ],
      },
      "pascoa-2025": {
        label: "NOTÍCIA",
        heading: "Encerramento dos Serviços - Páscoa",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "pascoa-2025",
            date: "14 abr 2025",
            banner: "/assets/images/noticias/pascoa2025.webp",
            title: "Encerramento dos Serviços - Páscoa",
            excerpt:"Na próxima quinta feira, dia 17 de Abril, os serviços da CPME estarão encerrados a partir das 12:30",
            content: [
              "Na próxima quinta feira, dia 17 de Abril, os serviços da CPME estarão encerrados a partir das 12:30, retomando o normal funcionamento na segunda feira seguinte, dia 21 de Abril.",
              "Aproveitamos para desejar a todos os nossos associados uma Boa e Santa Páscoa! ",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/pascoa2025.webp"],
          },
        ],
      },
      "assembleia-geral-ordinaria-2025": {
        label: "NOTÍCIA",
        heading: "Assembleia Geral Ordinária",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "assembleia-geral-ordinaria-2025",
            date: "06 mar 2025",
            banner: "/assets/images/noticias/placeholder-noticias.webp",
            title: "Assembleia Geral Ordinária de 28 de Março de 2025",
            excerpt:
              "Nos termos do disposto no n.º 1, alínea a) do artigo 18.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de agosto de 1946 ...",
            content: [
              "CONVOCATÓRIA",
              "Nos termos do disposto no n.º 1, alínea a) do artigo 18.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de agosto de 1946, na redação dada pelo Decreto-Lei n.º 193/97, de 29 de julho, convoco a Assembleia Geral Ordinária da Caixa de Previdência do Ministério da Educação, a reunir em primeira Convocação no dia 28 de março de 2025, pelas 17h 30m, na sede da Caixa - Praça D. Pedro IV, n.º 45, 4.º andar, em Lisboa.",
              "Caso não se encontrem presentes metade dos associados abrangidos pelas disposições estatutárias, convoco a mesma Assembleia a reunir em segunda Convocação, no dia 28 de março de 2025, pelas 18h, podendo então deliberar com qualquer número de associados.",
              "Ordem de trabalhos",
              "Discussão e votação do Relatório e Contas e Parecer do Conselho Fiscal, relativos ao exercício de 2024.",
              "Os documentos relativos ao relatório e às contas podem ser examinados pelos associados, na sede da Caixa – Praça D. Pedro IV, n.º 45, 1.º andar, em Lisboa - a partir de 15 de março de 2025.",
              "De acordo com as disposições estatutárias só podem fazer parte da Assembleia Geral os associados que se encontrem na situação prevista no artigo 15.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de agosto de 1946, na redação dada pelo Decreto-Lei n.º 193/97, de 29 de julho.",
              "Lisboa e Caixa de Previdência do Ministério da Educação, 20 de fevereiro de 2025.",
              "O Presidente da mesa da Assembleia Geral",
              "SECRETÁRIO-GERAL DA EDUCAÇÃO E CIÊNCIA",
              "Raúl Capaz Coelho",
            ],
            subject: "Assembleia Geral Ordinária",
            images: [],
          },
        ],
      },
      "cpme-redes-sociais": {
        label: "NOTÍCIA",
        heading: "CPME já está nas Redes Socias",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "cpme-redes-sociais",
            date: "02 mar 2025",
            banner: "/assets/images/noticias/cpme-redes-sociais.webp",
            title: "CPME já está nas Redes Socias",
            excerpt:
              "Pode acompanhar todas as novidades, agora no LinkedIn, Facebook e Instagram!",
            content: [
              "",
              "LinkedIn - https://www.linkedin.com/company/caixa-de-previdência-do-ministério-da-educação",
              "Facebook - https://www.facebook.com/share/165wXN7SPF/",
              "Instagram - https://www.instagram.com/cpme.pt/?igsh=MTM3NDRvczNhY3V4Zg%3D%3D#",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/cpme-redes-sociais1.webp"],
          },
        ],
      },
      "boas-festas-feliz-2025": {
        label: "NOTÍCIA",
        heading: "Boas Festas e Feliz 2025",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "boas-festas-feliz-2025",
            date: "04 dez 2024",
            banner: "/assets/images/noticias/natal-2024.webp",
            title: "Boas Festas e Feliz 2025",
            excerpt: "Boas Festas e um Feliz 2025",
            content: ["São os votos da CPME, para si e para a sua família!"],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/natal-2024.webp"],
          },
        ],
      },
      "assembleia-eleitoral-2024": {
        label: "NOTÍCIA",
        heading: "Assembleia Geral Eleitoral - 17/12/2024",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "assembleia-eleitoral-2024",
            date: "17 dez 2024",
            banner: "/assets/images/noticias/placeholder-noticias.webp",
            title: "Assembleia Geral Eleitoral - 17/12/2024",
            excerpt:
              "Nos termos estatutários a Assembleia Geral Eleitoral reunirá no dia 17 de dezembro próximo",
            content: [
              "Prezado Consócio:",
              "Nos termos estatutários a Assembleia Geral Eleitoral reunirá no dia 17 de dezembro próximo futuro, conforme convocação que se remete em anexo, para eleição dos Órgãos Sociais da Caixa de Previdência do Ministério da Educação que exercerão o mandato no período de 2025 a 2027.",
              "Igualmente se informa que a única lista apresentada, para sufrágio, ao Presidente da Mesa da Assembleia Geral, nos termos do artigo 17.º, número 3, do Decreto-Lei n.º 193/97, de 29 de julho, consta do verso desta circular e encontra-se afixada na sede da Caixa e publicitada no site em www.cpme.pt.",
              "A Assembleia Eleitoral funcionará no 4º andar da sede da Caixa – Praça D. Pedro IV (Rossio), nº 45, em Lisboa, no período das 9 às 19 horas.",
              "Aproveito a oportunidade para salientar a V. Ex.ª a importância deste acto como manifestação associativa, apelando à sua participação, votando.",
              "ELEIÇÃO DOS ÓRGÃOS SOCIAIS PARA O TRIÉNIO 2025/2027",
              "LISTA A",
              "Lista apresentada pelo Conselho de Administração da Caixa de Previdência do Ministério da Educação, nos termos do n.º 3 do artigo 7.º dos estatutos aprovados pelo Decreto-Lei n.º 193/97 de 29 de julho.",
              "SECRETÁRIOS DA MESA DA ASSEMBLEIA GERAL",
              "EFETIVOS",
              "António Manuel Dias Farinha Sócio n.º 22 605",
              "José Carlos Simões Fernandes Sócio n.º 25 264",
              "SUPLENTES",
              "Fernanda Margarida Coutinho Lopes Cabral Sócia n.º 32 125",
              "Maria Manuel Branco Calvet Magalhães Gomes Ricardo Sócia n.º 21 599",
              "CONSELHO DE ADMINISTRAÇÃO",
              "EFETIVOS",
              "PRESIDENTE - Cristina Maria Carapeto Pereira Sócia n.º 31 190",
              "Emídio José Simões Rodrigues Sócio n.º 31 373",
              "José Alberto Alves Sousa Sócio n.º 28 411",
              "Libânia Madalena Mateus Morais Mamede Sócia n.º 20 258",
              "Luís Manuel Guerra Silva Rosa Sócio n.º 26 018",
              "SUPLENTES",
              "Albertina Olímpia Pereira Mateus Sócia n.º 26 582",
              "António Manuel Perneco Dias Sócio n.º 29 017",
              "CONSELHO FISCAL",
              "EFETIVOS",
              "Ana Maria Benavente Silva Nuno Sócia n.º 32 126",
              "Daniel Marinho Soares Oliveira Sócio n.º 25 492",
              "Victor Manuel Simas Sócio n.º 31 367",
              "SUPLENTES",
              "Henrique Alberto Moura Portugal Sobral Sócio n.º 30 234",
              "Jorge Carvalho Arroteia Sócio n.º 25 249",
              "LISTA ORGANIZADA POR ORDEM ALFABÉTICA",
            ],
            subject: "Assembleia Geral Ordinária",
            images: [
              "/assets/images/seguros-sociais/card-seguro2.webp",
              "/assets/images/seguros-sociais/card-seguro2.webp",
              "/assets/images/seguros-sociais/card-seguro2.webp",
            ],
          },
        ],
      },
      "dia-mae-2024": {
        label: "NOTÍCIA",
        heading: "Feliz Dia da Mãe",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "pascoa-2024",
            date: "03 mai 2024",
            banner: "/assets/images/noticias/dia-mae-2024.webp",
            title: "Feliz Dia da Mãe!",
            excerpt: "A CPME deseja um Feliz Dia da Mãe!",
            content: [
              "De patins, de bicicleta,",
              "de carro, moto, avião,",
              "nas asas da borboleta",
              "e nos olhos do gavião",
              "de barco, de velocípedes",
              "a cavalo num trovão",
              "nas cores do arco-íris",
              "no rugido de um leão",
              "na graça de um golfinho",
              "e no germinar do grão",
              "teu nome eu trago, mãe",
              "na palma da minha mão.",
              "Sérgio Caparelli",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/dia-mae-2024.webp"],
          },
        ],
      },
      "pascoa-2024": {
        label: "NOTÍCIA",
        heading: "Feliz Páscoa",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "pascoa-2024",
            date: "26 mar 2024",
            banner: "/assets/images/noticias/pascoa2024.webp",
            title: "Feliz Páscoa!",
            excerpt:
              "Os serviços encerram pelas 12h30, quinta feira, dia 28 de Março.",
            content: [
              "Os serviços encerram pelas 12h30, quinta feira, dia 28 de Março.",
              "A CPME deseja a todos uma Páscoa Feliz!",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/pascoa2024.webp"],
          },
        ],
      },
      "assembleia-geral-ordinaria21-03-24": {
        label: "NOTÍCIA",
        heading: "Encerramento dos Serviços - Carnaval",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "assembleia-geral-ordinaria21-03-24",
            date: "21 mar 2024",
            banner: "/assets/images/noticias/placeholder-noticias.webp",
            title: "Assembleia Geral Ordinária de 21 de Março de 2024",
            excerpt:
              "Nos termos do disposto no n.º 1, alínea a) do artigo 18.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de agosto de 1946, na redação dada pelo Decreto-Lei n.º193/97...",
            content: [
              "CONVOCATÓRIA",
              "Nos termos do disposto no n.º 1, alínea a) do artigo 18.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de agosto de 1946, na redação dada pelo Decreto-Lei n.º193/97, de 29 de julho, convoco a Assembleia Geral Ordinária da Caixa de Previdência do Ministério da Educação, a reunir em primeira Convocação no dia 21 de Março de 2024, pelas 17h 30m, na sede da Caixa - Praça D. Pedro IV, n.º 45, 4.º andar, em Lisboa.",
              "Caso não se encontrem presentes metade dos associados abrangidos pelas disposições estatutárias, convoco a mesma Assembleia a reunir em segunda Convocação, no dia 21 de Março de 2024, pelas 18h, podendo então deliberar com qualquer número de associados.",
              "ORDEM DE TRABALHOS",
              "Discussão e votação do Relatório e Contas e Parecer do Conselho Fiscal, relativos ao exercício de 2023.",
              "Os documentos relativos ao relatório e às contas podem ser examinados pelos associados, na sede da Caixa – Praça D. Pedro IV, n.º 45, 1.º andar, em Lisboa - a partir de 15 de Março de 2024.",
              "De acordo com as disposições estatutárias só podem fazer parte da Assembleia Geral os associados que se encontrem na situação prevista no artigo 15.º dos Estatutos, aprovados pelo Decreto-Lei n.º 35 781 de 5 de Agosto de 1946, na redação dada pelo Decreto-Lei n.º 193/97, de 29 de Julho.",
              "Lisboa e Caixa de Previdência do Ministério da Educação, 20 de Fevereiro de 2024",
              "O Presidente da Mesa da Assembleia Geral",
              "SECRETÁRIO-GERAL DA EDUCAÇÃO E CIÊNCIA",
              "Raúl Capaz Coelho",
            ],
            subject: "Assembleia Geral Ordinária",
            images: [],
          },
        ],
      },
      "encerramento-carnaval": {
        label: "NOTÍCIA",
        heading: "Encerramento dos Serviços - Carnaval",
        descriptionText: "",
        background: "/assets/images/noticias/bg-hero-noticias.webp",
        content: [
          {
            id: Math.random(),
            slug: "encerramento-carnaval",
            date: "07 fev 2024",
            banner: "/assets/images/noticias/encerramento-carnaval.webp",
            title: "Encerramento dos Serviços - Carnaval",
            excerpt:
              "Terça feira, dia 13 de Fevereiro, os serviços da CPME estarão encerrados durante todo o dia.",
            content: [
              "Terça feira, dia 13 de Fevereiro, os serviços da CPME estarão encerrados durante todo o dia, retomando o normal funcionamento no dia seguinte (quarta feira), dia 14 de Fevereiro.",
              "Aproveitamos para desejar a todos os nossos associados um Feliz Carnaval!",
            ],
            subject: "CPME",
            images: ["/CPME/assets/images/noticias/encerramento-carnaval.webp"],
          },
        ],
      },
    },
  },
];

// *******************************************************************
// PAGE Contactos
export const bgArrendamento = "/assets/images/home/bg-arrendamento.webp";
export const contactsPageContent = [
  {
    content: [
      {
        heroContent: [
          {
            label: "CONTACTOS",
            heading: "Entre em contacto",
            logo: "/assets/images/contactos/contacts-hero.webp",
          },
        ],
      },
    ],
    contactList: [
      {
        id: 1,
        label: "Localização",
        title: "Caixa de Previdência do Ministério da Educação",
        description: "Praça D. Pedro IV (Rossio), 45 - 1º a 5º 1149-069 Lisboa",
      },
      {
        id: 2,
        label: "Atendimento",
        title: "Praça D. Pedro IV (Rossio), 45 - 1º a 5º 1149-069 Lisboa",
      },
      {
        id: 3,
        label: "NIF",
        title: "506 146 197",
      },
      {
        id: 4,
        label: "Telefone",
        title: "213 243 810",
        description: "(chamada rede fixa nacional)",
      },
      {
        id: 5,
        label: "Horário",
        title: "Das 9h30 às 16h30",
      },
      {
        id: 6,
        label: "Email",
        title: "cpme@cpme.pt",
      },
    ],
    coordinates: {
      lat: 38.713942,
      lng: -9.13993,
    },
  },
];

// *******************************************************************
// SEARCH GLOBAL
import { globalSearch } from "./globalSearch";
export const searchIndex = globalSearch;

// *******************************************************************
// PAGE Politica de privacidade
export const privacyPolicePageContent = {
  heroContent: [
    {
      label: "LEGAL",
      heading: "Política de Privacidade",
      descriptionText: "Consulte aqui a nossa Política de Privacidade",
    },
  ],
  featureSection: [
    {
      label: "CPME",
      heading: "Políticas de Privacidade",
      descriptionText:
        "A Política de Proteção de Dados da Caixa de Previdência do Ministério da Educação (CPME) aplica-se exclusivamente à recolha e tratamento de dados pessoais sobre os quais a CPME é responsável, tanto pelo respetivo tratamento, no âmbito dos serviços prestados nomeadamente aos seus associados, beneficiários, inquilinos e trabalhadores, bem como nas diversas interações com os diferentes titulares de dados.",
      descriptionText2:
        "Os dados pessoais da responsabilidade da CPME são recolhidos e tratados no rigoroso cumprimento do disposto na legislação em vigor, em matéria de proteção de dados pessoais, designadamente o Regulamento nº 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016 (RGPD).",
    },
  ],
  policies: [
    {
      section: "OS DADOS PESSOAIS",
      description: [
        "Dados pessoais são informações relativas a uma pessoa identificada ou identificável. É considerada identificável a pessoa que possa ser identificada direta ou indiretamente. Também constituem dados pessoais o conjunto de informações distintas que podem levar à identificação de uma determinada pessoa.",
      ],
      titleList: "Exemplos de dados pessoais:",
      list: [
        "Nome e apelido;",
        "Endereço de uma residência;",
        "Endereço de correio eletrónico;",
        "Número de um cartão de identificação;",
        "Dados de localização (por exemplo, a função de dados de localização num telemóvel);",
        "Endereço IP (protocolo de internet);",
        "Cookies;",
        "Identificador de publicidade do seu dispositivo;",
        "Dados detidos por um hospital ou médico, que permitam identificar uma pessoa de forma inequívoca;",
        "Som ou imagem.",
        "um ou mais elementos específicos da sua identidade física, fisiológica, genética, mental, económica, cultural ou social",
      ],
    },
    {
      section: "O TRATAMENTO DE DADOS PESSOAIS",
      description: [
        "O tratamento de dados pessoais consiste numa operação ou num conjunto de operações efetuadas sobre dados pessoais ou conjuntos de dados pessoais, através de meios automatizados ou não automatizados, tais como a recolha, o registo, a organização, a estruturação, a conservação, a adaptação ou alteração, a recuperação, a consulta, a utilização, a divulgação por transmissão, difusão ou qualquer outra forma de disponibilização, comparação, interconexão, a limitação, o apagamento ou a destruição.",
      ],
    },
    {
      section: "O ENCARREGADO DE PROTEÇÃO DE DADOS",
      description: [],
      titleList:
        "A CPME designou um Encarregado de Proteção de Dados (EPD), que:",
      list: [
        "Presta informação e aconselha o responsável pelo tratamento, o subcontratante, bem como os trabalhadores que tratem os dados, sobre as suas obrigações no âmbito da privacidade e proteção de dados;",
        "Controla a conformidade do tratamento de dados com as normas aplicáveis;",
        "Presta aconselhamento, quando tal lhe for solicitado, no que respeita à avaliação de impacto sobre a proteção de dados e controla a sua realização;",
        "É um ponto de contacto do titular de dados pessoais para esclarecimento de questões relativas ao tratamento dos seus dados pela CPME;",
        "É também o ponto de contacto para a autoridade de controlo (Comissão Nacional de Proteção de Dados – CNPD) sobre questões relacionadas com o tratamento, cooperando com esta entidade.",
      ],
      titleList2:
        "Para além do disposto nos artigos 37.º a 39.º do RGPD, são funções do EPD:",
      list2: [
        "Assegurar a realização de auditorias, quer periódicas, quer não programadas;",
        "Sensibilizar os utilizadores para a importância da deteção antecipada de incidentes de segurança e para a necessidade de informar imediatamente o responsável pela segurança;",
        "Assegurar as relações com os titulares dos dados nas matérias abrangidas pelo RGPD e pela legislação nacional em matéria de proteção de dados.",
      ],
      endSection:
        "O EPD poderá ser contactado através de carta enviada para a Caixa de Previdência do Ministério da Educação, dirigida ao cuidado do Encarregado de Proteção de Dados, Praça D. Pedro IV, nº 45, 1149-069 Lisboa, ou do endereço eletrónico: rgpd@cpme.pt",
    },
    {
      section: "OS DADOS PESSOAIS TRATADOS",
      description: [
        "A CPME, no âmbito das atividades que desenvolve, procede ao tratamento dos dados pessoais necessários à prestação dos serviços solicitados e ao cumprimento das obrigações legais e estatutárias, recolhendo e tratando vários tipos de dados, incluindo dados de identificação (nome, números de documentos identificação, data de nascimento), dados de contacto (morada, endereço eletrónico, número de telefone), situação familiar (estado civil, número de dependentes), situação profissional (profissão, identificação da entidade empregadora), situação fiscal (número de identificação fiscal), dados bancários e financeiros (identificação de contas bancárias, movimentos e histórico de crédito).",
        "Em virtude, do escopo social da CPME e do âmbito de valências que compreende, em situações especificas, devidamente legitimadas por via de consentimento explicito do titular dos dados ou decorrente do cumprimento de obrigação legal, são tratados dados sensíveis, mormente, dados biométricos e dados de saúde.",
        "Caso exista consentimento prévio do titular de dados, este poderá ser retirado a qualquer momento, sem que, contudo, a licitude do tratamento efetuado com base no consentimento previamente dado seja comprometida, nem o tratamento posterior dos mesmos dados, se fundamentado noutra base legal.",
        "Os dados pessoais identificados nos diferentes formulários disponibilizados como sendo de fornecimento obrigatório são indispensáveis à prestação de serviços pela CPME, pelo que, a omissão ou inexatidão desses dados ou demais informações prestadas pelo associado/beneficiário são da sua inteira responsabilidade.",
      ],
    },
    {
      section: "COMO SÃO RECOLHIDOS OS DADOS PESSOAIS",
      description: [
        "A CPME recolhe os dados pessoais por contacto direto presencial, telefónico ou por escrito.",
        "Os dados pessoais recolhidos podem ser tratados informaticamente e de forma automatizada ou não automatizada, garantindo em todos os casos o estrito cumprimento da legislação de proteção de dados pessoais, sendo armazenados em bases de dados específicas, criadas para o efeito e, em situação alguma, os dados recolhidos serão utilizados para outra finalidade que não seja aquela para a qual foram recolhidos ou dado o consentimento por parte do titular dos dados.",
      ],
    },
    {
      section:
        "FINALIDADES DO TRATAMENTO DOS DADOS PESSOAIS E RESPETIVOS FUNDAMENTOS JURÍDICOS",
      description: [],
      titleList:
        "A CPME compromete-se a assegurar que os dados do titular por si tratados são:",
      list: [
        "Objeto de um tratamento lícito, leal e transparente em relação ao titular;",
        "Recolhidos para finalidades determinadas, explícitas e legítimas, não sendo tratados posteriormente de uma forma incompatível com essas finalidades;",
        "EAdequados, pertinentes e limitados ao que é necessário relativamente às finalidades para as quais são tratados;",
        "Exatos e atualizados sempre que necessário;",
        "Conservados de uma forma que permita a identificação dos titulares dos dados apenas durante o período necessário para as finalidades para as quais são tratados;",
        "Tratados de uma forma que garante a sua segurança, incluindo a proteção contra o seu tratamento não autorizado ou ilícito e contra a sua perda, destruição ou danificação acidental, sendo adotadas as medidas técnicas ou organizativas adequadas.",
      ],
      endSection: [
        "Os dados pessoais recolhidos destinam-se à gestão da relação associativa/contratual, à prestação dos serviços contratados, à adequação dos serviços às necessidades e interesses dos titulares de dados, bem como ao cumprimento de obrigações legais impostas à CPME.",
        "Considerando a relação existente com o titular de dados, designadamente, do ponto de vista associativo, os dados pessoais são tratados para divulgação das informações institucionais da CPME.",
        "Os dados pessoais são ainda tratados para efeitos de divulgação de novidades, promoções, campanhas e oportunidades referentes aos produtos e serviços disponibilizados pela CPME e pelos seus parceiros, caso o respetivo titular o tenha autorizado, por via de consentimento.",
        "O consentimento referido, deve ser prévio, livre, informado, específico e inequívoco, manifestado numa declaração escrita ou através da validação de uma opção.",
        "Caso o titular de dados pessoais não pretenda continuar a rececionar estas comunicações pode, a qualquer momento, retirar o seu consentimento à utilização dos seus dados para fins de “marketing”.",
      ],
    },
  ],
};
