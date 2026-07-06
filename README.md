# ATHENA

**Claude agrees with you by default. ATHENA holds a trial.**

ATHENA: Adversarial Trials, Honest Evaluation, Neutral Arbitration.

Athena, Greek goddess of wisdom and strategic warfare: counsel before the battle, judgment after it. ATHENA does the same for your decisions: any idea, any question, tried by adversarial counsel, judged with one decisive verdict, and written on the record so you can check how it aged.

## Before / after

**Without ATHENA**, you ask your AI about your startup idea:

> "That's a great idea! Here's a 12-step plan to build it..."

Six weeks of building later, you discover what a competitor search would have told you on day one.

**With ATHENA:**

```
## THE VERDICT: RESHAPE
Confidence: medium

**The call in one line:** the tool is right, the buyer is wrong; sell it
to agencies, not freelancers.

**Biggest risk:** freelancers churn at $9/mo and support eats the margin.
**Terrain:** crowded freelancer-tools shelf -> agency workflow gap

**The cheapest 48-hour test:** DM 10 agency owners with a one-line pitch;
2+ calls booked = the RESHAPE holds.

Contrarian 4/10 · Expansionist 8/10 · Logician 6/10 · Researcher 5/10 · Buyer 3/10

Recorded: .athena/decisions/2026-07-05-freelancer-tool.md
```

And next time you invoke ATHENA, one line: *"Open verdict on file: did you run the 10-DM test?"* The loop nobody closes.

## What it does

- **Counsel** (default): eight diagnostic lenses (pressure test, problem validation, competitive reality, first-10-users, MVP, growth engine, Sun-Tzu terrain, Klein pre-mortem), applied conversationally to ANY question: product, career, architecture, strategy, a hard message. It picks the 1-2 lenses that matter; no template.
- **Compare-N:** 2-5 options in, one matrix, one verdict, tradeoff named. Never "it depends."
- **War Council:** five adversarial personas in parallel (Contrarian, Expansionist, Logician, Researcher with live web evidence, Buyer in first person) + a Judge. One GO / RESHAPE / KILL verdict and the cheapest 48-hour test.
- **Decision records:** every verdict on file as git-diffable markdown with scores, reasoning, and an open follow-up block. ATHENA asks about untested verdicts exactly once, never nags.
- **Evidence-cited methods:** the pre-mortem and adversarial-council mechanics cite their published research (Klein 2007, Mitchell 1989 ~30% effect, Schweiger 1986, ACM IUI'24), one line, verified references only.

## Why adversarial

Structured devil's advocacy beats consensus review on decision quality (Schweiger 1986, Academy of Management Journal), and an LLM devil's advocate measurably improves decision accuracy and cuts overreliance on AI advice (Chiang et al., ACM IUI 2024). The full references, including the honest caveats, are in [references/citations.md](references/citations.md). Where ATHENA loses: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

## Benchmarks

Reproducible lint suite, no network: `node benchmarks/run.js`. Asserts the skill's structural contract (modes, lenses, personas, verdict shape, record schema), citation integrity against the verified pack (no invented references, DOIs intact), and house copy rules (zero em dashes). Current: all green.

## Install

One file copy. Windows PowerShell:

```powershell
git clone https://github.com/eragon/athena.git; cd athena
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\athena" | Out-Null
Copy-Item SKILL.md "$env:USERPROFILE\.claude\skills\athena\"; Copy-Item -Recurse -Force references "$env:USERPROFILE\.claude\skills\athena\"
```

macOS / Linux:

```bash
git clone https://github.com/eragon/athena.git && cd athena
mkdir -p ~/.claude/skills/athena && cp SKILL.md ~/.claude/skills/athena/ && cp -r references ~/.claude/skills/athena/
```

Then in any conversation: `/athena your idea` (`/seshat` still works as a legacy alias), or just "pressure-test this," "should I do A or B," "council this." Zero config; decision records appear on the first verdict. If anything breaks, open your agent in this repo and say: "read CLAUDE.md and set ATHENA up for me."

## Ecosystem

ATHENA is part of the Demiurge line: mythology-named tools that keep AI agents honest.

| Product | Deity | Job |
|---|---|---|
| VERITAS | Roman goddess of truth | strips AI slop from prose, audits its own rewrite |
| MAAT | Egyptian goddess of order | multi-agent attention terminal with receipts |
| HORKOS | Greek god of oaths | evidence-audit loop: no receipts, no "done" |
| MONETA | Roman goddess of memory and money | token discipline with honest accounting |
| HYPNOS | Greek god of sleep | memory consolidation: every change a diff, nothing deleted |
| CALLIOPE | muse of epic poetry | full design agency in the terminal |
| CHIRON | trainer of heroes | corrections become permanent cross-agent rules |
| **ATHENA** | **Greek goddess of wisdom and strategic warfare** | **decision trials with verdicts on the record** |

Natural pairs: a verdict that ages badly becomes a CHIRON rule; a decision worth announcing goes through VERITAS.

## Star this repo

ATHENA costs you one hard conversation before you build. The alternative costs you the build. A star costs one click and tells us to keep going. Fair trade.

MIT. Free, like a second opinion should be.
