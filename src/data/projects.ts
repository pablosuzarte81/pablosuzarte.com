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
  coverImage: string
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
    coverImage: '/projects/ikea-cover.jpg',
    heroMetrics: [
      { value: '30+', label: 'Teams aligned' },
      { value: '40%', label: 'Reduction in unnecessary contact' },
      { value: '3', label: 'Journey frameworks shipped' },
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
        value: '40%',
        label: 'Unnecessary contact reduced',
        context: 'Measured over 12 months post-rollout via support ticket analysis.',
      },
      {
        value: '30+',
        label: 'Teams using shared framework',
        context: 'Adoption tracked quarterly.',
      },
    ],
    nextProjectSlug: null,
  },
]
