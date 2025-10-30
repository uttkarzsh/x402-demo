"use client";
import { useState } from "react";

export default function Page() {
  const [fox, setFox] = useState<string | null>(null);
  const [text, setText] = useState<string>(" ");

  async function fetchFox() {
    try {
      setText("Getting fox image...");
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      setText("Here is your fox 🦊");
      setFox(data.image);
    } catch (error) {
      setText("Failed to fetch fox 😢");
    }
  }

  return (
    <div className="p-6 text-center">
      <button
        onClick={fetchFox}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      >
        Get a Random Fox
      </button>
        <p>{text}</p>
      {fox && (
        <div className="mt-6">
          <img src={fox} alt="Random fox" className="rounded-xl mx-auto" />
        </div>
      )}
    </div>
  );
}