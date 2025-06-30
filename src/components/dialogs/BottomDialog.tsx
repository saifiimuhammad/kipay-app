import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface BottomDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const details = [
  { label: "Transaction ID", value: "HE43FEF6E" },
  { label: "Initiated by", value: "Grace Alex" },
  { label: "Date", value: "23/04/25" },
  { label: "Amount", value: "$40,000" },
  { label: "Beneficiary Details", value: "Business Trans" },
  { label: "Approval status", value: "Pending" },
  { label: "Pending Approvers", value: "Joint account" },
  { label: "Shipment status", value: "In transit" },
];

const BottomDialog: React.FC<BottomDialogProps> = ({
  isOpen,
  setIsOpen,
  id,
}) => {
  const startY = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const [deltaY, setDeltaY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();

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
      navigate(`/pending-validation/${id}`); // drag up
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

  const handleOnClick = (id: string) => {
    navigate(`/pending-validation/${id}`);
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
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? deltaY : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed bottom-0 left-0 right-0 bg-[#2C2C2C] text-white rounded-t-2xl z-50 px-6 lg:px-32 py-4 touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } lg:cursor-default`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: "none" }}
      >
        <div className="w-12 h-1.5 bg-white/60 rounded-full mx-auto mb-4 lg:hidden" />
        <div className="w-full grid place-items-center mb-4">
          <button
            className="text-[var(--accent)] cursor-pointer hidden lg:block"
            onClick={() => handleOnClick(id)}
          >
            See full details
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-4">Validation details</h2>
        <div className="text-sm text-white/80 space-y-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="flex justify-between border-b border-white/10 pb-1"
            >
              <span>{item.label}</span>
              <span className="text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BottomDialog;
