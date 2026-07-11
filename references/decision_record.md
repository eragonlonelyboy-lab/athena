# Decision record schema

Path: `.athena/decisions/YYYY-MM-DD-<slug>.md` (slug: 3-5 words, kebab-case, from the brief).
Git-diffable markdown. One decision, one file. Records are never deleted; a reversed verdict gets a new entry in the follow-up block, not an edit of the original.

```markdown
# Decision: <one-line title>

- date: YYYY-MM-DD
- mode: war-council | compare-n
- confidence: low | medium | high
- session-id: <stable trial/session id>
- round-count: <bounded integer>

## Brief
<the brief paragraph, verbatim as judged>

## Council
Participants: <role> | <provider> | <model> | <session-id> | <independence class>
Contrarian X/10 · Expansionist X/10 · Logician X/10 · Researcher X/10 · Buyer X/10
<for compare-n: the comparison matrix instead>

## Rejected and unresolved findings
- rejected: <finding and evidence for rejection>
- parked dissent: <finding, owner and tripwire>
- unresolved human gate: <decision only the human can make, or none>

## Verdict: GO | RESHAPE | KILL
<the call in one line>
<why, 2-3 sentences>
Terrain: <now> -> <should be>

## The cheapest 48-hour test
<the test, exactly as issued>

## Follow-up (open until answered)
- test run: PENDING | done YYYY-MM-DD | declined YYYY-MM-DD
- result: <what happened>
- verdict aged: <well | badly | mixed, one line on what the council got right or missed>
```

## Rules

- Write the record in the same turn as the verdict; the file path is part of the output shown to the user.
- The follow-up block starts PENDING. The open-records check (SKILL.md) asks about PENDING records exactly once per invocation, one line, never blocking.
- When the user reports back, fill the follow-up block in place. If the verdict aged badly and CHIRON is installed, offer to capture the miss as a rule.
- Multiple decisions per project accumulate in the directory; that pile IS the user's judgment history, and it is theirs, local, in git.
- Cross-model agreement never deletes dissent. Record rejected findings and deadlock; a human gate stays unresolved until the human answers it.
