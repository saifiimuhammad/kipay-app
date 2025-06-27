import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const location = useLocation();

  const handleOnClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const setNavTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/users":
        return "User Management";
      case "/transactions/all":
        return "All Transactions";
      case "/transactions/pending-validation":
        return "Pending validation";
      case "/transactions/scheduled-payments":
        return "Scheduled payments";
      default:
        return "Not Found";
    }
  };

  return (
    <div className="w-full h-24 bg-[var(--bg)] flex items-end justify-between px-4 pb-5 border-b border-[var(--border)]">
      <Menu size={24} onClick={handleOnClick} />
      <h2 className="nav-title text-lg font-semibold text-[var(--text)]">
        {setNavTitle()}
      </h2>
      <Menu size={24} />
    </div>
  );
};

export default Navbar;
