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
    <div className="bg-[var(--card-bg)] text-white p-4 rounded-xl w-full">
      <div className="flex items-end justify-center mb-1 w-full">
        <div className="w-full">
          <h2 className="text-sm max-[425px]:text-[.8rem] max-[391px]:text-[.7rem] max-[361px]:text-[.6rem] max-[321px]:text-[.55rem] font-medium">
            {title}
          </h2>
          <img src={line1} alt="line_1" className="w-full" />
        </div>
        <div className="w-full">
          <img src={line2} alt="line_2" className="w-full" />
          <div className="h-[2px]"></div>
        </div>
        <div className="">
          <button className="flex items-center text-xs gap-1 text-white/80 border-2 border-white/20 p-2 rounded-md">
            April <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mt-2">{value}</h1>

      <div className="h-48 mt-4">
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
            {/* Background bars */}
            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[0, 0, 0, 0]}
              background={{ fill: "#6366f133" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center text-xs text-white/60 mt-3">2025</div>
    </div>
  );
};

export default BarDashChart;
