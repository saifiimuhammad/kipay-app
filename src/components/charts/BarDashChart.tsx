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
      <div className="flex items-center justify-between mb-1">
        <div className="relative">
          <h2 className="text-sm font-medium">{title}</h2>
          <span className="absolute -bottom-1 left-0 min-[375px]:w-[162px] w-[193px] h-[1px] bg-white/20 rounded" />
          <span className="absolute bottom-[2.5px] left-40 min-[375px]:w-5 h-[1px] bg-white/20 rounded -rotate-45" />
          <span className="absolute -bottom-1 left-0 w-6 h-[3px] bg-[var(--accent)] rounded" />
        </div>
        <div className="relative">
          <button className="flex items-center text-xs gap-1 text-white/80 border-2 border-white/20 p-2 rounded-md">
            April <ChevronDown size={14} />
          </button>
          <span className="absolute right-16 bottom-[18px] min-[425px]:w-30 min-[375px]:w-[71px] h-[1px] bg-white/20 rounded" />
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
