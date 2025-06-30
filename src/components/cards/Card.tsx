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
    <div className="card p-3 sm:p-4 lg:p-6 bg-[var(--card-bg)] rounded-lg flex flex-col gap-2">
      {/* Icon */}
      <div className="icon-container w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-2 bg-[var(--accent)] text-[var(--text)] rounded-sm grid place-items-center">
        {icon}
      </div>

      {/* Title */}
      <p className="card-title text-[var(--text-2)] text-[.7rem] sm:text-sm lg:text-xs tracking-wider">
        {title}
      </p>

      {/* Value */}
      <h1 className="card-value text-[var(--text)] text-lg sm:text-xl lg:text-3xl font-semibold">
        {value}
      </h1>

      {/* Rate and Label */}
      <div className="card-details flex items-center gap-x-2 sm:gap-x-3 flex-wrap text-[.7rem] sm:text-sm lg:text-xs mt-auto">
        {isPositive && (
          <img src={ArrowUpIcon} alt="arrow_up_icon" className="w-4 sm:w-5" />
        )}
        {isNegative && (
          <img
            src={ArrowDownIcon}
            alt="arrow_down_icon"
            className="w-4 sm:w-5"
          />
        )}
        <span className="text-[var(--text-3)]">{Math.abs(rateValue)}%</span>
        <p className="text-[var(--text-4)]">(Last 7 days)</p>
      </div>
    </div>
  );
};

export default Card;
