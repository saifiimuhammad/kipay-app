import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

const Navbar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleOnClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-24 bg-[var(--bg)] flex items-end justify-between px-4 pb-5 border-b border-[var(--border)]">
      <Menu size={24} onClick={handleOnClick} />
      <h2 className="nav-title text-lg font-semibold text-[var(--text)]">
        Dashboard
      </h2>
      <Menu size={24} />
    </div>
  );
};

export default Navbar;
