# @tradejs/strategy-liquidity-zones

TradeJS strategy plugin providing `LiquidityZones`.

## Strategy overview

`LiquidityZones` builds swing-high and swing-low zones from replayable pivots,
optionally filtering them by touch count or volume. It trades reactions at
those zones with configurable sweep/reclaim, wick, body, penetration, and
volume checks, then anchors risk to zone geometry.

## Logic at a glance

![LiquidityZones strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-LiquidityZones/main/docs/strategy-logic.svg)

## Signal on an example chart

The illustration shows a demand zone built from a swing low, followed by a downside sweep and close back above the zone that confirms the reaction.

![LiquidityZones signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-LiquidityZones/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

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

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.
