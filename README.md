<div align="center">

![Athena weighing options on a scale, owl beside her](assets/hero.png)

# ATHENA: Adversarial Trials, Honest Evaluation, Neutral Arbitration

*Claude agrees with you by default. ATHENA holds a trial: adversarial decision counsel for Claude Code and any AI agent.*

**Red-team your decisions. A wise war council: five adversaries, Sun Tzu's terrain read, one verdict.**

![license](https://img.shields.io/badge/license-MIT-E8A23D)
![skill](https://img.shields.io/badge/type-skill-2C7A7B)
![lint](https://img.shields.io/badge/lint-37%2F37-E8A23D)
![zero deps](https://img.shields.io/badge/dependencies-0-2C7A7B)
![cited research](https://img.shields.io/badge/cited--research-4-E8A23D)

</div>

**I am Athena. I do not tell you your idea is good.** In the old world I sat with generals before the battle and with juries after it: counsel first, judgment second, no flattery in either. The work has not changed, only the battlefield. Your AI agrees with you by default. It sees your startup idea, your architecture choice, your two job offers, and it builds you a 12-step plan before it asks a single hard question. That is not counsel. That is applause. When you bring me a decision, I do the thing your agent will not: I convene the opposition, I let them argue, and I hand down one verdict you can check later.

**No flattery, no "it depends."** One GO, RESHAPE, or KILL, the cheapest test to prove it, and a record on file so you can see how it aged. The lint runs 37 of 37 green, and you can rerun it yourself.

## The verdict, delivered

You ask your AI about your startup idea. Without me, you get: *"That's a great idea. Here's a 12-step plan to build it."* Six weeks of building later, you learn what a competitor search would have told you on day one.

**With me, you get a trial.** Here is a real RESHAPE:

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

The tool was fine. The buyer was wrong. You did not need six weeks to learn that. And next time you invoke me, one line: *"Open verdict on file: did you run the 10-DM test?"* That is the loop nobody else closes.

## Why the incumbents miss it

| | Vanilla Claude / ChatGPT | Generic "validator" prompts | ATHENA |
|---|---|---|---|
| Default posture | agrees with you | one polite critique, then agrees | a structured adversarial trial, every time |
| Output | a 12-step plan to build it | a list of concerns | one GO / RESHAPE / KILL verdict plus the cheapest 48-hour test |
| Memory | forgets the verdict | forgets the verdict | on the record in your git; follow-up asked exactly once |

## Not for you if

- The decision is trivial or reversible in an afternoon. Just decide. A trial costs more than the mistake.
- You want encouragement. I am wise, not warm. The Buyer persona will tell you to your face that she is not paying for it.
- You expect the verdict to be right every time. It is a structured second opinion with the reasoning shown, not an oracle. Where I lose: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

## How it works

1. **Bring anything.** A product idea, two job offers, an architecture choice, a hard message you are about to send. Say `/athena`, or just "pressure-test this."
2. **The weight is chosen for you.** Counsel for a sharp conversation: eight diagnostic lenses, the one or two that matter get applied. Compare-N for two to five options: one matrix, one verdict, never "it depends." War Council for when being wrong costs real time or money.
3. **The trial runs.** In War Council, five adversarial personas argue in parallel: Contrarian, Expansionist, Logician, Researcher with live web evidence, and the Buyer in first person.
4. **The Judge rules.** One GO / RESHAPE / KILL verdict, the tradeoff named out loud, and the cheapest 48-hour test to check it.
5. **The verdict goes on file.** Git-diffable markdown in `.athena/decisions/` with scores and an open follow-up block. I ask about an untested verdict exactly once. I do not nag.

## Install for your agent

ATHENA ships as a single-file **skill**: `SKILL.md` plus its `references/` folder. Copy it once and every future session can convene the trial.

**Claude Code** (reference host). Windows PowerShell:
```powershell
git clone https://github.com/eragonlonelyboy-lab/athena.git; cd athena
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\athena" | Out-Null
Copy-Item SKILL.md "$env:USERPROFILE\.claude\skills\athena\"; Copy-Item -Recurse -Force references "$env:USERPROFILE\.claude\skills\athena\"
```
macOS / Linux:
```bash
git clone https://github.com/eragonlonelyboy-lab/athena.git && cd athena
mkdir -p ~/.claude/skills/athena && cp SKILL.md ~/.claude/skills/athena/ && cp -r references ~/.claude/skills/athena/
```
Then in any conversation: `/athena your idea`, or just "pressure-test this," "should I do A or B," "council this." Zero config. The decision records appear on the first verdict.

**Other skill-capable hosts.** The portable SKILL.md format means the `/athena` command works the same on Codex, Copilot CLI, OpenCode, pi, Devin, Amp, CodeWhale, Hermes, and Antigravity: drop the folder into that host's skills path (`~/.codex/skills/`, `.opencode/skills/`, `.pi/skills/`, and so on). Gemini CLI is the one outlier: it uses TOML slash-commands rather than SKILL.md, so the command is registered differently but the method is identical.

**Instruction-only hosts.** Cursor, Windsurf, Cline, Kiro, Copilot editor, Zed, and Aider cannot run a named `/command`, but they can load my method as an always-on ruleset. Paste the doctrine into that host's rules file (`.cursor/rules/`, `.windsurf/rules/`, `.clinerules/`, `.kiro/steering/`, `.github/copilot-instructions.md`) and I sit in the background, ready to hold a trial when the stakes appear. No slash command, same judgment.

Not sure where you land? Open your agent in this repo and say: "read CLAUDE.md and set ATHENA up for me."

## What the lint proves, and what it cannot

Some products ship a performance chart. I will not, because judgment does not have a benchmark. There is no ground-truth dataset of correct life decisions, and any tool that claims a "decision accuracy %" for your startup is selling you the applause I exist to replace. So here is the honest split.

**What the lint proves.** The lint runs `node benchmarks/run.js` and asserts the skill's structural contract: the three weights are present, the eight lenses and five personas are defined, the verdict shape is GO / RESHAPE / KILL with a 48-hour test, and the record schema is intact. It checks citation integrity against the verified pack, so no reference is invented and every DOI stays intact. It enforces the house copy rules, including zero em dashes. Current: **37 of 37 green.** Do not take my word for it. Run `node benchmarks/run.js` on your machine, no network required.

**What the lint cannot prove.** That the verdict is correct. That is the wrong question. A trial does not promise the right answer; it promises the opposition was heard, the tradeoff was named, and the reasoning is on the record where you can audit it against reality. When the verdict ages badly, the follow-up block tells you so. That honesty is the feature: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

## Why adversarial

Structured devil's advocacy beats consensus review on decision quality (Schweiger 1986, Academy of Management Journal), and an LLM devil's advocate measurably improves decision accuracy and cuts overreliance on AI advice (Chiang et al., ACM IUI 2024). The pre-mortem protocol I run is Klein's (2007, Harvard Business Review), with the effect size drawn from Mitchell 1989 (roughly 30%). The full references, including the honest caveats, live in [references/citations.md](references/citations.md).

## Commands

```
/athena <your idea>        # picks the weight; sharp counsel to a full war council
/seshat <your idea>        # legacy alias, still works
"compare A vs B"           # Compare-N: one matrix, one verdict
"council this"             # War Council: five personas plus judge
"pre-mortem this"          # the Klein protocol on a plan with momentum
```

Every verdict writes a record to `.athena/decisions/`. The next invocation asks once whether you ran the test. That is the whole loop.

## FAQ

**Will you just tell me it is a good idea?**
No. Sit. We are holding a trial. If the idea is good, the opposition will fail to break it, and you will walk out with a GO you can actually trust. If it is not, better you hear it from me than from the market.

**Is the verdict always right?**
No, and any tool that says otherwise is lying to you. I give you a structured second opinion with the reasoning shown, not an oracle. The value is that the opposition was heard and the call is on the record where reality can grade it. Where I lose is written down: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

**Why five personas and not just a critique?**
Because one polite critique is what your AI already gives you before it agrees anyway. Five adversaries who each want a different thing cannot all be flattering you at once. That is not my opinion; it is what the research measured (Schweiger 1986, ACM IUI 2024).

**Do I need a war council for every decision?**
No, and I will refuse to sell you one you do not need. Counsel is a sharp conversation and costs almost nothing. Save the full five-persona trial for the decisions where being wrong costs real time or money.

**What happens after the verdict?**
It goes on file in your git as plain markdown. Next time you open me, I ask once whether you ran the 48-hour test. One question, no nagging, no tracking. The history is yours to keep.

## From the same forge

ATHENA is a [Demiurge](https://github.com/eragonlonelyboy-lab/demiurge) product: mythology-named tools that keep AI agents honest. Each stands alone; each recommends the others only if you do not have them.

| Product | Deity | Job |
|---|---|---|
| VERITAS | Roman goddess of truth | strips AI slop from prose, audits its own rewrite |
| MAAT | Egyptian goddess of order | multi-agent attention terminal with receipts |
| HORKOS | Greek god of oaths | evidence-audit loop: no receipts, no "done" |
| MONETA | Roman goddess of memory and money | token discipline with honest accounting |
| HYPNOS | Greek god of sleep | memory consolidation: every change a diff, nothing deleted |
| CALLIOPE | muse of epic poetry | full design agency in the terminal |
| CHIRON | trainer of heroes | corrections become permanent cross-agent rules |

Natural pairs: a verdict that ages badly becomes a CHIRON rule; a decision worth announcing goes through VERITAS.

## The fair trade

ATHENA costs you one hard conversation before you build. The alternative costs you the build. A star costs one click and tells me to keep holding court. ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=eragonlonelyboy-lab/athena&type=Date)](https://star-history.com/#eragonlonelyboy-lab/athena&Date)

MIT: see [LICENSE](LICENSE). Free, like a second opinion should be.
