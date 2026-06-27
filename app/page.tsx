import Link from "next/link";
import ScoreCard from "./components/ScoreCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white shadow">
        <div className="max-w-6xl mx-auto px-8 py-10">

          <h1 className="text-5xl font-bold">
            DermScore
          </h1>

          <p className="text-blue-100 mt-3 text-lg">
            Plataforma de escores e calculadoras em Dermatologia
          </p>

        </div>
      </header>

      <section className="max-w-6xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-8">
          Ferramentas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <ScoreCard
            title="DLQI"
            description="Dermatology Life Quality Index"
            href="/dlqi"
          />

          <ScoreCard
            title="PASI"
            description="Psoriasis Area Severity Index"
            href="/"
            available={false}
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

        </div>

      </section>

    </main>
  );
}