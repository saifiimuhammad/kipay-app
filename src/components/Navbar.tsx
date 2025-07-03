import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import exportIcon from "../assets/icons/export.svg";
import historyIcon from "../assets/icons/history.svg";
import bellIcon from "../assets/icons/bell.svg";

const Navbar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const setNavTitle = () => {
    const path = location.pathname;

    if (path === "/") return "Dashboard";
    if (path === "/users") return "User Management";
    if (path.startsWith("/users/individual/")) return "User edit";
    if (path.startsWith("/users/corporate/")) return "Corporate edit";
    if (path === "/transactions/all") return "All Transactions";
    if (path === "/transactions/pending-validation")
      return "Pending validation";
    if (path === "/transactions/scheduled-payments")
      return "Scheduled payments";
    if (path === "/transactions/counterparty-ledger")
      return "Counterparty ledger";
    if (path === "/notifications") return "Push notifications";
    if (path === "/notifications/add") return "Create notification";
    if (path === "/support") return "Support";

    return "Not Found";
  };

  const setIcon = () => {
    const path = location.pathname;

    if (path === "/") return <></>;

    if (path === "/users") {
      return (
        <img src={exportIcon} alt="export_icon" className="cursor-pointer" />
      );
    }

    if (path.startsWith("/users/individual/")) {
      return (
        <img src={exportIcon} alt="export_icon" className="cursor-pointer" />
      );
    }

    if (path.startsWith("/users/corporate/")) {
      return (
        <img src={exportIcon} alt="export_icon" className="cursor-pointer" />
      );
    }

    if (path === "/transactions/pending-validation") {
      return (
        <img
          src={historyIcon}
          alt="history_icon"
          onClick={() =>
            navigate("/transactions/pending-validation/validation-history")
          }
          className="cursor-pointer"
        />
      );
    }

    return <></>;
  };

  return (
    <div
      className={`${
        location.pathname == "/login" && "/hidden"
      } w-full h-24 bg-[var(--bg)] grid grid-cols-4 gap-4 place-items-center items-end px-4 lg:px-32 pb-5 border-b border-[var(--border)] `}
    >
      <div className="col-span-1 flex justify-start w-full pl-1">
        <Menu size={24} onClick={handleOnClick} className="cursor-pointer" />
      </div>
      <h2 className="nav-title lg:text-xl text-md max-[321px]:text-sm font-semibold text-[var(--text)] col-span-2 w-full text-center">
        {setNavTitle()}
      </h2>
      <div className="col-span-1 flex justify-end w-full pr-1 gap-4 lg:gap-8">
        {location.pathname !== "/notifications" && (
          <button
            onClick={() => navigate("/notifications")}
            className="cursor-pointer"
          >
            <img src={bellIcon} alt="bell_icon" className="w-full h-full" />
          </button>
        )}

        {setIcon()}
      </div>
    </div>
  );
};

export default Navbar;
