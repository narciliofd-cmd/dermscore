"use client";

import { useState } from "react";
import PASIRegionCard from "../components/PASIRegionCard";
import PASIResultCard from "../components/PASIResultCard";
import {
  bodyRegions,
  severityOptions,
} from "../data/pasi";

import {
  calculatePASI,
  RegionValues,
} from "../lib/pasi";

export default function PASIPage() {
  const [regions, setRegions] = useState<Record<string, RegionValues>>({
    head: {
      area: 0,
      erythema: 0,
      thickness: 0,
      scaling: 0,
    },
    upper: {
      area: 0,
      erythema: 0,
      thickness: 0,
      scaling: 0,
    },
    trunk: {
      area: 0,
      erythema: 0,
      thickness: 0,
      scaling: 0,
    },
    lower: {
      area: 0,
      erythema: 0,
      thickness: 0,
      scaling: 0,
    },
  });

  const [result, setResult] = useState<number | null>(null);

  function updateRegion(
    regionId: string,
    field: keyof RegionValues,
    value: number
  ) {
    setRegions((prev) => ({
      ...prev,
      [regionId]: {
        ...prev[regionId],
        [field]: value,
      },
    }));
  }

  function handleCalculate() {
    const weights = {
      head: 0.1,
      upper: 0.2,
      trunk: 0.3,
      lower: 0.4,
    };

    const total = calculatePASI(regions, weights);

    setResult(total);
  }

  function handleRestart() {
    setRegions({
      head: {
        area: 0,
        erythema: 0,
        thickness: 0,
        scaling: 0,
      },
      upper: {
        area: 0,
        erythema: 0,
        thickness: 0,
        scaling: 0,
      },
      trunk: {
        area: 0,
        erythema: 0,
        thickness: 0,
        scaling: 0,
      },
      lower: {
        area: 0,
        erythema: 0,
        thickness: 0,
        scaling: 0,
      },
    });

    setResult(null);
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white">

        <div className="max-w-5xl mx-auto px-8 py-10">

          <h1 className="text-5xl font-bold">
            PASI
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Psoriasis Area Severity Index
          </p>

        </div>

      </header>

      <section className="max-w-5xl mx-auto p-8">

        <div className="mb-10">

          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Avaliação
          </h2>

          <p className="text-slate-600">
            Avalie cada região do corpo separadamente.
          </p>

        </div>

        {bodyRegions.map((region) => (
          <PASIRegionCard
            key={region.id}
            title={region.name}
            severityOptions={severityOptions}
            values={regions[region.id]}
            onChange={(field, value) =>
              updateRegion(region.id, field, value)
            }
          />
        ))}

        <button
          onClick={handleCalculate}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-semibold"
        >
          Calcular PASI
        </button>

        {result !== null && (
          <div className="mt-10">
            <PASIResultCard
              score={result}
              onRestart={handleRestart}
            />
          </div>
        )}

      </section>

    </main>
  );
}