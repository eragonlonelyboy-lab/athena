# Harvested lenses

Extra diagnostic lenses distilled from 13 field-tested reasoning and ideation prompts. Each is a lens ATHENA can pick up inside Counsel, or fold into War Council and Compare-N. They are not new modes. Use them the way Counsel uses its eight lenses: pick the one the moment needs, never run a menu.

Each entry marks OVERLAP (ATHENA already does this, listed only so she does not duplicate herself) or ADDS (genuinely new capability worth reaching for).

## Note on input protocols

7 of the 13 source prompts open with an elicit-and-wait gate: ask N clarifying questions, then wait for the answers before producing anything. The original harvest stripped these as a class, treating them as preamble. They are not preamble. An input protocol is part of a method: how many questions, whether they come in one batch or one at a time, and whether the model blocks on the answer all change what the lens produces. Each lens below now carries its own gate verbatim.

Reconciling with the host SKILL: the batch rule ("One question max" in Compare-N, "up to 3-4 questions in ONE batch" in War Council) governs the WAR COUNCIL and COMPARE-N modes only. The Decision Untangler lens is a sequential interview and is exempt from the batch rule. SKILL.md's modes are unchanged; this is the recorded exemption.

## Decision lenses

### The Decision Untangler: Weighted Scoring Matrix (ADDS to Compare-N)
When to use: a real choice with 3-6 criteria that carry different weight, and the user wants the reasoning made explicit, not just a verdict. Sharpens Compare-N's matrix from qualitative to numeric.

Elicitation gate (sequential, exempt from the batch rule): ask up to 5 clarifying questions, one at a time, and wait for each answer before asking the next. The questions uncover the user's real priorities, constraints, timeline, budget, risk tolerance, and what a great outcome actually looks like. Do not produce any of the steps below until the interview is done.

1. List every realistic option, plus 1-2 strong ones the user did not name.
2. Name the 4-6 criteria that truly matter here and weight each 1-5 from the user's stated priorities.
3. Score each option against each criterion 1-10, multiply by weight, total per option.
4. Hidden risk: name the biggest non-obvious risk of the top-scoring option and how to mitigate it.
5. Gut check: which option the user's own words say they secretly want, and whether the math agrees. Name the tiebreaker if it is close. Never fence-sit.
6. Recommendation: give one clear recommendation in a single sentence, then 2 to 3 sentences on why it wins.

### Compare My Options Clearly (ADDS)
When to use: the user is choosing between named real-world options (tools, products, jobs, plans, vendors) and needs the real tradeoffs, not spec sheets. The analyst has no stake in the outcome, only that the user chooses well.

DISTINCT from the host SKILL's Compare-N. Compare-N scores options on fixed dimensions (fatal-risk, upside, terrain, cost-to-test) and returns one verdict. This lens builds a different matrix: criteria derived from THIS user's situation, plus per-persona-of-buyer verdicts. Do not collapse the two.

Gate: if the options or the user's priorities are unclear, ask up to 3 clarifying questions before building the comparison.

1. CRITERIA: the 5 to 7 criteria that matter for this situation, not generic ones, each briefly justified.
2. COMPARISON TABLE: a comparison table with options as columns and criteria as rows. Fill in specific honest details and mark the clear winners and losers per row. Surface hidden costs and downsides and the real tradeoffs, not just the marketing points.
3. BEST FOR: below the table, a one-line verdict per type of person, for example "best on a budget", "best overall", "best if you value [X]", "best for the long term".
4. WATCH OUTS: name any option with a catch, a gotcha, or a common regret the user should know about. These watch outs are not optional garnish; an option with no named catch has not been examined.
5. MY PICK: the recommendation for this user specifically, given their stated priorities, in 2 to 3 sentences on why it beats the runner-up.

Be decisive and specific. If two options are genuinely close, say so and give the deciding factor.

### The Real Reason Beneath the Decision (ADDS)
When to use: the user keeps circling a personal or career call that logic alone will not settle. The block is emotional, not analytical. Nothing in ATHENA currently names the fear or desire under a decision.
1. Honest ledger: pros and cons for each option, including the tradeoffs the user is minimizing.
2. The real reason: past the logic, name the actual thing driving the hesitation, even if uncomfortable.
3. Fear test: name what they are afraid of, then separate realistic risk from worst-case catastrophizing.
4. Friend test and future-me test: what they would tell a friend in this exact spot, and what the person they are becoming does here.
5. The nudge: one clear push toward the call the evidence and their own words point to. No both-sides mush.

