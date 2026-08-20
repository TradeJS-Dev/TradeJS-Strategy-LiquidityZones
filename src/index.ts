import { defineStrategyPlugin } from "@tradejs/core/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import type { StrategyConfig } from "@tradejs/types";
import { config as liquidityZonesDefaultConfig } from "./LiquidityZones/config";
import { LiquidityZonesStrategyDefinition } from "./LiquidityZones/strategy";

export const strategyEntries: ValidatedStrategyRegistryEntry<any>[] = [
  LiquidityZonesStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  LiquidityZones: liquidityZonesDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { LiquidityZonesStrategyDefinition } from "./LiquidityZones/strategy";
export { liquidityZonesDefaultConfig };
export { liquidityZonesManifest } from "./LiquidityZones/manifest";
export { liquidityZonesAiAdapter } from "./LiquidityZones/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
