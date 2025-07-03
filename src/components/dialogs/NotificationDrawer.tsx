import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const NotificationDrawer = ({
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

  const handleOnDelete = () => {};
  const handleOnEdit = () => {};

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
        className={`fixed bottom-0 left-0 right-0 bg-[#2C2C2C] text-white rounded-t-2xl z-50 px-4 lg:px-102 py-4 touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } lg:cursor-default`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: "none" }}
      >
        <div className="w-12 h-1.5 bg-white/60 rounded-full mx-auto mb-4" />

        <div className="border-b-2 border-[var(--border)]">
          <h2 className="text-lg font-semibold mb-4">Edit notification</h2>
        </div>
        <div className="text-sm text-white/80 flex flex-col items-start justify-center gap-y-5 py-6">
          <button
            className="text-sm text-[var(--text)] font-medium cursor-pointer"
            onClick={handleOnDelete}
          >
            Delete notification
          </button>
          <button
            className="text-sm text-[var(--text)] font-medium cursor-pointer"
            onClick={handleOnEdit}
          >
            Edit notification
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default NotificationDrawer;
