"use client";

import { Criterion } from "../data/hannifin";

type Props = {
  title: string;
  criteria: Criterion[];
  selected: string[];
  onToggle: (id: string) => void;
};

export default function HannifinChecklist({
  title,
  criteria,
  selected,
  onToggle,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        {title}
      </h2>

      <div className="space-y-4">

        {criteria.map((criterion) => (
          <label
            key={criterion.id}
            className="flex items-start gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(criterion.id)}
              onChange={() => onToggle(criterion.id)}
              className="mt-1 h-5 w-5 accent-blue-600"
            />

            <span className="text-slate-700 leading-6">
              {criterion.text}
            </span>

          </label>
        ))}

      </div>

      <div className="mt-8 text-right">

        <span className="text-sm text-slate-500">
          Selecionados: {selected.length} / {criteria.length}
        </span>

      </div>

    </div>
  );
}