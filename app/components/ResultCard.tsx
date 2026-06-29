type Props = {
  score: number;
  interpretation: string;
  color: string;
  onRestart: () => void;
  onShare: () => void;
  onHome: () => void;
};
export default function ResultCard({
  score,
  interpretation,
  color,
  onRestart,
  onShare,
  onHome,
}: Props) {
  function getClinicalMessage(score: number) {
    if (score <= 1)
      return "A doença de pele não exerce impacto significativo na qualidade de vida do paciente.";

    if (score <= 5)
      return "A doença de pele exerce pequeno impacto na qualidade de vida.";

    if (score <= 10)
      return "A doença de pele exerce impacto moderado na qualidade de vida";

    if (score <= 20)
      return "A doença de pele exerce grande impacto na qualidade de vida";

    return "A doença de pele exerce impacto extremamente grande na qualidade de vida, indicando comprometimento importante do paciente.";
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 w-full max-w-xl">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-blue-700">
          DLQI
        </h1>

        <p className="text-slate-500 mt-2">
          Dermatology Life Quality Index
        </p>

        <div className="mt-10">

          <p className="text-8xl font-bold text-blue-700">
            {score}
          </p>

          <p className="text-slate-500 text-lg">
            de 30 pontos
          </p>

        </div>

        <div className={`mt-8 text-2xl font-bold ${color}`}>
          {interpretation}
        </div>

      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">

        <h2 className="font-semibold text-slate-800 mb-3">
          Interpretação clínica
        </h2>

        <p className="text-slate-600 leading-7">
          {getClinicalMessage(score)}
        </p>

      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">

        <div className="flex justify-between text-slate-600">

          <span>Data</span>

          <span>
            {new Date().toLocaleDateString("pt-BR")}
          </span>

        </div>

      </div>

      <div className="mt-10 space-y-4">

        <button
          onClick={onShare}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Compartilhar resultado
        </button>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Nova avaliação
        </button>
<button
  onClick={onHome}
  className="w-full border border-slate-300 hover:bg-slate-100 text-slate-700 py-4 rounded-xl font-semibold transition"
>
  ← Voltar ao DermScore
</button>
      </div>

    </div>
  );
}