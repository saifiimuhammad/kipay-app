import { useEffect, type Dispatch, type SetStateAction } from "react";
import MenuDotIcon from "../../assets/icons/menu-dot.svg";
import { pendingValidations } from "../../seeders/transactions";

const PendingValidations = ({
  isDialogOpen,
  setIsDialogOpen,
  setId,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    console.log(isDialogOpen);
  });

  return (
    <div className="w-full bg-[var(--bg)] p-4 lg:px-102">
      {/* Scrollable Grid */}
      <div className="flex flex-col gap-4 h-[600px] overflow-y-auto pr-2 scrollbar-hidden">
        {pendingValidations.map((val) => (
          <Card
            key={val.id}
            id={val.id}
            date={val.date}
            company={val.company}
            amount={val.amount}
            approvalType={val.approvalType}
            signaturesRequired={val.signaturesRequired}
            status={val.status}
            setIsDialogOpen={setIsDialogOpen}
            setId={setId}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  id,
  date,
  company,
  amount,
  approvalType,
  signaturesRequired,
  status,
  setIsDialogOpen,
  setId,
}: {
  id: string;
  date: string;
  company: string;
  amount: number;
  approvalType: "Single signature" | "Joint signature";
  signaturesRequired?: string;
  status: "Completed" | "Pending" | "Rejected";
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
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
    <div className="flex flex-col bg-[var(--card-bg)] text-white rounded-lg shadow-md w-full">
      {/* Top */}
      <div className="flex items-center justify-between w-full p-4 pb-2 border-b border-[var(--border)]">
        <span className="text-md max-[321px]:text-sm">{id}</span>
        <span className="text-[var(--text-3)] text-sm max-[321px]:text-xs flex items-center justify-center gap-x-3">
          {date}
          <button className="cursor-pointer">
            <img
              src={MenuDotIcon}
              alt="menu_icon"
              className="w-6 h-6 max-[321px]:w-5 max-[321px]:h-5"
            />
          </button>
        </span>
      </div>

      {/* Middle */}
      <div className="w-full flex items-center justify-between px-4 border-b border-[var(--border)]">
        <div className="flex flex-col gap-y-2 pt-2 pb-4">
          <span className="text-md max-[321px]:text-sm">{company}</span>
          <span className="text-[var(--text-4)] text-[.80rem] max-[321px]:text-[.7rem]">
            Approval:
            <span className="ml-1 text-[var(--text)] font-medium text-[.80rem] max-[321px]:text-[.7rem]">
              {approvalType}
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-y-1 pt-2 pb-4 text-end">
          <span className="text-lg font-semibold">
            ${amount.toLocaleString()}
          </span>
          <span
            className={`${getStatusColor()} bg-[#313131] text-xs px-3 py-2 max-[321px]:px-2 max-[321px]:py-1 rounded-3xl`}
          >
            {getStatusDisplay()}
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full grid grid-cols-2 gap-4 px-4 pt-4 pb-6">
        <button className="text-[var(--accent)] border-2 border-[var(--accent)] text-md max-[321px]:text-sm font-medium px-4 py-2 max-[321px]:px-3 rounded-full w-full cursor-pointer">
          Reject
        </button>
        <button
          className="bg-[var(--accent)] text-[var(--text)] border-2 border-[var(--accent)] text-md max-[321px]:text-sm font-medium px-4 py-2 max-[321px]:px-3 rounded-full w-full cursor-pointer"
          onClick={() => {
            setIsDialogOpen(true);
            setId(id);
          }}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default PendingValidations;
