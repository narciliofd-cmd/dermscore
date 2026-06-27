import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  available?: boolean;
};

export default function ScoreCard({
  title,
  description,
  href,
  available = true,
}: Props) {
  if (!available) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 opacity-60">
        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="mt-2 text-gray-500">
          {description}
        </p>

        <span className="inline-block mt-4 text-sm bg-gray-200 px-3 py-1 rounded-full">
          Em breve
        </span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
    >
      <h2 className="text-2xl font-bold text-blue-700">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </Link>
  );
}