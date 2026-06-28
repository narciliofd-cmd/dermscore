"use client";

import { useState } from "react";

type Option = {
  id?: string;
  text: string;
  value: number;
};

type Props = {
  question: string;
  options: Option[];
  onAnswer: (value: number) => void;
};

export default function QuestionCard({
  question,
  options,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  function handleClick(index: number, value: number) {
    setSelected(index);

    setTimeout(() => {
      onAnswer(value);
      setSelected(null);
    }, 250);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {question}
      </h2>

      <div className="space-y-4">

        {options.map((option, index) => (

          <button
            key={option.id ?? `${option.text}-${index}`}
            onClick={() => handleClick(index, option.value)}
            className={`w-full rounded-xl border p-4 text-left transition-all duration-200

            ${
              selected === index
                ? "bg-blue-600 border-blue-600 text-white scale-[1.02]"
                : "bg-white border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-400"
            }
            `}
          >
            {option.text}
          </button>

        ))}

      </div>

    </div>
  );
}