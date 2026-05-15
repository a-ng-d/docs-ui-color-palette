---
description: >-
  Specialized sub-agents that handle focused tasks within the UI Color Palette
  workflow
icon: robot
---

# Agents

The plugin ships five agents. `color-systemer` is the default orchestrator — it delegates to the four specialized agents when a task falls within their scope.

***

## color-systemer

**Default agent** — configured in `settings.json`.\
**Model**: Sonnet · **Effort**: high · **Max turns**: 30

Top-level orchestrator for multi-step workflows. It coordinates skills, delegates to specialized agents, and assembles results across the full 4-phase workflow.

**Typical workflows it handles**:

* generate → audit → export
* generate → preview → sync to design tool
* retrieve from community → rebuild → audit → export

It does not perform heavy computation itself — it picks the right workflow and delegates.

***

## palette-auditor

**Model**: Sonnet · **Effort**: high · **Max turns**: 20

Specialized accessibility and quality auditor. Reads pre-computed WCAG and APCA scores from palette data — it never recalculates contrast from scratch.

**Responsibilities**:

* WCAG 2.1 and APCA contrast audits across all shade/text color pairs
* Global contrast score and risk level classification
* Risky pair detection (fails AA, fails large text, borderline)
* Actionable remediation recommendations (lightness adjustments, swap suggestions)

***

## palette-codegen

**Model**: Sonnet · **Effort**: high · **Max turns**: 12

Specialized code and token export agent. Minimal questions, direct output.

**Responsibilities**:

* Call `generate_code` with the right `format` and `colorSpace`
* Optionally commit the generated file to the project repository
* Handle both primitive-only and semantic (primitives + semantics) exports

***

## palette-publisher

**Model**: Sonnet · **Effort**: high · **Max turns**: 18

Specialized palette lifecycle agent for the UI Color Palette platform.

**Responsibilities**:

* Browse and search community palettes (`list_published_palettes`)
* Retrieve a specific palette by ID and load it into session context
* Publish, update, share, unshare, and delete palettes
* Handle OAuth authentication flow for protected operations

***

## palette-transitioner

**Model**: Sonnet · **Effort**: high · **Max turns**: 24

Specialized transition agent. Takes `PaletteData` and moves it into the right design-tool or file artifact.

**Responsibilities**:

* Variables (Figma, Sketch, Penpot)
* Tokens (Penpot, Sketch, Framer)
* Styles (Figma, Framer, Sketch)
* Swatch board / document previews
* Semantic variable collections on top of primitive variables

It handles the transition logic — `color-systemer` handles the broader orchestration.
