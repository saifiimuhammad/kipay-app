import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/icons/arrow-left.svg";
import { transactions } from "../../seeders/transactions";
import TransactionCard from "../../components/cards/TransactionCard";

const ValidationHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--bg)] w-full h-full">
      <div className="nav w-full px-4 lg:px-32 border-b border-[var(--border)] flex items-end justify-start gap-4 h-24 pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="col-span-1 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h3 className="text-md font-medium col-span-11">
          History of validation
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-y-auto mt-4 lg:mt-2 scrollbar-hidden px-4 lg:px-32">
        {transactions
          .filter((trx) => trx.status === "Completed")
          .map((value) => (
            <TransactionCard
              key={value.id}
              id={value.id}
              date={value.date}
              company={value.company}
              amount={value.amount}
              approvalType={value.approvalType}
              status={value.status}
              signaturesRequired={value.signaturesRequired}
            />
          ))}
      </div>
    </div>
  );
};

export default ValidationHistory;
