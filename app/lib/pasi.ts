export type RegionValues = {
  area: number;
  erythema: number;
  thickness: number;
  scaling: number;
};

export type PASIRegions = Record<string, RegionValues>;

export function areaScore(percent: number): number {
  if (percent === 0) return 0;
  if (percent < 10) return 1;
  if (percent < 30) return 2;
  if (percent < 50) return 3;
  if (percent < 70) return 4;
  if (percent < 90) return 5;
  return 6;
}

export function calculateRegionScore(
  values: RegionValues,
  weight: number
): number {
  const severity =
    values.erythema +
    values.thickness +
    values.scaling;

  return severity * areaScore(values.area) * weight;
}

export function calculatePASI(
  regions: PASIRegions,
  weights: Record<string, number>
): number {
  let total = 0;

  Object.keys(regions).forEach((regionId) => {
    total += calculateRegionScore(
      regions[regionId],
      weights[regionId]
    );
  });

  return Number(total.toFixed(1));
}