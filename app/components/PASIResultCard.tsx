type Props = {
  score: number;
  onRestart: () => void;
};

export default function PASIResultCard({
  score,
  onRestart,
}: Props) {
  function getClassification(score: number) {
    if (score < 7)
      return "Psoríase leve";

    if (score < 12)
      return "Psoríase moderada";

    return "Psoríase grave";
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

      <div className="text-center">

        <h2 className="text-slate-500 text-lg">
          Resultado
        </h2>

        <p className="text-7xl font-bold text-blue-700 mt-4">
          {score.toFixed(1)}
        </p>

        <p className="text-slate-600 mt-2">
          PASI
        </p>

        <div className="mt-8 inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
          {getClassification(score)}
        </div>

      </div>

      <button
        onClick={onRestart}
        className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
      >
        Nova avaliação
      </button>

    </div>
  );
}