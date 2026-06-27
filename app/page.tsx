import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white py-8 shadow">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            DermScore
          </h1>

          <p className="mt-2 text-blue-100">
            Calculadoras e escores em Dermatologia
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto p-8">

        <h2 className="text-2xl font-bold mb-6">
          Ferramentas disponíveis
        </h2>

        <Link
          href="/dlqi"
          className="block bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
        >
          <h3 className="text-2xl font-semibold text-blue-700">
            DLQI
          </h3>

          <p className="mt-2 text-gray-600">
            Dermatology Life Quality Index
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Avaliação do impacto da doença dermatológica na qualidade de vida.
          </p>
        </Link>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Em breve
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white rounded-xl p-5 shadow text-gray-500">
              PASI
            </div>

            <div className="bg-white rounded-xl p-5 shadow text-gray-500">
              EASI
            </div>

            <div className="bg-white rounded-xl p-5 shadow text-gray-500">
              IHS4
            </div>

            <div className="bg-white rounded-xl p-5 shadow text-gray-500">
              POEM
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}