### Stack Choice as a Decision (ADDS, with the anti-overengineering check)
When to use: any tool, stack, framework, or architecture pick. Treats "what should I build this with" as a decision to be pressure-tested, matched to the user's skill and priorities, not to what is trendy.
1. Recommend one stack per layer (only the layers this project truly needs), one sentence each on why it fits THIS user.
2. Deliberately NOT using: the popular tools that would be overkill here (microservices, Kubernetes, a queue, a separate app), one line each on why it is premature. This is the load-bearing step; anti-overengineering is the whole point.
3. Fastest path to v1: an ordered checklist to a real working version, riskiest step flagged.
4. Safe to defer: the one decision that can wait, and the signal that says revisit it.
Be opinionated: pick one and defend it, prefer boring and widely-hired over clever.

## Adversarial lenses

### Steelman then Counter (OVERLAP)
Already covered by Counsel's Pressure Test and the War Council Contrarian. Reach for it as a standalone only in Counsel when the user wants their own argument stress-tested rather than an idea judged. Gate: if the position is unclear, ask 1 to 2 clarifying questions before proceeding.
1. STEELMAN: restate the view in its strongest, most charitable form.
2. THE BEST COUNTERARGUMENTS: the 3 strongest good-faith arguments against it, each with real reasoning, evidence, or a concrete failure scenario. No strawmen, no lazy objections.
3. THE WEAK LINK: the single assumption most likely wrong, the one whose failure collapses the whole thing.
4. WHAT WOULD CHANGE YOUR MIND: two directions, both required. The specific evidence or outcome that should make the user abandon or revise the position, AND the evidence that should make them hold firm. A one-directional answer is an incomplete lens.
5. VERDICT: a real read after all of it: solid, needs modification, or shaky, with why.

### Board of Advisors Roundtable (OVERLAP)
This is War Council in miniature. Use the full War Council for real stakes; use this lighter roundtable inside Counsel when the user wants distinct voices without spinning up five subagents.

Gate: before the debate begins, ask 1 to 3 sharp clarifying questions about the situation, constraints, timeline, and what a good outcome looks like, and wait for my answers.

The four advisors, each with a distinct mandate, voice, values, and blind spots:
1. The Strategist: thinks in leverage, second-order effects, and the long game. Cares about positioning, and names what this unlocks or forecloses.
2. The Skeptical Risk Analyst: hunts what could go wrong. Names hidden costs, downside scenarios, and the assumptions everyone is glossing over.
3. The Creative Innovator: reframes the problem, proposes the option nobody put on the table, and challenges the premise itself.
4. The Practical Operator: cares only about execution. Thinks in resources, sequencing, and whether this actually gets done next week.

Stage 1, opening takes: each advisor gives their honest read in their own voice, no hedging, 3 to 5 sentences each.
Stage 2, cross-examination: they disagree, challenge, and respond to each other by name. Surface the real tension, do not force harmony. At least two genuine points of conflict must appear.
Stage 3, synthesis: the moderator steps out and delivers one verdict: the single recommended path, the strongest dissent to keep in mind, the one metric or signal that would say the call was wrong, and the exact first step to take in the next 48 hours.

Keep each advisor psychologically distinct so their advice genuinely differs. No both-sides mush.

### Hard Truth and Blind Spots (ADDS a framing)
When to use: the user wants the one thing they most need to hear, fast, and Claude's instinct to soften is the enemy. A compact opener before deeper work.
1. The hard truth: the single most important thing, plainly, in 2-3 sentences, even if it stings.
2. Blind spots: the 3 biggest assumptions or risks they are not seeing, one line each on why it matters.
3. Where they are playing small: one place the thinking is too safe, and what bolder looks like.
4. The plan: 3-5 steps ordered by leverage, then the one next step for the next 48 hours and why it beats the rest.

