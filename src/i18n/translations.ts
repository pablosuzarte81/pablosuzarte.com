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

interface StatItem {
  value: string
  label: string
}

interface DetailCard {
  title: string
  body: string
}

interface ComparisonGroup {
  title: string
  items: string[]
}

interface LayerItem {
  name: string
  description: string
}

export interface T {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    work: string
    aiEducation: string
    aiMindset: string
    experience: string
    skills: string
    contact: string
    writing: string
    playground: string
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
  homeFutureRole: {
    kicker: string
    title: string
    p1: string
    p2: string
    card1Label: string
    card1Title: string
    card1Body: string
    card2Label: string
    card2Title: string
    card2Body: string
    metrics: StatItem[]
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
  aiMindset: {
    label: string
    title: string
    intro: string
    approach: string
    approachBody: string
    toolkit: { name: string; use: string }[]
    principlesTitle: string
    principles: { name: string; desc: string }[]
    parallelsTitle: string
    parallels: { sd: string; pi: string }[]
    visionTitle: string
    visionBody: string
    visionPoints: string[]
    cta: string
  }
  aiEducation: {
    label: string
    title: string
    intro: string
    featureKicker: string
    featureTitle: string
    featureMeta: string
    featureDescription: string
    points: string[]
    metrics: StatItem[]
    problemTitle: string
    problemCards: DetailCard[]
    shiftTitle: string
    shiftOld: ComparisonGroup
    shiftNew: ComparisonGroup
    roleTitle: string
    roleBody: string
    roleCards: DetailCard[]
    audienceTitle: string
    audiencePoints: string[]
    learnTitle: string
    layers: LayerItem[]
    phasesTitle: string
    phases: DetailCard[]
    proofTitle: string
    proofCards: DetailCard[]
    outcomesTitle: string
    outcomes: string[]
    primaryCta: string
    secondaryCta: string
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
      title: 'Pablo Suzarte — Senior Product UX & Service Design Leader',
      description:
        'Senior UX Leader specializing in Service Design, User Research, Journey Mapping, and Journey Orchestration. 15+ years of experience, currently at IKEA Global.',
    },
    nav: {
      about: 'About',
      work: 'Work',
      aiEducation: 'AI & Education',
      aiMindset: 'AI Mindset',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      writing: 'Writing',
      playground: 'AI Playground',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Designing how humans and AI collaborate — so teams can do their best work together.',
      tagline:
        '15+ years of service design and journey orchestration.\nNow shaping the ways of working where AI becomes a real collaborator, not just a tool.',
      cta1: 'See how I think about AI',
      cta2: 'LinkedIn ↗',
      location: '📍 Greater Malmö, Sweden',
      currentRole: 'Currently @ IKEA Global',
      scroll: 'scroll',
    },
    homeFutureRole: {
      kicker: 'Designing Project Intelligence',
      title: 'A future role for people who design how humans and AI think together.',
      p1: 'The focus is not only to explain a framework. It is to help people build a new mindset from 0 to 100 and design their own project intelligence.',
      p2: 'At the center of that role is a simple idea: a project brain is not a folder of notes. It is an operating system for human-AI collaboration.',
      card1Label: 'Role definition',
      card1Title: 'Single source of truth logic designer',
      card1Body:
        'Someone who turns repeated friction into the right file, structure, and workflow layer so serious projects can continue with clarity and low cognitive friction.',
      card2Label: 'Operating rule',
      card2Title: 'Structure should emerge from friction',
      card2Body:
        'If friction appears repeatedly, create the file or structure that solves that friction. Real projects teach what structure is necessary.',
      metrics: [
        { value: '05', label: 'minimum viable stack: CLAUDE, status, evidence, assets, working style' },
        { value: '01', label: 'job per file: every layer has one clear responsibility' },
        { value: '∞', label: 'the system grows only when repeated friction proves a new layer is needed' },
      ],
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
    aiMindset: {
      label: '02',
      title: 'AI Mindset',
      intro:
        'AI removed the tech bottleneck. The new challenge is designing how humans and AI think together. That is a service design problem — and I have been solving it for 15 years.',
      approach: 'How I work with AI',
      approachBody:
        'I do not just use AI tools — I design the collaboration. I set up project intelligence structures: configuring MD files, agent roles, shared memory, and reusable workflows that let humans and AI agents produce their best work together on complex multi-step projects.',
      toolkit: [
        { name: 'Claude & Claude Code', use: 'Deep reasoning, complex orchestration, building full applications from intent' },
        { name: 'ChatGPT & Codex', use: 'Rapid prototyping, code generation, conversational exploration' },
        { name: 'Gemini', use: 'Multi-modal research, large context analysis, cross-referencing sources' },
        { name: 'GitHub Copilot', use: 'Inline code completion, pair programming, context-aware suggestions across the IDE' },
      ],
      principlesTitle: 'Project Intelligence Principles',
      principles: [
        { name: 'Shared memory', desc: 'AI needs a clear understanding of what the project is, why it matters, and what must not be misunderstood.' },
        { name: 'Current orientation', desc: 'A visible sense of where things stand: what is agreed, what is open, what is next.' },
        { name: 'Evidence discipline', desc: 'Ideas grounded in visible evidence, not mixed with assumptions or storytelling.' },
        { name: 'Asset awareness', desc: 'Both humans and AI know what materials exist so work stays grounded in reality.' },
        { name: 'Collaboration clarity', desc: 'Knowing how to work together well, not just what the project is about.' },
        { name: 'Decision continuity', desc: 'Decisions and their reasoning preserved so the team does not restart the same thinking.' },
        { name: 'Role clarity', desc: 'Every collaborator — human or AI — has a clear role and responsibility.' },
        { name: 'Reusable patterns', desc: 'Workflows and methods that work well are saved, refined, and reused.' },
      ],
      parallelsTitle: 'Same skill. New material.',
      parallels: [
        { sd: 'Service design makes complex experiences understandable.', pi: 'Project intelligence makes complex projects understandable.' },
        { sd: 'Service design connects research, stakeholders, and journeys.', pi: 'Project intelligence connects evidence, decisions, and collaboration.' },
        { sd: 'Service design reduces friction in services.', pi: 'Project intelligence reduces friction in how projects think and move.' },
        { sd: 'Service design designs better conditions for users.', pi: 'Project intelligence designs better conditions for teams and AI.' },
      ],
      visionTitle: 'What I want to build next',
      visionBody:
        'I want to help organisations activate AI as a team superpower — not by replacing people, but by designing environments where every co-worker can use AI to learn faster, solve harder problems, and enjoy their work more.',
      visionPoints: [
        'Set up AI workflows tailored to your teams — not generic, human-centred',
        'Mentor individuals and teams on how to think with AI, not just prompt it',
        'Build project intelligence structures that scale across organisations',
        'Help leadership understand the real potential — and the real conditions for it to work',
      ],
      cta: 'Let\u2019s talk about what\u2019s possible',
    },
    aiEducation: {
      label: '02',
      title: 'AI & Education',
      intro:
        'Alongside product leadership, I build AI-native learning experiences that turn complex ideas into something people can actually use. AI Project Brain Lab is the clearest example: a course-led website that teaches how to turn AI from a clever tool into a serious project collaborator.',
      featureKicker: 'Self-initiated education product',
      featureTitle: 'AI Project Brain Lab',
      featureMeta: 'Course concept · Landing page · AI collaboration framework',
      featureDescription:
        'I designed the full learning narrative, landing-page experience, and teaching structure behind a course about project intelligence, continuity, and context design.',
      points: [
        'Built the positioning, copy, and UX for a course-led website around AI and serious project work.',
        'Translated a complex framework into a readable, conversion-focused learning experience.',
        'Used the project itself as proof of how design, education, and AI can work together.',
      ],
      metrics: [
        { value: '08', label: 'course chapters translated into the portfolio' },
        { value: '05', label: 'core system layers taught through the concept' },
        { value: '1', label: 'live prototype used as a teaching and positioning artifact' },
      ],
      problemTitle: 'The problem it responds to',
      problemCards: [
        {
          title: 'Context disappears',
          body: 'People keep rebuilding the same background instead of building momentum across sessions.',
        },
        {
          title: 'Continuity breaks',
          body: 'Good thinking gets lost between tools, notes, and decisions, which makes serious work hard to continue.',
        },
        {
          title: 'Outputs stay shallow',
          body: 'AI looks useful in isolated moments, but it often fails when a project becomes complex and long-running.',
        },
      ],
      shiftTitle: 'The central shift',
      shiftOld: {
        title: 'Reactive AI use',
        items: [
          'Ask isolated questions',
          'Hope the output fits',
          'Repeat project context constantly',
          'Lose clarity between sessions',
        ],
      },
      shiftNew: {
        title: 'Designed AI collaboration',
        items: [
          'Design context deliberately',
          'Build continuity into the workflow',
          'Separate evidence, status, and decisions clearly',
          'Guide intelligence across time',
        ],
      },
      roleTitle: 'The role behind the course',
      roleBody:
        'The course frames a new professional posture: the Project Intelligence Designer. Someone who turns messy, evolving project reality into a usable system of clarity, continuity, and action.',
      roleCards: [
        {
          title: 'Protects focus',
          body: 'Keeps important work from drifting into noise and repetition.',
        },
        {
          title: 'Designs continuity',
          body: 'Makes continuation possible without constant restart.',
        },
        {
          title: 'Reduces friction',
          body: 'Turns messy project reality into a system humans and AI can actually use.',
        },
      ],
      audienceTitle: 'Who the content is built for',
      audiencePoints: [
        'Designers, strategists, researchers, and builders tired of shallow AI workflows.',
        'People who want stronger outputs, not just faster outputs.',
        'Teams working through moving parts, evolving decisions, and cross-functional complexity.',
        'Anyone who wants AI inside the workflow, not beside it.',
      ],
      learnTitle: 'What the course teaches',
      layers: [
        {
          name: 'CLAUDE.md',
          description: 'Defines what the project is, why it matters, and the worldview guiding the work.',
        },
        {
          name: 'PROJECT_STATUS.md',
          description: 'Makes current state, progress, and next steps legible.',
        },
        {
          name: 'EVIDENCE_PACK.md',
          description: 'Separates proof, research, and grounded findings from loose opinion.',
        },
        {
          name: 'ASSET_INVENTORY.md',
          description: 'Tracks what already exists so work can build on real material instead of memory.',
        },
        {
          name: 'WORKING_STYLE.md',
          description: 'Clarifies collaboration preferences, tone, and execution standards.',
        },
      ],
      phasesTitle: 'How the learning journey unfolds',
      phases: [
        {
          title: 'Understand the shift',
          body: 'Why most AI workflows stay shallow and why structure changes collaboration quality.',
        },
        {
          title: 'See the system',
          body: 'Learn the five-layer project brain and what each layer is responsible for.',
        },
        {
          title: 'Apply it to real work',
          body: 'Translate the framework into an actual project workflow with clearer continuity.',
        },
        {
          title: 'Stress-test the method',
          body: 'Use the model across evolving work instead of one-off prompts.',
        },
        {
          title: 'Leave with a repeatable practice',
          body: 'Turn the ideas into a system you can reuse immediately in your own projects.',
        },
      ],
      proofTitle: 'Why this project matters',
      proofCards: [
        {
          title: 'Before',
          body: 'Context lived in too many places, decisions were easy to lose, and every session required rebuilding the same understanding.',
        },
        {
          title: 'The system',
          body: 'A clearer structure separated memory, status, evidence, assets, and collaboration guidance so the project could continue without reset.',
        },
        {
          title: 'After',
          body: 'Onboarding became faster, continuity improved, and AI support moved from shallow assistance toward real project collaboration.',
        },
      ],
      outcomesTitle: 'What people leave with',
      outcomes: [
        'A practical system for structuring project context',
        'A clearer way to preserve continuity across sessions',
        'A method for separating evidence, status, and decisions',
        'A future-facing mental model for working with AI at a higher level',
      ],
      primaryCta: 'See the full breakdown',
      secondaryCta: 'Ask me about this work',
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
          link: '/journey-teams',
          linkLabel: 'View Journey Teams presentation →',
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
    writing: {
      label: '05',
      title: 'Writing',
      intro:
        'Thinking out loud about where service design, AI collaboration, and project intelligence meet.',
    },
    contact: {
      label: '06',
      heading: "Let's talk",
      sub: 'Looking for Head of UX, UX Director, and Principal Designer roles in product organisations that want to be genuinely outcome-led.\nBased in Malmö — open to Sweden, Copenhagen, and remote-first Europe.',
      cta: 'Connect on LinkedIn ↗',
      email: 'or email me directly ↗',
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
      aiEducation: 'AI & utbildning',
      aiMindset: 'AI-tänk',
      experience: 'Erfarenhet',
      skills: 'Kompetens',
      contact: 'Kontakt',
      writing: 'Skrivande',
      playground: 'AI Playground',
    },
    hero: {
      greeting: 'Hej, jag är',
      title: 'Designar hur människor och AI samarbetar — så team kan göra sitt bästa arbete tillsammans.',
      tagline:
        '15+ år av tjänstedesign och journey-orkestrering.\nNu formar jag arbetssätten där AI blir en riktig samarbetspartner, inte bara ett verktyg.',
      cta1: 'Se hur jag tänker kring AI',
      cta2: 'LinkedIn ↗',
      location: '📍 Stor-Malmö, Sverige',
      currentRole: 'Just nu @ IKEA Global',
      scroll: 'scrolla',
    },
    homeFutureRole: {
      kicker: 'Designing Project Intelligence',
      title: 'En framtida roll för människor som designar hur människor och AI tänker tillsammans.',
      p1: 'Fokus är inte bara att förklara ett ramverk. Det är att hjälpa människor bygga ett nytt mindset från 0 till 100 och designa sin egen project intelligence.',
      p2: 'I centrum för rollen finns en enkel idé: ett project brain är inte en mapp med anteckningar. Det är ett operativsystem för samarbete mellan människa och AI.',
      card1Label: 'Rolldefinition',
      card1Title: 'Single source of truth logic designer',
      card1Body:
        'Någon som omvandlar återkommande friktion till rätt fil, struktur och arbetslager så att seriösa projekt kan fortsätta med tydlighet och låg kognitiv friktion.',
      card2Label: 'Arbetsregel',
      card2Title: 'Structure should emerge from friction',
      card2Body:
        'Om friktion uppstår upprepade gånger ska man skapa filen eller strukturen som löser den. Verkliga projekt lär oss vilken struktur som faktiskt behövs.',
      metrics: [
        { value: '05', label: 'minimalt stack: CLAUDE, status, evidens, assets, working style' },
        { value: '01', label: 'ett jobb per fil: varje lager har ett tydligt ansvar' },
        { value: '∞', label: 'systemet växer bara när återkommande friktion visar att ett nytt lager behövs' },
      ],
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
    aiMindset: {
      label: '02',
      title: 'AI-tänk',
      intro:
        'AI har tagit bort den tekniska flaskhalsen. Den nya utmaningen är att designa hur människor och AI tänker tillsammans. Det är ett tjänstedesignproblem — och jag har löst det i 15 år.',
      approach: 'Hur jag arbetar med AI',
      approachBody:
        'Jag använder inte bara AI-verktyg — jag designar samarbetet. Jag sätter upp projektintelligensstrukturer: konfigurerar MD-filer, agentroller, delat minne och återanvändbara arbetsflöden som låter människor och AI-agenter producera sitt bästa arbete tillsammans i komplexa projekt.',
      toolkit: [
        { name: 'Claude & Claude Code', use: 'Djup resonering, komplex orkestrering, bygga hela applikationer från intention' },
        { name: 'ChatGPT & Codex', use: 'Snabb prototyping, kodgenerering, utforskande samtal' },
        { name: 'Gemini', use: 'Multimodal research, stor kontextanalys, korskontroll av källor' },
        { name: 'GitHub Copilot', use: 'Inline-kodkomplettering, parprogrammering, kontextmedvetna förslag i hela IDE:n' },
      ],
      principlesTitle: 'Principer för projektintelligens',
      principles: [
        { name: 'Delat minne', desc: 'AI behöver en tydlig förståelse för vad projektet är, varför det spelar roll och vad som inte får missförstås.' },
        { name: 'Nulägesorientering', desc: 'En synlig känsla för var saker står: vad som är överenskommet, vad som är öppet, vad som är nästa steg.' },
        { name: 'Evidensdisciplin', desc: 'Idéer grundade i synlig evidens, inte blandade med antaganden eller storytelling.' },
        { name: 'Tillgångsmedvetenhet', desc: 'Både människor och AI vet vilka material som finns så arbetet förblir förankrat.' },
        { name: 'Samarbetsklarhet', desc: 'Att veta hur man arbetar bra tillsammans, inte bara vad projektet handlar om.' },
        { name: 'Beslutskontinuitet', desc: 'Beslut och deras resonemang bevaras så att teamet inte startar om samma tänkande.' },
        { name: 'Rollklarhet', desc: 'Varje medarbetare — människa eller AI — har en tydlig roll och ansvar.' },
        { name: 'Återanvändbara mönster', desc: 'Arbetsflöden och metoder som fungerar sparas, förfinas och återanvänds.' },
      ],
      parallelsTitle: 'Samma kompetens. Nytt material.',
      parallels: [
        { sd: 'Tjänstedesign gör komplexa upplevelser begripliga.', pi: 'Projektintelligens gör komplexa projekt begripliga.' },
        { sd: 'Tjänstedesign kopplar research, intressenter och kundresor.', pi: 'Projektintelligens kopplar evidens, beslut och samarbete.' },
        { sd: 'Tjänstedesign minskar friktion i tjänster.', pi: 'Projektintelligens minskar friktion i hur projekt tänker och rör sig.' },
        { sd: 'Tjänstedesign designar bättre förutsättningar för användare.', pi: 'Projektintelligens designar bättre förutsättningar för team och AI.' },
      ],
      visionTitle: 'Vad jag vill bygga härnäst',
      visionBody:
        'Jag vill hjälpa organisationer att aktivera AI som en superkraft för team — inte genom att ersätta människor, utan genom att designa miljöer där varje medarbetare kan använda AI för att lära snabbare, lösa svårare problem och trivas mer.',
      visionPoints: [
        'Sätta upp AI-arbetsflöden anpassade för era team — inte generiska, utan mänskligt centrerade',
        'Mentorskap för individer och team i hur man tänker med AI, inte bara promptar',
        'Bygga projektintelligensstrukturer som skalas över organisationer',
        'Hjälpa ledningen förstå den verkliga potentialen — och de verkliga förutsättningarna för att det ska fungera',
      ],
      cta: 'Låt oss prata om vad som är möjligt',
    },
    aiEducation: {
      label: '02',
      title: 'AI & utbildning',
      intro:
        'Parallellt med produktledarskap bygger jag AI-native lärandeupplevelser som gör komplexa idéer användbara på riktigt. AI Project Brain Lab är det tydligaste exemplet: en kursdriven webbplats som lär ut hur AI kan gå från smart verktyg till seriös projektpartner.',
      featureKicker: 'Självinitierad utbildningsprodukt',
      featureTitle: 'AI Project Brain Lab',
      featureMeta: 'Kurskoncept · Landningssida · Ramverk för AI-samarbete',
      featureDescription:
        'Jag designade hela lärandenarrativet, landningssideupplevelsen och undervisningsstrukturen bakom en kurs om projektintelligens, kontinuitet och design av kontext.',
      points: [
        'Byggde positionering, copy och UX för en kursdriven webbplats om AI och seriöst projektarbete.',
        'Översatte ett komplext ramverk till en läsbar, konverteringsfokuserad lärandeupplevelse.',
        'Använde projektet självt som bevis på hur design, utbildning och AI kan samverka.',
      ],
      metrics: [
        { value: '08', label: 'kurskapitel översatta in i portfolion' },
        { value: '05', label: 'kärnlager i systemet som lärs ut genom konceptet' },
        { value: '1', label: 'live prototyp använd som undervisnings- och positioneringsartefakt' },
      ],
      problemTitle: 'Problemet projektet svarar på',
      problemCards: [
        {
          title: 'Kontext försvinner',
          body: 'Människor bygger om samma bakgrund om och om igen istället för att bygga momentum mellan sessioner.',
        },
        {
          title: 'Kontinuiteten bryts',
          body: 'Bra tänkande går förlorat mellan verktyg, anteckningar och beslut, vilket gör seriöst arbete svårt att fortsätta.',
        },
        {
          title: 'Resultaten blir ytliga',
          body: 'AI ser användbart ut i isolerade ögonblick, men faller ofta när projekt blir komplexa och långvariga.',
        },
      ],
      shiftTitle: 'Den centrala förflyttningen',
      shiftOld: {
        title: 'Reaktiv AI-användning',
        items: [
          'Ställ isolerade frågor',
          'Hoppas att svaret passar',
          'Upprepa projektkontext konstant',
          'Tappa tydlighet mellan sessioner',
        ],
      },
      shiftNew: {
        title: 'Designat AI-samarbete',
        items: [
          'Designa kontext medvetet',
          'Bygg kontinuitet in i arbetsflödet',
          'Separera evidens, status och beslut tydligt',
          'Styr intelligens över tid',
        ],
      },
      roleTitle: 'Rollen bakom kursen',
      roleBody:
        'Kursen ramar in ett nytt professionellt förhållningssätt: Project Intelligence Designer. Någon som gör rörlig, komplex projektrealitet till ett användbart system av tydlighet, kontinuitet och handling.',
      roleCards: [
        {
          title: 'Skyddar fokus',
          body: 'Håller viktigt arbete borta från brus och repetition.',
        },
        {
          title: 'Designar kontinuitet',
          body: 'Gör fortsättning möjlig utan ständig omstart.',
        },
        {
          title: 'Minskar friktion',
          body: 'Förvandlar stökig projektrealitet till ett system människor och AI faktiskt kan använda.',
        },
      ],
      audienceTitle: 'Vem innehållet är byggt för',
      audiencePoints: [
        'Designers, strateger, researchers och builders som är trötta på ytliga AI-flöden.',
        'Människor som vill ha starkare resultat, inte bara snabbare resultat.',
        'Team som arbetar genom rörliga delar, föränderliga beslut och tvärfunktionell komplexitet.',
        'Alla som vill ha AI inne i arbetsflödet, inte bredvid det.',
      ],
      learnTitle: 'Vad kursen lär ut',
      layers: [
        {
          name: 'CLAUDE.md',
          description: 'Definierar vad projektet är, varför det spelar roll och vilket perspektiv som styr arbetet.',
        },
        {
          name: 'PROJECT_STATUS.md',
          description: 'Gör nuläge, framdrift och nästa steg tydliga.',
        },
        {
          name: 'EVIDENCE_PACK.md',
          description: 'Håller isär bevis, research och grundade insikter från lösa åsikter.',
        },
        {
          name: 'ASSET_INVENTORY.md',
          description: 'Visar vad som redan finns så arbetet bygger på verkligt material istället för minne.',
        },
        {
          name: 'WORKING_STYLE.md',
          description: 'Klargör samarbetsstil, ton och kvalitetsnivå.',
        },
      ],
      phasesTitle: 'Hur läranderesan utvecklas',
      phases: [
        {
          title: 'Förstå skiftet',
          body: 'Varför de flesta AI-flöden blir ytliga och varför struktur förändrar kvaliteten på samarbetet.',
        },
        {
          title: 'Se systemet',
          body: 'Lär dig project brain-modellen med fem lager och vad varje lager ansvarar för.',
        },
        {
          title: 'Tillämpa i verkligt arbete',
          body: 'Översätt ramverket till ett verkligt projektflöde med tydligare kontinuitet.',
        },
        {
          title: 'Stress-testa metoden',
          body: 'Använd modellen över tid istället för i enstaka prompts.',
        },
        {
          title: 'Lämna med en repeterbar praktik',
          body: 'Förvandla idéerna till ett system du kan återanvända direkt i egna projekt.',
        },
      ],
      proofTitle: 'Varför projektet spelar roll',
      proofCards: [
        {
          title: 'Före',
          body: 'Kontext låg på för många platser, beslut var lätta att tappa bort och varje session krävde att samma förståelse byggdes upp igen.',
        },
        {
          title: 'Systemet',
          body: 'En tydligare struktur separerade minne, status, evidens, tillgångar och samarbetsguidning så projektet kunde fortsätta utan reset.',
        },
        {
          title: 'Efter',
          body: 'Onboarding gick snabbare, kontinuiteten blev starkare och AI-stödet rörde sig från ytlig assistans mot verkligt projektsamarbete.',
        },
      ],
      outcomesTitle: 'Vad människor lämnar med',
      outcomes: [
        'Ett praktiskt system för att strukturera projektkontext',
        'Ett tydligare sätt att bevara kontinuitet mellan sessioner',
        'En metod för att separera evidens, status och beslut',
        'En framtidsrelevant mental modell för att arbeta med AI på en högre nivå',
      ],
      primaryCta: 'Se hela genomgången',
      secondaryCta: 'Fråga mig om det här arbetet',
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
          link: '/journey-teams',
          linkLabel: 'Se Journey Teams-presentation →',
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
    writing: {
      label: '05',
      title: 'Skrivande',
      intro:
        'Tankar om var tjänstedesign, AI-samarbete och projektintelligens möts.',
    },
    contact: {
      label: '06',
      heading: 'Låt oss prata',
      sub: 'Söker Head of UX-, UX Director- och Principal Designer-roller i produktorganisationer som vill vara genuint outcome-ledda.\nBaserad i Malmö — öppen för Sverige, Köpenhamn och remote-first Europa.',
      cta: 'Kontakta mig på LinkedIn ↗',
      email: 'eller mejla mig direkt ↗',
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
      aiEducation: 'IA y educación',
      aiMindset: 'Mentalidad IA',
      experience: 'Experience',
      skills: 'Habilidades',
      contact: 'Contacto',
      writing: 'Escritos',
      playground: 'AI Playground',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Diseño cómo humanos e IA colaboran — para que los equipos hagan su mejor trabajo juntos.',
      tagline:
        'Más de 15 años de diseño de servicios y orquestación de journeys.\nAhora doy forma a las formas de trabajo donde la IA se convierte en un colaborador real, no solo una herramienta.',
      cta1: 'Cómo pienso sobre la IA',
      cta2: 'LinkedIn ↗',
      location: '📍 Gran Malmö, Suecia',
      currentRole: 'Actualmente en IKEA Global',
      scroll: 'scroll',
    },
    homeFutureRole: {
      kicker: 'Designing Project Intelligence',
      title: 'Un rol futuro para personas que diseñan cómo humanos e IA piensan juntos.',
      p1: 'El foco no es solo explicar un marco. Es ayudar a las personas a construir una nueva mentalidad de 0 a 100 y diseñar su propia project intelligence.',
      p2: 'En el centro de ese rol hay una idea simple: un project brain no es una carpeta de notas. Es un sistema operativo para colaboración entre humanos e IA.',
      card1Label: 'Definición del rol',
      card1Title: 'Single source of truth logic designer',
      card1Body:
        'Alguien que convierte la fricción repetida en el archivo, la estructura y la capa de flujo correctos para que proyectos serios puedan continuar con claridad y baja fricción cognitiva.',
      card2Label: 'Regla operativa',
      card2Title: 'Structure should emerge from friction',
      card2Body:
        'Si la fricción aparece repetidamente, crea el archivo o la estructura que la resuelve. Los proyectos reales enseñan qué estructura es necesaria.',
      metrics: [
        { value: '05', label: 'stack mínimo viable: CLAUDE, estado, evidencia, assets, working style' },
        { value: '01', label: 'un trabajo por archivo: cada capa tiene una responsabilidad clara' },
        { value: '∞', label: 'el sistema crece solo cuando la fricción repetida demuestra que hace falta una nueva capa' },
      ],
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
    aiMindset: {
      label: '02',
      title: 'Mentalidad IA',
      intro:
        'La IA eliminó el cuello de botella técnico. El nuevo desafío es diseñar cómo humanos e IA piensan juntos. Eso es un problema de diseño de servicios — y llevo 15 años resolviéndolo.',
      approach: 'Cómo trabajo con IA',
      approachBody:
        'No solo uso herramientas de IA — diseño la colaboración. Configuro estructuras de inteligencia de proyecto: archivos MD, roles de agentes, memoria compartida y flujos reutilizables que permiten que humanos y agentes de IA produzcan su mejor trabajo juntos en proyectos complejos.',
      toolkit: [
        { name: 'Claude & Claude Code', use: 'Razonamiento profundo, orquestación compleja, construir aplicaciones completas desde la intención' },
        { name: 'ChatGPT & Codex', use: 'Prototipado rápido, generación de código, exploración conversacional' },
        { name: 'Gemini', use: 'Investigación multimodal, análisis de contexto amplio, referencias cruzadas' },
        { name: 'GitHub Copilot', use: 'Completado de código inline, programación en pareja, sugerencias contextuales en todo el IDE' },
      ],
      principlesTitle: 'Principios de inteligencia de proyecto',
      principles: [
        { name: 'Memoria compartida', desc: 'La IA necesita una comprensión clara de qué es el proyecto, por qué importa y qué no debe malinterpretarse.' },
        { name: 'Orientación actual', desc: 'Una sensación visible de dónde están las cosas: qué está acordado, qué está abierto, cuál es el siguiente paso.' },
        { name: 'Disciplina de evidencia', desc: 'Ideas fundamentadas en evidencia visible, no mezcladas con suposiciones o storytelling.' },
        { name: 'Conciencia de activos', desc: 'Tanto humanos como IA saben qué materiales existen para que el trabajo se mantenga anclado.' },
        { name: 'Claridad colaborativa', desc: 'Saber cómo trabajar bien juntos, no solo de qué trata el proyecto.' },
        { name: 'Continuidad de decisiones', desc: 'Las decisiones y su razonamiento se preservan para no reiniciar el mismo pensamiento.' },
        { name: 'Claridad de roles', desc: 'Cada colaborador — humano o IA — tiene un rol y responsabilidad claros.' },
        { name: 'Patrones reutilizables', desc: 'Los flujos y métodos que funcionan se guardan, refinan y reutilizan.' },
      ],
      parallelsTitle: 'Misma habilidad. Nuevo material.',
      parallels: [
        { sd: 'El diseño de servicios hace comprensibles las experiencias complejas.', pi: 'La inteligencia de proyecto hace comprensibles los proyectos complejos.' },
        { sd: 'El diseño de servicios conecta investigación, stakeholders y journeys.', pi: 'La inteligencia de proyecto conecta evidencia, decisiones y colaboración.' },
        { sd: 'El diseño de servicios reduce la fricción en servicios.', pi: 'La inteligencia de proyecto reduce la fricción en cómo los proyectos piensan y avanzan.' },
        { sd: 'El diseño de servicios diseña mejores condiciones para usuarios.', pi: 'La inteligencia de proyecto diseña mejores condiciones para equipos e IA.' },
      ],
      visionTitle: 'Lo que quiero construir a continuación',
      visionBody:
        'Quiero ayudar a las organizaciones a activar la IA como un superpoder de equipo — no reemplazando personas, sino diseñando entornos donde cada colaborador pueda usar IA para aprender más rápido, resolver problemas más difíciles y disfrutar más de su trabajo.',
      visionPoints: [
        'Configurar flujos de trabajo con IA adaptados a tus equipos — no genéricos, centrados en personas',
        'Mentoría para individuos y equipos en cómo pensar con IA, no solo hacer prompts',
        'Construir estructuras de inteligencia de proyecto que escalen en organizaciones',
        'Ayudar al liderazgo a entender el potencial real — y las condiciones reales para que funcione',
      ],
      cta: 'Hablemos de lo que es posible',
    },
    aiEducation: {
      label: '02',
      title: 'IA y educación',
      intro:
        'Además del liderazgo de producto, construyo experiencias de aprendizaje nativas en IA que convierten ideas complejas en algo realmente utilizable. AI Project Brain Lab es el ejemplo más claro: un sitio guiado por curso que enseña cómo llevar la IA de herramienta ingeniosa a colaborador serio de proyecto.',
      featureKicker: 'Producto educativo autoimpulsado',
      featureTitle: 'AI Project Brain Lab',
      featureMeta: 'Concepto de curso · Landing page · Marco de colaboración con IA',
      featureDescription:
        'Diseñé toda la narrativa de aprendizaje, la experiencia de landing page y la estructura pedagógica detrás de un curso sobre inteligencia de proyecto, continuidad y diseño de contexto.',
      points: [
        'Construí el posicionamiento, el copy y la UX de un sitio guiado por curso sobre IA y trabajo serio de proyecto.',
        'Traduje un marco complejo en una experiencia de aprendizaje legible y orientada a conversión.',
        'Usé el propio proyecto como prueba de cómo diseño, educación e IA pueden trabajar juntos.',
      ],
      metrics: [
        { value: '08', label: 'capítulos del curso traducidos dentro del portfolio' },
        { value: '05', label: 'capas centrales del sistema enseñadas a través del concepto' },
        { value: '1', label: 'prototipo vivo usado como artefacto de enseñanza y posicionamiento' },
      ],
      problemTitle: 'El problema al que responde',
      problemCards: [
        {
          title: 'El contexto desaparece',
          body: 'La gente vuelve a construir el mismo trasfondo una y otra vez en lugar de ganar impulso entre sesiones.',
        },
        {
          title: 'La continuidad se rompe',
          body: 'El buen pensamiento se pierde entre herramientas, notas y decisiones, y eso hace difícil continuar trabajo serio.',
        },
        {
          title: 'Los outputs siguen siendo superficiales',
          body: 'La IA parece útil en momentos aislados, pero suele fallar cuando el proyecto se vuelve complejo y de largo recorrido.',
        },
      ],
      shiftTitle: 'El cambio central',
      shiftOld: {
        title: 'Uso reactivo de IA',
        items: [
          'Hacer preguntas aisladas',
          'Esperar que la respuesta encaje',
          'Repetir el contexto del proyecto constantemente',
          'Perder claridad entre sesiones',
        ],
      },
      shiftNew: {
        title: 'Colaboración con IA diseñada',
        items: [
          'Diseñar el contexto deliberadamente',
          'Construir continuidad dentro del flujo de trabajo',
          'Separar evidencia, estado y decisiones con claridad',
          'Guiar la inteligencia a lo largo del tiempo',
        ],
      },
      roleTitle: 'El rol detrás del curso',
      roleBody:
        'El curso enmarca una nueva postura profesional: el Project Intelligence Designer. Alguien que convierte la realidad cambiante y desordenada de un proyecto en un sistema utilizable de claridad, continuidad y acción.',
      roleCards: [
        {
          title: 'Protege el foco',
          body: 'Evita que el trabajo importante se pierda en ruido y repetición.',
        },
        {
          title: 'Diseña continuidad',
          body: 'Hace posible continuar sin reinicios constantes.',
        },
        {
          title: 'Reduce fricción',
          body: 'Convierte la realidad desordenada del proyecto en un sistema que humanos e IA realmente pueden usar.',
        },
      ],
      audienceTitle: 'Para quién está construido el contenido',
      audiencePoints: [
        'Diseñadores, estrategas, investigadores y builders cansados de flujos de IA superficiales.',
        'Personas que quieren mejores outputs, no solo outputs más rápidos.',
        'Equipos que trabajan con muchas piezas móviles, decisiones cambiantes y complejidad interfuncional.',
        'Cualquiera que quiera la IA dentro del flujo de trabajo y no al lado.',
      ],
      learnTitle: 'Qué enseña el curso',
      layers: [
        {
          name: 'CLAUDE.md',
          description: 'Define qué es el proyecto, por qué importa y cuál es la visión que guía el trabajo.',
        },
        {
          name: 'PROJECT_STATUS.md',
          description: 'Hace visible el estado actual, el avance y los siguientes pasos.',
        },
        {
          name: 'EVIDENCE_PACK.md',
          description: 'Separa prueba, investigación y hallazgos sólidos de la opinión suelta.',
        },
        {
          name: 'ASSET_INVENTORY.md',
          description: 'Muestra qué existe ya para que el trabajo avance sobre material real y no sobre memoria.',
        },
        {
          name: 'WORKING_STYLE.md',
          description: 'Aclara preferencias de colaboración, tono y estándares de ejecución.',
        },
      ],
      phasesTitle: 'Cómo se desarrolla el recorrido de aprendizaje',
      phases: [
        {
          title: 'Entender el cambio',
          body: 'Por qué la mayoría de los flujos con IA se quedan superficiales y por qué la estructura cambia la calidad de la colaboración.',
        },
        {
          title: 'Ver el sistema',
          body: 'Aprender el project brain de cinco capas y la responsabilidad de cada una.',
        },
        {
          title: 'Aplicarlo a trabajo real',
          body: 'Traducir el marco a un flujo de proyecto real con continuidad más clara.',
        },
        {
          title: 'Poner a prueba el método',
          body: 'Usar el modelo a través de trabajo evolutivo en lugar de prompts aislados.',
        },
        {
          title: 'Salir con una práctica repetible',
          body: 'Convertir las ideas en un sistema reutilizable de inmediato en proyectos propios.',
        },
      ],
      proofTitle: 'Por qué este proyecto importa',
      proofCards: [
        {
          title: 'Antes',
          body: 'El contexto vivía en demasiados lugares, las decisiones eran fáciles de perder y cada sesión exigía reconstruir la misma comprensión.',
        },
        {
          title: 'El sistema',
          body: 'Una estructura más clara separó memoria, estado, evidencia, assets y guía de colaboración para que el proyecto pudiera continuar sin reinicio.',
        },
        {
          title: 'Después',
          body: 'El onboarding se volvió más rápido, la continuidad mejoró y el apoyo de IA pasó de asistencia superficial a colaboración real de proyecto.',
        },
      ],
      outcomesTitle: 'Con qué sale la gente',
      outcomes: [
        'Un sistema práctico para estructurar contexto de proyecto',
        'Una manera más clara de preservar continuidad entre sesiones',
        'Un método para separar evidencia, estado y decisiones',
        'Un modelo mental orientado al futuro para trabajar con IA a un nivel más alto',
      ],
      primaryCta: 'Ver el desglose completo',
      secondaryCta: 'Pregúntame por este trabajo',
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
          link: '/journey-teams',
          linkLabel: 'Ver presentación Journey Teams →',
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
    writing: {
      label: '05',
      title: 'Escritos',
      intro:
        'Reflexiones sobre dónde se cruzan el diseño de servicios, la colaboración con IA y la inteligencia de proyectos.',
    },
    contact: {
      label: '06',
      heading: 'Hablemos',
      sub: 'Busco roles de Head of UX, UX Director y Principal Designer en organizaciones de producto que quieran ser genuinamente orientadas a outcomes.\nBasado en Malmö — abierto a Suecia, Copenhague y Europa en remoto.',
      cta: 'Conectar en LinkedIn ↗',
      email: 'o escríbeme directamente ↗',
    },
    footer: {
      copyright: '© 2026 Pablo Suzarte',
      built: 'Construido con Astro & Tailwind',
    },
  },
}
