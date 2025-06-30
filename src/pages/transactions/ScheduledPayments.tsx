import React, { type Dispatch, type SetStateAction } from "react";
import { ArrowRight, PlusIcon } from "lucide-react";
import { scheduledPayments } from "../../seeders/transactions";
import { useNavigate } from "react-router-dom";

const ScheduledPayments = ({
  isDialogOpen,
  setIsDialogOpen,
  setId,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/transactions/scheduled-payments/add");
    console.log(isDialogOpen);
  };

  return (
    <div className="w-full bg-[var(--bg)] p-4 lg:px-32 relative">
      {/* Floating Add Button */}
      <button
        className="add-btn fixed bottom-20 right-5 lg:right-10 p-4 bg-[var(--accent)] text-white font-bold rounded-full z-50 cursor-pointer hover:bg-[var(--accent)]/90"
        onClick={handleOnClick}
      >
        <PlusIcon size={30} strokeWidth={2.5} />
      </button>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-y-auto pr-2 scrollbar-hidden">
        {scheduledPayments.map((val) => (
          <Card
            id={val.id}
            key={val.id}
            name={val.name}
            amount={val.amount}
            date={val.scheduledDate}
            status={val.status}
            approvers={val.approvers}
            setIsDialogOpen={setIsDialogOpen}
            setId={setId}
          />
        ))}
      </div>
    </div>
  );
};

type Props = {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: "Pending" | "Completed";
  approvers: string;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
};

const statusColors: Record<string, string> = {
  Pending: "text-orange-400",
  Completed: "text-green-400",
  Rejected: "text-red-400",
};

const Card: React.FC<Props> = ({
  id,
  name,
  amount,
  date,
  status,
  approvers,
  setIsDialogOpen,
  setId,
}) => {
  return (
    <div className="bg-[var(--card-bg)] text-white rounded-xl w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center border-b border-[var(--border)] p-4 max-[321px]:px-3 pb-2">
        <p className="text-[.80rem]">{name}</p>
        <p className="font-semibold text-lg">${amount.toLocaleString()}</p>
      </div>

      <div className="flex justify-between items-center mt-4 px-4 max-[321px]:px-3">
        <p className="text-xs max-[321px]:text-[.7rem] text-[var(--text-4)]">
          Scheduled Date:
          <span className="text-[var(--text)] ml-1">{date}</span>
        </p>
        <span
          className={`text-xs px-2 py-1 rounded-3xl ${statusColors[status]} bg-[#313131]`}
        >
          {status}
        </span>
      </div>

      <p className="mt-2 text-xs text-[var(--text-4)] px-4 max-[321px]:px-3 flex justify-between border-b border-[var(--border)] pb-2">
        Approvers: <span className="text-[var(--text)] mr-2">{approvers}</span>
      </p>

      <button
        className="mt-2 ml-4 max-[321px]:ml-2 mb-5 flex items-center text-[var(--accent)] text-[.80rem] font-medium cursor-pointer"
        onClick={() => {
          setIsDialogOpen(true);
          setId(id);
        }}
      >
        See More <ArrowRight size={19} className="ml-1" />
      </button>
    </div>
  );
};

export default ScheduledPayments;
