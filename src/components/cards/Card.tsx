import type { ReactNode } from "react";

import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg";

type CardType = {
  icon: ReactNode;
  title: string;
  value: string;
  rate: string;
};

const Card = ({ icon, title, value, rate }: CardType) => {
  const rateValue = parseFloat(rate);
  const isPositive = rateValue > 0;
  const isNegative = rateValue < 0;

  return (
    <div className="card p-4 bg-[var(--card-bg)] rounded-lg">
      <div className="icon-container w-10 h-10 p-2 bg-[var(--accent)] text-[var(--text)] rounded-sm grid place-items-center">
        {icon}
      </div>

      <p className="card-title text-[var(--text-2)] text-[.7rem] tracking-wider mt-1">
        {title}
      </p>

      <h1 className="card-value text-[var(--text)] text-xl font-semibold mt-2">
        {value}
      </h1>

      <div className="card-details flex items-center justify-start gap-x-2 mt-1 flex-wrap">
        {isPositive && <img src={ArrowUpIcon} alt="arrow_up_icon" />}
        {isNegative && <img src={ArrowDownIcon} alt="arrow_down_icon" />}
        <span className="text-[var(--text-3)] text-[.75rem]">
          {Math.abs(rateValue)}%
        </span>
        <p className="text-[var(--text-4)] text-[.75rem]">(Last 7 days)</p>
      </div>
    </div>
  );
};

export default Card;
