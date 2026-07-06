// ATHENA lint suite: asserts the skill's structural contract, citation
// integrity, record schema, and house copy rules. Reproducible, no network.
// Run: node benchmarks/run.js
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`PASS ${name}`); }
  else { fail++; console.log(`FAIL ${name}${detail ? ' :: ' + detail : ''}`); }
}

const skill = read('SKILL.md');
const citations = read('references/citations.md');
const record = read('references/decision_record.md');
const readme = read('README.md');
const honest = read('docs/HONEST-NUMBERS.md');

// --- 1. Structural contract: modes -------------------------------------------
check('modes: three modes declared', /## Three modes/.test(skill) && /Counsel/.test(skill) && /Compare-N/.test(skill) && /War Council/.test(skill));
check('modes: counsel is default', /\*\(default\)\*/.test(skill));
check('modes: open-records check present', /open-records check/i.test(skill) && /exactly once|never nag/i.test(skill));

// --- 2. Lenses: all eight, pre-mortem is 8 -------------------------------------
const lenses = ['Pressure Test', 'Problem Validation', 'Competitive Reality', 'First 10 Users', 'MVP Thinking', 'Growth Engine', 'Positioning & Terrain', 'Pre-mortem'];
check('lenses: all eight present', lenses.every(l => skill.includes(l)), lenses.filter(l => !skill.includes(l)).join(', '));
check('lenses: pick 1-2 not all (anti-template law)', /one or two/i.test(skill) && /not a checklist/i.test(skill));
check('lenses: pre-mortem runs Klein protocol', /failed spectacularly/i.test(skill) && /INDEPENDENTLY/i.test(skill.match(/Pre-mortem[\s\S]{0,600}/)[0] + ''));

// --- 3. War Council: five personas + judge + verdict shape ----------------------
const personas = ['The Contrarian', 'The Expansionist', 'The Logician', 'The Researcher', 'The Buyer'];
check('council: five personas mandated', personas.every(p => skill.includes(p)));
check('council: parallel single-message convening', /single message/.test(skill) && /parallel/.test(skill));
check('council: judge does not average', /Do NOT average/.test(skill));
check('council: verdict block complete', ['THE VERDICT: GO / RESHAPE / KILL', 'Biggest risk', 'Money read', 'Terrain', 'cheapest 48-hour test', 'If RESHAPE'].every(s => skill.includes(s)));
check('council: score line format', /Contrarian X\/10 · Expansionist X\/10 · Logician X\/10 · Researcher X\/10 · Buyer X\/10/.test(skill));

// --- 4. Compare-N contract -------------------------------------------------------
check('compare-n: 2-5 options bounded', /2-5 options/.test(skill));
check('compare-n: one verdict, no ties', /Never "it depends," never a tie/.test(skill) || /never a tie/i.test(skill));
check('compare-n: matrix dimensions named', /fatal[- ]risk/i.test(skill) && /cost-to-test/.test(skill));

// --- 5. Decision records ----------------------------------------------------------
check('records: path convention consistent', skill.includes('.athena/decisions/YYYY-MM-DD-<slug>.md') && record.includes('.athena/decisions/YYYY-MM-DD-<slug>.md'));
check('records: schema blocks present', ['## Brief', '## Council', '## Verdict', '## The cheapest 48-hour test', '## Follow-up'].every(s => record.includes(s)));
check('records: follow-up starts PENDING, asked once', /PENDING/.test(record) && /exactly once/.test(record) && /never/.test(record));
check('records: never deleted, new entry not edit', /never deleted/.test(record));

// --- 6. Citation integrity ---------------------------------------------------------
const requiredRefs = [
  { key: 'Klein', mustHave: ['2007', 'Harvard Business Review', '85(9)'] },
  { key: 'Mitchell', mustHave: ['1989', 'Journal of Behavioral Decision Making', '30%'] },
  { key: 'Chiang', mustHave: ['2024', '10.1145/3640543.3645199', "Devil's Advocate"] },
  { key: 'Schweiger', mustHave: ['1986', 'Academy of Management Journal', '29(1)'] },
];
for (const r of requiredRefs) {
  check(`citations: ${r.key} reference intact`, r.mustHave.every(s => citations.includes(s)), r.mustHave.filter(s => !citations.includes(s)).join(', '));
}
check('citations: integrity rules present', /Never invent a citation/.test(citations));
check('citations: IUI caveat disclosed in both', /in-distribution/.test(citations) && /in-distribution/.test(honest) && /under-reliance/i.test(honest));
check('citations: skill cites only verified refs', !/et al\., 20(1[0-3]|0\d)/.test(skill));

// --- 7. Tone laws survive ------------------------------------------------------------
check('tone: the call must be a call', /The call must be a call/.test(skill));
check('tone: fatal flaw law', /fatal flaw is called a fatal flaw/i.test(skill));
check('tone: any-subject generalization (sentient google)', /Any subject qualifies/i.test(skill) && /career/i.test(skill) && /architecture/i.test(skill));
check('tone: anti-generic ban', /Ban "validate your assumptions"/.test(skill));

// --- 8. Packaging: caveman rules -------------------------------------------------------
check('readme: meme pitch first line', readme.split('\n').slice(0, 4).join('\n').includes('ATHENA holds a trial'));
check('readme: before/after above install', readme.indexOf('## Before / after') < readme.indexOf('## Install'));
check('readme: honest-numbers linked', readme.includes('HONEST-NUMBERS.md'));
check('readme: PowerShell install first', readme.indexOf('PowerShell') < readme.indexOf('macOS / Linux'));
check('readme: ecosystem table + funnel', readme.includes('CHIRON') && readme.includes('VERITAS') && readme.includes('Fair trade'));
check('honest: token cost admitted', /token/.test(honest) && /expensive/.test(honest));
check('license: real MIT file', read('LICENSE').includes('MIT License') && read('LICENSE').includes('Copyright'));

// --- 9. House copy lint: zero em/en dashes repo-wide -------------------------------------
(() => {
  const offenders = [];
  function scan(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name === '.git') continue;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) scan(p);
      else if (/\.(md|js|json)$/.test(e.name)) {
        if (/[\u2014\u2013]/.test(fs.readFileSync(p, 'utf8'))) offenders.push(path.relative(root, p));
      }
    }
  }
  scan(root);
  check('copy lint: zero em/en dashes repo-wide', offenders.length === 0, offenders.join(', '));
})();

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
