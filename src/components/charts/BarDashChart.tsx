import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";

import line1 from "../../assets/icons/line1.svg";
import line2 from "../../assets/icons/line2.svg";

type ChartPropType = {
  title: string;
  value: string;
  data: {
    name: string;
    value: number;
  }[];
};

const BarDashChart = ({ title, value, data }: ChartPropType) => {
  return (
    <div className="bg-[var(--card-bg)] text-white p-4 sm:p-6 rounded-xl w-full">
      {/* Title & Line Section */}
      {/* <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full mb-2">
        <div className="flex-1">
          <h2 className="text-sm sm:text-base md:text-lg font-medium">
            {title}
          </h2>
          <img src={line1} alt="line_1" className="w-full h-auto" />
        </div>

        <div className="flex-1 hidden sm:block">
          <img src={line2} alt="line_2" className="w-full h-auto" />
          <div className="h-[2px] lg:h-[4px]"></div>
        </div>

        <div className="sm:w-auto">
          <button className="flex items-center text-xs sm:text-sm gap-1 text-white/80 border border-white/20 px-3 py-1.5 sm:py-2 rounded-md">
            April <ChevronDown size={14} />
          </button>
        </div>
      </div> */}
      <div className="flex items-end justify-center mb-1 w-full">
        <div className="w-full">
          <h2 className="text-sm max-[425px]:text-[.8rem] max-[391px]:text-[.7rem] max-[361px]:text-[.6rem] max-[321px]:text-[.55rem] font-medium">
            {title}
          </h2>
          <img src={line1} alt="line_1" className="w-full" />
        </div>
        <div className="w-full">
          <img src={line2} alt="line_2" className="w-full" />
          <div className="h-[2px] lg:h-[4px]"></div>
        </div>
        <div className="">
          <button className="flex items-center text-xs gap-1 text-white/80 border-2 border-white/20 p-2 rounded-md">
            April <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Value */}
      <h1 className="text-xl sm:text-2xl font-semibold mt-1 sm:mt-2">
        {value}
      </h1>

      {/* Chart */}
      <div className="h-48 sm:h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={9}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#444"
            />
            <XAxis dataKey="name" stroke="#888" fontSize={12} dy={5} />
            <YAxis stroke="#888" fontSize={12} dx={-5} />
            <Tooltip
              cursor={{ fill: "#333" }}
              contentStyle={{ backgroundColor: "#222", border: "none" }}
            />
            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[0, 0, 0, 0]}
              background={{ fill: "#6366f133" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Year */}
      <div className="text-center text-xs text-white/60 mt-3">2025</div>
    </div>
  );
};

export default BarDashChart;
