export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  readingTime: string
  tags: string[]
  coverColor: string
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'shared-cognition-service-design-meets-project-intelligence',
    title: 'Shared Cognition',
    subtitle:
      'What happens when a Service Designer starts orchestrating how humans and AI think together',
    date: '2026-03-24',
    readingTime: '12 min read',
    tags: ['Service Design', 'AI Collaboration', 'Project Intelligence'],
    coverColor: '#1a1a27',
    excerpt:
      'Service design taught me to make complex experiences understandable. Project intelligence is the same skill — applied to how teams and AI collaborate.',
    content: `
## The gap nobody is talking about

For fifteen years, I have been doing the same thing in different shapes: taking a complex situation, bringing the right people into the room, and creating the conditions for shared understanding.

At IKEA, that looks like journey orchestration — connecting 80+ co-workers across 15 teams and 5 markets to map a single customer journey together. The output is not a deliverable. It is alignment. Everyone pointing in the same direction because they built the understanding together, not because someone presented a slide deck.

But here is what I have been noticing: AI has changed the bottleneck.

The technical barrier that used to slow down UX work — the handoff to engineering, the sprint negotiations, the prototype limitations — is dissolving. A prototype built with AI is now often functional enough to ship, not just something to demo. Figma's State of the Designer 2026 report found that 72% of designers now use generative AI tools, with 89% saying it makes them faster. Designers who learn to work with AI can now build what they envision.

The new bottleneck is not building. It is thinking together.

And that is a service design problem.

---

## Why collective intelligence matters more than individual skill

In 2010, Anita Williams Woolley and her team at Carnegie Mellon published a landmark study in *Science* that changed how we understand group performance. They discovered a measurable "collective intelligence factor" — a c factor — that predicts how well a group will perform across a wide range of tasks.

The surprising finding: the c factor was **not** correlated with the average IQ of group members. What actually predicted group performance was social sensitivity, equality of conversational turn-taking, and cognitive diversity. In other words, the smartest teams are not the ones with the smartest individuals. They are the ones with the best conditions for thinking together.

This is the scientific foundation for what I call project intelligence. It is not about having the best tools or the most capable AI model. It is about designing the conditions — the shared memory, the decision structures, the collaboration norms — that allow a group of humans and AI agents to produce collective intelligence.

Cannon-Bowers and Salas formalised this as Shared Mental Models: when team members hold compatible representations of both the task and the team, they can coordinate implicitly, predict each other's actions, and make compatible decisions without constant communication. The same framework applies when AI is one of the team members.

---

## Service design is already project intelligence

Neha Mansinghka wrote something in 2025 that stopped me in my tracks: "In enterprise settings, service design evolves from a specialized discipline into an orchestration function." That is exactly what I have been experiencing — but I had not found the words for it yet.

When I look at what good service designers actually do, the parallel is unmistakable:

- **Service design makes complex experiences understandable.** Project intelligence makes complex projects understandable.

- **Service design connects research, stakeholders, systems, and journeys.** Project intelligence connects evidence, decisions, status, assets, and collaboration.

- **Service design reduces friction in services.** Project intelligence reduces friction in how projects think and move.

- **Service design designs better conditions for users.** Project intelligence designs better conditions for teams and AI collaborators.

The skill set is the same. The material has changed.

Instead of mapping a customer journey, you are mapping how a team — human and AI — navigates a project. Instead of identifying pain points in a service, you are identifying where shared understanding breaks down. Instead of designing a service blueprint, you are designing the conditions for continuity and clarity.

Nielsen Norman Group calls this evolution "journey-centric design" — the shift from product-level UX to holistic customer journey management. I see project intelligence as the internal equivalent: applying the same orchestration thinking to how teams themselves work together.

---

## Eight principles for project intelligence

When I started working closely with AI agents on real projects, I noticed the same failure patterns repeating. Not technical failures. Collaboration failures. The AI had the capability. The team had the intent. But the conditions for working well together were missing.

So I started codifying what works. Not as file naming conventions or folder structures, but as principles — the same way a service designer would codify design principles for a service.

### 1. Shared memory

AI needs a clear understanding of what the project is, why it matters, and what must not be misunderstood. This is not a README. It is a living agreement about what is true.

In cognitive science, this is the shared mental model that Cannon-Bowers and Salas described — the compatible knowledge structures that allow team members to interpret cues similarly and make aligned decisions. When AI is part of the team, that shared model needs to be explicit and maintained. You cannot assume the AI "picked it up" any more than you can assume a new team member absorbed the project context from sitting in an open-plan office.

### 2. Current orientation

The project needs a visible sense of where things stand now: what is agreed, what is open, and what the next step is. Without this, both humans and AI waste energy reconstructing context that should already be established.

Think of it as a service blueprint for the project itself — a real-time view of the current state that everyone can point to.

### 3. Evidence discipline

Ideas should be grounded in visible evidence, not mixed carelessly with assumptions, opinions, or storytelling. This is the research rigour that service designers bring to every engagement — now applied to how an entire project reasons.

When you work with AI, the stakes are higher. An AI collaborator will treat an assumption as a fact if you present it as one. The discipline to separate what you know from what you believe becomes a structural requirement, not just good practice.

### 4. Asset awareness

Both humans and AI need to know what materials actually exist so work stays grounded in reality. In large projects, the most common failure is not lack of assets — it is not knowing what already exists.

Service designers deal with this constantly: mapping the existing service landscape before designing the future one. Project intelligence applies the same principle to the project's own body of work.

### 5. Collaboration clarity

Good results depend on knowing how to work together well, not just what the project is about. This includes communication norms, decision-making protocols, and the working agreements between human and AI contributors.

In the Journey Teams project at IKEA, one of the first things we did was not research — it was alignment. One-on-one sessions with every product team. Understanding each person's context before asking them to commit. The same intentionality needs to exist in human-AI collaboration. As Braden Kelley put it: "Organisations fail not because AI is difficult to adopt, but because they never designed how humans and AI would think together and work together."

### 6. Decision continuity

Important decisions and their reasoning should be preserved so the team does not keep restarting the same thinking. This is one of the biggest failure modes I see in AI-assisted projects. A decision gets made, the context window moves on, and the next session starts from zero.

Service designers are trained to create artefacts that carry decisions forward — journey maps, service blueprints, design principles. Project intelligence demands the same discipline for every significant choice the team makes.

### 7. Role clarity

If multiple AI agents or collaborators are involved, each one should have a clear role and responsibility. This is basic organisational design, but it is often completely absent in how teams use AI.

I orchestrate with soft skills. The value is not that I write the best prompts — it is that I design the collaboration itself. Who contributes what. Where the handoffs happen. How the pieces connect. The orchestrator role in service design translates directly to orchestrating human-AI teamwork.

### 8. Reusable patterns

When prompts, workflows, or handoff methods work well, they should be saved and reused. Not as rigid templates, but as living patterns that evolve with the team.

This is how service design scales. You do not redesign the research methodology for every project. You refine it. The same principle applies to project intelligence — the workflows and collaboration patterns that work should become institutional knowledge.

---

## The orchestrator is not a new role. It is an old skill in a new context.

When I led the Journey Teams project at IKEA, my title was Orchestrator. Not a manager. Not a designer. A facilitator and designer of collaboration.

The job was to be the connective tissue: right people, right room, right context, right time. To turn insight into action so research does not stay in a deck but moves into backlogs. To keep one source of truth that everyone can point to.

That is exactly what project intelligence needs. Someone who does not just use AI tools but designs the conditions under which humans and AI produce their best work together.

The AI removes the tech bottleneck. But someone still needs to design the collaboration. Someone still needs to make sure that 80 people and 15 teams — or 3 humans and 4 AI agents — are building a shared understanding rather than parallel silos.

Service designers have been doing this for decades. The material is changing. The skill is the same.

---

## The build trap gets deeper when anyone can build

Melissa Perri warned us about the Build Trap — the dangerous cycle of shipping features without validating whether they create real value. Her argument was that outcome-over-output thinking is what separates product-led organisations from feature factories.

AI makes the Build Trap deeper, not shallower. When anyone can generate a functional prototype in minutes — when "vibe coding" lets you describe intent and get working software back — the risk of shipping things nobody needs increases dramatically. Figma's 2026 report captured this tension perfectly: "When average output becomes easier to generate, taste becomes more valuable."

This is why project intelligence is not a nice-to-have. It is the structural answer to a world where building is cheap and judgment is expensive. The principles I described — shared memory, evidence discipline, decision continuity — are not bureaucratic overhead. They are the conditions that prevent a team from building fast in the wrong direction.

As service designers, we already know this. We challenge processes, test assumptions, and improve iteratively. We design for the people we serve, not for the features we ship. Project intelligence takes that same discipline and applies it to the collaboration itself.

---

## What this means for the future

Project intelligence is not about having the right file names. It is about creating the right conditions for continuity, clarity, evidence, coordination, and collaboration between humans and AI.

We did not break the silos at IKEA. But we were able to connect them with purpose and context. That is the value of a journey-centric approach — and it is the exact same value that project intelligence brings to how we work with AI.

The designers who will lead this next era are not the ones who learn the most tools. They are the ones who already know how to bring people together around hard problems — and who recognise that AI is now one of those people.

The question is not whether AI can do the work. It is whether we can design the conditions for it to think with us.

That is shared cognition. That is service design. That is project intelligence.
    `.trim(),
  },
]
