import { CiStar } from "react-icons/ci";
import { ItemRating } from "../types";

const Rating = ({ rating }: { rating: ItemRating }) => {
  return (
    <div className="flex items-start gap-1">
      <div className="flex items-center gap-0">
        <CiStar size={18} />
        <CiStar size={18} />
        <CiStar size={18} />
        <CiStar size={18} />
        <CiStar size={18} />
      </div>
      <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
        {rating.rate}
      </div>
    </div>
  );
};

export default Rating;
