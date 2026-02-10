import React from "react";
import { Star, Funnel, CheckCircle2 } from "lucide-react";

interface Review {
  name: string;
  comment: string;
  date: string;
  rating: number;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      <div className="border-2 border-black p-2 flex items-center justify-between text-xl">
        <p>Product Review</p>
        <div className="flex items-center gap-1">
          <Funnel size={20} />
          <span>Filter: All Stars</span>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {reviews.map((review, i) => (
          <div key={i} className="py-8 space-y-3">
            <div className="flex items-center justify-between">
              {/* Stars */}
              <div className="flex items-center text-orange-400">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={index < review.rating ? "currentColor" : "none"}
                    className={index < review.rating ? "text-orange-400" : "text-gray-300"}
                  />
                ))}
              </div>
              {/* Date */}
              <span className="text-gray-900 font-medium">{review.date}</span>
            </div>

            {/* Name + Verified */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{review.name}</span>
              <CheckCircle2 size={18} className="text-green-500 fill-green-500 text-white" />
            </div>

            {/* Comment */}
            <p className="text-gray-800 text-lg">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
