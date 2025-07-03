// You have to fetch the data via api and then map it and you have to also
// fetch the data in the Drawer by the id received as prop.

import { motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

import SearchFilter from "../../components/SearchFilter";
import { ledgerList } from "../../seeders/users";

const filterValues = ["Approved", "Pending", "Refused"];

const CounterpartyLedger = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [id, setId] = useState("");

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchFilter = (toggledFilter: string) => {
    setFilterValue(toggledFilter);
    console.log(filterValue);
  };

  return (
    <div className="w-full bg-[var(--bg)] px-4 lg:px-102 pb-4">
      <Drawer isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} id={id} />
      <SearchFilter
        value={searchValue}
        onChange={handleOnSearch}
        onFilter={handleSearchFilter}
        filterValues={filterValues}
      />

      {/* Scrollable Grid */}
      <div className="flex flex-col gap-3 h-[600px] overflow-y-auto mt-4 pr-2 scrollbar-hidden">
        {ledgerList.map((val) => (
          <Card
            key={val.id}
            id={val.id}
            name={val.name}
            phone={val.phone}
            status={val.status}
            avatarUrl={val.avatarUrl}
            date={val.date}
            addedBy={val.addedBy}
            setId={setId}
            setIsDialogOpen={setIsDialogOpen}
          />
        ))}
      </div>
    </div>
  );
};

type CardType = {
  name: string;
  phone: string;
  addedBy: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
  avatarUrl: string;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

const Card = ({
  name,
  phone,
  status,
  addedBy,
  date,
  avatarUrl = "https://picsum.photos/40/40?random=1",
  setIsDialogOpen,
  id,
  setId,
}: CardType) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Approved":
        return "text-[var(--success)]";
      case "Pending":
        return "text-[var(--warning)]";
      case "Rejected":
        return "text-[var(--error)]";
      default:
        return "text-[var(--bg)]";
    }
  };

  const handleOnClick = (id: string) => {
    setIsDialogOpen((prev) => !prev);
    setId(id);
  };

  return (
    <div
      className="flex items-center justify-between bg-[var(--bg)] text-white px-2 max-[376px]:px-0 py-3 w-full border-b border-[var(--border)]"
      onClick={() => handleOnClick(id)}
    >
      <div className="flex items-center justify-start w-full cursor-pointer">
        <img
          src={avatarUrl}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col gap-y-1 mb-2">
          <span className="font-semibold max-[321px]:text-sm">{name}</span>
          <div className="text-[var(--text-3)] text-xs max-[376px]:text-[.7rem] max-[321px]:text-[.55rem] flex items-center gap-x-2">
            {phone}
            <hr className="h-[14px] w-[1px] bg-[var(--border)] rounded-full" />
            Added by {addedBy}
            <hr className="h-[14px] w-[1px] bg-[var(--border)] rounded-full max-[321px]:hidden" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-2">
        <span className="text-xs">{date}</span>
        {status && (
          <span
            className={`${getStatusStyle()} bg-[var(--card-bg)] text-xs px-3 py-1 rounded-xl`}
          >
            {status}
          </span>
        )}
      </div>
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

  const handleApprove = () => {};
  const handleEdit = () => {};
  const handleReject = () => {};

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
        <div className="flex items-center justify-between mt-7 mb-3">
          <p className="text-lg text-[var(--text)] font-semibold">
            Global Exports Ltd
          </p>
          <p className="text-[var(--warning)] text-xs bg-[var(--border)] rounded-full px-2 py-1">
            Pending
          </p>
        </div>
        <div className="text-[var(--text)] flex items-center justify-center w-full border-t border-[var(--text-4)] ">
          <div className="py-6 rounded-lg w-full">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Type</p>
                <p className="font-medium text-md">Corporate</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Country</p>
                <p className="font-medium text-md">Netherlands</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Bank name</p>
                <p className="font-medium text-md">HSBC Bank</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Account number</p>
                <p className="font-medium text-md">0123456789</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Swift Code</p>
                <p className="font-medium text-md">HSBCLONXXX</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Added By</p>
                <p className="font-medium text-md">Admin (John D.)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[var(--text-3)] text-sm">Date Added</p>
                <p className="font-medium text-md">April 22, 2025</p>
              </div>

              <div className="flex items-center justify-center flex-col gap-y-3 mt-4 w-full">
                <button
                  className="flex-1 bg-[var(--accent)] text-[var(--text)] text-medium py-4 rounded-full hover:bg-[var(--accent)]/90 cursor-pointer w-full"
                  onClick={handleApprove}
                >
                  Approve
                </button>
                <button
                  className="flex-1 border-2 border-[var(--accent)] text-[var(--accent)] text-medium py-4 rounded-full hover:bg-[var(--border)]/50 cursor-pointer w-full"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="flex-1 border-2 border-[var(--error)] text-[var(--error)] text-medium py-4 rounded-full hover:bg-[var(--border)]/50 cursor-pointer w-full"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CounterpartyLedger;
