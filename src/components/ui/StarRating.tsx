import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  color?: string;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 16,
  color = "#F59E0B",
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < Math.floor(rating) ? color : "none"}
          stroke={i < Math.ceil(rating) ? color : "#D1D5DB"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
