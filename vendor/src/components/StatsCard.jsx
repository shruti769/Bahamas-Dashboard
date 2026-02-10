export default function StatsCard({
  title,
  value,
  percentage,
  trend = "up", // up | down
  color = "orange",
}) {
  const trendColor =
    trend === "up" ? "text-green-500" : "text-red-500";

  const lineColor =
    color === "green"
      ? "stroke-green-500"
      : color === "red"
      ? "stroke-red-500"
      : "stroke-orange-500";

  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center shadow-sm">
      {/* Left */}
      <div>
        <p className="text-[#8E95A9] text-sm">{title}</p>
        <h3 className="text-xl font-bold text-[#1C2A53] mt-3">
          {value}
        </h3>

       
      </div>
      {/* Sparkline */}
        <svg
          width="60"
          height="30"
          viewBox="0 0 70 30"
          fill="none"
        >
          <path
            d="M2 20 C10 5, 25 5, 35 15 C45 25, 55 20, 68 8"
            fill="none"
            strokeWidth="2"
            className={lineColor}
          />
          <circle cx="68" cy="8" r="3" fill="currentColor" />
        </svg>

      {/* Right */}
      <div className="flex flex-col justify-between items-end gap-5">
        
         <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold ${trendColor}`}>
            {percentage}
          </span>
        </div>

        <button className="text-xs text-[#D7B323] font-medium">
          View All
        </button>
      </div>
    </div>
  );
}
