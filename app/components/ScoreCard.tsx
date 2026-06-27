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
      <div className="bg-white rounded-2xl shadow-md p-6 border">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-gray-700">
            {title}
          </h2>

          <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
            Em breve
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          {description}
        </p>

      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border hover:border-blue-500"
    >
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-blue-700">
          {title}
        </h2>

        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
          Disponível
        </span>

      </div>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

    </Link>
  );
}