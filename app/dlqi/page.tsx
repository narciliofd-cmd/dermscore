import QuestionCard from "../components/QuestionCard";
import { dlqiQuestions } from "../data/dlqi";

export default function DLQIPage() {
  const question = dlqiQuestions[0];

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          DLQI
        </h1>

        <p className="text-gray-600 mb-8">
          Dermatology Life Quality Index
        </p>

        <QuestionCard
          question={question.question}
          options={question.options}
        />

      </div>
    </main>
  );
}