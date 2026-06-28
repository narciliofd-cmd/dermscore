type Props = {
  score: number;
  classification: string;

  head: number;
  upper: number;
  trunk: number;
  lower: number;

  onRestart: () => void;
  onShare: () => void;
};

export default function PASIResultCard({
  score,
  classification,
  head,
  upper,
  trunk,
  lower,
  onRestart,
  onShare,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 mt-10">

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

        <div className="inline-block mt-6 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
          {classification}
        </div>

      </div>

      <div className="mt-10 border-t border-slate-200 pt-8 space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-700">Cabeça</span>
          <span className="font-semibold">{head.toFixed(1)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-700">Membros Superiores</span>
          <span className="font-semibold">{upper.toFixed(1)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-700">Tronco</span>
          <span className="font-semibold">{trunk.toFixed(1)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-700">Membros Inferiores</span>
          <span className="font-semibold">{lower.toFixed(1)}</span>
        </div>

      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">

        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold"
        >
          Nova avaliação
        </button>

        <button
          onClick={onShare}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 font-semibold"
        >
          Compartilhar
        </button>

      </div>

    </div>
  );
}