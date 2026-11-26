// Dados oficiais do Quiz ECA Digital — extraídos fielmente do PDF OBECA / Intervozes

const QUIZ_DATA = [
  {
    id: 1,
    illustration: "botanicals",
    answerHeaderStyle: "sun",
    question: "COMO MEUS PAIS VÃO FAZER A SUPERVISÃO PARENTAL?",
    options: [
      {
        text: "Os apps devem oferecer ferramentas para configurar a conta, limitar compras, ver o tempo de uso e identificar perfis de adultos com quem você conversa — respeitando sua idade e com aviso visível.",
        correct: true
      },
      {
        text: "Os pais ganham poder ilimitado dentro dos apps, e a supervisão funciona de forma escondida, sem nenhum aviso visível para você.",
        correct: false
      },
      {
        text: "Os apps não precisam oferecer ferramentas de supervisão: eles só podem bloquear compras, sem permitir ver o tempo de uso ou gerenciar a privacidade.",
        correct: false
      }
    ],
    quickAnswer: [
      "Os apps precisam oferecer ferramentas para os pais configurarem sua conta, limitarem compras, verem quanto tempo você usa e saberem com quais adultos você conversa. Os pais não ganham poder ilimitado, e as ferramentas devem respeitar sua idade."
    ],
    legalNotes: [
      'Art. 18: as ferramentas devem permitir aos pais "visualizar, configurar e gerenciar as opções de conta e privacidade", "restringir compras e transações financeiras", "identificar os perfis de adultos com os quais a criança ou o adolescente se comunica" e "acessar métricas consolidadas do tempo total de uso".',
      'Art. 17, III: o app deve exibir "aviso claro e visível quando as ferramentas de supervisão parental estiverem em vigor". Ou seja, você sabe quando está sendo supervisionado.'
    ]
  },
  {
    id: 2,
    illustration: "moons",
    answerHeaderStyle: "sun",
    question: "VOU TER PRIVACIDADE PRA FALAR DE ASSUNTOS ÍNTIMOS?",
    options: [
      {
        text: "Em parte: as ferramentas permitem ver perfis de adultos com quem você fala, mas não preveem ler o conteúdo das conversas, e devem considerar sua autonomia crescente.",
        correct: true
      },
      {
        text: "Não: a lista de ferramentas do Art. 18 obriga os apps a liberarem o conteúdo completo de todas as suas conversas para os pais.",
        correct: false
      },
      {
        text: "Totalmente: a lei proíbe expressamente que seus pais olhem seu celular e impede que vejam com quais perfis de adultos você conversa.",
        correct: false
      }
    ],
    quickAnswer: [
      "Em parte. A lista de ferramentas do Art. 18 inclui ver com quem você fala (perfis de adultos), mas não prevê ler o conteúdo das suas conversas. Por outro lado, a lei também não proíbe expressamente seus pais de olharem seu celular. O que ela garante é que o uso das ferramentas considere sua autonomia crescente."
    ],
    legalNotes: [
      'Art. 17, § 2º: a supervisão deve ser orientada pelo "melhor interesse da criança e do adolescente, considerado o desenvolvimento progressivo de suas capacidades".',
      'Art. 4º, V: a lei tem como fundamento "o respeito à autonomia e ao desenvolvimento progressivo do indivíduo".',
      "Se o assunto íntimo envolve abuso ou violência e você não se sente seguro falando em casa, o Disque 100 atende gratuitamente."
    ]
  },
  {
    id: 3,
    illustration: "eyeSun",
    answerHeaderStyle: "sunMinimal",
    question: "E SE EU QUISER VIRAR INFLUENCIADOR AGORA?",
    options: [
      {
        text: "A lei não proíbe criar conteúdo, mas até os 16 anos a conta precisa estar vinculada a um responsável e há travas ligadas a dinheiro, exposição e regras sobre monetização.",
        correct: true
      },
      {
        text: "A lei proíbe completamente que adolescentes criem conteúdo ou publiquem vídeos em qualquer plataforma antes dos 18 anos.",
        correct: false
      },
      {
        text: "Qualquer adolescente pode criar conteúdo e monetizar sem vínculo com responsável e sem travas ligadas a exposição ou publicidade.",
        correct: false
      }
    ],
    quickAnswer: [
      "A lei não proíbe adolescente de criar conteúdo. Mas, até os 16 anos, sua conta precisa estar vinculada a um responsável, e a lei trava algumas coisas ligadas a dinheiro e exposição. Para monetizar, valem também as regras de cada plataforma e outras leis, como as sobre trabalho artístico de menores. Converse com seus responsáveis e busque orientação jurídica antes de fechar parcerias."
    ],
    legalNotes: [
      'Art. 2º, XI: monetização é "remuneração direta ou indireta" por publicar conteúdo, incluindo visualizações, patrocínios, publicidade e venda de produtos.',
      'Art. 23: é "vedado" monetizar e impulsionar conteúdo que retrate crianças e adolescentes "de forma erotizada ou sexualmente sugestiva".',
      'Art. 22: é vedado usar "técnicas de perfilamento para direcionamento de publicidade comercial" a adolescentes.'
    ]
  },
  {
    id: 4,
    illustration: "flowerCrown",
    answerHeaderStyle: "clean",
    question: "A MINHA CONTA VAI MUDAR? COMO?",
    options: [
      {
        text: 'Sim: até 16 anos a conta fica vinculada a um responsável, a configuração padrão passa a ser a mais protetora, proíbe-se montar "perfil de consumo" para anúncios e saem as caixas de recompensa.',
        correct: true
      },
      {
        text: "Não muda nada: a configuração padrão continua aberta, com reprodução automática liberada e compartilhamento de geolocalização sem restrições.",
        correct: false
      },
      {
        text: 'Só muda a vinculação até 16 anos; os apps continuam podendo montar seu "perfil de consumo" para anúncios e manter caixas de recompensa nos jogos.',
        correct: false
      }
    ],
    quickAnswer: [
      'Sim. Até 16 anos, a conta fica vinculada à de um responsável. Em todas as idades, a configuração padrão passa a ser a mais protetora, e você só afrouxa a privacidade com informação clara sobre o que está escolhendo. Os apps também ficam proibidos de montar seu "perfil de consumo" para te empurrar anúncios, e as caixas de recompensa (loot boxes) saem dos jogos.'
    ],
    legalNotes: [
      'Art. 24: contas de "até 16 (dezesseis) anos de idade" devem estar "vinculados ao usuário ou à conta de um de seus responsáveis legais".',
      'Art. 7º: o serviço deve operar, "por padrão", com "o grau mais elevado de proteção da privacidade e dos dados pessoais".',
      'Art. 17, § 4º: as configurações devem limitar recursos que estendem o uso artificialmente, como "reprodução automática de mídia" e "recompensas pelo tempo de uso", e restringir o compartilhamento de geolocalização.',
      'A lei diz "até 16", e há quem leia como "menores de 16". Os detalhes devem sair no regulamento.'
    ]
  },
  {
    id: 5,
    illustration: "snake",
    answerHeaderStyle: "clean",
    question: "O QUE É CRIME PARA O ECA?",
    options: [
      {
        text: "O ECA Digital não cria crimes novos — ele impõe obrigações e multas às empresas. Os crimes estão no ECA original e no Código Penal, como nudes de menores de 18, aliciamento sexual e cyberbullying.",
        correct: true
      },
      {
        text: "O ECA Digital cria vários crimes novos para adolescentes e determina que eles sejam presos exatamente como adultos.",
        correct: false
      },
      {
        text: 'Guardar ou compartilhar nudes de menores de 18 anos só é crime se for de outra pessoa; mandar sua própria foto "só pra um amigo" não entra nisso.',
        correct: false
      }
    ],
    quickAnswer: [
      "O ECA Digital não cria crimes novos: ele impõe obrigações e multas às empresas. Os crimes estão em outras leis, como o ECA original (Lei 8.069/1990) e o Código Penal. Os mais relevantes para quem usa internet:",
      '• Produzir, guardar ou compartilhar nudes e conteúdo sexual de menores de 18 anos. Isso vale mesmo que seja a foto de um colega ou a sua própria, e mesmo que tenha sido "só pra um amigo".',
      "• Aliciar ou assediar criança ou adolescente com fins sexuais.",
      "• Bullying e cyberbullying.",
      'Adolescente não é "preso" como adulto: responde por ato infracional, com medidas socioeducativas (advertência, prestação de serviços, liberdade assistida, em casos graves internação). Isso não significa que seja leve.'
    ],
    legalNotes: [
      'ECA Digital, Art. 27: as plataformas devem "remover e comunicar os conteúdos de aparente exploração, de abuso sexual, de sequestro e de aliciamento" às autoridades.',
      "(Os crimes em si estão nos arts. 240 a 241-D do ECA; confirme o texto completo na lei original.)"
    ]
  },
  {
    id: 6,
    illustration: "keys",
    answerHeaderStyle: "sunMinimal",
    question: "POSSO SER PRESO OU TER A CONTA SUSPENSA SE NÃO DEIXAR MEUS PAIS ACESSAREM?",
    options: [
      {
        text: "Preso, não — quem responde pelo descumprimento é a empresa. O app pode restringir a conta até 16 anos sem vinculação, mas a suspensão prevista na lei é para idade abaixo do mínimo ou abuso de denúncias.",
        correct: true
      },
      {
        text: "Sim, o adolescente pode ser preso e recebe as sanções previstas no Art. 35, incluindo advertência e multa.",
        correct: false
      },
      {
        text: "Não há nenhuma restrição na conta: o app não é obrigado a garantir a vinculação até 16 anos nem a suspender contas abaixo da idade mínima.",
        correct: false
      }
    ],
    quickAnswer: [
      "Preso, não. A lei não pune o adolescente por isso. Quem responde por descumprimento é a empresa. Na prática, como o app é obrigado a garantir a vinculação até 16 anos, ele pode restringir sua conta enquanto ela não estiver vinculada. A suspensão prevista na lei é para outros casos: idade abaixo do mínimo do serviço ou abuso do sistema de denúncias."
    ],
    legalNotes: [
      'Art. 35: quem descumpre a lei está sujeito a "advertência", "multa simples, de até 10% do faturamento do grupo econômico no Brasil" (limitada a R$ 50 milhões por infração), "suspensão temporária das atividades" ou "proibição de exercício das atividades". Todas as sanções são para fornecedores.',
      'Art. 24, § 4º: o app suspende o acesso quando há "fundados indícios" de conta operada por menor "em desconformidade com os requisitos de idade mínima", e o responsável pode recorrer e comprovar a idade.'
    ]
  },
  {
    id: 7,
    illustration: "hand",
    answerHeaderStyle: "clean",
    question: "GOSTO DE VER PORNÔ E FUNK PROIBIDÃO. NÃO VOU PODER?",
    options: [
      {
        text: "Sites e apps devem barrar pornô para menores de 18 com verificação confiável de idade (sem autodeclaração). A lei não proíbe funk, mas manda filtrar conteúdo manifestamente inadequado para a idade.",
        correct: true
      },
      {
        text: 'Basta clicar em "tenho 18" nos sites de pornografia, mas a lei proíbe expressamente o funk como gênero musical em todas as plataformas.',
        correct: false
      },
      {
        text: "O adolescente que tentar acessar conteúdo pornográfico responde diretamente pela lei, e nenhuma plataforma precisa verificar a idade a cada acesso.",
        correct: false
      }
    ],
    quickAnswer: [
      'Pornô: para menores de 18, os sites e apps são obrigados a barrar o acesso, com verificação de idade confiável, sem aceitar "tenho 18" como resposta. Quem responde pela lei é a plataforma, não você.',
      'Funk proibidão: a lei não proíbe funk nem gênero musical nenhum. Ela manda as plataformas respeitarem a classificação indicativa e filtrarem conteúdo "manifestamente inadequado" para a idade. Letras ou clipes com sexo explícito, incitação à violência ou apologia a drogas podem ter acesso restrito ou ser removidos, e quem decide caso a caso é a plataforma.'
    ],
    legalNotes: [
      'Art. 9º, § 1º: devem ser adotados "mecanismos confiáveis de verificação de idade a cada acesso do usuário ao conteúdo, produto ou serviço", "vedada a autodeclaração".',
      'Art. 9º, § 3º: sites com pornografia "deverão impedir a criação de contas ou de perfis por crianças e adolescentes".',
      'Art. 8º, III: os serviços devem impedir que adolescentes encontrem "conteúdos ilegais e pornográficos, bem como outros conteúdos manifestamente inadequados à sua faixa etária".'
    ]
  },
  {
    id: 8,
    illustration: "royalCrown",
    answerHeaderStyle: "sun",
    question: "MEUS JOGOS VÃO MUDAR? E AS COMPRAS DENTRO DELES?",
    options: [
      {
        text: "Sim: caixas de recompensa (loot boxes) ficam proibidas em jogos para menores, chat e mensagens vêm limitados por padrão, pais podem bloquear compras e baixar apps depende de autorização deles.",
        correct: true
      },
      {
        text: "Não: caixas de recompensa continuam liberadas se os pais não se manifestarem, pois a lei permite presumir autorização automática.",
        correct: false
      },
      {
        text: "Apenas as compras mudam; o chat e a troca de mensagens nos jogos continuam totalmente liberados por padrão e baixar apps não precisa de autorização.",
        correct: false
      }
    ],
    quickAnswer: [
      "Sim. Caixas de recompensa, aquelas em que você paga sem saber o que vai ganhar, ficam proibidas em jogos para menores. O chat e a troca de mensagens vêm limitados por padrão, e os pais podem bloquear compras. O download de apps também depende da autorização deles."
    ],
    legalNotes: [
      'Art. 20: "São vedadas as caixas de recompensa (loot boxes) oferecidas em jogos eletrônicos direcionados a crianças e a adolescentes ou de acesso provável por eles."',
      'Art. 12, § 2º: a autorização para baixar aplicativos depende de "consentimento livre e informado dos pais ou responsáveis legais", "vedada a presunção de autorização" se eles não se manifestarem.'
    ]
  },
  {
    id: 9,
    illustration: "vine",
    answerHeaderStyle: "fourStars",
    question: "SE ALGUÉM VAZAR MINHA FOTO OU ME HUMILHAR NA INTERNET, CONSIGO DERRUBAR O CONTEÚDO?",
    options: [
      {
        text: "Sim, de forma mais rápida: a plataforma deve retirar o conteúdo sem esperar ordem judicial após notificação que identifique o conteúdo e quem denuncia (denúncia anônima não vale).",
        correct: true
      },
      {
        text: "Só é possível derrubar o conteúdo depois de conseguir uma ordem judicial, e a plataforma aceita denúncias totalmente anônimas.",
        correct: false
      },
      {
        text: "A plataforma derruba o conteúdo imediatamente sem que quem postou possa contestar, e não há punição para quem usa a denúncia de má-fé.",
        correct: false
      }
    ],
    quickAnswer: [
      "Sim, e de forma mais rápida. A vítima (ou seu responsável) pode notificar a plataforma, que deve retirar o conteúdo que viola direitos de crianças e adolescentes sem esperar ordem judicial. A notificação precisa identificar o conteúdo e quem denuncia: denúncia anônima não vale. Quem postou pode contestar a retirada, e quem usa a denúncia de má-fé, para perseguir ou censurar, pode ter a conta suspensa."
    ],
    legalNotes: [
      'Art. 29: o provedor deve proceder à "retirada de conteúdo que viola direitos de crianças e de adolescentes assim que forem comunicados [...] pela vítima, por seus representantes, pelo Ministério Público" ou entidades de defesa, "independentemente de ordem judicial".',
      'Art. 33, § 1º: o uso abusivo da denúncia pode levar a "suspensão temporária da conta", "cancelamento" em reincidência ou abuso grave e comunicação às autoridades.'
    ]
  },
  {
    id: 10,
    illustration: "chalice",
    answerHeaderStyle: "sun",
    question: "OS APPS AINDA PODEM ME RASTREAR E MANDAR ANÚNCIOS SOB MEDIDA?",
    options: [
      {
        text: "Não podem mandar anúncios personalizados a partir do seu perfil de comportamento. A lei também limita o rastreamento de localização e permite desligar recomendações personalizadas.",
        correct: true
      },
      {
        text: "Sim, os apps podem criar perfis comportamentais de adolescentes para direcionar publicidade comercial e manter a geolocalização sempre ligada.",
        correct: false
      },
      {
        text: "A lei proíbe anúncios baseados em comportamento, mas não limita o compartilhamento de geolocalização nem dá opção de desativar recomendações personalizadas.",
        correct: false
      }
    ],
    quickAnswer: [
      "Anúncio personalizado a partir do seu perfil de comportamento, não. A lei também limita o rastreamento de localização e permite que você ou seus pais desliguem as recomendações personalizadas."
    ],
    legalNotes: [
      'Art. 26: é "vedada a criação de perfis comportamentais de usuários crianças e adolescentes" para direcionar publicidade comercial.',
      'Art. 17, § 4º, V e VI: controle sobre "sistemas de recomendação personalizados, inclusive com opção de desativação" e "restrição ao compartilhamento da geolocalização", com aviso prévio e claro.'
    ]
  }
];

