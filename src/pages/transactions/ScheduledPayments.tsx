import React from "react";
import { ArrowRight, PlusIcon } from "lucide-react";
import { scheduledPayments } from "../../seeders/transactions";

const ScheduledPayments = () => {
  return (
    <div className="w-full h-screen overflow-scroll flex flex-col gap-y-3 bg-[var(--bg)] p-4">
      {scheduledPayments.map((val) => (
        <Card
          key={val.name}
          name={val.name}
          amount={val.amount}
          date={val.scheduledDate}
          status={val.status}
          approvers={val.approvers}
        />
      ))}
    </div>
  );
};

type Props = {
  name: string;
  amount: number;
  date: string;
  status: "Pending" | "Completed";
  approvers: string;
};

const statusColors: Record<string, string> = {
  Pending: "text-orange-400",
  Completed: "text-green-400",
  Rejected: "text-red-400",
};

const Card: React.FC<Props> = ({ name, amount, date, status, approvers }) => {
  return (
    <div className="bg-[var(--card-bg)] text-white rounded-xl w-full max-w-sm">
      <button className="add-btn absolute bottom-9 right-5 p-4 bg-[var(--accent)] text-white font-bold rounded-full">
        <PlusIcon size={30} strokeWidth={2.5} />
      </button>
      <div className="flex justify-between items-center border-b border-[var(--border)] px-4 py-4 pb-2">
        <p className="text-[.80rem]">{name}</p>
        <p className="font-semibold text-lg">${amount.toLocaleString()}</p>
      </div>

      <div className="flex justify-between items-center mt-4 px-4">
        <p className="text-xs text-[var(--text-4)]">
          Scheduled Date:{" "}
          <span className="text-[var(--text)] ml-1">{date}</span>
        </p>
        <span
          className={`text-xs px-2 py-1 rounded-3xl ${statusColors[status]} bg-[#313131]`}
        >
          {status}
        </span>
      </div>

      <p className="mt-2 text-xs text-[var(--text-4)] px-4 flex justify-between border-b border-[var(--border)] pb-2">
        Approvers: <span className="text-[var(--text)] mr-2">{approvers}</span>
      </p>

      <div className="mt-2 ml-4 mb-5 flex items-center text-[var(--accent)] text-[.80rem] font-medium cursor-pointer">
        See More <ArrowRight size={19} className="ml-1" />
      </div>
    </div>
  );
};

export default ScheduledPayments;
