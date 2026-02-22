"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-yellow-500 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-6">Deposit Required 🔥</h1>

        <div className="bg-gray-900 border border-yellow-500 p-6 max-w-md space-y-4">
          <p>Send your deposit via Cash App:</p>
          <h2 className="text-2xl font-bold">$TweezyG27</h2>

          <p>Deposit Options:</p>
          <p>$50 (Small Tattoo)</p>
          <p>$100 (Large Tattoo)</p>

          <p className="text-sm text-gray-400">
            Deposits are refundable.
          </p>

          <p className="mt-4">
            After sending payment, email your screenshot to:
          </p>

          <p className="font-bold">
            Marcelbullock1985@gmail.com
          </p>

          <p className="text-sm text-gray-400">
            Include your full name in the email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">

      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
        Book Your Tattoo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >
        <input
          placeholder="Full Name"
          required
          className="w-full p-3 bg-gray-900 border border-yellow-500"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 bg-gray-900 border border-yellow-500"
        />

        <textarea
          placeholder="Tattoo Idea"
          required
          className="w-full p-3 bg-gray-900 border border-yellow-500"
        />

        <input
          placeholder="Body Placement"
          required
          className="w-full p-3 bg-gray-900 border border-yellow-500"
        />

        <select
          required
          className="w-full p-3 bg-gray-900 border border-yellow-500"
        >
          <option value="">Select Deposit</option>
          <option>$50 (Small Tattoo)</option>
          <option>$100 (Large Tattoo)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black p-3 font-bold hover:scale-105 transition-all"
        >
          Continue to Deposit
        </button>
      </form>

    </main>
  );
}