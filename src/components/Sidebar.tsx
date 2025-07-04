import { useState, type Dispatch, type SetStateAction } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";

import DashboardIcon from "../assets/icons/dashboard-outlined.svg";
import DashboardFilledIcon from "../assets/icons/dashboard-filled.svg";
import UsersIcon from "../assets/icons/users-outlined.svg";
import UsersFilledIcon from "../assets/icons/users-filled.svg";
import WalletIcon from "../assets/icons/wallet-outlined.svg";
import WalletFilledIcon from "../assets/icons/wallet-filled.svg";
import LogoutIcon from "../assets/icons/logout-outlined.svg";
import AllTransactionsIcon from "../assets/icons/all-transactions.svg";
import PendingVerifIcon from "../assets/icons/pending-verifs.svg";
import SchedulePayIcon from "../assets/icons/schedule-pay.svg";
import LedgerIcon from "../assets/icons/ledger.svg";
import MenuCloseIcon from "../assets/icons/menu-close.svg";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [openSubnav, setOpenSubnav] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const toggleSubnav = (title: string) => {
    setOpenSubnav(openSubnav === title ? null : title);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSupport = () => {
    navigate("/support");
  };

  return (
    <>
      <div
        className={`lightbox absolute top-0 left-0 ${
          isSidebarOpen ? "w-full" : "w-0"
        } h-screen bg-black opacity-70 z-99 `}
      ></div>
      <aside
        className={`sidebar absolute top-0 left-0 ${
          isSidebarOpen ? "w-[60%] lg:w-1/3" : "w-0"
        } h-screen bg-[var(--bg)] transition-all duration-100 z-99`}
      >
        <div
          className={`sidebar-header h-24 w-full border-b border-[var(--border)] ${
            isSidebarOpen ? "flex" : "hidden"
          } items-end justify-between px-4 lg:pl-10 lg:pr-6 pb-5 transition-all duration-200`}
        >
          <h1 className="sidebar-title lg:text-md">Menu</h1>
          <img
            src={MenuCloseIcon}
            onClick={handleSidebarClose}
            className="cursor-pointer"
          />
        </div>

        {/* Sidebar navigation */}
        <div
          className={`sidebar-nav px-5 lg:pl-8 pt-6 ${
            isSidebarOpen ? "" : "hidden"
          } transition-all duration-200`}
        >
          <ul className="nav flex items-start justify-center flex-col gap-y-6">
            <NavItem
              link="/"
              title="Dashboard"
              icon={<img src={DashboardIcon} className="lg:w-7" />}
              activeIcon={<img src={DashboardFilledIcon} className="lg:w-7" />}
              currentPath={pathname}
            />
            <NavItem
              link="/users"
              title="User Management"
              icon={<img src={UsersIcon} className="lg:w-7" />}
              activeIcon={<img src={UsersFilledIcon} className="lg:w-7" />}
              currentPath={pathname}
            />
            <NavItem
              title="Transactions"
              icon={<img src={WalletIcon} className="lg:w-7" />}
              activeIcon={<img src={WalletFilledIcon} className="lg:w-7" />}
              currentPath={pathname}
              isDropdown
              isOpen={
                openSubnav === "Transactions" ||
                pathname.startsWith("/transactions")
              }
              isActive={pathname.startsWith("/transactions")}
              onClick={() => toggleSubnav("Transactions")}
              children={[
                {
                  link: "/transactions/all",
                  title: "All Transactions",
                  icon: <img src={AllTransactionsIcon} className="lg:w-7" />,
                },
                {
                  link: "/transactions/pending-validation",
                  title: "Pending validation",
                  icon: <img src={PendingVerifIcon} className="lg:w-7" />,
                },
                {
                  link: "/transactions/scheduled-payments",
                  title: "Schedule payment",
                  icon: <img src={SchedulePayIcon} className="lg:w-7" />,
                },
                {
                  link: "/transactions/counterparty-ledger",
                  title: "Counterparty ledger",
                  icon: <img src={LedgerIcon} className="lg:w-7" />,
                },
              ]}
            />
            <li className="nav-item">
              <button
                className="nav-link text-sm lg:text-lg text-[var(--subtext)] flex items-center justify-center gap-x-2 cursor-pointer"
                onClick={handleSupport}
              >
                <Headphones size={26} /> Support
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-sm lg:text-lg text-[var(--error)] flex items-center justify-center gap-x-2 cursor-pointer"
                onClick={handleLogout}
              >
                <img src={LogoutIcon} className="lg:w-7" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

type NavItemProps = {
  link?: string;
  title: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  isDropdown?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  children?: { link: string; title: string; icon: React.ReactNode }[];
  currentPath?: string;
  isActive?: boolean;
};

const NavItem = ({
  link,
  title,
  icon,
  activeIcon,
  isDropdown,
  isOpen,
  onClick,
  children,
  currentPath,
  isActive,
}: NavItemProps) => {
  // If `isActive` is explicitly passed, use it; else fall back to exact match
  const isLinkActive = isActive ?? (link ? currentPath === link : false);

  return (
    <li className="nav-item w-full">
      {link ? (
        <Link
          to={link}
          className={`nav-link max-[321px]:text-xs lg:text-lg w-full text-sm flex items-center justify-between gap-x-2 ${
            isLinkActive
              ? "text-white font-semibold"
              : "text-[var(--subtext)] font-normal"
          }`}
        >
          <span className="flex items-center gap-x-2 relative w-full">
            {/* Purple indicator */}
            {isLinkActive && (
              <span className="absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-[var(--accent)]" />
            )}
            {isLinkActive && activeIcon ? activeIcon : icon} {title}
          </span>
        </Link>
      ) : (
        <div
          onClick={isDropdown ? onClick : undefined}
          className={`nav-link text-sm lg:text-lg flex items-center justify-between gap-x-2 cursor-pointer ${
            isLinkActive
              ? "text-white font-semibold"
              : "text-[var(--subtext)] font-normal"
          }`}
        >
          <span className="flex items-center gap-x-2 relative w-full">
            {/* Purple indicator */}
            {isLinkActive && (
              <span className="absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-[var(--accent)]" />
            )}
            {isLinkActive && activeIcon ? activeIcon : icon} {title}
          </span>
        </div>
      )}

      {/* Dropdown children */}
      {isDropdown && isOpen && children && (
        <ul className="ml-6 mt-5 flex flex-col gap-y-5">
          {children.map((item) => {
            const isChildActive = currentPath === item.link;
            return (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className={`text-sm max-[376px]:text-xs lg:text-lg max-[321px]:text-[.6rem] flex items-center gap-x-2 ${
                    isChildActive
                      ? "text-white font-medium"
                      : "text-[var(--subtext)] hover:text-white"
                  }`}
                >
                  {item.icon} {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
