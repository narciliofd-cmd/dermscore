type Option = {
  text: string;
  value: number;
};

type Props = {
  question: string;
  options: Option[];
};

export default function QuestionCard({
  question,
  options,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {question}
      </h2>

      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.value}
            className="w-full border border-gray-300 rounded-xl p-4 text-left text-gray-800 bg-white hover:bg-blue-50 hover:border-blue-500 transition duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>

    </div>
  );
}