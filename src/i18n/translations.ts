export type Locale = 'en' | 'sv' | 'es'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  link?: string
  linkLabel?: string
}

interface BeforeNow {
  before: string
  now: string
}

interface MethodPrinciple {
  name: string
  desc: string
}

interface ProofProject {
  kicker: string
  title: string
  description: string
  points: string[]
  status: string
}

export interface T {
  meta: {
    title: string
    description: string
  }
  nav: {
    whatIDo: string
    method: string
    proof: string
    experience: string
    writing: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    tagline: string
    cta1: string
    cta2: string
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
  method: {
    label: string
    title: string
    intro: string
    shiftTitle: string
    shifts: BeforeNow[]
    principlesTitle: string
    principles: MethodPrinciple[]
    philosophy: string
  }
  proof: {
    label: string
    title: string
    intro: string
    projects: ProofProject[]
    convergence: string
  }
  experience: {
    label: string
    title: string
    items: ExperienceItem[]
  }
  writing: {
    label: string
    title: string
    intro: string
  }
  contact: {
    label: string
    heading: string
    sub: string
    cta: string
    email: string
  }
  footer: {
    copyright: string
    built: string
  }
}

export const translations: Record<Locale, T> = {
  en: {
    meta: {
      title: 'Pablo Suzarte \u2014 Senior Designer redefining practice through AI | Malm\u00F6, Sweden',
      description:
        'Senior Designer with 15+ years orchestrating people around customer needs. Now pioneering how Service Design transforms in the age of AI. IKEA Global.',
    },
    nav: {
      whatIDo: 'What I Do',
      method: 'Method',
      proof: 'Proof',
      experience: 'Experience',
      writing: 'Writing',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Senior Designer \u00B7 IKEA Global \u00B7 Malm\u00F6, Sweden',
      title: 'I design how collaboration\nworks in the age of AI.',
      tagline:
        '15 years orchestrating people around customer needs. Now I\u2019m doing the same thing for collaboration itself \u2014 designing how teams and AI think together.',
      cta1: 'See the proof',
      cta2: 'LinkedIn \u2197',
      scroll: 'scroll',
    },
    about: {
      label: '01',
      title: 'What I Do',
      p1: 'I spent fifteen years doing one thing: orchestrating people around customer problems. Forcing cross-functional teams past their first solution into root cause understanding. Designing the workshops, the rituals, the shared language that makes alignment possible at scale.',
      p2: 'Now I\u2019m doing the same thing for collaboration itself. At IKEA, I\u2019m leading two converging initiatives that prove what happens when Service Design practice absorbs AI \u2014 not as a tool bolted on, but as a fundamental shift in how teams think, decide, and move together.',
      p3: 'This isn\u2019t about prompting chatbots or automating workflows. It\u2019s about a discipline \u2014 Service Design \u2014 evolving to meet a moment. And I\u2019m at the centre of defining what that looks like.',
      badge1Num: '15+',
      badge1Label: 'Years in Service Design',
      badge2Num: '2',
      badge2Label: 'Live pilots at IKEA',
      badge3Num: 'New',
      badge3Label: 'Era of practice',
    },
    method: {
      label: '02',
      title: 'My Method',
      intro:
        'Service Design has always been about making complex human systems work better. The method hasn\u2019t changed \u2014 the material has. Where I once designed journey maps and alignment workshops, I now design collaborative intelligence systems. Same discipline. New era.',
      shiftTitle: 'Two eras of practice',
      shifts: [
        {
          before: 'Map customer journeys manually',
          now: 'Design how teams and AI map journeys together',
        },
        {
          before: 'Facilitate workshops to force alignment',
          now: 'Build persistent context systems that maintain alignment',
        },
        {
          before: 'Synthesise research into insight decks',
          now: 'Create shared memory architectures that make insights cumulative',
        },
        {
          before: 'Align stakeholders through presentations',
          now: 'Design collaborative environments where evidence speaks for itself',
        },
      ],
      principlesTitle: 'Orchestration principles',
      principles: [
        {
          name: 'Shared memory',
          desc: 'Every collaboration needs a clear, persistent understanding of what the project is and why it matters.',
        },
        {
          name: 'Evidence discipline',
          desc: 'Separate proof from opinion. Ground decisions in visible evidence, not assumptions.',
        },
        {
          name: 'Decision continuity',
          desc: 'Preserve the reasoning behind decisions so teams don\u2019t restart the same thinking.',
        },
        {
          name: 'Role clarity',
          desc: 'Every collaborator \u2014 human or AI \u2014 needs a clear role and responsibility.',
        },
        {
          name: 'Structure from friction',
          desc: 'Don\u2019t design structure in advance. Let repeated friction reveal what\u2019s needed.',
        },
        {
          name: 'Collaboration clarity',
          desc: 'Define how you work together, not just what you\u2019re working on.',
        },
      ],
      philosophy:
        'The method is simple: treat collaboration as a design problem. Most teams fail not because they lack talent or tools, but because nobody designed the conditions for their thinking to connect. I design those conditions \u2014 now with AI as part of the system.',
    },
    proof: {
      label: '03',
      title: 'Proof',
      intro: 'Two projects. One thesis. Both happening now at IKEA.',
      projects: [
        {
          kicker: 'Global initiative \u00B7 Co-lead',
          title: 'Service Design Community of Practice',
          description:
            'Co-leading a global initiative to define what Service Design becomes when AI is embedded into practice. Not a tools training \u2014 a discipline-level conversation about what practitioners uniquely contribute, where the pitfalls are, and what new practice looks like.',
          points: [
            'Convening Service Designers across IKEA to define the AI-era practice',
            'Identifying what makes human orchestration irreplaceable',
            'Building shared language for a discipline in transformation',
          ],
          status: 'Active \u2014 shaping the conversation globally',
        },
        {
          kicker: 'Design Operations \u00B7 Pilot',
          title: 'Collaborative Intelligence System',
          description:
            'Leading a pilot in Design Operations to build a collaborative intelligence system using AI. Designing the structures, context architecture, and workflows that demonstrate how AI amplifies human orchestration at enterprise scale.',
          points: [
            'Defining how Design Operations integrates AI into daily practice',
            'Designing context architecture that makes human-AI collaboration systematic',
            'Building reusable patterns that scale across design teams',
          ],
          status: 'Active \u2014 demonstrating results',
        },
      ],
      convergence:
        'These projects aren\u2019t separate initiatives. They\u2019re two sides of the same question: what does Service Design become when AI is part of the practice? One asks the question at discipline level. The other answers it in daily operations. Together, they\u2019re the proof.',
    },
    experience: {
      label: '04',
      title: 'Experience',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer \u2014 Service Design',
          period: 'May 2022 \u2014 Present',
          location: 'Malm\u00F6, Sweden',
          link: 'https://journeyteams.vercel.app/',
          linkLabel: 'View Journey Teams presentation \u2192',
          highlights: [
            'Co-leading a global Service Design Community of Practice defining what the discipline becomes when AI is embedded into practice.',
            'Piloting a collaborative intelligence system in Design Operations \u2014 proving how AI amplifies human orchestration at enterprise scale.',
            'Journey Orchestrator across 16+ global product teams \u2014 designing alignment structures, research practices, and shared direction that move teams from output thinking to outcome thinking.',
            'Designed The Voice \u2014 reduced agent lookup time from 300 to 22 seconds across global support teams.',
            'Built Insikt \u2014 a coaching and performance tool adopted across 18 countries by 1,800+ users, generating 3,100 coaching sessions in its first year.',
            'Mentor in GIX Mentor Program 2023 \u2014 guided design students from research to validated prototypes.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer \u2192 Senior UX Designer',
          period: 'Apr 2019 \u2014 May 2022',
          location: 'Malm\u00F6, Sweden',
          highlights: [
            'First dedicated design hire for the B2B product area \u2014 established UX research practice and shaped roadmap priorities across three product teams.',
            'Led UX for the 2020 platform redesign \u2014 scoped, facilitated, and delivered the visual and interaction direction across web and mobile.',
            'Service design thinking applied to B2B: ran discovery sessions that connected business needs to user workflows.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer \u2192 UX Designer',
          period: 'Oct 2016 \u2014 Feb 2019',
          location: 'Malm\u00F6, Sweden',
          highlights: [
            'Designed end-to-end experiences for gaming platforms across desktop and mobile.',
            'Led UX for new feature development and platform concepts \u2014 bridging user research with rapid iteration.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 \u2014 Sep 2016',
          location: 'Malm\u00F6, Sweden',
          highlights: [
            'Worked across six enterprise projects including Ladbrokes, William Hill, PaddyPower and Gala Coral.',
            'Delivered user journeys, wireframes, prototypes and usability testing across desktop, tablet and mobile.',
            'Represented Mobenga at ICE Gaming convention in London with 50+ presentations.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Freelance Service & UX Designer',
          period: 'Jan 2016 \u2014 May 2022',
          location: 'Malm\u00F6, Sweden',
          highlights: [
            '6+ years of freelance service and product design alongside full-time roles.',
            'Clients across healthcare (Finn Medicinen), telecoms (Stenson Consulting) and digital products.',
          ],
        },
      ],
    },
    writing: {
      label: '05',
      title: 'Writing',
      intro:
        'Thinking out loud about where Service Design, AI collaboration, and the future of practice meet.',
    },
    contact: {
      label: '06',
      heading: "Let\u2019s talk",
      sub: 'Looking for leadership roles where Service Design and AI converge \u2014 Head of Service Design, Design Director, Principal Designer.\nBased in Malm\u00F6 \u2014 open to Sweden, Copenhagen, and remote-first Europe.',
      cta: 'Connect on LinkedIn \u2197',
      email: 'or email me directly \u2197',
    },
    footer: {
      copyright: '\u00A9 2026 Pablo Suzarte',
      built: 'Built with Astro & Tailwind',
    },
  },

  sv: {
    meta: {
      title: 'Pablo Suzarte \u2014 Tj\u00E4nstedesigner som omdefinierar praktiken genom AI | Malm\u00F6, Sverige',
      description:
        'Tj\u00E4nstedesigner med 15+ \u00E5rs erfarenhet av att orkestrera m\u00E4nniskor kring kundproblem. Banbrytande arbete med hur tj\u00E4nstedesign transformeras i AI-eran. IKEA Global.',
    },
    nav: {
      whatIDo: 'Vad jag g\u00F6r',
      method: 'Metod',
      proof: 'Bevis',
      experience: 'Erfarenhet',
      writing: 'Skrivande',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Senior Designer \u00B7 IKEA Global \u00B7 Malm\u00F6, Sverige',
      title: 'Jag designar hur samarbete\nfungerar i AI-eran.',
      tagline:
        '15 \u00E5r av att orkestrera m\u00E4nniskor kring kundbehov. Nu g\u00F6r jag samma sak f\u00F6r samarbetet sj\u00E4lvt \u2014 designar hur team och AI t\u00E4nker tillsammans.',
      cta1: 'Se bevisen',
      cta2: 'LinkedIn \u2197',
      scroll: 'scrolla',
    },
    about: {
      label: '01',
      title: 'Vad jag g\u00F6r',
      p1: 'Jag har tillbringat femton \u00E5r med att g\u00F6ra en sak: orkestrera m\u00E4nniskor kring kundproblem. Tvinga tv\u00E4rfunktionella team f\u00F6rbi sin f\u00F6rsta l\u00F6sning till grundorsaksf\u00F6rst\u00E5else. Designa workshops, ritualer och det gemensamma spr\u00E5k som g\u00F6r samordning m\u00F6jlig i stor skala.',
      p2: 'Nu g\u00F6r jag samma sak f\u00F6r samarbetet sj\u00E4lvt. P\u00E5 IKEA leder jag tv\u00E5 sammankopplande initiativ som bevisar vad som h\u00E4nder n\u00E4r tj\u00E4nstedesign absorberar AI \u2014 inte som ett p\u00E5skruvat verktyg, utan som ett fundamentalt skifte i hur team t\u00E4nker, beslutar och r\u00F6r sig tillsammans.',
      p3: 'Det handlar inte om att prompta chatbots eller automatisera arbetsfl\u00F6den. Det handlar om en disciplin \u2014 tj\u00E4nstedesign \u2014 som utvecklas f\u00F6r att m\u00F6ta ett \u00F6gonblick. Och jag \u00E4r i centrum f\u00F6r att definiera hur det ser ut.',
      badge1Num: '15+',
      badge1Label: '\u00C5r inom tj\u00E4nstedesign',
      badge2Num: '2',
      badge2Label: 'Levande piloter p\u00E5 IKEA',
      badge3Num: 'Ny',
      badge3Label: 'Era av praktik',
    },
    method: {
      label: '02',
      title: 'Min metod',
      intro:
        'Tj\u00E4nstedesign har alltid handlat om att f\u00E5 komplexa m\u00E4nskliga system att fungera b\u00E4ttre. Metoden har inte f\u00F6r\u00E4ndrats \u2014 materialet har det. D\u00E4r jag en g\u00E5ng designade kundresekartor och samordningsworkshops designar jag nu system f\u00F6r kollaborativ intelligens. Samma disciplin. Ny era.',
      shiftTitle: 'Tv\u00E5 eror av praktik',
      shifts: [
        {
          before: 'Kartl\u00E4gga kundresor manuellt',
          now: 'Designa hur team och AI kartl\u00E4gger resor tillsammans',
        },
        {
          before: 'Facilitera workshops f\u00F6r att tvinga samordning',
          now: 'Bygga ihållande kontextsystem som uppr\u00E4tth\u00E5ller samordning',
        },
        {
          before: 'Syntetisera forskning till insiktspresentationer',
          now: 'Skapa delade minnesarkitekturer som g\u00F6r insikter kumulativa',
        },
        {
          before: 'Samordna intressenter genom presentationer',
          now: 'Designa samarbetsmilj\u00F6er d\u00E4r evidens talar f\u00F6r sig sj\u00E4lv',
        },
      ],
      principlesTitle: 'Orkestrerprinciper',
      principles: [
        {
          name: 'Delat minne',
          desc: 'Varje samarbete beh\u00F6ver en tydlig, ihållande f\u00F6rst\u00E5else f\u00F6r vad projektet \u00E4r och varf\u00F6r det spelar roll.',
        },
        {
          name: 'Evidensdisciplin',
          desc: 'Separera bevis fr\u00E5n \u00E5sikt. Grunda beslut i synlig evidens, inte antaganden.',
        },
        {
          name: 'Beslutskontinuitet',
          desc: 'Bevara resonemangen bakom beslut s\u00E5 att team inte startar om samma t\u00E4nkande.',
        },
        {
          name: 'Rollklarhet',
          desc: 'Varje medarbetare \u2014 m\u00E4nniska eller AI \u2014 beh\u00F6ver en tydlig roll och ansvar.',
        },
        {
          name: 'Struktur fr\u00E5n friktion',
          desc: 'Designa inte struktur i f\u00F6rv\u00E4g. L\u00E5t upprepad friktion avsl\u00F6ja vad som beh\u00F6vs.',
        },
        {
          name: 'Samarbetsklarhet',
          desc: 'Definiera hur ni arbetar tillsammans, inte bara vad ni arbetar med.',
        },
      ],
      philosophy:
        'Metoden \u00E4r enkel: behandla samarbete som ett designproblem. De flesta team misslyckas inte f\u00F6r att de saknar talang eller verktyg, utan f\u00F6r att ingen designade f\u00F6ruts\u00E4ttningarna f\u00F6r att deras t\u00E4nkande ska kopplas samman. Jag designar de f\u00F6ruts\u00E4ttningarna \u2014 nu med AI som del av systemet.',
    },
    proof: {
      label: '03',
      title: 'Bevis',
      intro: 'Tv\u00E5 projekt. En tes. B\u00E5da p\u00E5g\u00E5r nu p\u00E5 IKEA.',
      projects: [
        {
          kicker: 'Globalt initiativ \u00B7 Med-ledare',
          title: 'Service Design Community of Practice',
          description:
            'Med-leder ett globalt initiativ f\u00F6r att definiera vad tj\u00E4nstedesign blir n\u00E4r AI \u00E4r inb\u00E4ddad i praktiken. Inte en verktygsutbildning \u2014 en disciplin\u00E4r konversation om vad praktiker unikt bidrar med, var fallgroparna finns och hur ny praktik ser ut.',
          points: [
            'Samlar tj\u00E4nstedesigners \u00F6ver hela IKEA f\u00F6r att definiera AI-erans praktik',
            'Identifierar vad som g\u00F6r m\u00E4nsklig orkestrering o\u00F6vers\u00E4ttlig',
            'Bygger gemensamt spr\u00E5k f\u00F6r en disciplin i transformation',
          ],
          status: 'Aktiv \u2014 formar samtalet globalt',
        },
        {
          kicker: 'Design Operations \u00B7 Pilot',
          title: 'System f\u00F6r kollaborativ intelligens',
          description:
            'Leder en pilot inom Design Operations f\u00F6r att bygga ett system f\u00F6r kollaborativ intelligens med AI. Designar strukturer, kontextarkitektur och arbetsfl\u00F6den som visar hur AI f\u00F6rst\u00E4rker m\u00E4nsklig orkestrering p\u00E5 enterprise-niv\u00E5.',
          points: [
            'Definierar hur Design Operations integrerar AI i daglig praktik',
            'Designar kontextarkitektur som g\u00F6r m\u00E4nniska-AI-samarbete systematiskt',
            'Bygger \u00E5teranv\u00E4ndbara m\u00F6nster som skalas \u00F6ver designteam',
          ],
          status: 'Aktiv \u2014 demonstrerar resultat',
        },
      ],
      convergence:
        'Dessa projekt \u00E4r inte separata initiativ. De \u00E4r tv\u00E5 sidor av samma fr\u00E5ga: vad blir tj\u00E4nstedesign n\u00E4r AI \u00E4r del av praktiken? Ett st\u00E4ller fr\u00E5gan p\u00E5 disciplinniv\u00E5. Det andra besvarar den i daglig verksamhet. Tillsammans \u00E4r de beviset.',
    },
    experience: {
      label: '04',
      title: 'Erfarenhet',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer \u2014 Tj\u00E4nstedesign',
          period: 'Maj 2022 \u2014 Nu',
          location: 'Malm\u00F6, Sverige',
          link: 'https://journeyteams.vercel.app/',
          linkLabel: 'Se Journey Teams-presentation \u2192',
          highlights: [
            'Med-leder en global Service Design Community of Practice som definierar vad disciplinen blir n\u00E4r AI \u00E4r inb\u00E4ddad i praktiken.',
            'Pilottestar ett system f\u00F6r kollaborativ intelligens inom Design Operations.',
            'Journey Orchestrator \u00F6ver 16+ globala produktteam \u2014 designar samordningsstrukturer som flyttar team fr\u00E5n output-t\u00E4nkande till outcome-t\u00E4nkande.',
            'Designade The Voice \u2014 minskade agentens s\u00F6ktid fr\u00E5n 300 till 22 sekunder.',
            'Byggde Insikt \u2014 antagen av 1 800+ anv\u00E4ndare i 18 l\u00E4nder.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer \u2192 Senior UX Designer',
          period: 'Apr 2019 \u2014 Maj 2022',
          location: 'Malm\u00F6, Sverige',
          highlights: [
            'F\u00F6rsta dedikerade designanst\u00E4llningen f\u00F6r B2B-produktomr\u00E5det.',
            'Ledde UX f\u00F6r plattformens omdesign 2020.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer \u2192 UX Designer',
          period: 'Okt 2016 \u2014 Feb 2019',
          location: 'Malm\u00F6, Sverige',
          highlights: [
            'Designade helhetsupplevelser f\u00F6r spelplattformar p\u00E5 desktop och mobil.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 \u2014 Sep 2016',
          location: 'Malm\u00F6, Sverige',
          highlights: [
            'Arbetade med sex enterprise-projekt inklusive Ladbrokes, William Hill och PaddyPower.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Frilans Tj\u00E4nste- & UX-designer',
          period: 'Jan 2016 \u2014 Maj 2022',
          location: 'Malm\u00F6, Sverige',
          highlights: [
            '6+ \u00E5r av frilansande tj\u00E4nste- och produktdesign parallellt med heltidstj\u00E4nster.',
          ],
        },
      ],
    },
    writing: {
      label: '05',
      title: 'Skrivande',
      intro:
        'Tankar om var tj\u00E4nstedesign, AI-samarbete och praktikens framtid m\u00F6ts.',
    },
    contact: {
      label: '06',
      heading: 'L\u00E5t oss prata',
      sub: 'S\u00F6ker ledarskapsroller d\u00E4r tj\u00E4nstedesign och AI konvergerar \u2014 Head of Service Design, Design Director, Principal Designer.\nBaserad i Malm\u00F6 \u2014 \u00F6ppen f\u00F6r Sverige, K\u00F6penhamn och remote-first Europa.',
      cta: 'Kontakta mig p\u00E5 LinkedIn \u2197',
      email: 'eller mejla mig direkt \u2197',
    },
    footer: {
      copyright: '\u00A9 2026 Pablo Suzarte',
      built: 'Byggd med Astro & Tailwind',
    },
  },

  es: {
    meta: {
      title: 'Pablo Suzarte \u2014 Dise\u00F1ador de Servicios redefiniendo la pr\u00E1ctica a trav\u00E9s de IA | Malm\u00F6, Suecia',
      description:
        'Dise\u00F1ador de Servicios con 15+ a\u00F1os orquestando personas alrededor de problemas de clientes. Pionero en c\u00F3mo el Dise\u00F1o de Servicios se transforma en la era de la IA. IKEA Global.',
    },
    nav: {
      whatIDo: 'Qu\u00E9 hago',
      method: 'M\u00E9todo',
      proof: 'Pruebas',
      experience: 'Experiencia',
      writing: 'Escritos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Senior Designer \u00B7 IKEA Global \u00B7 Malm\u00F6, Suecia',
      title: 'Dise\u00F1o c\u00F3mo funciona\nla colaboraci\u00F3n en la era de la IA.',
      tagline:
        '15 a\u00F1os orquestando personas alrededor de necesidades del cliente. Ahora hago lo mismo para la colaboraci\u00F3n en s\u00ED \u2014 dise\u00F1ando c\u00F3mo los equipos y la IA piensan juntos.',
      cta1: 'Ver las pruebas',
      cta2: 'LinkedIn \u2197',
      scroll: 'deslizar',
    },
    about: {
      label: '01',
      title: 'Qu\u00E9 hago',
      p1: 'Pas\u00E9 quince a\u00F1os haciendo una cosa: orquestar personas alrededor de problemas de clientes. Forzar a equipos multifuncionales m\u00E1s all\u00E1 de su primera soluci\u00F3n hacia la comprensi\u00F3n de la causa ra\u00EDz. Dise\u00F1ar los talleres, los rituales, el lenguaje compartido que hace posible la alineaci\u00F3n a escala.',
      p2: 'Ahora estoy haciendo lo mismo para la colaboraci\u00F3n en s\u00ED. En IKEA, lidero dos iniciativas convergentes que demuestran qu\u00E9 sucede cuando la pr\u00E1ctica del Dise\u00F1o de Servicios absorbe la IA \u2014 no como una herramienta a\u00F1adida, sino como un cambio fundamental en c\u00F3mo los equipos piensan, deciden y avanzan juntos.',
      p3: 'Esto no se trata de hacer prompts a chatbots o automatizar flujos de trabajo. Se trata de una disciplina \u2014 Dise\u00F1o de Servicios \u2014 evolucionando para encontrar su momento. Y estoy en el centro de definir c\u00F3mo se ve eso.',
      badge1Num: '15+',
      badge1Label: 'A\u00F1os en Dise\u00F1o de Servicios',
      badge2Num: '2',
      badge2Label: 'Pilotos activos en IKEA',
      badge3Num: 'Nueva',
      badge3Label: 'Era de pr\u00E1ctica',
    },
    method: {
      label: '02',
      title: 'Mi m\u00E9todo',
      intro:
        'El Dise\u00F1o de Servicios siempre ha tratado de hacer que los sistemas humanos complejos funcionen mejor. El m\u00E9todo no ha cambiado \u2014 el material s\u00ED. Donde antes dise\u00F1aba mapas de viaje y talleres de alineaci\u00F3n, ahora dise\u00F1o sistemas de inteligencia colaborativa. Misma disciplina. Nueva era.',
      shiftTitle: 'Dos eras de pr\u00E1ctica',
      shifts: [
        {
          before: 'Mapear viajes de clientes manualmente',
          now: 'Dise\u00F1ar c\u00F3mo equipos e IA mapean viajes juntos',
        },
        {
          before: 'Facilitar talleres para forzar alineaci\u00F3n',
          now: 'Construir sistemas de contexto persistente que mantienen la alineaci\u00F3n',
        },
        {
          before: 'Sintetizar investigaci\u00F3n en presentaciones de insights',
          now: 'Crear arquitecturas de memoria compartida que hacen los insights acumulativos',
        },
        {
          before: 'Alinear stakeholders a trav\u00E9s de presentaciones',
          now: 'Dise\u00F1ar entornos colaborativos donde la evidencia habla por s\u00ED misma',
        },
      ],
      principlesTitle: 'Principios de orquestaci\u00F3n',
      principles: [
        {
          name: 'Memoria compartida',
          desc: 'Toda colaboraci\u00F3n necesita una comprensi\u00F3n clara y persistente de qu\u00E9 es el proyecto y por qu\u00E9 importa.',
        },
        {
          name: 'Disciplina de evidencia',
          desc: 'Separar pruebas de opini\u00F3n. Fundamentar decisiones en evidencia visible, no suposiciones.',
        },
        {
          name: 'Continuidad de decisiones',
          desc: 'Preservar el razonamiento detr\u00E1s de las decisiones para que los equipos no reinicien el mismo pensamiento.',
        },
        {
          name: 'Claridad de roles',
          desc: 'Todo colaborador \u2014 humano o IA \u2014 necesita un rol y responsabilidad claros.',
        },
        {
          name: 'Estructura desde la fricci\u00F3n',
          desc: 'No dise\u00F1es estructura por anticipado. Deja que la fricci\u00F3n repetida revele lo que se necesita.',
        },
        {
          name: 'Claridad de colaboraci\u00F3n',
          desc: 'Define c\u00F3mo trabajan juntos, no solo en qu\u00E9 est\u00E1n trabajando.',
        },
      ],
      philosophy:
        'El m\u00E9todo es simple: tratar la colaboraci\u00F3n como un problema de dise\u00F1o. La mayor\u00EDa de los equipos fallan no porque les falte talento o herramientas, sino porque nadie dise\u00F1\u00F3 las condiciones para que su pensamiento se conecte. Yo dise\u00F1o esas condiciones \u2014 ahora con IA como parte del sistema.',
    },
    proof: {
      label: '03',
      title: 'Pruebas',
      intro: 'Dos proyectos. Una tesis. Ambos sucediendo ahora en IKEA.',
      projects: [
        {
          kicker: 'Iniciativa global \u00B7 Co-l\u00EDder',
          title: 'Comunidad de Pr\u00E1ctica de Dise\u00F1o de Servicios',
          description:
            'Co-liderando una iniciativa global para definir qu\u00E9 se convierte el Dise\u00F1o de Servicios cuando la IA est\u00E1 integrada en la pr\u00E1ctica.',
          points: [
            'Reuniendo dise\u00F1adores de servicios en IKEA para definir la pr\u00E1ctica de la era IA',
            'Identificando qu\u00E9 hace irremplazable la orquestaci\u00F3n humana',
            'Construyendo lenguaje compartido para una disciplina en transformaci\u00F3n',
          ],
          status: 'Activo \u2014 dando forma a la conversaci\u00F3n globalmente',
        },
        {
          kicker: 'Design Operations \u00B7 Piloto',
          title: 'Sistema de Inteligencia Colaborativa',
          description:
            'Liderando un piloto en Design Operations para construir un sistema de inteligencia colaborativa usando Claude Code. Dise\u00F1ando estructuras, arquitectura de contexto y flujos de trabajo que demuestran c\u00F3mo la IA amplifica la orquestaci\u00F3n humana a escala empresarial.',
          points: [
            'Definiendo c\u00F3mo Design Operations integra IA en la pr\u00E1ctica diaria',
            'Dise\u00F1ando arquitectura de contexto que hace la colaboraci\u00F3n humano-IA sistem\u00E1tica',
            'Construyendo patrones reutilizables que escalan a trav\u00E9s de equipos de dise\u00F1o',
          ],
          status: 'Activo \u2014 demostrando resultados',
        },
      ],
      convergence:
        'Estos proyectos no son iniciativas separadas. Son dos lados de la misma pregunta: \u00BFqu\u00E9 se convierte el Dise\u00F1o de Servicios cuando la IA es parte de la pr\u00E1ctica? Uno hace la pregunta a nivel de disciplina. El otro la responde en operaciones diarias. Juntos, son la prueba.',
    },
    experience: {
      label: '04',
      title: 'Experiencia',
      items: [
        {
          company: 'IKEA',
          role: 'Senior Product UX Designer \u2014 Dise\u00F1o de Servicios',
          period: 'May 2022 \u2014 Presente',
          location: 'Malm\u00F6, Suecia',
          link: 'https://journeyteams.vercel.app/',
          linkLabel: 'Ver presentaci\u00F3n Journey Teams \u2192',
          highlights: [
            'Co-liderando una Comunidad de Pr\u00E1ctica global de Dise\u00F1o de Servicios.',
            'Piloteando un sistema de inteligencia colaborativa en Design Operations.',
            'Journey Orchestrator en 16+ equipos globales de producto.',
            'Dise\u00F1\u00F3 The Voice \u2014 redujo el tiempo de b\u00FAsqueda de 300 a 22 segundos.',
            'Construy\u00F3 Insikt \u2014 adoptado por 1.800+ usuarios en 18 pa\u00EDses.',
          ],
        },
        {
          company: 'Prisjakt',
          role: 'Lead B2B Designer \u2192 Senior UX Designer',
          period: 'Abr 2019 \u2014 May 2022',
          location: 'Malm\u00F6, Suecia',
          highlights: [
            'Primera contrataci\u00F3n dedicada de dise\u00F1o para el \u00E1rea de producto B2B.',
            'Lider\u00F3 UX para el redise\u00F1o de plataforma 2020.',
          ],
        },
        {
          company: 'Hero Gaming',
          role: 'Senior UX Designer \u2192 UX Designer',
          period: 'Oct 2016 \u2014 Feb 2019',
          location: 'Malm\u00F6, Suecia',
          highlights: [
            'Dise\u00F1\u00F3 experiencias de extremo a extremo para plataformas de juego.',
          ],
        },
        {
          company: 'Mobenga',
          role: 'Interaction / UX Designer',
          period: 'Mar 2013 \u2014 Sep 2016',
          location: 'Malm\u00F6, Suecia',
          highlights: [
            'Trabaj\u00F3 en seis proyectos enterprise incluyendo Ladbrokes y William Hill.',
          ],
        },
        {
          company: 'pablosuzartemedia',
          role: 'Dise\u00F1ador Freelance de Servicios y UX',
          period: 'Ene 2016 \u2014 May 2022',
          location: 'Malm\u00F6, Suecia',
          highlights: [
            '6+ a\u00F1os de dise\u00F1o freelance de servicios y productos.',
          ],
        },
      ],
    },
    writing: {
      label: '05',
      title: 'Escritos',
      intro:
        'Pensando en voz alta sobre d\u00F3nde se encuentran el Dise\u00F1o de Servicios, la colaboraci\u00F3n con IA y el futuro de la pr\u00E1ctica.',
    },
    contact: {
      label: '06',
      heading: 'Hablemos',
      sub: 'Buscando roles de liderazgo donde el Dise\u00F1o de Servicios y la IA convergen \u2014 Head of Service Design, Design Director, Principal Designer.\nBasado en Malm\u00F6 \u2014 abierto a Suecia, Copenhague y Europa remote-first.',
      cta: 'Conectar en LinkedIn \u2197',
      email: 'o escr\u00EDbeme directamente \u2197',
    },
    footer: {
      copyright: '\u00A9 2026 Pablo Suzarte',
      built: 'Construido con Astro & Tailwind',
    },
  },
}
