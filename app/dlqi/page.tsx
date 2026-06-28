"use client";

import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";
import { dlqiQuestions } from "../data/dlqi";

export default function DLQIPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const score = answers.reduce((a, b) => a + b, 0);

  function handleAnswer(value: number) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < dlqiQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  }

  function handleBack() {
    if (currentQuestion === 0) return;

    setAnswers((prev) => prev.slice(0, -1));
    setCurrentQuestion((prev) => prev - 1);
  }

  function handleRestart() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
  }

  function getInterpretation(score: number) {
    if (score <= 1)
      return {
        text: "Sem efeito na qualidade de vida",
        color: "text-green-600",
      };

    if (score <= 5)
      return {
        text: "Pequeno efeito na qualidade de vida",
        color: "text-lime-600",
      };

    if (score <= 10)
      return {
        text: "Efeito moderado na qualidade de vida",
        color: "text-yellow-600",
      };

    if (score <= 20)
      return {
        text: "Grande efeito na qualidade de vida",
        color: "text-orange-600",
      };

    return {
      text: "Efeito extremamente grande na qualidade de vida",
      color: "text-red-600",
    };
  }

  function handleShare() {
    const result = getInterpretation(score);

    const text = `DermScore

DLQI: ${score}/30

${result.text}

Data: ${new Date().toLocaleDateString("pt-BR")}`;

    if (navigator.share) {
      navigator.share({
        title: "Resultado do DLQI",
        text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert("Resultado copiado para a área de transferência.");
    }
  }

  // ======================
  // TELA INICIAL
  // ======================

  if (!started) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 w-full max-w-2xl">

          <h1 className="text-5xl font-bold text-blue-700">
            DLQI
          </h1>

          <p className="mt-2 text-slate-600 text-lg">
            Dermatology Life Quality Index
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex justify-between text-slate-700">
              <span>Perguntas</span>
              <strong>10</strong>
            </div>

            <div className="flex justify-between text-slate-700">
              <span>Tempo estimado</span>
              <strong>2 minutos</strong>
            </div>

            <div className="flex justify-between text-slate-700">
              <span>Pontuação</span>
              <strong>0–30</strong>
            </div>

          </div>

          <p className="mt-10 text-slate-600 leading-7">
            O DLQI é um questionário validado que avalia o impacto da doença de
            pele na qualidade de vida do paciente durante a última semana.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Iniciar avaliação
          </button>

        </div>

      </main>
    );
  }

  // ======================
  // RESULTADO
  // ======================

  if (finished) {
    const result = getInterpretation(score);

    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <ResultCard
          score={score}
          interpretation={result.text}
          color={result.color}
          onRestart={handleRestart}
          onShare={handleShare}
        />
      </main>
    );
  }

  const question = dlqiQuestions[currentQuestion];

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl">

        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="mb-6 text-blue-600 hover:text-blue-800 disabled:text-gray-300 transition"
        >
          ← Voltar
        </button>

        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          DLQI
        </h1>

        <p className="text-slate-600 mb-6">
          Dermatology Life Quality Index
        </p>

        <div className="flex justify-between mb-2 text-slate-600">

          <span>
            Pergunta {currentQuestion + 1} de {dlqiQuestions.length}
          </span>

          <span>
            {Math.round(
              ((currentQuestion + 1) / dlqiQuestions.length) * 100
            )}
            %
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 mb-8">

          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${((currentQuestion + 1) / dlqiQuestions.length) * 100}%`,
            }}
          />

        </div>

        <QuestionCard
          question={question.question}
          options={question.options}
          onAnswer={handleAnswer}
        />

      </div>

    </main>
  );
}