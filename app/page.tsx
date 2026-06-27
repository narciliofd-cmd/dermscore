export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-700">
        DermScore
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Ferramentas Dermatológicas
      </p>

      <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl">
        DLQI
      </button>
    </main>
  );
}