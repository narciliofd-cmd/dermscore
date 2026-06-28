type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function AreaSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>

      <h3 className="font-semibold mb-3">
        Área acometida
      </h3>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-500">

        <span>0%</span>

        <span className="font-bold text-blue-700">
          {value}%
        </span>

        <span>100%</span>

      </div>

    </div>
  );
}