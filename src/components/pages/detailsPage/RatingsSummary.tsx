import React from "react";
import { Star } from "lucide-react";

const RatingsSummary = () => {
  const breakdown = [
    { stars: 5, count: 92, percentage: 80 },
    { stars: 4, count: 29, percentage: 60 },
    { stars: 3, count: 18, percentage: 40 },
    { stars: 2, count: 8, percentage: 20 },
    { stars: 1, count: 4, percentage: 10 },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-10">
      {/* Left */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <h2 className="text-5xl text-gray-900 mb-8">4.5/5</h2>
        <div className="flex items-center text-orange-400 gap-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              fill={i < 4 ? "currentColor" : i === 4 ? "url(#half-star)" : "none"}
              className="text-orange-400"
            />
          ))}
          <svg width="0" height="0">
            <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </svg>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 w-full space-y-2">
        {breakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-4">
            <div className="flex items-center gap-1 min-w-5">
              <Star size={16} fill="currentColor" className="text-orange-400" />
            </div>
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400 transition-all"
                style={{ width: `${row.percentage}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 min-w-5 text-right">
              {row.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsSummary;
