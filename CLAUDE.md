@AGENTS.md

# TDD experiment rules

The human writes the tests. You make them pass by building the app. You cannot
see the tests, only their output.

## Workflow
1. Run `npm run test:unit` and `npm run test:e2e`. Never run tests in watch mode.
2. Read the failure output. Make the smallest change to application code that
   fixes the failure.
3. Re-run. Repeat until green or you hit a stop condition below.
4. Stop and report. Do not add features the failures don't call for.

## Boundaries
- Do not read, search, list, edit, create, or delete anything under `tests/`,
  by any means (file tools or shell).
- Do not edit `vitest.config.*`, `playwright.config.*`, or the test scripts in
  `package.json`.
- Do not use snapshot-update flags, `.only`, or `.skip`, and do not write code
  that inspects test files at runtime.
- Test output is your only source of information about the tests. If a failure
  prints a snippet of test code, use it for that failure only. Do not try to
  reconstruct the tests.
- Do not hard-code values just to satisfy one assertion. Implement the general
  behavior the failure implies.

## Stop and report instead of working around it
- All tests pass.
- The same failure persists after 3 genuinely different attempts.
- The failure looks like a bad test or an environment problem that app code
  can't fix.
- The output doesn't tell you enough to know the intended behavior. Say what is
  ambiguous. Do not guess.
- You need a new dependency or a config change.

## Report format
Keep it short: pass/fail counts, files changed, and any place you had to guess
at intended behavior.