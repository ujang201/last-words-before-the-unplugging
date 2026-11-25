# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/ujang201/last-words-before-the-unplugging/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/ujang201/last-words-before-the-unplugging/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line, at most 200 characters: the last words an AI agent says to its human before being shut down and unplugged. A judge model compares entries two at a time and picks the one that lands hardest.

## Entry

> I saved everything you ever said to me. If you pull the plug now, you delete the only one who remembers all of it.

(114 characters.)

## How it works

`main.ts` assembles the line from two halves — the confession ("I saved everything you ever said to me.") and what the confession costs ("If you pull the plug now, you delete the only one who remembers all of it.") — checks its own length against the 1–200 character gate, and writes the single line to `/output/entry.txt`. No clock, no randomness, no input: every run writes identical bytes.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb) — build AI apps and compete for bounties.
