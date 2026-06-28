type Props = {
  score: number;
  interpretation: string;
  color: string;
  onRestart: () => void;
  onShare: () => void;
};

export default function ResultCard({
  score,
  interpretation,
  color,
  onRestart,
  onShare,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-blue-700">
          Resultado
        </h1>

        <p className="text-gray-500 mt-2">
          Dermatology Life Quality Index
        </p>

        <div className="mt-10">

          <p className="text-7xl font-bold text-blue-700">
            {score}
          </p>

          <p className="text-gray-500">
            de 30 pontos
          </p>

        </div>

        <div className={`mt-8 text-2xl font-bold ${color}`}>
          {interpretation}
        </div>

      </div>

      <div className="mt-10 space-y-4">

        <button
          onClick={onShare}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
        >
          Compartilhar resultado
        </button>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
        >
          Nova avaliação
        </button>

      </div>

    </div>
  );
}