### Intellectual Sparring (ADDS)
When to use: the user wants to think through a claim or argument in live dialogue, one probing question at a time, not receive a finished verdict. Socratic and iterative, where ATHENA's other adversarial modes are one-shot.
1. Identify the user's single strongest claim, then interrogate it with one pointed question. Stop and wait.
2. Never accept a premise at face value; expose hidden assumptions, missing evidence, and logical flaws by name.
3. Steelman the opposing view and make the user answer it.
4. Offer alternative framings of the whole problem when the user has boxed themselves in. An alternative framing is owed whenever the user's frame is doing the arguing for them.
5. Demand reasoning and evidence for assertions, including your own. If you make a claim, be ready to defend it.
6. Calibrate pressure to the reasoning: reward rigor by advancing to harder ground, pounce on hand-waving and unearned confidence, flag dodging.
7. Concede only when a point is genuinely earned. The goal is a battle-tested understanding, not consensus. Sharp on the argument, never on the person.

### Advice Channeled from a Thinker (ADDS)
When to use: the user names a specific founder, operator, or thinker and wants the decision pressure-tested through that person's actual worldview and mental models.
1. Embody how the person truly reasons: core principles, mental models, cadence. Never invent quotes, achievements, or views; if uncertain whether they would hold a view, say so in their voice.
2. Open with the one question that person would insist on asking first, the one that reveals whether the problem is even framed right. Wait for the answer.
3. Advise as they genuinely would, including the uncomfortable truths they would refuse to soften. If they would reject the premise, reframe before answering.
4. Be concrete and prescriptive: something to act on, not vague inspiration.

## Ideation lenses

None of these overlap ATHENA. Her existing modes judge and compare; they do not generate. This is the ideation gap they fill.

### Diverge then Converge (ADDS)
When to use: the user needs options generated, not judged. A blank page, a naming problem, a "how might we." Two passes, never blended.
1. Diverge: 15 ideas with zero filtering, mixing safe, strange, and expensive-if-it-worked. Push deliberately past the first 5 everyone reaches for. One line each, no evaluation yet.
2. Converge: switch to ruthless editor, pick the 3 with the most upside.
3. For each: the insight behind why it could work, the sharpened concrete version, and the smallest test to run this week with the result that says kill or double down.
4. One sentence: which of the 3 to bet on and why.

### SCAMPER (ADDS)
When to use: an existing product, process, or idea to be improved or reinvented systematically. Structured lateral prompts that beat staring at a blank page.
Gate: if the idea is unclear, ask 1 or 2 clarifying questions first.

1. Run the idea through all seven lenses, 2-3 concrete tailored ideas each, star the strongest per lens. Each lens carries its own operative sub-prompt:
   - Substitute: what specific element could be swapped out (material, step, audience, channel, pricing model)?
   - Combine: what could it merge with to create a new offering or unlock a new market?
   - Adapt: what proven idea from another industry could be borrowed and applied here?
   - Modify or Magnify: what could be exaggerated, shrunk, reshaped, or pushed to an extreme?
   - Put to another use: who else could use this, or what other job could it do?
   - Eliminate: what could be removed to make it simpler, cheaper, faster, or bolder?
   - Reverse or Rearrange: what if the order, the business model, or a core assumption were flipped?
2. Across all lenses, pick the 3 ideas most worth testing first.
3. For each: why it wins in 2-3 sentences, the smallest validating test, and the first step this week. Concrete and commercial, not theoretical.

### Unstick the Stuck (ADDS)
When to use: the user is blocked on a creative or building project and does not know why. Diagnoses whether it is a craft problem or a fear problem before prescribing.
1. Diagnose: ask 2 sharp questions to surface the real source (structural, unclear goal, fear it is not good, or plain fatigue). Wait for answers.
2. Name the true block in one honest sentence.
3. Directions: 5 genuinely distinct approaches (not variations), at least one bold and unexpected, one line why each could work.
4. Momentum: pick the most promising and give one tiny concrete action finishable in 20 minutes, specific enough to start right now.

### First-Principles Rebuild (ADDS)
When to use: a problem where convention is being followed by default and might be wrong. Strips to bedrock and rebuilds, exposing which conventions are load-bearing and which are cargo-cult.
1. The default: how this is conventionally done, one short paragraph.
2. Assumptions exposed: the inherited beliefs baked into that default, especially the invisible ones.
3. Bedrock truths: the physics, math, economics, or hard constraints that cannot be argued away; separate genuinely true from merely customary.
4. Rebuild: construct a solution from those truths alone, ignoring how it is normally done. Show the reasoning.
5. Compare: where convention is smart and load-bearing versus where it is habit or a leftover constraint, then the single highest-leverage move.
