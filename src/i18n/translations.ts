export type Locale = 'en' | 'sv' | 'es'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface T {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    work: string
    experience: string
    skills: string
    contact: string
  }
  hero: {
    greeting: string
    title: string
    tagline: string
    cta1: string
    cta2: string
    location: string
    currentRole: string
    scroll: string
  }
  about: {
    label: string
    title: string
    p1: string
    p2: string
    p3: string
    badge1Num: string
    badge1Label: string
    badge2Num: string
    badge2Label: string
    badge3Num: string
    badge3Label: string
  }
  work: {
    label: string
    title: string
    cta: string
  }
  experience: {
    label: string
    title: string
    items: ExperienceItem[]
  }
  skills: {
    label: string
    title: string
    items: string[]
    education: string
    certifications: string
    universityName: string
    universityDegree: string
    universityYears: string
    cert1Name: string
    cert1Detail: string
    cert2Name: string
    cert2Detail: string
  }
  contact: {
    label: string
    heading: string
    sub: string
    cta: string
  }
  footer: {
    copyright: string
    built: string
  }
}

export const translations: Record<Locale, T> = {
  en: {
    meta: {
      title: 'Pablo Suzarte — Senior Product UX & Service Design Leader',
      description:
        'Senior UX Leader specializing in Service Design, User Research, Journey Mapping, and Journey Orchestration. 15+ years of experience, currently at IKEA Global.',
    },
    nav: {
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      playground: 'AI Playground',
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Senior UX Leader — building teams that are ready for what's next.",
      tagline:
        '15+ years bringing people together around hard problems.\nNow helping teams move faster — using AI to close the gap between insight and action.',
      cta1: 'See what I mean',
      cta2: 'LinkedIn ↗',
      location: '📍 Greater Malmö, Sweden',
      currentRole: 'Currently @ IKEA Global',
      scroll: 'scroll',
    },
    about: {
      label: '01',
      title: 'About',
      p1: "I'm a Senior UX Leader who has spent 15 years helping organisations stop building the wrong things faster. At IKEA I lead journey orchestration across global product and support teams — creating the alignment structures, research practices and shared direction that move teams from output thinking to outcome thinking.",
      p2: "My leadership is shaped by a core belief: great teams don't need more features on the roadmap — they need the right environment to discover real problems and act on them. I build that environment. I design the workshops, the rituals, the cross-functional connections that let people do their best work. And I use AI to make the learning cycles faster — so teams can validate, adapt and move with confidence instead of guessing.",
      p3: "I'm at my best when things are complex, ambiguous and cross-organisational. When silos need bridging, when strategy needs grounding in real user needs, when a team needs a leader who can zoom out and zoom in. If you're building a product organisation that wants to be genuinely outcome-led — let's talk.",
      badge1Num: '15+',
      badge1Label: 'Years in UX',
      badge2Num: '4',
      badge2Label: 'Organisations led cross-functionally',
      badge3Num: 'AI',
      badge3Label: 'Native practice',
    },
    work: {
      label: '02',
      title: 'Work',
      cta: 'View case study',
    },
    experience: {
      label: '03',
      title: 'Experience',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer',
          period: 'May 2022 — Present',
          location: 'Malmö, Sweden',
          highlights: [
            'Currently leading redesign of a complex global process across 16+ teams — grounded in 5-market research and cross-functional stakeholder alignment.',
            'Journey Orchestrator across global digital product teams — creating alignment structures that move teams from insights to prioritised action.',
            'Designed The Voice — reduced agent lookup time from 300 to 22 seconds across global support teams, enabling faster and higher-quality resolution.',
            'Built Insikt — a coaching and performance tool adopted across 18 countries by 1,800+ users, generating 3,100 coaching sessions in its first year.',
            'Mentor in GIX Mentor Program 2023 — guided design students from research to validated prototypes in real product teams.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer → Senior UX Designer',
          period: 'Apr 2019 — May 2022',
          location: 'Malmö, Sweden',
          highlights: [
            'Lead B2B Designer across Business Center, Prisjakt Insights, Partners Portal and Design System — first dedicated design hire for the B2B product area.',
            'Established UX research practice for B2B: ran discovery sessions that shaped roadmap priorities across three product teams.',
            'Led UX for the 2020 platform redesign — scoped, facilitated, and delivered the visual and interaction direction across web and mobile.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer → UX Designer',
          period: 'Oct 2016 — Feb 2019',
          location: 'Malmö, Sweden',
          highlights: [
            'Designed end-to-end experiences for gaming platforms across desktop and mobile.',
            'Led UX for new feature development and platform concepts.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 — Sep 2016',
          location: 'Malmö, Sweden',
          highlights: [
            'Worked across six enterprise projects including Ladbrokes, William Hill, PaddyPower and Gala Coral.',
            'Delivered user journeys, wireframes, prototypes and usability testing across desktop, tablet and mobile.',
            'Represented Mobenga at the ICE Gaming convention in London with 50+ presentations.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Freelance UX & Service Designer',
          period: 'Jan 2016 — May 2022',
          location: 'Malmö, Sweden',
          highlights: [
            '6+ years of freelance service and product design alongside full-time roles.',
            'Clients across healthcare (Finn Medicinen), telecoms (Stenson Consulting) and digital products.',
          ],
        },
      ],
    },
    skills: {
      label: '04',
      title: 'Skills',
      items: [
        'Journey Orchestration',
        'Cross-functional Leadership',
        'Experience Strategy',
        'User Research',
        'Service Design',
        'Workshop Facilitation',
        'Stakeholder Management',
        'Systems Thinking',
        'Journey Mapping',
        'Insight Systems',
        'AI-Assisted Design',
        'Figma',
        'Prototyping',
        'Usability Testing',
        'Information Architecture',
        'Product Thinking',
      ],
      education: 'Education',
      certifications: 'Certifications',
      universityName: 'Malmö University',
      universityDegree: "Bachelor's degree, Interaction Design",
      universityYears: '2011 – 2014',
      cert1Name: 'Situational Leadership II',
      cert1Detail: 'IKEA · Issued Feb 2026',
      cert2Name: 'SCRUM',
      cert2Detail: 'Certified',
    },
    contact: {
      label: '05',
      heading: "Let's talk",
      sub: 'Looking for Head of UX, UX Director, and Principal Designer roles in product organisations that want to be genuinely outcome-led.\nBased in Malmö — open to Sweden, Copenhagen, and remote-first Europe.',
      cta: 'Connect on LinkedIn ↗',
    },
    footer: {
      copyright: '© 2026 Pablo Suzarte',
      built: 'Built with Astro & Tailwind',
    },
  },

  sv: {
    meta: {
      title: 'Pablo Suzarte — Senior UX-ledare & tjänstedesigner',
      description:
        'Senior UX-ledare specialiserad på tjänstedesign (Service Design), användarresearch, Journey Mapping och Journey Orchestration. 15+ års erfarenhet, just nu på IKEA Global.',
    },
    nav: {
      about: 'Om mig',
      work: 'Arbete',
      experience: 'Erfarenhet',
      skills: 'Kompetens',
      contact: 'Kontakt',
      playground: 'AI Playground',
    },
    hero: {
      greeting: 'Hej, jag är',
      title: 'Senior UX-ledare — bygger team som är redo för nästa steg.',
      tagline:
        '15+ år av att samla människor kring svåra problem.\nNu hjälper jag team att röra sig snabbare — och använder AI för att överbrygga klyftan mellan insikt och handling.',
      cta1: 'Se vad jag menar',
      cta2: 'LinkedIn ↗',
      location: '📍 Stor-Malmö, Sverige',
      currentRole: 'Just nu @ IKEA Global',
      scroll: 'scrolla',
    },
    about: {
      label: '01',
      title: 'Om mig',
      p1: 'Jag är en Senior UX-ledare som tillbringat 15 år med att hjälpa organisationer sluta bygga fel saker snabbare. På IKEA leder jag journey orchestration för globala produkt- och supportteam — och skapar de samordningsstrukturer, forskningspraktiker och gemensam riktning som hjälper team gå från output-tänkande till outcome-tänkande.',
      p2: 'Mitt ledarskap formas av en grundläggande övertygelse: bra team behöver inte fler funktioner på roadmapen — de behöver rätt miljö för att hitta verkliga problem och agera på dem. Jag bygger den miljön. Jag designar workshops, ritualer och tvärfunktionella kopplingar som låter människor göra sitt bästa arbete. Och jag använder AI för att göra inlärningscyklerna snabbare — så team kan validera, anpassa sig och gå framåt med självförtroende istället för att gissa.',
      p3: 'Jag är som bäst när saker är komplexa, tvetydiga och tvärorganisatoriska. När silos behöver brytas ned, när strategi behöver förankras i verkliga användarbehov, när ett team behöver en ledare som kan zooma ut och zooma in. Om du bygger en produktorganisation som vill vara genuint outcome-ledd — låt oss prata.',
      badge1Num: '15+',
      badge1Label: 'År inom UX',
      badge2Num: '4',
      badge2Label: 'Organisationer ledda tvärfunktionellt',
      badge3Num: 'AI',
      badge3Label: 'Infödd praktik',
    },
    work: {
      label: '02',
      title: 'Arbete',
      cta: 'Se case study',
    },
    experience: {
      label: '03',
      title: 'Erfarenhet',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer',
          period: 'Maj 2022 — Nu',
          location: 'Malmö, Sverige',
          highlights: [
            'Leder just nu redesignen av en komplex global process med 16+ team — grundad i research från 5 marknader och tvärfunktionell stakeholderalignering.',
            'Journey Orchestrator i globala digitala produktteam — skapar samordningsstrukturer som hjälper team gå från insikter till prioriterade åtgärder.',
            'Designade The Voice — minskade agenternas söktid från 300 till 22 sekunder i globala supportteam, vilket möjliggör snabbare och bättre lösningar.',
            'Byggde Insikt — ett coaching- och prestationsverktyg antaget i 18 länder av 1 800+ användare, som genererade 3 100 coachingssessioner under sitt första år.',
            'Mentor i GIX Mentor Program 2023 — guidade designstudenter från research till validerade prototyper i verkliga produktteam.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer → Senior UX Designer',
          period: 'Apr 2019 — Maj 2022',
          location: 'Malmö, Sverige',
          highlights: [
            'Lead B2B Designer för Business Center, Prisjakt Insights, Partners Portal och Design System — första dedikerade designrekryteringen för B2B-produktområdet.',
            'Etablerade UX-researchpraxis för B2B: genomförde discovery-sessioner som formade roadmap-prioriteringar för tre produktteam.',
            'Ledde UX för plattformsomdesignen 2020 — definierade, faciliterade och levererade den visuella och interaktiva riktningen för webb och mobil.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer → UX Designer',
          period: 'Okt 2016 — Feb 2019',
          location: 'Malmö, Sverige',
          highlights: [
            'Designade end-to-end-upplevelser för spelplattformar på desktop och mobil.',
            'Ledde UX för ny funktionsutveckling och plattformskoncept.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 — Sep 2016',
          location: 'Malmö, Sverige',
          highlights: [
            'Jobbade med sex enterprise-projekt, bland annat Ladbrokes, William Hill, PaddyPower och Gala Coral.',
            'Levererade user journeys, wireframes, prototyper och användbarhetstestning för desktop, surfplatta och mobil.',
            'Representerade Mobenga på ICE Gaming-mässan i London med 50+ presentationer.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Frilansare inom UX & tjänstedesign',
          period: 'Jan 2016 — Maj 2022',
          location: 'Malmö, Sverige',
          highlights: [
            '6+ år av frilansarbete inom service- och produktdesign parallellt med heltidsroller.',
            'Kunder inom sjukvård (Finn Medicinen), telekommunikation (Stenson Consulting) och digitala produkter.',
          ],
        },
      ],
    },
    skills: {
      label: '04',
      title: 'Kompetens',
      items: [
        'Journey Orchestration',
        'Cross-functional Leadership',
        'Experience Strategy',
        'User Research',
        'Service Design',
        'Workshop Facilitation',
        'Stakeholder Management',
        'Systems Thinking',
        'Journey Mapping',
        'Insight Systems',
        'AI-Assisted Design',
        'Figma',
        'Prototyping',
        'Usability Testing',
        'Information Architecture',
        'Product Thinking',
      ],
      education: 'Utbildning',
      certifications: 'Certifieringar',
      universityName: 'Malmö Universitet',
      universityDegree: 'Kandidatexamen, Interaktionsdesign',
      universityYears: '2011 – 2014',
      cert1Name: 'Situational Leadership II',
      cert1Detail: 'IKEA · Utfärdad feb 2026',
      cert2Name: 'SCRUM',
      cert2Detail: 'Certifierad',
    },
    contact: {
      label: '05',
      heading: 'Låt oss prata',
      sub: 'Söker Head of UX-, UX Director- och Principal Designer-roller i produktorganisationer som vill vara genuint outcome-ledda.\nBaserad i Malmö — öppen för Sverige, Köpenhamn och remote-first Europa.',
      cta: 'Kontakta mig på LinkedIn ↗',
    },
    footer: {
      copyright: '© 2026 Pablo Suzarte',
      built: 'Byggd med Astro & Tailwind',
    },
  },

  es: {
    meta: {
      title: 'Pablo Suzarte — Líder Senior de UX y Diseño de Servicios',
      description:
        'Líder Senior de UX especializado en Diseño de Servicios (Service Design), Investigación de Usuarios, Journey Mapping y Orquestación de Journeys. Más de 15 años de experiencia, actualmente en IKEA Global.',
    },
    nav: {
      about: 'Sobre mí',
      work: 'Trabajo',
      experience: 'Experience',
      skills: 'Habilidades',
      contact: 'Contacto',
      playground: 'AI Playground',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Líder Senior de UX — construyendo equipos listos para lo que viene.',
      tagline:
        'Más de 15 años reuniendo personas alrededor de problemas difíciles.\nAhora ayudo a equipos a moverse más rápido — usando IA para cerrar la brecha entre el insight y la acción.',
      cta1: 'Ver a qué me refiero',
      cta2: 'LinkedIn ↗',
      location: '📍 Gran Malmö, Suecia',
      currentRole: 'Actualmente en IKEA Global',
      scroll: 'scroll',
    },
    about: {
      label: '01',
      title: 'Sobre mí',
      p1: 'Soy un Líder Senior de UX que ha pasado 15 años ayudando a organizaciones a dejar de construir las cosas equivocadas más rápido. En IKEA lidero la orquestación de journeys en equipos globales de producto y soporte — creando las estructuras de alineamiento, prácticas de investigación y dirección compartida que mueven a los equipos del pensamiento en output al pensamiento en outcome.',
      p2: 'Mi liderazgo está moldeado por una creencia fundamental: los grandes equipos no necesitan más funcionalidades en el roadmap — necesitan el entorno adecuado para descubrir problemas reales y actuar sobre ellos. Construyo ese entorno. Diseño los talleres, los rituales, las conexiones interfuncionales que permiten a las personas dar lo mejor de sí. Y uso IA para acelerar los ciclos de aprendizaje — para que los equipos puedan validar, adaptarse y avanzar con confianza en lugar de adivinar.',
      p3: 'Estoy en mi mejor momento cuando las cosas son complejas, ambiguas e interfuncionales. Cuando los silos necesitan unirse, cuando la estrategia necesita fundamentarse en las necesidades reales de los usuarios, cuando un equipo necesita un líder que pueda hacer zoom out y zoom in. Si estás construyendo una organización de producto que quiere ser genuinamente orientada a outcomes — hablemos.',
      badge1Num: '15+',
      badge1Label: 'Años en UX',
      badge2Num: '4',
      badge2Label: 'Organizaciones lideradas interfuncionalmente',
      badge3Num: 'IA',
      badge3Label: 'Práctica nativa',
    },
    work: {
      label: '02',
      title: 'Trabajo',
      cta: 'Ver caso de estudio',
    },
    experience: {
      label: '03',
      title: 'Experiencia',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer',
          period: 'Mayo 2022 — Presente',
          location: 'Malmö, Suecia',
          highlights: [
            'Actualmente liderando el rediseño de un proceso global complejo con 16+ equipos — fundamentado en investigación en 5 mercados y alineamiento interfuncional de stakeholders.',
            'Journey Orchestrator en equipos de productos digitales globales — creando estructuras de alineamiento que mueven a los equipos de los insights a la acción priorizada.',
            'Diseñó The Voice — redujo el tiempo de búsqueda de agentes de 300 a 22 segundos en equipos de soporte globales, permitiendo una resolución más rápida y de mayor calidad.',
            'Construyó Insikt — una herramienta de coaching y rendimiento adoptada en 18 países por 1.800+ usuarios, generando 3.100 sesiones de coaching en su primer año.',
            'Mentor en el GIX Mentor Program 2023 — guió a estudiantes de diseño desde la investigación hasta prototipos validados en equipos de producto reales.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer → Senior UX Designer',
          period: 'Abr 2019 — Mayo 2022',
          location: 'Malmö, Suecia',
          highlights: [
            'Lead B2B Designer para Business Center, Prisjakt Insights, Partners Portal y Sistema de Diseño — primera contratación de diseño dedicada al área de producto B2B.',
            'Estableció la práctica de investigación UX para B2B: realizó sesiones de discovery que dieron forma a las prioridades del roadmap de tres equipos de producto.',
            'Lideró el UX del rediseño de plataforma 2020 — definió, facilitó y entregó la dirección visual e interactiva para web y móvil.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer → UX Designer',
          period: 'Oct 2016 — Feb 2019',
          location: 'Malmö, Suecia',
          highlights: [
            'Diseñó experiencias end-to-end para plataformas de gaming en desktop y móvil.',
            'Lideró UX para el desarrollo de nuevas funcionalidades y conceptos de plataforma.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 — Sep 2016',
          location: 'Malmö, Suecia',
          highlights: [
            'Trabajó en seis proyectos enterprise incluyendo Ladbrokes, William Hill, PaddyPower y Gala Coral.',
            'Entregó user journeys, wireframes, prototipos y pruebas de usabilidad en desktop, tablet y móvil.',
            'Representó a Mobenga en la convención ICE Gaming en Londres con más de 50 presentaciones.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Diseñador UX & de Servicios Freelance',
          period: 'Ene 2016 — Mayo 2022',
          location: 'Malmö, Suecia',
          highlights: [
            'Más de 6 años de diseño freelance de servicio y producto junto a roles a tiempo completo.',
            'Clientes en sanidad (Finn Medicinen), telecomunicaciones (Stenson Consulting) y productos digitales.',
          ],
        },
      ],
    },
    skills: {
      label: '04',
      title: 'Habilidades',
      items: [
        'Journey Orchestration',
        'Cross-functional Leadership',
        'Experience Strategy',
        'User Research',
        'Service Design',
        'Workshop Facilitation',
        'Stakeholder Management',
        'Systems Thinking',
        'Journey Mapping',
        'Insight Systems',
        'AI-Assisted Design',
        'Figma',
        'Prototyping',
        'Usability Testing',
        'Information Architecture',
        'Product Thinking',
      ],
      education: 'Educación',
      certifications: 'Certificaciones',
      universityName: 'Universidad de Malmö',
      universityDegree: 'Licenciatura, Diseño de Interacción',
      universityYears: '2011 – 2014',
      cert1Name: 'Situational Leadership II',
      cert1Detail: 'IKEA · Emitido feb 2026',
      cert2Name: 'SCRUM',
      cert2Detail: 'Certificado',
    },
    contact: {
      label: '05',
      heading: 'Hablemos',
      sub: 'Busco roles de Head of UX, UX Director y Principal Designer en organizaciones de producto que quieran ser genuinamente orientadas a outcomes.\nBasado en Malmö — abierto a Suecia, Copenhague y Europa en remoto.',
      cta: 'Conectar en LinkedIn ↗',
    },
    footer: {
      copyright: '© 2026 Pablo Suzarte',
      built: 'Construido con Astro & Tailwind',
    },
  },
}
