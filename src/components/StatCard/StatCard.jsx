import shape1 from "../../assets/vector1.png";
import shape2 from "../../assets/vector2.png";

const StatCard = ({ title, count, gradientBg }) => {
  return (
    <div
      className={`relative overflow-hidden w-1/2 rounded-lg border py-10 text-white ${gradientBg}`}
    >
      <img src={shape1} className="absolute top-0 left-0 h-full" />
      <img src={shape2} className="absolute top-0 right-0 h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-6xl font-semibold">{count}</p>
      </div>
    </div>
  );
};

export default StatCard;
