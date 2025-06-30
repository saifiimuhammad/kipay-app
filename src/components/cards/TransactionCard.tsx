import MenuDotIcon from "../../assets/icons/menu-dot.svg";

import type { Transaction } from "../../seeders/transactions";

const TransactionCard: React.FC<Transaction> = ({
  id,
  date,
  company,
  amount,
  approvalType,
  signaturesRequired,
  status,
}) => {
  const getStatusDisplay = () => {
    if (status === "Pending" && signaturesRequired) {
      return `${signaturesRequired}`;
    }
    return status;
  };

  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "text-[var(--success)]";
      case "Pending":
        return "text-[var(--warning)]";
      case "Rejected":
        return "text-[var(--error)]";
      default:
        return "text-[var(--bg)]";
    }
  };

  return (
    <div className="flex items-center justify-between flex-col bg-[var(--card-bg)] text-white rounded-lg shadow-md w-full">
      {/* top */}
      <div className="flex items-center justify-between w-full p-4 pb-2 border-b border-[var(--border)]">
        <span className="text-md max-[321px]:text-sm">{id}</span>
        <span className="text-[var(--text-3)] text-sm max-[321px]:text-xs flex items-center justify-center gap-x-3">
          {date}{" "}
          <button className="cursor-pointer">
            <img
              src={MenuDotIcon}
              alt="menu_icon"
              className="w-6 h-6 max-[321px]:w-5 max-[321px]:h-5"
            />
          </button>
        </span>
      </div>

      {/* bottom */}
      <div className="w-full flex items-center justify-between px-4">
        <div className="flex items-start justify-center flex-col gap-y-2 pt-2 pb-4">
          <span className="text-md max-[321px]:text-sm">{company}</span>
          <span className="text-[var(--text-4)] text-[.80rem]">
            Approval:{" "}
            <span className="ml-1 text-[var(--text)] font-medium text-[.80rem]">
              {approvalType}
            </span>
          </span>
        </div>
        <div className="flex items-end justify-center flex-col gap-y-1 pt-2 pb-4">
          <span className="text-lg font-semibold">
            ${amount.toLocaleString()}
          </span>
          <span
            className={`${getStatusColor()} bg-[#313131] text-xs px-3 py-2 max-[321px]:px-2 max-[321px]:py-1 rounded-3xl text-center`}
          >
            {getStatusDisplay()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
