export default function DLQIPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          Dermatology Life Quality Index
        </h1>

        <p className="text-gray-600 mt-2">
          Questionário de qualidade de vida em Dermatologia
        </p>

        <div className="mt-8">
          <label className="font-semibold">
            Nome do paciente (opcional)
          </label>

          <input
            type="text"
            placeholder="Digite o nome"
            className="mt-2 w-full border rounded-lg p-3"
          />
        </div>

        <button
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Continuar
        </button>

      </div>
    </main>
  );
}