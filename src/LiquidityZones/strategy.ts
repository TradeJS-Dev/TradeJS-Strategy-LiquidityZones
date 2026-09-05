import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, LiquidityZonesConfig } from "./config";
import { createLiquidityZonesCore } from "./core";
import { buildLiquidityZonesDetectorKey } from "./engine";
import { liquidityZonesManifest } from "./manifest";

export const LiquidityZonesStrategyDefinition: ValidatedStrategyRegistryEntry<LiquidityZonesConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "LiquidityZones",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createLiquidityZonesCore,
    manifest: liquidityZonesManifest,
    detectorKey: buildLiquidityZonesDetectorKey,
    detectorNoSignalSkipReason: "NO_LIQUIDITY_ZONE_RETEST",
  };