// Ilustrações vetoriais fiéis às artes de tarô do PDF
const TAROT_SVGS = {
  // Emblema principal do arco com mão e celular radiante (presente em todas as cartas)
  archEmblem: `
    <svg class="arch-emblem-svg" viewBox="0 0 120 162" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="108" height="150" rx="54" stroke="#5B4490" stroke-width="2.4"/>
      <rect x="12" y="12" width="96" height="138" rx="48" stroke="#5B4490" stroke-width="1.7"/>
      <!-- Raios de brilho ao redor do celular -->
      <g stroke="#5B4490" stroke-width="1.6" stroke-linecap="round">
        <line x1="60" y1="21" x2="60" y2="28"/>
        <line x1="47" y1="23" x2="50" y2="30"/>
        <line x1="73" y1="23" x2="70" y2="30"/>
        <line x1="36" y1="33" x2="43" y2="38"/>
        <line x1="84" y1="33" x2="77" y2="38"/>
        <line x1="30" y1="48" x2="38" y2="50"/>
        <line x1="90" y1="48" x2="82" y2="50"/>
        <line x1="29" y1="64" x2="37" y2="63"/>
        <line x1="91" y1="64" x2="83" y2="63"/>
        <line x1="33" y1="79" x2="41" y2="75"/>
        <line x1="87" y1="79" x2="79" y2="75"/>
        <line x1="42" y1="89" x2="47" y2="83"/>
        <line x1="78" y1="89" x2="73" y2="83"/>
      </g>
      <!-- Smartphone inclinado -->
      <g transform="rotate(6 60 58)">
        <rect x="46" y="34" width="28" height="49" rx="4.5" fill="#FDFAD2" stroke="#5B4490" stroke-width="2.1"/>
        <rect x="49.5" y="38.5" width="21" height="38" rx="1.8" stroke="#5B4490" stroke-width="1.2"/>
        <line x1="56.5" y1="36.3" x2="63.5" y2="36.3" stroke="#5B4490" stroke-width="1.3" stroke-linecap="round"/>
        <circle cx="60" cy="79.5" r="1.2" fill="#5B4490"/>
      </g>
      <!-- Mão estilizada alcançando o celular -->
      <g stroke="#5B4490" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#FDFAD2">
        <path d="M13 123 C25 112, 39 102, 54 102 C62 102, 70 100, 74 96 C76 94, 78 96, 76 100 C73 104, 67 107, 61 108"/>
        <path d="M56 108 C64 109, 74 107, 81 102 C84 100, 86 103, 83 107 C78 112, 69 116, 61 116"/>
        <path d="M62 115 C70 116, 79 114, 86 109 C89 107, 91 110, 88 114 C82 120, 72 124, 63 123"/>
        <path d="M64 123 C71 124, 79 121, 84 117 C87 115, 89 118, 86 122 C80 128, 69 131, 59 130"/>
        <path d="M18 140 C29 131, 41 129, 53 130 C64 131, 74 130, 82 125"/>
      </g>
    </svg>
  `,

  // Q1 - Quatro ramos botânicos (p. 1)
  botanicals: `
    <svg class="tarot-motif" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#251C4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Ramo 1 -->
        <line x1="42" y1="24" x2="42" y2="114"/>
        <path d="M42 22 C33 31, 33 44, 42 50 C51 44, 51 31, 42 22 Z" fill="#FAF054"/>
        <path d="M42 66 C28 62, 22 52, 25 46 C34 48, 41 56, 42 66 Z" fill="#FAF054"/>
        <path d="M42 66 C56 62, 62 52, 59 46 C50 48, 43 56, 42 66 Z" fill="#FAF054"/>
        <path d="M42 86 C28 82, 22 72, 25 66 C34 68, 41 76, 42 86 Z" fill="#FAF054"/>
        <path d="M42 86 C56 82, 62 72, 59 66 C50 68, 43 76, 42 86 Z" fill="#FAF054"/>
        <!-- Ramo 2 (mais alto, oliva) -->
        <line x1="94" y1="10" x2="94" y2="114"/>
        <path d="M94 8 C85 18, 85 30, 94 36 C103 30, 103 18, 94 8 Z" fill="#B5A631"/>
        <path d="M94 52 C80 48, 74 38, 77 32 C86 34, 93 42, 94 52 Z" fill="#B5A631"/>
        <path d="M94 52 C108 48, 114 38, 111 32 C102 34, 95 42, 94 52 Z" fill="#B5A631"/>
        <path d="M94 72 C80 68, 74 58, 77 52 C86 54, 93 62, 94 72 Z" fill="#B5A631"/>
        <path d="M94 72 C108 68, 114 58, 111 52 C102 54, 95 62, 94 72 Z" fill="#B5A631"/>
        <path d="M94 92 C80 88, 74 78, 77 72 C86 74, 93 82, 94 92 Z" fill="#B5A631"/>
        <path d="M94 92 C108 88, 114 78, 111 72 C102 74, 95 82, 94 92 Z" fill="#B5A631"/>
        <!-- Ramo 3 (mais alto, amarelo) -->
        <line x1="146" y1="10" x2="146" y2="114"/>
        <path d="M146 8 C137 18, 137 30, 146 36 C155 30, 155 18, 146 8 Z" fill="#FAF054"/>
        <path d="M146 52 C132 48, 126 38, 129 32 C138 34, 145 42, 146 52 Z" fill="#FAF054"/>
        <path d="M146 52 C160 48, 166 38, 163 32 C154 34, 147 42, 146 52 Z" fill="#FAF054"/>
        <path d="M146 72 C132 68, 126 58, 129 52 C138 54, 145 62, 146 72 Z" fill="#FAF054"/>
        <path d="M146 72 C160 68, 166 58, 163 52 C154 54, 147 62, 146 72 Z" fill="#FAF054"/>
        <path d="M146 92 C132 88, 126 78, 129 72 C138 74, 145 82, 146 92 Z" fill="#FAF054"/>
        <path d="M146 92 C160 88, 166 78, 163 72 C154 74, 147 82, 146 92 Z" fill="#FAF054"/>
        <!-- Ramo 4 (oliva) -->
        <line x1="198" y1="24" x2="198" y2="114"/>
        <path d="M198 22 C189 31, 189 44, 198 50 C207 44, 207 31, 198 22 Z" fill="#B5A631"/>
        <path d="M198 66 C184 62, 178 52, 181 46 C190 48, 197 56, 198 66 Z" fill="#B5A631"/>
        <path d="M198 66 C212 62, 218 52, 215 46 C206 48, 199 56, 198 66 Z" fill="#B5A631"/>
        <path d="M198 86 C184 82, 178 72, 181 66 C190 68, 197 76, 198 86 Z" fill="#B5A631"/>
        <path d="M198 86 C212 82, 218 72, 215 66 C206 68, 199 76, 198 86 Z" fill="#B5A631"/>
      </g>
    </svg>
  `,

  // Q2 - Luas crescentes e disco místico (p. 3)
  moons: `
    <svg class="tarot-motif" viewBox="0 0 240 105" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Lua esquerda -->
      <path d="M52 14 C75 18, 86 42, 78 66 C70 88, 43 96, 22 82 C44 82, 60 66, 60 44 C60 31, 56 21, 52 14 Z" fill="#FFFFFF" stroke="#251C4D" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Disco celestial central -->
      <circle cx="120" cy="53" r="38" fill="#FAF054" stroke="#251C4D" stroke-width="2.5"/>
      <circle cx="120" cy="53" r="33" fill="#F68DA7" stroke="#251C4D" stroke-width="1.6" stroke-dasharray="4 3"/>
      <circle cx="120" cy="53" r="26" fill="#827AC0" stroke="#251C4D" stroke-width="1.8"/>
      <circle cx="120" cy="53" r="9" fill="#F7C2D9" stroke="#251C4D" stroke-width="1.8"/>
      <g stroke="#251C4D" stroke-width="1.6" stroke-linecap="round">
        <line x1="120" y1="31" x2="120" y2="41"/>
        <line x1="120" y1="65" x2="120" y2="75"/>
        <line x1="98" y1="53" x2="108" y2="53"/>
        <line x1="132" y1="53" x2="142" y2="53"/>
      </g>
      <!-- Lua direita -->
      <path d="M188 14 C165 18, 154 42, 162 66 C170 88, 197 96, 218 82 C196 82, 180 66, 180 44 C180 31, 184 21, 188 14 Z" fill="#FFFFFF" stroke="#251C4D" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
  `,

  // Q3 - Olho místico no sol radiante (p. 5)
  eyeSun: `
    <svg class="tarot-motif" viewBox="0 0 220 116" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(110,58)">
        <!-- Estrela/raios amarelos e lilás -->
        <polygon points="0,-48 11,-32 29,-40 28,-20 47,-18 35,-3 48,14 29,19 32,38 14,31 0,48 -14,31 -32,38 -29,19 -48,14 -35,-3 -47,-18 -28,-20 -29,-40 -11,-32" fill="#FAF054" stroke="#251C4D" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="0" cy="0" r="29" fill="#827AC0" stroke="#251C4D" stroke-width="2"/>
        <circle cx="0" cy="0" r="22" fill="#F68DA7" stroke="#251C4D" stroke-width="2"/>
        <!-- Olho central -->
        <path d="M-16 0 C-9 -10, 9 -10, 16 0 C9 10, -9 10, -16 0 Z" fill="#FFFFFF" stroke="#251C4D" stroke-width="2"/>
        <circle cx="0" cy="0" r="6" fill="#5B4490" stroke="#251C4D" stroke-width="1.6"/>
        <circle cx="0" cy="0" r="2.4" fill="#251C4D"/>
        <!-- Estrelinhas ao redor -->
        <path d="M-54 -22 L-51 -16 L-45 -19 L-51 -13 L-54 -7 L-57 -13 L-63 -16 L-57 -19 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.2"/>
        <path d="M54 14 L57 20 L63 17 L57 23 L54 29 L51 23 L45 20 L51 17 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.2"/>
      </g>
    </svg>
  `,

  // Q4 - Coroa com três flores rosa (p. 7)
  flowerCrown: `
    <svg class="tarot-motif" viewBox="0 0 240 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Base da coroa -->
      <path d="M56 96 C95 84, 145 84, 184 96 C158 106, 82 106, 56 96 Z" fill="#5B4490" stroke="#251C4D" stroke-width="2.2"/>
      <path d="M54 95 L56 84 C71 80, 77 67, 79 58 C87 54, 93 64, 96 72 C104 65, 110 52, 112 42 L120 42 L120 88 C98 86, 74 88, 54 95 Z" fill="#B5A631" stroke="#251C4D" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M186 95 L184 84 C169 80, 163 67, 161 58 C153 54, 147 64, 144 72 C136 65, 130 52, 128 42 L120 42 L120 88 C142 86, 166 88, 186 95 Z" fill="#FAF054" stroke="#251C4D" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- 3 Flores rosa -->
      <g stroke="#251C4D" stroke-width="1.9" stroke-linejoin="round">
        <!-- Flor esquerda -->
        <g transform="translate(56,50) scale(0.85)">
          <path d="M0,-24 L6,-8 L22,-15 L10,-2 L24,8 L7,7 L12,23 L0,10 L-12,23 L-7,7 L-24,8 L-10,-2 L-22,-15 L-6,-8 Z" fill="#F68DA7"/>
          <circle cx="0" cy="0" r="6" fill="#827AC0"/>
        </g>
        <!-- Flor central -->
        <g transform="translate(120,30) scale(0.9)">
          <path d="M0,-24 L6,-8 L22,-15 L10,-2 L24,8 L7,7 L12,23 L0,10 L-12,23 L-7,7 L-24,8 L-10,-2 L-22,-15 L-6,-8 Z" fill="#F68DA7"/>
          <circle cx="0" cy="0" r="6" fill="#827AC0"/>
        </g>
        <!-- Flor direita -->
        <g transform="translate(184,50) scale(0.85)">
          <path d="M0,-24 L6,-8 L22,-15 L10,-2 L24,8 L7,7 L12,23 L0,10 L-12,23 L-7,7 L-24,8 L-10,-2 L-22,-15 L-6,-8 Z" fill="#F68DA7"/>
          <circle cx="0" cy="0" r="6" fill="#827AC0"/>
        </g>
      </g>
      <!-- Estrelinhas -->
      <path d="M84 18 L87 24 L93 27 L87 30 L84 36 L81 30 L75 27 L81 24 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.6"/>
      <path d="M156 18 L159 24 L165 27 L159 30 L156 36 L153 30 L147 27 L153 24 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.6"/>
    </svg>
  `,

  // Q5 - Serpente roxa (p. 9)
  snake: `
    <svg class="tarot-motif" viewBox="0 0 220 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M46 56 L66 56 C76 56, 76 92, 92 92 C108 92, 104 20, 124 20 C142 20, 138 56, 152 56" stroke="#251C4D" stroke-width="18" stroke-linecap="butt" stroke-linejoin="round"/>
      <path d="M46 56 L66 56 C76 56, 76 92, 92 92 C108 92, 104 20, 124 20 C142 20, 138 56, 152 56" stroke="#5B4490" stroke-width="13" stroke-linecap="butt" stroke-linejoin="round"/>
      <!-- Cabeça da serpente -->
      <path d="M148 56 C152 44, 166 43, 178 56 C166 69, 152 68, 148 56 Z" fill="#5B4490" stroke="#251C4D" stroke-width="2.6" stroke-linejoin="round"/>
      <ellipse cx="161" cy="49" rx="3.2" ry="1.8" fill="#FAF054"/>
      <ellipse cx="161" cy="63" rx="3.2" ry="1.8" fill="#FAF054"/>
    </svg>
  `,

  // Q6 - Chaves cruzadas (p. 11)
  keys: `
    <svg class="tarot-motif" viewBox="0 0 220 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Chave escura (diagonal \ ) -->
      <g transform="rotate(44 110 56)" stroke="#251C4D" stroke-width="2.4" stroke-linejoin="round">
        <path d="M56 50 L126 50 L126 62 L56 62 Z" fill="#5B4490"/>
        <path d="M56 50 L56 32 L78 32 L78 44 L70 44 L70 50 Z" fill="#5B4490"/>
        <circle cx="144" cy="56" r="22" fill="#5B4490"/>
        <circle cx="144" cy="56" r="10" fill="#FDFAD2"/>
      </g>
      <!-- Chave lilás (diagonal / ) -->
      <g transform="rotate(-44 110 56)" stroke="#251C4D" stroke-width="2.4" stroke-linejoin="round">
        <path d="M94 50 L164 50 L164 62 L94 62 Z" fill="#827AC0"/>
        <path d="M164 50 L164 32 L142 32 L142 44 L150 44 L150 50 Z" fill="#827AC0"/>
        <circle cx="76" cy="56" r="22" fill="#827AC0"/>
        <circle cx="76" cy="56" r="10" fill="#FDFAD2"/>
      </g>
      <!-- Estrelas laterais -->
      <path d="M36 44 L40 52 L48 56 L40 60 L36 68 L32 60 L24 56 L32 52 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8"/>
      <path d="M184 44 L188 52 L196 56 L188 60 L184 68 L180 60 L172 56 L180 52 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8"/>
    </svg>
  `,

  // Q7 - Mão aberta rosa (p. 13)
  hand: `
    <svg class="tarot-motif" viewBox="0 0 240 105" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#251C4D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Dedo traseiro (rosa escuro) -->
        <path d="M132 54 C156 50, 180 54, 198 61 C204 63, 203 70, 195 72 C175 76, 152 72, 132 66 Z" fill="#F68DA7"/>
        <!-- Mão principal (rosa claro) -->
        <path d="M32 66 C48 54, 62 28, 92 28 C114 28, 128 33, 148 36 C160 38, 174 42, 170 49 C166 55, 146 53, 128 53 C148 59, 178 69, 196 73 C202 74, 202 82, 193 84 C166 90, 124 81, 96 76 C78 73, 58 84, 42 96 Z" fill="#F7C2D9"/>
      </g>
    </svg>
  `,

  // Q8 - Coroa real dourada (p. 15)
  royalCrown: `
    <svg class="tarot-motif" viewBox="0 0 220 118" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#251C4D" stroke-width="2.3" stroke-linejoin="round">
        <!-- Cruz no topo -->
        <path d="M105 12 L115 12 L115 18 L121 18 L121 28 L115 28 L115 34 L105 34 L105 28 L99 28 L99 18 L105 18 Z" fill="#F7C2D9"/>
        <circle cx="110" cy="37" r="7" fill="#FAF054"/>
        <!-- Arcos da coroa -->
        <path d="M68 88 C52 54, 72 34, 96 42 C104 45, 108 55, 110 66 C112 55, 116 45, 124 42 C148 34, 168 54, 152 88 Z" fill="#FAF054"/>
        <path d="M78 88 C68 62, 82 46, 100 54 C105 57, 108 64, 110 72 C112 64, 115 57, 120 54 C138 46, 152 62, 142 88 Z" fill="#B5A631"/>
        <!-- Almofada rosa -->
        <path d="M74 88 C86 70, 134 70, 146 88 Z" fill="#F68DA7"/>
        <!-- Joia losango roxa -->
        <polygon points="110,58 119,73 110,86 101,73" fill="#5B4490"/>
        <!-- Base da coroa -->
        <rect x="70" y="88" width="80" height="8" rx="4" fill="#FAF054"/>
        <rect x="72" y="96" width="76" height="7" rx="3.5" fill="#B5A631"/>
      </g>
    </svg>
  `,

  // Q9 - Ramo botânico simétrico com frutinhas rosa (p. 17)
  vine: `
    <svg class="tarot-motif" viewBox="0 0 240 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#251C4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- Caule central -->
        <line x1="60" y1="56" x2="180" y2="56"/>
        <!-- Volutas esquerda -->
        <path d="M60 56 C44 56, 44 26, 66 26" fill="none"/>
        <path d="M60 56 C50 56, 50 40, 66 40" fill="none"/>
        <path d="M60 56 C44 56, 44 86, 66 86" fill="none"/>
        <path d="M60 56 C50 56, 50 72, 66 72" fill="none"/>
        <!-- Volutas direita -->
        <path d="M180 56 C196 56, 196 26, 174 26" fill="none"/>
        <path d="M180 56 C190 56, 190 40, 174 40" fill="none"/>
        <path d="M180 56 C196 56, 196 86, 174 86" fill="none"/>
        <path d="M180 56 C190 56, 190 72, 174 72" fill="none"/>
        <!-- Bolinhas rosa -->
        <circle cx="68" cy="26" r="6" fill="#F68DA7"/>
        <circle cx="68" cy="40" r="6" fill="#F7C2D9"/>
        <circle cx="68" cy="72" r="6" fill="#F7C2D9"/>
        <circle cx="68" cy="86" r="6" fill="#F68DA7"/>
        <circle cx="172" cy="26" r="6" fill="#F68DA7"/>
        <circle cx="172" cy="40" r="6" fill="#F7C2D9"/>
        <circle cx="172" cy="72" r="6" fill="#F7C2D9"/>
        <circle cx="172" cy="86" r="6" fill="#F68DA7"/>
        <!-- Folhas no caule -->
        <path d="M68 56 C74 47, 86 47, 94 56 C86 65, 74 65, 68 56 Z" fill="#FAF054"/>
        <path d="M110 56 C106 43, 98 37, 93 40 C93 48, 100 55, 110 56 Z" fill="#FAF054"/>
        <path d="M110 56 C106 69, 98 75, 93 72 C93 64, 100 57, 110 56 Z" fill="#B5A631"/>
        <path d="M130 56 C126 42, 118 35, 112 39 C112 48, 120 55, 130 56 Z" fill="#B5A631"/>
        <path d="M130 56 C126 70, 118 77, 112 73 C112 64, 120 57, 130 56 Z" fill="#FAF054"/>
        <path d="M156 56 C152 38, 140 30, 132 34 C132 46, 142 55, 156 56 Z" fill="#FAF054"/>
        <path d="M156 56 C152 74, 140 82, 132 78 C132 66, 142 57, 156 56 Z" fill="#FAF054"/>
      </g>
    </svg>
  `,

  // Q10 - Cálice dourado com estrela rosa (p. 19)
  chalice: `
    <svg class="tarot-motif" viewBox="0 0 220 118" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#251C4D" stroke-width="2.3" stroke-linejoin="round">
        <!-- Borda superior elíptica -->
        <ellipse cx="110" cy="19" rx="26" ry="6" fill="#FAF054"/>
        <ellipse cx="110" cy="19" rx="20" ry="3.2" fill="#B5A631"/>
        <!-- Taça -->
        <path d="M87 21 C87 54, 96 68, 110 70 C124 68, 133 54, 133 21 Z" fill="#FAF054"/>
        <!-- Estrela rosa no cálice -->
        <path d="M110 35 L113 42 L120 45 L113 48 L110 55 L107 48 L100 45 L107 42 Z" fill="#F68DA7" stroke-width="1.8"/>
        <!-- Haste e base -->
        <circle cx="110" cy="76" r="6" fill="#FAF054"/>
        <path d="M105 81 L115 81 L120 100 L100 100 Z" fill="#FAF054"/>
        <rect x="92" y="100" width="36" height="7" rx="3.5" fill="#B5A631"/>
      </g>
      <!-- Estrelas ao redor -->
      <path d="M68 72 L72 79 L79 83 L72 87 L68 94 L64 87 L57 83 L64 79 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8"/>
      <path d="M152 72 L156 79 L163 83 L156 87 L152 94 L148 87 L141 83 L148 79 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8"/>
    </svg>
  `,

  // Logos oficiais OBECA & Intervozes para o rodapé
  footerLogos: `
    <div class="partner-logos" aria-label="OBECA Observatório do ECA Digital e Intervozes">
      <img
        src="https://actbr.org.br/wp-content/uploads/2026/11/OBECA.png"
        alt="OBECA — Observatório do ECA Digital"
        class="partner-logo-img partner-logo-obeca"
        referrerpolicy="no-referrer"
      />
      <img
        src="https://actbr.org.br/wp-content/uploads/2026/11/INTERVOZES.png"
        alt="Intervozes"
        class="partner-logo-img partner-logo-intervozes"
        referrerpolicy="no-referrer"
      />
    </div>
  `
};
