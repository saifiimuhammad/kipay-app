import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import exportIcon from "../assets/icons/export.svg";
import historyIcon from "../assets/icons/history.svg";

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
      case "/transactions/counterparty-ledger":
        return "Counterparty ledger";
      case "/notifications":
        return "Push notifications";
      case "/notifications/add":
        return "Create notification";
      case "/support":
        return "Support";
      default:
        return "Not Found";
    }
  };

  const setIcon = () => {
    switch (location.pathname) {
      case "/":
        return <></>;
      case "/users":
        return <img src={exportIcon} alt="export_icon" />;
      case "/transactions/pending-validation":
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
      default:
        return <></>;
    }
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
      <div className="col-span-1 flex justify-end w-full pr-1">{setIcon()}</div>
    </div>
  );
};

export default Navbar;
