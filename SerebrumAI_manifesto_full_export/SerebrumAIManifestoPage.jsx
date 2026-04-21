export default function SerebrumAIManifestoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
              SerebrumAI
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              We don’t invest in industries.
              <span className="block text-slate-500">We rebuild them.</span>
            </h1>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Industries are artifacts of pre-AI constraints. They were shaped by scarce intelligence,
              expensive human labor, slow coordination, and rigid organizational structures. AI removes
              those constraints. SerebrumAI builds companies for a world where intelligence is abundant,
              coordination is seamless, and systems can operate continuously at global scale.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">The Shift</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Most industries are not optimized systems. They are patchworks of manual work,
                fragmented decisions, and human coordination layered over outdated structures.
                In a pre-AI world, that made sense. In an AI-native world, it becomes a drag on
                speed, outcomes, and economics.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Our Pattern</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We identify systems where intelligence is low and labor is high, then replace the
                system, not just the workers. We do not layer AI onto legacy workflows. We rebuild
                from first principles so intelligence is embedded directly into how the system
                operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How SerebrumAI Builds</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We start with transformation patterns, not sectors. We look for industries where work
              is still manual, margins are compressed by inefficiency, intelligence is fragmented,
              and coordination depends on humans and hierarchy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Identify the constraint',
                body:
                  'Find where human effort is compensating for the absence of intelligence: slow decisions, generic plans, fragmented workflows, and inconsistent execution.',
              },
              {
                step: '02',
                title: 'Collapse the constraint',
                body:
                  'Apply AI to automate decision-making, unify fragmented data, and remove coordination overhead that legacy systems depend on.',
              },
              {
                step: '03',
                title: 'Rebuild from first principles',
                body:
                  'Design AI-native systems where intelligence is embedded at the core rather than added as a thin software layer.',
              },
              {
                step: '04',
                title: 'Capture the new economics',
                body:
                  'Create businesses with lower cost structures, higher margins, faster execution, better outcomes, and global scalability.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-400">{item.step}</div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What We’re Building</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SerebrumAI builds AI-native, global-scale companies that replace inefficient systems
              with intelligent ones. Three examples illustrate the pattern.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Health & Wellness</div>
              <h3 className="mt-4 text-3xl font-semibold">Vygor AI</h3>
              <p className="mt-3 text-sm text-slate-500">Value: Paid by health plans and employers for improved outcomes and reduced cost of care.</p>
              <p className="mt-1 text-xs text-slate-400">Impact: 20–40% reduction in program costs · 2–3x engagement · measurable clinical improvements</p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The health and wellness system for weight management, obesity, and diabetes is
                fundamentally broken. Users rely on generic plans and sporadic coaching, with little
                personalization or continuity. Vygor AI replaces this fragmented model with a
                continuous, intelligence-driven system: ingesting real-time data from wearables,
                generating hyper-personalized nutrition and exercise plans, and maintaining ongoing
                AI-driven coaching engagement. By embedding intelligence directly into daily
                decision-making, Vygor improves outcomes while structurally lowering healthcare costs
                for health plans, employers, and individuals.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Software Lifecycle</div>
              <h3 className="mt-4 text-3xl font-semibold">TokenSource</h3>
              <p className="mt-3 text-sm text-slate-500">Value: Paid by product teams for faster time-to-market and higher product success rates.</p>
              <p className="mt-1 text-xs text-slate-400">Impact: 30–50% faster delivery · 2x alignment · higher release success rates</p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Software development is increasingly automated by AI, but the product management
                layer and the broader software development lifecycle remain fragmented, manual, and
                dependent on complex human coordination. TokenSource replaces this with an
                intelligence-driven execution system that guides teams from idea to delivery,
                translating real user needs into structured work, aligning decisions across
                stakeholders, and continuously adapting execution. By embedding intelligence into the
                lifecycle itself, TokenSource reduces time to market, eliminates misalignment, and
                dramatically increases the probability of building successful products.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Investment Management</div>
              <h3 className="mt-4 text-3xl font-semibold">AlphaSigma</h3>
              <p className="mt-3 text-sm text-slate-500">Value: Paid by RIAs and family offices for improved risk-adjusted returns and decision quality.</p>
              <p className="mt-1 text-xs text-slate-400">Impact: improved Sharpe · reduced drawdowns · systematic rebalancing</p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Investment management remains largely manual and reactive, with most systems focused on aggregating data and reporting rather than guiding decisions. Family offices and RIAs are left to interpret fragmented information and make high-stakes judgments without continuous intelligence support. AlphaSigma replaces this model with a decision intelligence system powered by proven quantitative frameworks: delivering clear buy and sell signals, analyzing entire portfolios holistically, recommending dynamic rebalancing, and actively managing risk. By augmenting human judgment with continuous, model-driven intelligence, AlphaSigma enables more informed decisions, improves portfolio performance, and modernizes how capital is allocated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:px-10">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="uppercase tracking-wider">Working With</span>
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-medium text-slate-500">Health Plans</span>
              <span className="font-medium text-slate-500">Employers</span>
              <span className="font-medium text-slate-500">Family Offices</span>
              <span className="font-medium text-slate-500">RIAs</span>
              <span className="font-medium text-slate-500">Product Teams</span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Now</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Three forces have converged: (1) foundation models make intelligence effectively abundant,
              (2) real-time data from software and sensors makes continuous decisions possible, and
              (3) distribution is global by default. Legacy systems—built for scarcity and batch decisioning—
              cannot adapt quickly enough. The opportunity is to rebuild them as AI-native systems that
              operate continuously.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why SerebrumAI Wins</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SerebrumAI is not a collection of ideas—it is a system for repeatedly building
              AI-native companies faster, cheaper, and with higher probability of success.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Shared Intelligence Layer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                All ventures leverage a common AI infrastructure, data models, and decision systems—
                compounding learning across companies rather than starting from zero each time.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Repeatable Build System</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A structured approach to identifying opportunities, validating ideas, and launching
                companies enables faster iteration and higher-quality outcomes.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Concentrated Capital Allocation</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Capital is deployed dynamically into the highest-potential ventures, maximizing
                returns while maintaining flexibility across the portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The biggest opportunities are not in improving industries.
              <span className="block text-slate-400">They are in replacing the systems those industries depend on.</span>
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              SerebrumAI exists to find those systems, rebuild them from the ground up, and create
              companies designed for a post-constraint world where intelligence is abundant and
              coordination is automated.
            </p>

            <div className="mt-12 flex flex-col items-start gap-4">
              <p className="text-sm text-slate-400">For investors and strategic partners</p>
              <div className="flex gap-4">
                <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow hover:bg-slate-100">
                  Partner with SerebrumAI
                </button>
                <button className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800">
                  View Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
