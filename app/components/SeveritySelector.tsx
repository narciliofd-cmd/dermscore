type Option = {
  label: string;
  value: number;
};

type Props = {
  title: string;
  value: number;
  options: Option[];
  onChange: (value: number) => void;
};

export default function SeveritySelector({
  title,
  value,
  options,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-3 rounded-xl border transition

            ${
              value === option.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white border-gray-300 hover:bg-blue-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}