import ScoreCard from "./components/ScoreCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">

        <div className="max-w-6xl mx-auto px-8 py-14">

          <h1 className="text-5xl font-bold">
            DermScore
          </h1>

          <p className="text-blue-100 text-xl mt-3">
            Plataforma de escores e calculadoras em Dermatologia
          </p>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Pesquisar escore..."
              className="w-full md:w-96 rounded-xl px-5 py-4 text-gray-800 shadow-lg bg-white"
            />
          </div>

        </div>

      </header>

      <section className="max-w-6xl mx-auto px-8 py-10">

  <h2 className="text-3xl font-bold mb-8">
    Escores
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <ScoreCard
      title="DLQI"
      description="Dermatology Life Quality Index"
      href="/dlqi"
    />

    <ScoreCard
      title="PASI"
      description="Psoriasis Area Severity Index"
      href="/pasi"
    />

    <ScoreCard
      title="EASI"
      description="Eczema Area Severity Index"
      href="/"
      available={false}
    />

    <ScoreCard
      title="IHS4"
      description="International Hidradenitis Severity Score System"
      href="/"
      available={false}
    />

    <ScoreCard
      title="POEM"
      description="Patient-Oriented Eczema Measure"
      href="/"
      available={false}
    />

    <ScoreCard
      title="CDLQI"
      description="Children's Dermatology Life Quality Index"
      href="/"
      available={false}
    />

  </div>

  <h2 className="text-3xl font-bold mt-16 mb-8">
    Critérios Diagnósticos
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <ScoreCard
      title="Hanifin & Rajka"
      description="Critérios diagnósticos para Dermatite Atópica"
      href="/hannifin-rajka"
    />

  </div>

</section>

      <footer className="border-t mt-20 bg-white">

        <div className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">

          <div>

            <p className="font-semibold">
              DermScore
            </p>

            <p className="text-sm text-gray-500">
              Plataforma para Dermatologistas
            </p>

          </div>

          <div className="text-sm text-gray-500">
            Versão 1.0 Beta
          </div>

        </div>

      </footer>

    </main>
  );
}