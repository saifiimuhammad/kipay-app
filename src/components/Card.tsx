import { ArrowUp, Group } from "lucide-react";
import type { ReactNode } from "react";

type CardType = {
  icon: ReactNode;
  title: string;
  value: string;
  rate: string;
  rateIcon: ReactNode;
};

const Card = ({ icon, title, value, rate, rateIcon }: CardType) => {
  return (
    <div className="card p-5 bg-[var(--card-bg)] w-max rounded-lg">
      <div className="icon-container w-max p-2 bg-[var(--accent)] text-[var(--text)] rounded-sm">
        {icon}
      </div>
      <p className="card-title text-[var(--text-2)] text-[.8rem] tracking-wider mt-1">
        {title}
      </p>
      <h1 className="card-value text-[var(--text)] text-xl font-semibold mt-2">
        {value}
      </h1>
      <div className="card-details flex items-center justify-start gap-x-2 mt-1 flex-wrap">
        {rateIcon}{" "}
        <span className="text-[var(--text-3)] text-[.75rem]">{rate}</span>{" "}
        <p className="text-[var(--text-4)] text-[.75rem]">(Last 7 days)</p>
      </div>
    </div>
  );
};

export default Card;
