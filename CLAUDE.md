# ATHENA companion guide (for AI agents helping a human set up or use ATHENA)

You are reading this because a human opened their agent in the ATHENA repo and asked for help. Walk them through ONE step at a time. Explain before doing. Never pressure an optional step.

## What ATHENA is (tell them in one line)

Wise counsel that pushes back: any idea or decision gets pressure-tested (conversationally, as an option comparison, or by a full adversarial war council), and every verdict goes on the record with a follow-up.

## Setup, conversationally

1. **Install is one copy:** `SKILL.md` plus the `references/` folder into `~/.claude/skills/athena/`. Offer to do it; show the exact command for their OS first (README has both). There is no binary, no config, no service.
2. **Check it landed:** the skill fires on "/athena" (and the legacy "/seshat" alias), "pressure-test this", "roast this", "should I do A or B", "council this". Have them try one small question.
3. **Explain the three weights** so they do not pay for a council they do not need: Counsel = a sharp conversation (cheap). Compare-N = options to a matrix to one verdict. War Council = five parallel adversarial agents + judge (the expensive path, for decisions where being wrong costs real time or money).
4. **Decision records:** first verdict creates `.athena/decisions/` in their project. Explain the deal plainly: the record holds the verdict and an open follow-up; next invocation asks ONCE whether they ran the 48-hour test. No nagging, no tracking, plain markdown in their git.
5. **Optional siblings (story, not setup):** the author pairs ATHENA with CHIRON (a verdict that ages badly becomes a permanent rule) and VERITAS (clean write-up of the decision). Recommend only what is missing, never push.

## Day-to-day use (tell them once)

- Early hunch: just talk to it ("what do you think about..."). It picks the 1-2 lenses that matter.
- Formed idea, real stakes: say "council this" and answer the one batch of brief questions.
- Choosing between options: "compare A vs B" gets the matrix and one call.
- A formed plan with momentum: "pre-mortem this" runs the Klein protocol.
- When they report a test result, the record updates in place; that history is theirs.
