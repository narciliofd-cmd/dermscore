"use client";

import { useState } from "react";
import HannifinChecklist from "../components/HannifinChecklist";
import {
  majorCriteria,
  minorCriteria,
} from "../data/hannifin";
import { generateHannifinPDF } from "../lib/hannifinPdf";

export default function HannifinRajkaPage() {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [selectedMajor, setSelectedMajor] = useState<string[]>([]);
  const [selectedMinor, setSelectedMinor] = useState<string[]>([]);

  function toggleMajor(id: string) {
    setSelectedMajor((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  function toggleMinor(id: string) {
    setSelectedMinor((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  const diagnosis =
    selectedMajor.length >= 3 &&
    selectedMinor.length >= 3;

  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white">

        <div className="max-w-5xl mx-auto px-8 py-10">

          <h1 className="text-5xl font-bold">
            Hanifin & Rajka
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Critérios diagnósticos para Dermatite Atópica
          </p>

        </div>

      </header>

      <section className="max-w-5xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block font-semibold mb-2">
                Nome do paciente
              </label>

              <input
                type="text"
                value={patientName}
                onChange={(e) =>
                  setPatientName(e.target.value)
                }
                placeholder="Digite o nome do paciente"
                className="w-full border border-slate-300 rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Data
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="w-full border border-slate-300 rounded-xl px-4 py-3"
              />

            </div>

          </div>

        </div>

        <HannifinChecklist
          title="Critérios Maiores"
          criteria={majorCriteria}
          selected={selectedMajor}
          onToggle={toggleMajor}
        />

        <HannifinChecklist
          title="Critérios Menores"
          criteria={minorCriteria}
          selected={selectedMinor}
          onToggle={toggleMinor}
        />

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Resultado
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Critérios maiores</span>
              <strong>
                {selectedMajor.length} / {majorCriteria.length}
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Critérios menores</span>
              <strong>
                {selectedMinor.length} / {minorCriteria.length}
              </strong>
            </div>

          </div>

          <div
            className={`mt-8 rounded-xl p-5 text-center font-semibold text-lg ${
              diagnosis
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {diagnosis
              ? "✓ Critérios diagnósticos preenchidos (≥3 maiores e ≥3 menores)"
              : "Critérios diagnósticos ainda não preenchidos"}
          </div>

         <button
  onClick={() =>
    generateHannifinPDF({
      patientName,
      date,
      selectedMajor,
      selectedMinor,
      majorCriteria,
      minorCriteria,
    })
  }
  className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
>
  Gerar PDF
</button>

        </div>

      </section>

    </main>
  );
}