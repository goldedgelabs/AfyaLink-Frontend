import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="AfyaLink Logo"
        width={120}
        height={120}
        className="rounded-lg shadow-lg"
      />

      {/* Welcome Message */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 text-center">
        Welcome to AfyaLink Infinity v4.0
      </h1>

      <p className="mt-2 text-gray-600 text-center">
        Smart Health System powered by NeuroEdge
      </p>
    </div>
  );
}
