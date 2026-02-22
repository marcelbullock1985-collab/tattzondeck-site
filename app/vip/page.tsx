"use client";

import { useState, useEffect } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  visits: number;
}

export default function VIP() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  const getBadge = (visits: number) => {
    if (visits >= 10) return "💎 Elite";
    if (visits >= 5) return "👑 VIP";
    if (visits >= 3) return "🔥 Loyal";
    return "⭐ First Tattoo";
  };

  const submitReview = () => {
    if (!name || !rating || !comment) return;

    const existing = reviews.find(r => r.name === name);
    const visits = existing ? existing.visits + 1 : 1;

    const newReview: Review = { name, rating, comment, visits };
    const updated = [newReview, ...reviews.filter(r => r.name !== name)];

    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    setName("");
    setRating(0);
    setComment("");
  };

  const average =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "0";

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-black text-center mb-4">
        VIP CLIENT REVIEWS
      </h1>

      <p className="text-center text-yellow-400 mb-10">
        ⭐ {average} / 5 ({reviews.length} Reviews)
      </p>

      <div className="max-w-xl mx-auto space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <div className="flex gap-2 justify-center">
          {[1,2,3,4,5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
          rows={4}
        />

        <button
          onClick={submitReview}
          className="w-full py-3 bg-red-600 hover:bg-red-700 font-bold rounded"
        >
          Submit Review
        </button>
      </div>

      <div className="max-w-2xl mx-auto mt-16 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded border border-gray-800">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold">
                {review.name} {getBadge(review.visits)}
              </h3>
              <span className="text-yellow-400">
                {"★".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>

    </main>
  );
}