export interface ImpactMetric {
  value: string
  label: string
}

export interface Opportunity {
  opportunity: string
  impact: string
}

export interface ResearchMethod {
  method: string
  detail: string
}

export interface Workshop {
  type: string
  participants: string
}

export interface DesignStep {
  phase: string
  description: string
  stakeholderMoment?: string
}

export interface ProjectCase {
  slug: string
  title: string
  company: string
  role: string
  period: string
  tagline: string
  coverImage: string | null
  aiPrompts?: {
    hero?: string
    thumbnail?: string
    process?: string
  }
  heroMetrics: ImpactMetric[]
  businessNeed: string
  userNeed: string
  roleTitle: string
  responsibilities: string[]
  owned: string[]
  collaborated: string[]
  teamContext: string
  challengeStatement: string
  problemDiscovery: string
  researchMethods: ResearchMethod[]
  workshops: Workshop[]
  dataAnalysisApproach: string
  sharingSessions: string
  insights: string[]
  opportunities: Opportunity[]
  designSteps: DesignStep[]
  outcomeMetrics: (ImpactMetric & { context: string })[]
  nextProjectSlug: string | null
}

export const projects: ProjectCase[] = [
  {
    slug: 'ikea-journey-orchestration',
    title: 'Journey Orchestration at Scale',
    company: 'IKEA Global',
    role: 'Senior Product UX Designer',
    period: 'May 2022 – Present',
    tagline:
      'Turning journey research into prioritised action across 30+ global teams.',
    coverImage: null,
    aiPrompts: {
      hero: 'Abstract 3D visualization of 30 glowing cyan fiber-optic streams converging into a perfectly aligned golden path, dark slate background, cinematic lighting, 8k, representing organizational alignment.',
      thumbnail: 'Macro 3D render of a stylized chrome IKEA hex key resting on a bed of glowing blue blueprints, dark aesthetic, depth of field, minimalist.',
      process: 'Exploded view of a complex clockwork mechanism where the gears are made of translucent glass and light, showing internal orchestration, dark background, cyan accents.',
    },
    heroMetrics: [
      { value: '16+', label: 'Teams aligned across global product and support' },
      { value: '5', label: 'Markets covered in discovery research' },
      { value: '300→22s', label: 'Lookup time reduced via The Voice' },
    ],
    businessNeed:
      'IKEA needed a way to connect global support insights to digital product roadmaps.',
    userNeed:
      'Customers needed consistent, self-service resolution paths that actually matched their real journeys.',
    roleTitle: 'Senior Product UX Designer — Journey Orchestration Lead',
    responsibilities: [
      'Define and run the journey research practice across global teams',
      'Facilitate cross-functional alignment workshops',
      'Translate insights into self-service opportunities',
      'Mentor design students in GIX program',
    ],
    owned: [
      'Journey framework design and rollout',
      'Workshop methodology and facilitation',
      'Insight system (Insikt) design',
    ],
    collaborated: [
      'Roadmap prioritisation with product managers',
      'Data strategy with analytics team',
    ],
    teamContext:
      'Embedded in a cross-functional squad spanning product, support, data, and business.',
    challengeStatement:
      'How might we help global digital product teams act on journey insights without losing momentum to organisational complexity?',
    problemDiscovery:
      'Discovered through stakeholder interviews: teams had data but no shared language or process to act on it.',
    researchMethods: [
      {
        method: 'Stakeholder interviews',
        detail: '24 interviews across product and support leads',
      },
      {
        method: 'Journey mapping',
        detail: 'As-is journeys mapped with cross-functional teams',
      },
    ],
    workshops: [
      {
        type: 'Journey mapping',
        participants: '12 people across product, support, and data',
      },
      {
        type: 'Insight prioritisation',
        participants: '8 product managers and business stakeholders',
      },
    ],
    dataAnalysisApproach:
      'Combined contact reason data with qualitative session recordings to identify pattern clusters.',
    sharingSessions:
      'Monthly insight read-outs to 30+ stakeholders via shared Confluence space and live playback sessions.',
    insights: [
      'Teams lacked a shared definition of what a "journey" meant.',
      'Insight existed but was siloed — nobody owned translating it.',
      'Self-service opportunities were consistently missed because they required cross-team sign-off.',
    ],
    opportunities: [
      {
        opportunity: 'Create a shared journey language',
        impact: 'Enables faster alignment in workshops',
      },
      {
        opportunity: 'Automate insight distribution',
        impact: 'Removes manual reporting bottleneck',
      },
    ],
    designSteps: [
      {
        phase: 'Discovery',
        description: 'Mapped as-is journeys and ran 24 stakeholder interviews.',
        stakeholderMoment:
          'Presented findings to VP Product — got budget approval for research sprint.',
      },
      {
        phase: 'Definition',
        description:
          'Co-created a shared journey taxonomy with 6 squads.',
        stakeholderMoment:
          'Workshop with Head of Support aligned language across the organisation.',
      },
      {
        phase: 'Design',
        description:
          'Designed insight system (Insikt) and journey framework templates.',
      },
      {
        phase: 'Delivery',
        description:
          'Rolled out frameworks to 30+ teams with onboarding sessions.',
      },
    ],
    outcomeMetrics: [
      {
        value: '1,800+',
        label: 'Co-workers using Insikt across 18 countries',
        context: '3,100 coaching sessions and 1,300 missions completed in the first year.',
      },
      {
        value: '30+',
        label: 'Teams using shared framework',
        context: 'Teams that completed onboarding and adopted the shared journey taxonomy.',
      },
    ],
    nextProjectSlug: 'ikea-resa',
  },
  {
    slug: 'ikea-resa',
    title: 'RESA — Customer Journey Analysis with AI',
    company: 'IKEA Global',
    role: 'UX Researcher / Data Designer',
    period: '2023',
    tagline:
      'Applying AI/NLP to 20,000 customer reviews across every IKEA market — turning unstructured feedback into a single, customer-centric source of truth.',
    coverImage: null,
    heroMetrics: [
      { value: '20K', label: 'Customer reviews analyzed with AI/NLP' },
      { value: 'All', label: 'IKEA markets covered globally' },
      { value: '4', label: 'Stage ML pipeline built end-to-end' },
    ],
    businessNeed:
      'IKEA needed to move from fragmented, product-centric complaint handling to a unified, customer-centric understanding of pain points across all markets.',
    userNeed:
      'Customers were experiencing recurring friction — delivery delays, damaged products, returns complexity — that individual teams couldn\'t see at scale.',
    roleTitle: 'UX Researcher / Data Designer — AI-Driven Customer Intelligence',
    responsibilities: [
      'Led collaboration between data science and customer experience teams',
      'Designed the 4-stage ML pipeline architecture with data scientists',
      'Translated AI-discovered pain points into actionable product insights',
      'Connected findings directly to engineering backlogs (JIRA Epics)',
    ],
    owned: [
      'Research design and customer journey framing',
      'Pain point taxonomy and classification framework',
      'Stakeholder communication of AI-generated insights',
    ],
    collaborated: [
      'ML model training and NLP classification with data science team',
      'Backlog prioritisation with product engineering leads',
    ],
    teamContext:
      'Cross-functional collaboration bridging data science, UX research, and product teams — one of the earliest enterprise-scale AI applications for customer behavior analysis at IKEA.',
    challengeStatement:
      'How might we use AI to transform 20,000 unstructured customer reviews into a unified, actionable map of pain points across every IKEA market?',
    problemDiscovery:
      'Customer feedback was abundant but fragmented — individual markets analyzed complaints in isolation, missing systemic patterns that only emerged at global scale.',
    researchMethods: [
      {
        method: 'AI/NLP classification',
        detail: 'Built models to automatically classify reviews into 6 key customer journey moments',
      },
      {
        method: 'Clustering analysis',
        detail: 'ML clustering to identify pain point patterns across all markets simultaneously',
      },
    ],
    workshops: [
      {
        type: 'Cross-functional alignment',
        participants: 'Data science, CX, and product teams',
      },
      {
        type: 'Insight-to-backlog mapping',
        participants: 'Product managers and engineering leads',
      },
    ],
    dataAnalysisApproach:
      'Built a 4-stage machine learning pipeline: extraction of review data, NLP classification into journey moments, clustering of pain point patterns, and automated identification of systemic issues across all IKEA markets.',
    sharingSessions:
      'Presented AI-generated insights directly to product teams, mapping discovered pain points to JIRA Epics for immediate action.',
    insights: [
      'Delivery delays and poor communication accounted for 20% of all negative reviews globally.',
      'Damaged products represented approximately 20% of all complaints across the entire customer journey.',
      'Returns friction affected 35% of returning customers — a massive, previously invisible pain point.',
      'The 23% "general" complaints block was the second largest category — revealing cross-cutting systemic issues that no single team owned.',
    ],
    opportunities: [
      {
        opportunity: 'Unified customer-centric source of truth',
        impact: 'Shifted the organisation from fragmented, product-centric analysis to a single global view',
      },
      {
        opportunity: 'AI-to-backlog pipeline',
        impact: 'Connected AI-discovered pain points directly to engineering backlogs for action',
      },
    ],
    designSteps: [
      {
        phase: 'Data Extraction',
        description:
          'Collected and prepared 20,000 customer reviews from all IKEA markets for NLP processing.',
      },
      {
        phase: 'AI Classification',
        description:
          'Built NLP classification models that automatically sorted reviews into 6 key customer journey moments.',
        stakeholderMoment:
          'Demonstrated to leadership how AI could replace months of manual analysis with a single automated pipeline.',
      },
      {
        phase: 'Pattern Clustering',
        description:
          'Applied ML clustering to identify systemic pain points invisible to individual market teams.',
      },
      {
        phase: 'Insight Activation',
        description:
          'Mapped AI-discovered pain points to JIRA Epics, connecting research directly to product action.',
        stakeholderMoment:
          'Product teams adopted findings as prioritisation input — bridging the gap between customer voice and engineering roadmap.',
      },
    ],
    outcomeMetrics: [
      {
        value: '20K',
        label: 'Reviews analyzed across all IKEA markets',
        context: 'A single AI-powered analysis replaced fragmented, market-by-market manual review.',
      },
      {
        value: '6',
        label: 'Journey moments automatically classified',
        context: 'NLP models identified delivery, returns, damage, communication, and systemic friction points.',
      },
    ],
    nextProjectSlug: 'ikea-the-voice',
  },
  {
    slug: 'ikea-the-voice',
    title: 'The Voice — Agent Support Redesign',
    company: 'IKEA Global',
    role: 'Senior Product UX Designer',
    period: '2022–2023',
    tagline:
      'Reducing agent lookup time from 300 seconds to 22 seconds across global customer support teams.',
    coverImage: null,
    heroMetrics: [
      { value: '300→22s', label: 'Agent lookup time reduced' },
      { value: '93%', label: 'Reduction in search friction' },
      { value: 'Global', label: 'Support teams impacted' },
    ],
    businessNeed:
      'Customer support agents were spending up to 5 minutes searching for information during live calls, leading to long hold times and customer frustration.',
    userNeed:
      'Agents needed instant access to relevant customer and product information without navigating multiple disconnected systems.',
    roleTitle: 'Senior Product UX Designer — Support Experience Lead',
    responsibilities: [
      'Led UX research and design for the agent-facing support tool',
      'Mapped existing agent workflows to identify friction points',
      'Designed the information architecture for rapid lookup',
      'Validated designs through agent observation sessions',
    ],
    owned: [
      'Agent workflow mapping and pain point analysis',
      'Information architecture and interaction design',
      'Usability testing with live support agents',
    ],
    collaborated: [
      'Technical feasibility with engineering team',
      'Data integration strategy with platform architects',
    ],
    teamContext:
      'Worked within the remote customer support organisation, collaborating with agents, team leads, and engineering to redesign the primary support tool.',
    challengeStatement:
      'How might we give support agents instant access to the right information so they can resolve customer issues in seconds, not minutes?',
    problemDiscovery:
      'Agent shadowing sessions revealed that the majority of call time was spent navigating between systems — not actually solving customer problems.',
    researchMethods: [
      {
        method: 'Agent shadowing',
        detail: 'Observed live support sessions to map real workflow patterns',
      },
      {
        method: 'Task analysis',
        detail: 'Timed and documented each step in the agent lookup process',
      },
    ],
    workshops: [
      {
        type: 'Workflow mapping',
        participants: 'Support agents and team leads across multiple markets',
      },
      {
        type: 'Design validation',
        participants: 'Agent focus groups testing prototype flows',
      },
    ],
    dataAnalysisApproach:
      'Quantitative timing studies of agent workflows combined with qualitative observation of navigation patterns and pain points.',
    sharingSessions:
      'Regular demos to support leadership showing before/after workflow comparisons with measurable time savings.',
    insights: [
      'Agents were using 5+ separate systems to find basic customer information.',
      'The biggest time sink was not the search itself but the context-switching between tools.',
      'Most lookups followed predictable patterns that could be anticipated and pre-loaded.',
    ],
    opportunities: [
      {
        opportunity: 'Unified agent dashboard',
        impact: 'Single-pane view eliminating system-switching during calls',
      },
      {
        opportunity: 'Predictive information surfacing',
        impact: 'Pre-loading likely needed data based on call context',
      },
    ],
    designSteps: [
      {
        phase: 'Discovery',
        description: 'Shadowed agents across markets, timing every interaction and documenting friction.',
      },
      {
        phase: 'Analysis',
        description: 'Mapped the complete agent journey, identifying the 300-second lookup bottleneck.',
        stakeholderMoment: 'Presented timing data to support leadership — secured mandate for redesign.',
      },
      {
        phase: 'Design',
        description: 'Created a unified lookup interface consolidating 5+ systems into one view.',
      },
      {
        phase: 'Validation',
        description: 'Tested with live agents, measuring the reduction from 300 to 22 seconds.',
      },
    ],
    outcomeMetrics: [
      {
        value: '22s',
        label: 'New average lookup time (down from 300s)',
        context: 'A 93% reduction in agent search time during live customer calls.',
      },
      {
        value: 'Global',
        label: 'Rolled out across support teams',
        context: 'Adopted by support agents worldwide as the primary lookup tool.',
      },
    ],
    nextProjectSlug: 'ikea-insikt',
  },
  {
    slug: 'ikea-insikt',
    title: 'Insikt — Coaching & Performance Platform',
    company: 'IKEA Global',
    role: 'Senior Product UX Designer',
    period: '2022–2023',
    tagline:
      'A coaching and performance tool adopted across 18 countries by 1,800+ users, generating 3,100 coaching sessions in its first year.',
    coverImage: null,
    heroMetrics: [
      { value: '1,800+', label: 'Active users across 18 countries' },
      { value: '3,100', label: 'Coaching sessions in year one' },
      { value: '1,300', label: 'Missions completed by co-workers' },
    ],
    businessNeed:
      'IKEA needed a scalable way to coach and develop customer support co-workers across markets, replacing inconsistent local approaches with a unified platform.',
    userNeed:
      'Team leads needed structured coaching tools, and co-workers needed clear development paths with actionable missions they could track.',
    roleTitle: 'Senior Product UX Designer — Coaching Experience Lead',
    responsibilities: [
      'Led end-to-end design of the coaching and performance platform',
      'Designed coaching session workflows for team leads',
      'Created the mission and development tracking system',
      'Facilitated co-design sessions with team leads across markets',
    ],
    owned: [
      'Product design and interaction patterns',
      'Coaching workflow and mission framework design',
      'User research and validation across markets',
    ],
    collaborated: [
      'Platform engineering for technical implementation',
      'HR and learning teams for coaching methodology alignment',
    ],
    teamContext:
      'Cross-functional team spanning product design, engineering, HR, and regional support leadership across 18 countries.',
    challengeStatement:
      'How might we create a coaching platform that scales personalised development across 18 countries while respecting local team dynamics?',
    problemDiscovery:
      'Interviews with team leads revealed that coaching happened informally and inconsistently — some markets had robust practices, others had none. Co-workers lacked visibility into their own development.',
    researchMethods: [
      {
        method: 'Team lead interviews',
        detail: 'Interviewed coaching leads across 8 markets to understand current practices',
      },
      {
        method: 'Co-worker surveys',
        detail: 'Surveyed co-workers about development needs and coaching expectations',
      },
    ],
    workshops: [
      {
        type: 'Co-design sessions',
        participants: 'Team leads from 6 countries defining coaching workflows',
      },
      {
        type: 'Mission framework design',
        participants: 'HR, learning team, and regional leads',
      },
    ],
    dataAnalysisApproach:
      'Combined qualitative interview insights with quantitative survey data to identify universal coaching needs versus market-specific adaptations.',
    sharingSessions:
      'Quarterly adoption reviews with regional leadership, tracking coaching session counts, mission completion rates, and user growth across markets.',
    insights: [
      'The gap was not in coaching knowledge but in coaching structure — leads knew what to do but lacked a systematic framework.',
      'Co-workers wanted visibility into their own progress, not just top-down evaluations.',
      'Markets with existing coaching culture adopted fastest — the tool amplified good practice rather than creating it from scratch.',
    ],
    opportunities: [
      {
        opportunity: 'Structured coaching sessions',
        impact: 'Gave team leads a repeatable framework for consistent development conversations',
      },
      {
        opportunity: 'Self-directed missions',
        impact: 'Empowered co-workers to own their development with trackable goals',
      },
    ],
    designSteps: [
      {
        phase: 'Discovery',
        description: 'Mapped coaching practices across 8 markets to find the universal needs.',
      },
      {
        phase: 'Co-design',
        description: 'Ran collaborative design sessions with team leads to shape the coaching workflow.',
        stakeholderMoment: 'Regional leads co-created the framework — ensuring buy-in before build.',
      },
      {
        phase: 'Design & Build',
        description: 'Designed the full platform: coaching sessions, missions, progress tracking, and team dashboards.',
      },
      {
        phase: 'Rollout',
        description: 'Phased launch across 18 countries with onboarding support for each market.',
        stakeholderMoment: 'Hit 1,800 users and 3,100 sessions in the first year — exceeding adoption targets.',
      },
    ],
    outcomeMetrics: [
      {
        value: '1,800+',
        label: 'Users across 18 countries',
        context: 'Adopted as the standard coaching tool across IKEA remote customer support.',
      },
      {
        value: '3,100',
        label: 'Coaching sessions in year one',
        context: 'With 1,300 missions completed — showing active engagement beyond just sessions.',
      },
    ],
    nextProjectSlug: 'ikea-service-design-cop',
  },
  {
    slug: 'ikea-service-design-cop',
    title: 'Service Design Community of Practice',
    company: 'IKEA Global',
    role: 'Senior Product UX Designer — Service Design',
    period: '2024–Present',
    tagline:
      'Co-leading a global initiative defining what Service Design becomes when AI is embedded into practice.',
    coverImage: null,
    heroMetrics: [
      { value: 'Global', label: 'Service Designers convened across IKEA' },
      { value: 'AI-era', label: 'Practice definition in progress' },
      { value: 'Live', label: 'Active community and ongoing work' },
    ],
    businessNeed:
      'As AI transforms how organisations work, IKEA needed to define what Service Design practice looks like in this new era — not as a tools update, but as a discipline-level evolution.',
    userNeed:
      'Service Designers across IKEA needed shared language, shared principles, and a collective understanding of what makes human orchestration irreplaceable in the age of AI.',
    roleTitle: 'Senior Product UX Designer — Service Design CoP Co-lead',
    responsibilities: [
      'Co-lead the global Service Design Community of Practice',
      'Facilitate discipline-level conversations about AI-era practice',
      'Define what practitioners uniquely contribute vs. what AI amplifies',
      'Build shared language for a discipline in transformation',
    ],
    owned: [
      'Community strategy and session design',
      'AI-era practice framework development',
      'Cross-IKEA facilitation and alignment',
    ],
    collaborated: [
      'Service Designers across all IKEA business areas',
      'Design leadership on discipline strategy',
    ],
    teamContext:
      'A global, cross-functional community spanning every IKEA business area — not a team but a discipline-wide conversation about the future of practice.',
    challengeStatement:
      'How might we define what Service Design becomes when AI is not bolted on as a tool, but embedded as a fundamental shift in how practitioners think and work?',
    problemDiscovery:
      'Service Designers across IKEA were individually experimenting with AI but lacked a shared understanding of what the discipline-level implications were — risking fragmentation of practice.',
    researchMethods: [
      {
        method: 'Community conversations',
        detail: 'Structured dialogue sessions with Service Designers across IKEA',
      },
      {
        method: 'Practice mapping',
        detail: 'Documented current SD practices and identified where AI changes the game',
      },
    ],
    workshops: [
      {
        type: 'Discipline definition sessions',
        participants: 'Service Designers from across IKEA business areas',
      },
      {
        type: 'AI-era practice workshops',
        participants: 'Design leadership and senior practitioners',
      },
    ],
    dataAnalysisApproach:
      'Qualitative synthesis of community conversations, identifying patterns in how practitioners see AI changing their work — distinguishing genuine shifts from hype.',
    sharingSessions:
      'Regular community sessions sharing emerging frameworks and inviting practitioners to co-create the definition of AI-era Service Design.',
    insights: [
      'The biggest risk is not AI replacing designers — it\'s designers treating AI as just another tool instead of recognising a practice-level shift.',
      'Human orchestration — the ability to align people around customer problems — remains irreplaceable, but the methods must evolve.',
      'Shared language matters more than shared tools — without it, practitioners can\'t learn from each other\'s experiments.',
    ],
    opportunities: [
      {
        opportunity: 'Shared AI-era practice framework',
        impact: 'Gives every SD practitioner at IKEA a common foundation to build on',
      },
      {
        opportunity: 'Community-driven evolution',
        impact: 'Ensures the discipline evolves from practice, not from top-down mandates',
      },
    ],
    designSteps: [
      {
        phase: 'Convening',
        description: 'Brought together Service Designers from across IKEA for the first discipline-wide AI conversation.',
        stakeholderMoment: 'Design leadership endorsed the initiative as critical for practice evolution.',
      },
      {
        phase: 'Defining',
        description: 'Facilitated sessions to identify what practitioners uniquely contribute and where AI amplifies their work.',
      },
      {
        phase: 'Building language',
        description: 'Co-creating shared vocabulary and frameworks for AI-era Service Design practice.',
      },
      {
        phase: 'Ongoing',
        description: 'Continuous community sessions, evolving the framework as practitioners experiment and learn.',
      },
    ],
    outcomeMetrics: [
      {
        value: 'Global',
        label: 'Community convened across IKEA',
        context: 'The first discipline-wide conversation about what Service Design becomes in the AI era.',
      },
      {
        value: 'Active',
        label: 'Ongoing practice definition',
        context: 'A living framework being co-created by practitioners, not imposed from above.',
      },
    ],
    nextProjectSlug: 'ikea-collaborative-intelligence',
  },
  {
    slug: 'ikea-collaborative-intelligence',
    title: 'Collaborative Intelligence System',
    company: 'IKEA Global',
    role: 'Senior Product UX Designer — Service Design',
    period: '2024–Present',
    tagline:
      'Piloting a collaborative intelligence system in Design Operations — proving how AI amplifies human orchestration at enterprise scale.',
    coverImage: null,
    heroMetrics: [
      { value: 'Pilot', label: 'Design Operations initiative' },
      { value: 'AI+Human', label: 'Collaboration model being defined' },
      { value: 'Enterprise', label: 'Scale of orchestration' },
    ],
    businessNeed:
      'Design Operations needed to demonstrate that AI could amplify — not replace — human orchestration, providing a replicable model for how teams integrate AI into daily practice.',
    userNeed:
      'Design teams needed systematic approaches to human-AI collaboration that went beyond individual tool adoption to actual workflow transformation.',
    roleTitle: 'Senior Product UX Designer — Collaborative Intelligence Lead',
    responsibilities: [
      'Lead the Design Operations pilot for collaborative intelligence',
      'Design context architecture for human-AI collaboration workflows',
      'Define how Design Operations integrates AI into daily practice',
      'Build reusable patterns that scale across design teams',
    ],
    owned: [
      'Collaborative intelligence system design',
      'Context architecture and workflow patterns',
      'Pilot scoping and success criteria',
    ],
    collaborated: [
      'Design Operations leadership on strategy alignment',
      'Design teams on workflow validation',
    ],
    teamContext:
      'A Design Operations pilot exploring the frontier of human-AI collaboration — building structures, context architecture, and workflows that demonstrate how AI amplifies human orchestration at enterprise scale.',
    challengeStatement:
      'How might we design a system where AI doesn\'t just assist individual designers, but amplifies how entire teams orchestrate, decide, and move together?',
    problemDiscovery:
      'AI adoption in design teams was happening individually and inconsistently — designers were using AI tools but no one was designing how AI fits into collaborative workflows.',
    researchMethods: [
      {
        method: 'Workflow analysis',
        detail: 'Mapped existing DesignOps workflows to identify collaboration friction points',
      },
      {
        method: 'AI integration audit',
        detail: 'Documented how designers were individually using AI and where gaps existed',
      },
    ],
    workshops: [
      {
        type: 'Context architecture design',
        participants: 'DesignOps team and design leads',
      },
      {
        type: 'Pilot scoping',
        participants: 'Design Operations leadership',
      },
    ],
    dataAnalysisApproach:
      'Qualitative analysis of team workflows, identifying where AI could add the most value to collaborative processes rather than individual tasks.',
    sharingSessions:
      'Regular pilot reviews with Design Operations leadership, sharing patterns and learnings as the system evolves.',
    insights: [
      'The value of AI in design teams isn\'t in individual productivity — it\'s in collaborative intelligence: making the team smarter together.',
      'Context architecture is the missing layer — without it, AI tools become isolated aids rather than team amplifiers.',
      'Reusable patterns matter more than bespoke solutions — the goal is a system, not a collection of hacks.',
    ],
    opportunities: [
      {
        opportunity: 'Context architecture as a practice',
        impact: 'Making human-AI collaboration systematic rather than ad hoc',
      },
      {
        opportunity: 'Reusable orchestration patterns',
        impact: 'Patterns that scale across design teams, not just the pilot',
      },
    ],
    designSteps: [
      {
        phase: 'Exploration',
        description: 'Mapped the landscape of AI adoption in DesignOps and identified the collaboration gap.',
      },
      {
        phase: 'Architecture',
        description: 'Designed context architecture and workflow patterns for human-AI collaboration.',
        stakeholderMoment: 'DesignOps leadership endorsed the pilot as a model for enterprise AI integration.',
      },
      {
        phase: 'Piloting',
        description: 'Building and testing collaborative intelligence workflows with live design teams.',
      },
      {
        phase: 'Scaling',
        description: 'Documenting patterns for reuse across IKEA design teams.',
      },
    ],
    outcomeMetrics: [
      {
        value: 'Pilot',
        label: 'Live in Design Operations',
        context: 'The first systematic approach to human-AI collaboration in IKEA DesignOps.',
      },
      {
        value: 'Patterns',
        label: 'Reusable across teams',
        context: 'Building a library of orchestration patterns designed for enterprise scale.',
      },
    ],
    nextProjectSlug: 'ikea-gix-mentor',
  },
  {
    slug: 'ikea-gix-mentor',
    title: 'GIX Mentor Program',
    company: 'IKEA Global',
    role: 'Design Mentor',
    period: '2023',
    tagline:
      'Guiding design students from initial research to validated prototypes in IKEA\'s global innovation mentorship program.',
    coverImage: null,
    heroMetrics: [
      { value: 'GIX', label: 'Global Innovation Excellence program' },
      { value: '2023', label: 'Mentor cohort' },
      { value: 'Research→Prototype', label: 'Full design arc guided' },
    ],
    businessNeed:
      'IKEA\'s GIX program needed experienced practitioners to mentor the next generation of designers, bridging academic learning with real-world enterprise design practice.',
    userNeed:
      'Design students needed guidance navigating the complexity of enterprise design — from scoping research to validating prototypes within organisational constraints.',
    roleTitle: 'Design Mentor — GIX Mentor Program 2023',
    responsibilities: [
      'Mentored design students through research, ideation, and validation phases',
      'Guided students in structuring design problems at enterprise scale',
      'Provided feedback on research methods and prototype validation',
      'Connected academic design thinking with IKEA\'s real-world context',
    ],
    owned: [
      'Mentorship approach and session structure',
      'Design critique and research guidance',
    ],
    collaborated: [
      'GIX program coordinators on curriculum alignment',
      'Other mentors on shared standards and feedback approaches',
    ],
    teamContext:
      'Part of IKEA\'s GIX Mentor Program — a global initiative connecting experienced design practitioners with emerging talent to accelerate their development.',
    challengeStatement:
      'How might we help emerging designers develop the skills to navigate enterprise complexity while maintaining creative confidence?',
    problemDiscovery:
      'Students had strong theoretical foundations but struggled with the ambiguity and organisational complexity of real-world enterprise design.',
    researchMethods: [
      {
        method: 'Mentorship sessions',
        detail: 'Regular 1:1 and group sessions guiding students through the design process',
      },
      {
        method: 'Design critiques',
        detail: 'Structured feedback on research plans, concepts, and prototypes',
      },
    ],
    workshops: [
      {
        type: 'Research framing',
        participants: 'Design students defining their research approach',
      },
      {
        type: 'Prototype validation',
        participants: 'Students presenting and testing prototypes',
      },
    ],
    dataAnalysisApproach:
      'Qualitative mentorship approach — helping students develop their own analytical frameworks rather than applying prescribed methods.',
    sharingSessions:
      'Final presentations where students showcased their journey from research to validated prototypes.',
    insights: [
      'The hardest skill for students wasn\'t designing solutions — it was framing the right problem within organisational constraints.',
      'Mentorship is most effective when it builds confidence in ambiguity rather than removing ambiguity.',
      'Connecting students to real enterprise context accelerated their learning more than any theoretical framework.',
    ],
    opportunities: [
      {
        opportunity: 'Structured ambiguity navigation',
        impact: 'Helping students build comfort with enterprise-scale uncertainty',
      },
      {
        opportunity: 'Research-to-prototype pipeline',
        impact: 'A repeatable mentorship arc from discovery to validation',
      },
    ],
    designSteps: [
      {
        phase: 'Onboarding',
        description: 'Established mentorship relationship and understood each student\'s starting point.',
      },
      {
        phase: 'Research guidance',
        description: 'Helped students scope research questions and choose appropriate methods.',
      },
      {
        phase: 'Ideation support',
        description: 'Guided the transition from research insights to design concepts.',
      },
      {
        phase: 'Validation',
        description: 'Supported students in testing prototypes and presenting findings.',
        stakeholderMoment: 'Students presented validated prototypes to IKEA stakeholders at program close.',
      },
    ],
    outcomeMetrics: [
      {
        value: 'Full arc',
        label: 'Research to validated prototype',
        context: 'Students completed the entire design journey with enterprise-level rigour.',
      },
      {
        value: 'Presented',
        label: 'To IKEA stakeholders',
        context: 'Final prototypes were presented to real business stakeholders for feedback.',
      },
    ],
    nextProjectSlug: null,
  },
]
