// You have to fetch the data via api and then map it and you have to also
// fetch the data in the Drawer by the id received as prop.

import React, {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ArrowRight, PlusIcon } from "lucide-react";
import { scheduledPayments } from "../../seeders/transactions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ScheduledPayments = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/transactions/scheduled-payments/add");
  };

  return (
    <div className="w-full bg-[var(--bg)] p-4 lg:px-32 relative min-h-screen">
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} id={id} />
      {/* Floating Add Button */}
      <button
        className="add-btn fixed bottom-20 right-5 lg:right-10 p-4 bg-[var(--accent)] text-white font-bold rounded-full z-50 cursor-pointer hover:bg-[var(--accent)]/90"
        onClick={handleOnClick}
      >
        <PlusIcon size={30} strokeWidth={2.5} />
      </button>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-screen overflow-y-auto pr-2 scrollbar-hidden">
        {scheduledPayments.map((val) => (
          <Card
            id={val.id}
            key={val.id}
            name={val.name}
            amount={val.amount}
            date={val.scheduledDate}
            status={val.status}
            approvers={val.approvers}
            setIsDialogOpen={setIsDrawerOpen}
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

const Drawer = ({
  isOpen,
  setIsOpen,
  id,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) => {
  const startY = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const [deltaY, setDeltaY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile
    const check = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(check);
    fetchTransactionDetails();
  }, []);

  const fetchTransactionDetails = () => {
    console.log(id);
  };

  const startDrag = (clientY: number) => {
    startY.current = clientY;
    startTime.current = Date.now();
    setIsDragging(true);
  };

  const moveDrag = (clientY: number) => {
    if (!isDragging || startY.current === null) return;
    setDeltaY(clientY - startY.current);
  };

  const endDrag = () => {
    const time = Date.now() - (startTime.current || 1);
    const velocity = deltaY / time;

    if (velocity > 0.5 || deltaY > 120) {
      setIsOpen(false); // drag down
    } else if (velocity < -0.5 || deltaY < -100) {
      setIsOpen(false);
    }

    setDeltaY(0);
    setIsDragging(false);
    startY.current = null;
    startTime.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    isMobile && startDrag(e.touches[0].clientY);
  const handleTouchMove = (e: React.TouchEvent) =>
    isMobile && moveDrag(e.touches[0].clientY);
  const handleTouchEnd = () => isMobile && endDrag();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    startDrag(e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e: MouseEvent) => moveDrag(e.clientY);
  const handleMouseUp = () => {
    endDrag();
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) setDeltaY(0);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleCloseDialog}
        />
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? deltaY : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed bottom-0 left-0 right-0 bg-[var(--drawer)] text-white rounded-t-2xl z-50 px-5 lg:px-102 py-4 touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } lg:cursor-default z-99`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: "none" }}
      >
        <div
          className="w-12 h-1.5 bg-white/60 rounded-full mx-auto mb-4 cursor-pointer"
          onClick={handleCloseDialog}
        />

        <div className="text-[var(--text)] flex items-center justify-center w-full border-t border-[var(--text-4)] mt-7">
          <div className="py-6 rounded-lg w-full">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Requested by</p>
                <p className="font-medium text-lg">Grace Alex</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Amount</p>
                <p className="font-medium text-lg">$40,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Payment ID</p>
                <p className="font-medium text-lg">HE43FF6E</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Scheduled Date</p>
                <p className="font-medium text-lg">23/04/25</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Comments</p>
                <p className="font-medium text-lg">Business Trans</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Approval status</p>
                <p className="font-medium text-lg">Pending</p>
              </div>

              <div className="pt-4">
                <p className="text-[var(--text)] text-lg">
                  Multi-Signature Requirement
                </p>
                <div className="space-y-3 mt-2 border-t border-[var(--text-4)] py-3">
                  <div className="flex justify-between">
                    <p>John Doe</p>
                    <p className="text-[var(--success)] text-xs bg-[var(--border)] rounded-full px-2 py-1">
                      Approved
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Jane Smith</p>
                    <p className="text-[var(--warning)] text-xs bg-[var(--border)] rounded-full px-2 py-1">
                      Pending
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Mike Lee</p>
                    <p className="text-[var(--warning)] text-xs bg-[var(--border)] rounded-full px-2 py-1">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="flex-1 border-2 border-[var(--accent)] text-[var(--accent)] text-medium py-4 rounded-full hover:bg-[var(--border)]/50 cursor-pointer">
                  Reject
                </button>
                <button className="flex-1 bg-[var(--accent)] text-[var(--text)] text-medium py-4 rounded-full hover:bg-[var(--accent)]/90 cursor-pointer">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ScheduledPayments;
