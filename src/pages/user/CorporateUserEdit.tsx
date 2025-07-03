import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import backIcon from "../../assets/icons/arrow-left.svg";
import binIcon from "../../assets/icons/bin.svg";

const schema = z.object({
  userName: z.string().min(1, "User name is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const CorporateUserEdit = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    console.log("sdaf");
  };

  const handleOnDelete = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen">
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} id={"dfdfg"} />
      {/* Top */}
      <div className="w-full h-24 flex items-end justify-start gap-4 px-4 lg:px-32 border-b border-[var(--border)] pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-md font-medium text-[var(--text)]">
          Edit user information
        </h2>
      </div>

      <div className="flex items-center justify-center flex-col gap-y-3 p-6 lg:px-32">
        <img
          src="https://picsum.photos/seed/1/40"
          alt="user_image"
          className="rounded-full h-18 w-18"
        />
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Grace Lonely
          </h2>
          <p className="text-sm text-[var(--text-4)]">Date Joined: 2025</p>
        </div>
      </div>
      {/* Form */}
      <div className="px-4 lg:px-102 pt-2">
        <h2 className="text-md text-[var(--text)] font-semibold mb-3">
          User's Information
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <input
                {...register("userName")}
                placeholder="User name"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.userName && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("emailAddress")}
                placeholder="Email Address"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.emailAddress && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("phoneNumber")}
                placeholder="Phone number"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            {/* Form Buttons */}
            <div className="flex items-center justify-between gap-x-3">
              <button
                className="w-full p-4 border border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-zinc-800 cursor-pointer mt-6"
                onClick={handleOnDelete}
              >
                Delete user
              </button>
              <button
                type="submit"
                className="w-full p-4 bg-[var(--accent)] text-[var(--text)] rounded-full hover:bg-[var(--accent)]/90 cursor-pointer mt-6"
              >
                Save
              </button>
            </div>
          </form>
        </div>
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

  const handleDelete = () => {
    alert("User deleted");
  };

  const handleCancel = () => {
    alert("Deletion cancelled");
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
        className={`fixed bottom-0 left-0 right-0 bg-[#2C2C2C] text-white rounded-t-2xl z-50 px-4 lg:px-102 py-4 lg:py-12 touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } lg:cursor-default`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: "none" }}
      >
        <div className="rounded-lg w-full text-center">
          <div className="mb-4 grid place-items-center">
            <img src={binIcon} alt="bin_icon" />
          </div>
          <h2 className="text-[var(--text)] font-semibold text-xl">
            Delete user
          </h2>
          <p className="text-[var(--text-4)] text-sm w-[70%] mb-4 mx-auto">
            Are you sure you want to delete this user
          </p>
          <button
            onClick={handleDelete}
            className="w-full bg-[var(--error)] text-[var(--text)] text-sm font-medium py-4 rounded-full mb-3 hover:bg-[var(--error)]/90"
          >
            Yes, Delete user
          </button>
          <button
            onClick={handleCancel}
            className="w-full border-2 border-[var(--text)] text-[var(--text)] text-sm font-medium py-4 rounded-full hover:bg-zinc-800"
          >
            No, please
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CorporateUserEdit;
