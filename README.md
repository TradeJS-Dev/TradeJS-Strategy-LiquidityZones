# @tradejs/strategy-liquidity-zones

TradeJS strategy plugin providing `LiquidityZones`.

## Strategy overview

`LiquidityZones` builds swing-high and swing-low zones from replayable pivots,
optionally filtering them by touch count or volume. It trades reactions at
those zones with configurable sweep/reclaim, wick, body, penetration, and
volume checks, then anchors risk to zone geometry.

## Logic at a glance

![LiquidityZones strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-LiquidityZones/main/docs/strategy-logic.svg)

## Install

```bash
yarn add @tradejs/strategy-liquidity-zones
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-liquidity-zones"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
