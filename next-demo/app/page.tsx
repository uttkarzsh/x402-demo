'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/fox');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-semibold mb-4">
          🦊 Fox Image Access
        </h1>
        <p className="mb-8 text-zinc-300 leading-relaxed">
          Unlock access to our exclusive fox images for just{" "}
          <b className="text-white">0.01 USDC</b>.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-orange-500 hover:bg-orange-600 text-black font-medium py-2 px-6 rounded-lg transition-transform hover:scale-105"
        >
          View Foxes 🦊
        </button>
      </div>
    </main>
  );
}