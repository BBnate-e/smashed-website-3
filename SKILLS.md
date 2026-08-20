# Claude Code Skills Reference

This is a reference list of the Claude Code skills available to any session
working in this repository. They ship with Claude Code itself (and this
account's connected skills) — nothing here needs to be installed; Claude
picks them up automatically when a task matches.

> Note: the skills' underlying instructions, scripts, and assets are part of
> Anthropic's Services and are licensed for use only within those Services —
> they can't be copied into this repo. This file documents *what's
> available and when it triggers*, not how each skill works internally.

## Documents & files
| Skill | Use it for |
|---|---|
| `docx` | Creating, reading, or editing Word documents (`.docx`, `.dotx`) |
| `pdf` | Reading, creating, merging, splitting, watermarking, or filling PDFs |
| `pptx` | Creating, reading, or editing PowerPoint decks (`.pptx`, `.potx`) |
| `xlsx` | Creating, reading, or editing spreadsheets (`.xlsx`, `.csv`, `.tsv`, etc.) |

## Design & visualization
| Skill | Use it for |
|---|---|
| `design` | Multi-artboard visual design canvases — mockups, landing pages, posters, flyers |
| `dataviz` | Building charts, graphs, dashboards, or any data visualization |
| `artifact-design` | Design fundamentals to load before writing any Artifact |
| `artifact-diagramming` | Drawing diagrams inside Artifacts |
| `artifact-capabilities` | Live/connected-data, shared-state, or self-updating Artifact pages |

## Development workflow (this repo)
| Skill | Use it for |
|---|---|
| `code-review` | Reviewing a diff or PR for bugs and cleanup opportunities |
| `simplify` | Applying reuse/simplification/efficiency cleanups to changed code |
| `security-review` | Security review of pending changes on the current branch |
| `init` | Bootstrapping a `CLAUDE.md` with codebase documentation |
| `run` | Launching and driving this project's app to verify a change |
| `session-start-hook` | Setting up SessionStart hooks for Claude Code on the web |
| `update-config` | Editing `.claude/settings.json` — permissions, hooks, env vars |
| `keybindings-help` | Customizing Claude Code keyboard shortcuts |
| `fewer-permission-prompts` | Allowlisting common read-only calls to cut prompt friction |
| `skill-creator` | Creating or optimizing custom skills |
| `loop` | Running a prompt/command on a recurring interval |
| `claude-api` | Reference for the Claude API / Anthropic SDK |

## Personal assistant
| Skill | Use it for |
|---|---|
| `morning` | Rendering or scheduling a personal morning brief |
| `setup-writing-style` | Learning a user's writing voice for future drafts |

---

Invoke any of these explicitly with `/<skill-name>`, or just describe the
task — Claude matches it against each skill's trigger description
automatically.
